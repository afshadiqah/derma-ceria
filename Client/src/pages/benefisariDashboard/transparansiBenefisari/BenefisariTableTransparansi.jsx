import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

const styles = {
  th: {
    backgroundColor: '#f8b22d',
    color: 'black',
  },
  testimonialColumn: {
    width: '30%',
    maxWidth: '300px',
    overflow: 'hidden',
  },
  actionColumn: {
    textAlign: 'center',
    width: '20%',
  },
  actionButton: {
    marginRight: '5px',
  },
};

const BenefisariTableTransparansi = ({ data, handleEditItem, handleDeleteItem }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th style={styles.th}>No</th>
          <th style={styles.th}>Anggaran Program</th>
          <th style={styles.th}>Dokumentasi</th>
          <th style={styles.th}>Testimoni</th>
          <th style={styles.th}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.no}</td>
            <td>{item.title}</td>
            <td>{item.img}</td>
            <td style={styles.testimonialColumn}>{item.desc}</td>
            <td style={styles.actionColumn}>
              <Button variant="warning" onClick={() => handleEditItem(item)} style={styles.actionButton}>
                <FaEdit />
              </Button>
              <Button variant="warning" onClick={() => handleDeleteItem(item)} style={styles.actionButton}>
                <FaTrash />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BenefisariTableTransparansi;
