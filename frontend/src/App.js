import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Shop from './Shop'; // Pastikan file Shop.js ada di folder yang sama

// Komponen Placeholder untuk E-Learning & Marketing
const ELearning = () => (
  <div style={{ padding: '20px' }}>
    <h2>📚 Modul E-Learning WHD</h2>
    <p>Video pembelajaran karakter akan muncul di sini.</p>
  </div>
);

const EMarketing = () => (
  <div style={{ padding: '20px' }}>
    <h2>📈 E-Marketing Community</h2>
    <p>Strategi pasar global bagi para Pioneers.</p>
  </div>
);

function App() {
  useEffect(() => {
    if (window.Pi) {
      window.Pi.init({ version: "2.0", sandbox: true });
      console.log("WHD-Pi SDK Berhasil diinisialisasi");
    }
  }, []);

  return (
    <div className="App">
      <nav style={{ background: '#673ab7', padding: '10px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/learning" style={{ color: 'white', textDecoration: 'none' }}>E-Learning</Link>
        <Link to="/shop" style={{ color: 'white', textDecoration: 'none' }}>E-Commerce</Link>
        <Link to="/marketing" style={{ color: 'white', textDecoration: 'none' }}>E-Marketing</Link>
      </nav>

      <Routes>
        <Route path="/" element={<div style={{padding: '20px'}}><h1>Selamat Datang di WHD-Pi</h1><p>Pilih menu di atas untuk memulai.</p></div>} />
        <Route path="/learning" element={<ELearning />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/marketing" element={<EMarketing />} />
      </Routes>
    </div>
  );
}

export default App;
