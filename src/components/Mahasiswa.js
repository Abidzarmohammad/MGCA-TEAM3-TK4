import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Mahasiswa = ({
  nim,
  namamahasiswa,
  alamat,
  jeniskelamin,
  hobi,
  komentar,
  lokasi
}) => {
  const history = useHistory();
  
  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <div className="book-details">
          <table>
            <tbody>
              <tr>
                <th>NIM </th>
                <th>:</th>
                <td>{nim}</td>
              </tr>
              <tr>
                <th>Nama </th>
                <th>:</th>
                <td>{namamahasiswa}</td>
              </tr>
              <tr>
                <th>Alamat </th>
                <th>:</th>
                <td>{alamat}</td>
              </tr>
              <tr>
                <th>Jenis Kelamin </th>
                <th>:</th>
                <td>{jeniskelamin}</td>
              </tr>
              <tr>
                <th>Hobi </th>
                <th>:</th>
                <td>{hobi}</td>
              </tr>
              <tr>
                <th>Komentar </th>
                <th>:</th>
                <td>{komentar}</td>
              </tr>
              <tr>
                <th>Lokasi </th>
                <th>:</th>
                <td>{lokasi}</td>
              </tr>
            </tbody>
          </table>
          {/* <div>Nama Mahasiswa: {namamahasiswa}</div>
          <div>Alamat: {alamat}</div>
          <div>Jenis Kelamin: {jeniskelamin} </div>
          <div>Hobi: {hobi} </div>
          <div>Komentar: {komentar}</div>
          <div>Lokasi: {lokasi}</div> */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Mahasiswa;