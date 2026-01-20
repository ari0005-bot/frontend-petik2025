import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const About = () => {
  return (
    <div className='body'>
      <Navbar />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Tentang Kami</h1>
        <p>ARR TechZone adalah tempat terbaik untuk menikmati kopi berkualitas tinggi dengan suasana yang nyaman.</p>
        <p>Kami menyediakan berbagai jenis minuman kopi yang dibuat dengan bahan-bahan pilihan.</p>
      </div>
      <Footer nama="Ari(ARR TechZone)" />
    </div>
  );
};

export default About;
