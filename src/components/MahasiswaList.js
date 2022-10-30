import React, { useContext } from 'react';
import _ from 'lodash';
import Mahasiswa from './Mahasiswa';
import MahasiswaContext from '../context/MahasiswaContext';

const MahasiswaList = () => {
  const { mahasiswas, setMahasiswas } = useContext(MahasiswaContext);

  const handleRemoveMahasiswa = (id) => {
    setMahasiswas(mahasiswas.filter((mahasiswa) => mahasiswa.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(mahasiswas) ? (
          mahasiswas.map((mahasiswa) => (
            <Mahasiswa key={mahasiswa.nim} {...mahasiswa} handleRemoveMahasiswa={handleRemoveMahasiswa} />
          ))
        ) : (
          <p className="message">Tidak ada Data Mahasiswa, Silahkan Tambah Data Mahasiswa</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default MahasiswaList;