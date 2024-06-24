import React from "react";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

const styles = {
  th: {
    backgroundColor: "#f8b22d",
    color: "black",
  },
  testimonialColumn: {
    width: "30%",
    maxWidth: "300px",
    overflow: "hidden",
  },
  actionColumn: {
    textAlign: "center",
    width: "20%",
  },
  actionButton: {
    marginRight: "5px",
  },
  image: {
    width: "100px",
    height: "auto",
  },
};

const TableTransparansi = ({ data, handleEditItem, handleShowConfirmModal }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{ ...styles.th, textAlign: "center" }}>No</th>
          <th style={{ ...styles.th, textAlign: "center" }}>Anggaran Program</th>
          <th style={{ ...styles.th, textAlign: "center" }}>Dokumentasi</th>
          <th style={{ ...styles.th, textAlign: "center" }}>Testimoni</th>
          <th style={{ ...styles.th, textAlign: "center" }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.anggaran_program}</td>
            <td style={{textAlign: "center" }}>
              <img src={item.dokumentasi} alt="Dokumentasi" style={styles.image} />
            </td>
            <td style={styles.testimonialColumn}>{item.testimoni}</td>
            <td style={styles.actionColumn}>
              <Button variant="warning" onClick={() => handleEditItem(item)} style={styles.actionButton}>
                <FaEdit />
              </Button>
              <Button variant="warning" onClick={() => handleShowConfirmModal(item)} style={styles.actionButton}>
                <FaTrash />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableTransparansi;
