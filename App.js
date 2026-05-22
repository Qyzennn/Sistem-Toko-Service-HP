import React, { useState } from 'react';

function App() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    nama: '',
    tipe_hp: '',
    kerusakan: ''
  });

  const handleSubmit = () => {
    setServices([...services, form]);
    setForm({ nama: '', tipe_hp: '', kerusakan: '' });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>📱 Service HP</h1>

      <input
        placeholder="Nama"
        value={form.nama}
        onChange={(e) => setForm({ ...form, nama: e.target.value })}
      /><br/><br/>

      <input
        placeholder="Tipe HP"
        value={form.tipe_hp}
        onChange={(e) => setForm({ ...form, tipe_hp: e.target.value })}
      /><br/><br/>

      <input
        placeholder="Kerusakan"
        value={form.kerusakan}
        onChange={(e) => setForm({ ...form, kerusakan: e.target.value })}
      /><br/><br/>

      <button onClick={handleSubmit}>Tambah</button>

      <h2>Data Service</h2>
      <ul>
        {services.map((s, i) => (
          <li key={i}>
            {s.nama} - {s.tipe_hp} - {s.kerusakan}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App; 
