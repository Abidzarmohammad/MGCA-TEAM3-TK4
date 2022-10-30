import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";


const MahasiswaForm = (props) => {
  const [mahasiswas, setMahasiswa] = useState(() => {
    return {
      nim: props.mahasiswa ? props.mahasiswa.nim : '',
      namamahasiswa: props.mahasiswa ? props.mahasiswa.namamahasiswa : '',
      alamat: props.mahasiswa ? props.mahasiswa.alamat : '',
      jeniskelamin: props.mahasiswa ? props.mahasiswa.jeniskelamin : '',
      hobi: props.mahasiswa ? props.mahasiswa.hobi : '',
      komentar: props.mahasiswa ? props.mahasiswa.komentar : '',
      
    };
  });

  const [locationCity, setlocationCity] = useState('');

  useEffect(() => {
    fetch("https://ipinfo.io/?token=490ac2cc28c5cc")
        .then((res) => res.json())
        .then((data) => {
          setlocationCity(data.city)
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }, []);

  
  const [errorMsg, setErrorMsg] = useState('');
  const [loadingMsg, setLoadingMsg] = useState('');
  const { nim, namamahasiswa, alamat, jeniskelamin, hobi, komentar } = mahasiswas;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [nim, namamahasiswa, alamat, jeniskelamin, hobi, komentar];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const mahasiswas = {
        nim,
        namamahasiswa,
        alamat,
        jeniskelamin,
        hobi,
        komentar,
        lokasi:locationCity
      };
      setLoadingMsg(true)
      setTimeout(function () {
        setLoadingMsg(false);
        props.handleOnSubmit(mahasiswas);
      }, 3000);
      
    } else {
      errorMsg = 'Silahkan Masukan Semua Data.';
    }
    setErrorMsg(errorMsg);
  };

  const handleOnReset = (event) => {
    document.getElementById("nim").value='';
    document.getElementById("namamahasiswa").value='';
    document.getElementById("alamat").value='';
    document.getElementById("jeniskelamin").value='';
    document.getElementById("hobi").value='';
    document.getElementById("komentar").value='';
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
        default:
        setMahasiswa((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      {loadingMsg && <Spinner className='text-center' />}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="nim">
          <Form.Label>NIM</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="nim"
            value={nim}
            placeholder="Masukan NIM"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="namamahasiswa">
          <Form.Label>Nama Mahasiswa</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="namamahasiswa"
            value={namamahasiswa}
            placeholder="Masukan Nama Mahasiswa"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="alamat">
          <Form.Label>Alamat</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="alamat"
            value={alamat}
            placeholder="Masukan Alamat"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="jeniskelamin">
          <Form.Label>Jenis Kelamin</Form.Label>
          <Form.Check 
            type="radio"
            id="default-radio"
            label="Laki-Laki"
            name="jeniskelamin"
            value="Laki-Laki"
            onChange={handleInputChange}
          />
          <Form.Check 
            type="radio"
            id="default-radio"
            label="Perempuan"
            name="jeniskelamin"
            value="Perempuan"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="hobi">
          <Form.Label>Hobi</Form.Label>
          <Form.Select aria-label="Pilih Hobi"
              className="input-control"
              name="hobi"
              placeholder="Masukan Hobi"
              onChange={handleInputChange}
            >
            <option>Pilih Hobi</option>
            <option value="Belajar">Belajar</option>
            <option value="Hiking">Hiking</option>
            <option value="Olahraga">Olahraga</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="komentar">
          <Form.Label>Komentar</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="komentar"
            value={komentar}
            placeholder="Masukan Komentar"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>

        {/* Reset Button */}
        <Button variant="danger" className="submit-btn" onClick={handleOnReset}>
          Reset
        </Button>
      </Form>
    </div>
  );
};

export default MahasiswaForm;