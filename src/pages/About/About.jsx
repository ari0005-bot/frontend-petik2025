import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import aboutImage from '../../components/img/about-image.png';

const About = () => {
  return (
    <div className='body'>
      <Navbar />
      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '40px', color: '#D9A75E', fontSize: '2.5rem' }}>Tentang Kami</h1>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          maxWidth: '1000px',
          margin: '0 auto',
          gap: '40px'
        }}>
          <div style={{ flex: '1', textAlign: 'left' }}>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              marginBottom: '20px',
              color: '#000000'
            }}>
              ARR TechZone adalah tempat terbaik untuk menikmati kopi berkualitas tinggi dengan suasana yang nyaman.
            </p>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              color: '#000000'
            }}>
              Kami menyediakan berbagai jenis minuman kopi yang dibuat dengan bahan-bahan pilihan.
            </p>
          </div>
          
          <div style={{ flex: '1', textAlign: 'right' }}>
            <img 
              src={aboutImage} 
              alt="About ARR TechZone" 
              style={{ 
                width: '300px', 
                height: 'auto',
                maxWidth: '100%',
                borderRadius: '10px'
              }} 
            />
          </div>
        </div>
      </div>
      <Footer nama="Ari(ARR TechZone)" />
    </div>
  );
};

export default About;
