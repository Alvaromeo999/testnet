import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ELearning from './ELearning';
import Shop from './Shop';
import EMarketing from './EMarketing';

function App() {
  useEffect(() => {
    if (window.Pi) {
      window.Pi.init({ version: "2.0", sandbox: true });
      console.log("WHD-Pi: SDK Berhasil diinisialisasi");
    }
  }, []);

  return (
    <div className="App">
      <header style={{ background: '#673ab7', padding: '15px', color: 'white', textAlign: 'center' }}>
        <h2 style={{ margin: 0 }}>WHD-Pi Ecosystem</h2>
        <nav style={{ marginTop: '10px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
          <Link to="/learning" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>E-Learning</Link>
          <Link to="/shop" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>E-Commerce</Link>
          <Link to="/marketing" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>E-Marketing</Link>
        </nav>
      </header>

      <main style={{ maxWidth: '600px', margin: 'auto' }}>
        <Routes>
          <Route path="/" element={
            <div style={{ padding: '40px 20px', textAlign: 'center' }}>
              <h1>Whole Human Development</h1>
              <p>Membangun Integritas, Ekonomi, dan Jaringan Global Pioneer.</p>
              <img src="/logo WHD.png" alt="WHD Logo" style={{ width: '150px', marginTop: '20px' }} />
            </div>
          } />
          <Route path="/learning" element={<ELearning />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/marketing" element={<EMarketing />} />
        </Routes>
      </main>

      <footer style={{ marginTop: '50px', padding: '20px', fontSize: '12px', color: '#888', textAlign: 'center', borderTop: '1px solid #eee' }}>
        &copy; 2026 WHD-Pi Project - @Alvaromeo999
      </footer>
    </div>
  );
}

export default App;
