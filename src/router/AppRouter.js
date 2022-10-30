import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import Header from '../components/Header';
import AddMahasiswa from '../components/AddMahasiswa';
import MahasiswaList from '../components/MahasiswaList';
import useLocalStorage from '../hooks/useLocalStorage';
import MahasiswaContext from '../context/MahasiswaContext';

const AppRouter = () => {
    const [mahasiswas, setMahasiswas] = useLocalStorage('mahasiswa', []);
  
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="main-content">
            <MahasiswaContext.Provider value={{ mahasiswas, setMahasiswas }}>
              <Switch>
                <Route component={MahasiswaList} path="/" exact={true} />
                <Route component={AddMahasiswa} path="/add" />
                <Route component={() => <Redirect to="/" />} />
              </Switch>
            {/* </BooksContext.Provider> */}
            </MahasiswaContext.Provider>
          </div>
        </div>
      </BrowserRouter>
    );
  };

export default AppRouter;