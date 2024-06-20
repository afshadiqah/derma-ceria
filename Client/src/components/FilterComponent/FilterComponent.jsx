import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../FilterComponent/FilterComponent.module.css";

const FilterComponent = () => {
  return (
    <Col xs={2}>
      <div className="flex flex-col text-xl text-black max-w-[283px]">
        <ul style={{ listStyle: "square", paddingLeft: "0" }}>
          <li className={styles.firstList}>
            <b>Kategori</b>
          </li>
          <hr className="my-4" />
          <li>
            <Link to="/bencana">Bencana</Link>
          </li>
          <li>
            <Link to="/sosial">Sosial</Link>
          </li>
          <li>
            <Link to="/pendidikan">Pendidikan</Link>
          </li>
          <li>
            <Link to="/kesehatan">Kesehatan</Link>
          </li>
          <li>
            <Link to="/teknologi">Teknologi</Link>
          </li>
        </ul>
        <ul style={{ listStyle: "square", paddingLeft: "0" }}>
          <li className={styles.firstList}>
            <b>Campaign</b>
          </li>
          <hr className="my-4" />
          <li>
            <Link to="/zakat">Zakat</Link>
          </li>
          <li>
            <Link to="/qurban">Qurban</Link>
          </li>
        </ul>
        <ul style={{ listStyle: "square", paddingLeft: "0" }}>
          <li className={styles.firstList}>
            <b>Status</b>
          </li>
          <hr className="my-4" />
          <li>
            <Link to="/berlangsung">Berlangsung</Link>
          </li>
          <li>
            <Link to="/selesai">Selesai</Link>
          </li>
          <li>
            <Link to="/diperpanjang">Diperpanjang</Link>
          </li>
        </ul>
        <ul style={{ listStyle: "square", paddingLeft: "0" }}>
          <li className={styles.firstList}>
            <b>Diurutkan</b>
          </li>
          <hr className="my-4" />
          <li>
            <Link to="/populer">Paling Populer</Link>
          </li>
          <li>
            <Link to="/berakhir">Akan Berakhir</Link>
          </li>
          <li>
            <Link to="/terbaru">Terbaru</Link>
          </li>
          <li>
            <Link to="/terlama">Terlama</Link>
          </li>
          <li>
            <Link to="/mendesak">Mendesak</Link>
          </li>
        </ul>
      </div>
    </Col>
  );
};

export default FilterComponent;
