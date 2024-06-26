import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./pelacakanDonatur.module.css";

const PelacakanDonatur = () => {
  const [status, setStatus] = useState("");
  const [trackingData, setTrackingData] = useState([]);

  // Mengambil data dari backend menggunakan useEffect
  useEffect(() => {
    const fetchTrackingData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/pelacakan_donasi");
        setTrackingData(response.data);

        // Set status dari data terbaru
        if (response.data.length > 0) {
          setStatus(response.data[0].status);
        }
      } catch (error) {
        console.error("Error fetching tracking data:", error);
      }
    };

    fetchTrackingData();
  }, []);

  // Jika data sedang dimuat
  if (!trackingData.length) {
    return <div>Please Wait...</div>;
  }

  const latestUpdate = trackingData[0]; // Asumsi bahwa data terbaru ada di indeks 0
  
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
            <h5 style={{ fontWeight: "700" }}>No. Tracking</h5>
          </p>
          <p>{latestUpdate.no_tracking}</p>
          <p>
            <h5 style={{ fontWeight: "700" }}>Nama Donatur</h5>
          </p>
          <p>{latestUpdate.name}</p>
        </div>
        <div className={styles.col}>
          <p>
            <h5 style={{ fontWeight: "700" }}>Tanggal Donasi</h5>
          </p>
          <p>
            {new Intl.DateTimeFormat("id", { month: "long", day: "numeric" }).format(new Date(latestUpdate.date))} {new Date(latestUpdate.date).getFullYear()}
          </p>
          <p>
            <h5 style={{ fontWeight: "700" }}>Kontak Donatur</h5>
          </p>
          <p>{latestUpdate.phone}</p>
        </div>
      </div>

      <div className={styles.timeline}>
        {["Proses", "Dikemas", "Dikirim", "Dalam Perjalanan", "Tiba"].map((step, index) => (
          <div key={step} className={styles.timelineStep}>
            <div className={styles.circle} style={{ backgroundColor: status === step ? "#f8b22d" : "#000000" }}></div>
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

export default PelacakanDonatur;
