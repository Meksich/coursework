
import './App.css';
import Bedroom from './components/bedroom/Bedroom';
import Kitchen from './components/kitchen/Kitchen';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import React from 'react';
import { useState } from 'react';
import ModalContext from './contexts/ModalContext';
import Journal from './components/journal/Journal';


function App() {
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [showModalJournal, setShowModalJournal] = useState(false);
  const [showModalWarning, setShowModalWarning] = useState(false);
  const [text, setText] = useState("");
  return (
    <BrowserRouter>
      <div>
      <ModalContext.Provider value={{
          showModalInfo, setShowModalInfo, text, setText, showModalJournal, setShowModalJournal, showModalWarning, setShowModalWarning
        }}>
        <Header/>
        <Journal/>
        <Routes>
          <Route path={'/'} element={<Bedroom />} />
          <Route path={'/bedroom'} element={<Bedroom />} />
          <Route path={'/kitchen'} element={<Kitchen/>} />
        </Routes>
        <Footer />
        </ModalContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
