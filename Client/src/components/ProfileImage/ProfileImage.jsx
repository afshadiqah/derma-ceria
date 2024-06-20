import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './ProfileImage.module.css';

const ProfileImage = ({ 
  titleProfile, 
  donations 
}) => {
  return (
    <div>
      <div className={styles.titleProfile}>
        <Card.Text>{titleProfile}Rincian Donasi</Card.Text>
      </div>

      {donations.map((donation, index) => (
        <div className={styles.donationCardProfile} key={index}>
          <div className={styles.imageCard}>
            <Card.Img src={donation.imageProfile} />
          </div>
          <div className={styles.textContainer}>
            <Card.Title className={styles.jumlahUang}>{donation.jumlahUang}</Card.Title>
            <Card.Title className={styles.namaPenerima}>{donation.namaPenerima}</Card.Title>
          </div>
          <div className={styles.textWaktu}>
            <Card.Title className={styles.waktu}>{donation.waktu}</Card.Title>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileImage;
