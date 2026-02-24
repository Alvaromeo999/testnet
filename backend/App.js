import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Memastikan Pi SDK terdeteksi
    if (window.Pi) {
      window.Pi.init({ version: "2.0", sandbox: true });
      console.log("WHD-Pi: SDK Initialized");
    }
  }, []);

  return (
    <div className="App">
      {/* Konten Utama Akan Kita Taruh di Sini */}
      <h1>WHD-Pi Dashboard Ready</h1>
    </div>
  );
}

export default App;
