import React, { useEffect, useState, useRef } from 'react';

export const DocumentContext = React.createContext();

const DocumentContextProvider = ({ children }) => {

  const [file, setFile] = useState(null);
  const [location, setLocation] = useState(JSON.parse(sessionStorage.getItem('location')) || null);
  const [isAddressProvided, setIsAddressProvided] = useState(sessionStorage.getItem('isAddressProvided') === 'true' || false);
  const [renderOnce, setRenderOnce] = useState(sessionStorage.getItem('renderOnce') === 'true' || false);
  const fileInputRef = useRef(null);

  // Function to request location access and update location state
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`);
            const data = await response.json();
            const address = data.display_name.split(',').slice(0, 2).join(', '); // Display only the first two address lines
            setLocation({ latitude, longitude, address });
            sessionStorage.setItem('location', JSON.stringify({ latitude, longitude, address })); // Save location as stringified JSON
            sessionStorage.setItem('isAddressProvided', true); // Set address provided to true
            setRenderOnce(true);
            sessionStorage.setItem('renderOnce', true);
            setIsAddressProvided(true);
          } catch (error) {
            console.error('Error fetching address:', error);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    // Fetch location only once when renderOnce is true
    if (renderOnce) {
      getLocation();
    }
  }, [renderOnce]);

  return (
    <DocumentContext.Provider value={{ getLocation, isAddressProvided, renderOnce, location, file, fileInputRef, handleFileChange, handleButtonClick }}>
      {children}
    </DocumentContext.Provider>
  );
};

export default DocumentContextProvider;