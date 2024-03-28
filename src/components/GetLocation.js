import React from 'react';
import logo from '../assets/location_on_FILL0_wght400_GRAD0_opsz24.png';
import styles from './GetLocation.module.css';


// The GetLocation component displays a welcome message and prompts the user to provide their location.
// It also renders a Loader component when loading is true.
const GetLocation = ({ children, getLocation}) => {
  return (
    <div>
      {/* Dark background overlay */}
      <div className={styles.darkdiv}></div>
      {/* Outer container */}
      <div className={styles.outerDiv}>
        {/* Conditional rendering based on loading state */}
          <div>
            {/* Welcome message */}
            <p className={styles.welcomeText}>
              Welcome to <span className={styles.name}>Vendo-o print</span>
            </p>
            {/* Location info */}
            <div className={styles.locInfo}>
              <img src={logo} alt="Location-on-logo" className={styles.locationLogo} />
              <p>Please provide location to see nearby vending machines</p>
            </div>
            {/* Button to detect location */}
            <button className={styles.bn13} onClick={getLocation}>
              Detect my location
            </button>
            {/* Render children components */}
            {children}
          </div>
        
      </div>
    </div>
  );
};

export default GetLocation;