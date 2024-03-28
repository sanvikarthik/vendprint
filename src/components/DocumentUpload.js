import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DocumentUpload.module.css'; // Import CSS module
import GetLocation from './GetLocation'


function DocumentUpload() {
  const [file, setFile] = useState(null);
  const [location, setLocation] = useState(null);
  const [isAddressProvided, setIsAddressProvided] = useState(false); // Track if the address is provide
  const navigate = useNavigate();

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
              setIsAddressProvided(true); // Address is provided
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

  const handleNext = () => {
    if (file && isAddressProvided) { // Check if file is selected and address is provided
      navigate('/printing-options');
    } else {
      alert('Please select a file and provide the address.');
    }
  };

  return (
    <div>
    <div>
      {!isAddressProvided  &&
        <GetLocation getLocation={getLocation} loading />
      }
    </div>
    {/* Header */}
    <div className={styles.header}>
      <h1>Vend-o Print</h1>
      <div className={styles.address}>
        <span className={styles.addressText}>
          {!isAddressProvided
            ? " Select Location"
            : location.address.length > 50
            ? location.address.slice(0, 50) + '...'
            : location.address
          }
        </span>
      </div>
    </div>
  
    {/* Main Content */}
    <div className={styles.container}>
      {/* Document Upload Section */}
      <div className={styles.documentUpload}>
        <div className={styles.inputGroup}>
          <input type="file" onChange={handleFileChange} className={styles.fileInput} />
          <button onClick={handleNext} className={styles.nextButton} disabled={!isAddressProvided}>
            Next
          </button>
          {/* Disable button if address is not provided */}
        </div>
      </div>
    </div>
  </div>
  );
}

export default DocumentUpload;
