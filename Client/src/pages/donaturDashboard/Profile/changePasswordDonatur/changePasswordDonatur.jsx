import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './changePassword.module.css';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Import icons from react-icons library

const ChangePasswordDonatur = () => {
  const [formData, setFormData] = useState({
    email: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false); // State untuk memantau apakah password ditampilkan atau tidak
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { newPassword, confirmPassword } = formData;
    if (newPassword !== confirmPassword) {
      alert('Kata sandi baru dan konfirmasi kata sandi tidak cocok');
      return;
    }
    // Simulasi pengiriman data ke backend (tidak perlu diubah untuk simulasi)
    setTimeout(() => {
      alert('Kata sandi berhasil diubah');
      navigate('/ProfileDonatur'); 
    }, 500); 

    // Reset form atau state jika diperlukan
    setFormData({
      email: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ubah Kata Sandi</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            placeholder="Masukkan Email"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Kata Sandi Baru</label>
          <div className={styles.passwordInput}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className={styles.input}
              placeholder="Masukkan Kata Sandi Baru"
            />
            <button
              type="button"
              className={styles.toggleButton}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FiEyeOff className={styles.eyeIcon} /> : <FiEye className={styles.eyeIcon} />}
            </button>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Konfirmasi Kata Sandi Baru</label>
          <div className={styles.passwordInput}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={styles.input}
              placeholder="Konfirmasi Kata Sandi Baru"
            />
            <button
              type="button"
              className={styles.toggleButton}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FiEyeOff className={styles.eyeIcon} /> : <FiEye className={styles.eyeIcon} />}
            </button>
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>
          Simpan
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordDonatur;
