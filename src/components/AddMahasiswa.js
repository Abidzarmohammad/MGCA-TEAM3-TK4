import React, { useContext } from 'react';
import MahasiswaForm from './MahasiswaForm';
import MahasiswaContext from '../context/MahasiswaContext';

const AddMahasiswa = ({ history }) => {
  const { mahasiswas, setMahasiswas } = useContext(MahasiswaContext);

  const handleOnSubmit = (mahasiswa) => {
    console.log(mahasiswa);
    setMahasiswas([mahasiswa, ...mahasiswas]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <MahasiswaForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddMahasiswa;