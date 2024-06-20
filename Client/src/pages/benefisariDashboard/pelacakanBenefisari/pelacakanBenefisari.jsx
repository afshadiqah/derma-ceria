import React, { useState } from "react";
import styles from "./pelacakanBenefisari.module.css";

const PelacakanBenefisari = () => {
  const [status, setStatus] = useState("Proses");

  const trackingHistory = [
    { date: "05 Mei 2024", time: "16.00", description: "Donasi telah sampai diterima oleh yang bersangkutan", status: "Tiba" },
    { date: "05 Mei 2024", time: "05.00", description: "Donasi dalam perjalanan menuju alamat tujuan", status: "Dalam Perjalanan" },
    { date: "03 Mei 2024", time: "13.00", description: "Donasi dikirim ke kota Jakarta", status: "Dikirim" },
    { date: "01 Mei 2024", time: "09.45", description: "Donasi sedang dalam proses", status: "Proses" }
  ];

  return (
    <div className={styles.trackingContainer}>
      <h1>Pelacakan Donasi</h1>
      <div className={styles.trackingInfo}>
        <div className={styles.col}>
          <p>
            <strong>No. Tracking</strong>
          </p>
          <p>08975640329187</p>
          <p>
            <strong>Nama Pengirim</strong>
          </p>
          <p>Mr. Leo Dewanto</p>
        </div>
        <div className={styles.col}>
          <p>
            <strong>Pengiriman</strong>
          </p>
          <p>Pembaharuan terakhir Minggu, 05 Mei 2024</p>
          <p>
            <strong>Kontak Pengirim</strong>
          </p>
          <p>081234670912</p>
        </div>
      </div>

      <div className={styles.timeline}>
        {["Proses", "Dikemas", "Dikirim", "Dalam Perjalanan", "Tiba"].map((step, index) => (
          <div key={step} className={styles.timelineStep}>
            <div className={styles.circle} style={{ backgroundColor: status === step ? "#f8b22d" : "#ccc" }}></div>
            <p style={{ color: status === step ? "#f8b22d" : "black" }}>{step}</p>
            {index < 4 && <div className={styles.timelineLine}></div>}
          </div>
        ))}
      </div>

      <div className={styles.trackingHistory}>
        <h2>Riwayat Tracking</h2>
        {trackingHistory.map((item, index) => (
          <div key={index} className={styles.historyItem}>
            <div className={styles.historyDateTime}>
              <p>{item.date}</p>
              <p>{item.time}</p>
            </div>
            <div className={styles.historyDot}></div>
            <p className={styles.historyDescription}>{item.description}</p>
            {index < trackingHistory.length - 1 && <div className={styles.historyLine}></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PelacakanBenefisari;
