import React from 'react';

const Shop = () => {
  const products = [
    { id: 1, name: "Modul Hardcopy Karakter", price: 1, img: "e-commerce.png" },
    { id: 2, name: "Merchandise WHD-Pi", price: 0.5, img: "logo WHD.png" }
  ];

  const handlePayment = async (product) => {
    if (!window.Pi) {
      alert("Pi SDK tidak terdeteksi. Gunakan Pi Browser!");
      return;
    }

    const paymentData = {
      amount: product.price,
      memo: `Pembelian ${product.name} melalui WHD-Pi`,
      metadata: { productId: product.id },
    };

    const callbacks = {
      onReadyForServerApproval: (paymentId) => {
        console.log("Menunggu persetujuan server untuk ID:", paymentId);
        // Di sini nanti hubungkan ke backend/index.js untuk approve
      },
      onReadyForServerCompletion: (paymentId, txid) => {
        console.log("Transaksi selesai di blockchain. TXID:", txid);
        alert("Terima kasih! Pembayaran berhasil.");
      },
      onCancel: (paymentId) => {
        console.log("Pembayaran dibatalkan:", paymentId);
      },
      onError: (error, payment) => {
        console.error("Error pembayaran:", error);
      },
    };

    try {
      await window.Pi.createPayment(paymentData, callbacks);
    } catch (err) {
      console.error("Gagal memulai pembayaran:", err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#673ab7' }}>🛒 WHD E-Commerce Center</h2>
      <p>Gunakan Pi Testnet Anda untuk simulasi transaksi P2P.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '10px' }}>
            <img src={product.img} alt={product.name} style={{ width: '100%', borderRadius: '5px' }} />
            <h4 style={{ margin: '10px 0' }}>{product.name}</h4>
            <p style={{ fontWeight: 'bold', color: '#ffa500' }}>{product.price} Pi</p>
            <button 
              onClick={() => handlePayment(product)}
              style={{ background: '#673ab7', color: 'white', border: 'none', padding: '8px', borderRadius: '5px', cursor: 'pointer', width: '100%' }}
            >
              Beli Sekarang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
