import React, { useState } from 'react';

const ELearning = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const modules = [
    { 
      id: 1, 
      level: 'Basic (Karakter Dasar)', 
      title: 'Integritas & Kejujuran', 
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' // Ganti dengan link video Anda
    },
    { 
      id: 2, 
      level: 'Intermediate (Mental)', 
      title: 'Disiplin & Tanggung Jawab', 
      videoUrl: 'https://www.w3schools.com/html/movie.mp4' 
    },
    { 
      id: 3, 
      level: 'High Level (Spiritual)', 
      title: 'Devosi & Pengabdian', 
      videoUrl: '' 
    }
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'left' }}>
      <h2 style={{ borderBottom: '2px solid #673ab7', paddingBottom: '10px' }}>📚 WHD E-Learning Center</h2>
      
      {/* Video Player Section */}
      <div style={{ marginBottom: '20px', background: '#000', borderRadius: '10px', overflow: 'hidden', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {selectedVideo ? (
          <video src={selectedVideo} controls style={{ width: '100%', height: '100%' }} />
        ) : (
          <p style={{ color: '#fff' }}>Pilih materi untuk memulai pembelajaran</p>
        )}
      </div>

      <h3>Daftar Modul Pembelajaran:</h3>
      {modules.map((item) => (
        <div 
          key={item.id} 
          onClick={() => setSelectedVideo(item.videoUrl)}
          style={{ 
            padding: '15px', 
            margin: '10px 0', 
            background: '#f0f0f0', 
            borderRadius: '8px', 
            cursor: 'pointer',
            borderLeft: '5px solid #673ab7'
          }}
        >
          <small style={{ color: '#673ab7', fontWeight: 'bold' }}>{item.level}</small>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ELearning;
