import React from 'react'
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
        <h1>Selamat Datang di PeTIK Blog</h1>
        <p>Pesantren Teknologi Infiormasi dan Komunikasi (PeTIK) adalah 
            lembaga pendidikan yang fokus pada pengembangan keterampilan IT,
            khusunya web development, monile development dan jaringan.
        </p>
        <p>
            Bergabunglah dengan kami dan tingkatkan keahlianmu di dunia digital
            bersama mentor dan praktisi industri!
        </p>
    </div>
  )
}

export default Home;
