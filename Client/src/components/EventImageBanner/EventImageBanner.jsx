import React from 'react';
import styles from '../EventImageBanner/EventImageBanner.module.css';

const EventImageComponent = ({ imageUrl }) => {
  return (
    <div
      className={styles.eventImage}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px', // Adjust the height as needed
        width: '100%',
      }}
    />
  );
};

export default EventImageComponent;
