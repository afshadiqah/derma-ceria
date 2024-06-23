import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Profile.module.css';

const ProfileBenefisari = () => {
  const [formData, setFormData] = useState({
    nama: '',
    namaPengguna: '',
    noTelepon: '',
    email: '',
    kataSandi: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan pengiriman data yang telah diperbarui ke server atau backend

    // Simulasi berhasil
    setTimeout(() => {
      alert('Data berhasil diperbarui');
      navigate('/dashboardBenefisari'); // Navigasi kembali ke dashboardBenefisari setelah berhasil
    }, 500); // Contoh penundaan untuk simulasi
  };

  return (
    <div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Nama</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className={styles.input}
              placeholder="Masukkan Nama"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Nama Pengguna</label>
            <input
              type="text"
              name="namaPengguna"
              value={formData.namaPengguna}
              onChange={handleChange}
              className={styles.input}
              placeholder="Masukkan Nama Pengguna"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>No Telepon</label>
            <input
              type="text"
              name="noTelepon"
              value={formData.noTelepon}
              onChange={handleChange}
              className={styles.input}
              placeholder="Masukkan No. Telepon"
            />
          </div>

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
            <label className={styles.label}>Kata Sandi</label>
            <div className={styles.passwordContainer}>
              <input
                type="password"
                name="kataSandi"
                value={formData.kataSandi}
                onChange={handleChange}
                className={styles.input}
                placeholder="Masukkan Kata Sandi"
                readOnly
              />
              <Link to="/changePasswordBenefisari">
                <button type="button" className={styles.editButton}>
                  Ubah
                </button>
              </Link>
            </div>
          </div>
          <button type="submit" className={styles.submitButton}>
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileBenefisari;
