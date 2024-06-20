import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "react-share"; // Remove InstagramShareButton import

import styles from "./ShareSocialMedia.module.css";

import FacebookIcon from "../../assets/logos/Facebook.png";
import TwitterIcon from "../../assets/logos/X.png"; 
import WhatsappIcon from "../../assets/logos/WhatsApp.png";
import LinkedinIcon from "../../assets/logos/Linkedin.png";
import InstagramIcon from "../../assets/logos/Instagram.png";
import CopyLinkIcon from "../../assets/logos/copylink.png";

const ShareSocialMedia = ({ showShareModal, handleCloseShareModal, shareUrl, shareText }) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert("Link telah disalin ke clipboard!");
    });
  };

  const handleInstagramShare = () => {
    alert("Bagikan di Instagram tidak tersedia, silakan copy link dan bagikan secara manual.");
  };

  return (
    <Modal show={showShareModal} onHide={handleCloseShareModal} dialogClassName={styles.customModal}>
      <Modal.Header closeButton>
        <Modal.Title>Bagikan Donasi Ke</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.shareModalBody}>
        <div className={styles.shareButtonsContainer}>
          <FacebookShareButton url={shareUrl} quote={shareText}>
            <Button className={`${styles.shareButton} ${styles.iconButton}`} variant="light">
              <img src={FacebookIcon} alt="Facebook" className={styles.icon} />
            </Button>
          </FacebookShareButton>
          {/* Instagram share button */}
          <Button
            className={`${styles.shareButton} ${styles.iconButton}`}
            variant="light"
            onClick={handleInstagramShare}
          >
            <img src={InstagramIcon} alt="Instagram" className={styles.icon} />
          </Button>
          {/* End of Instagram button */}
          <TwitterShareButton url={shareUrl} title={shareText}>
            <Button className={`${styles.shareButton} ${styles.iconButton}`} variant="light">
              <img src={TwitterIcon} alt="Twitter" className={styles.icon} />
            </Button>
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl} title={shareText}>
            <Button className={`${styles.shareButton} ${styles.iconButton}`} variant="light">
              <img src={LinkedinIcon} alt="LinkedIn" className={styles.icon} />
            </Button>
          </LinkedinShareButton>
          <WhatsappShareButton url={shareUrl} title={shareText}>
            <Button className={`${styles.shareButton} ${styles.iconButton}`} variant="light">
              <img src={WhatsappIcon} alt="WhatsApp" className={styles.icon} />
            </Button>
          </WhatsappShareButton>
          
          <Button onClick={handleCopyLink} className={`${styles.shareButton} ${styles.iconButton}`} variant="light">
            <img src={CopyLinkIcon} alt="Copy Link" className={styles.icon} />
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ShareSocialMedia;
