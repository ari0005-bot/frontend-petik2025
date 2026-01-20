import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import Profile from '../../components/Profile/Profile.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const Home = () => {
  return (
    <div className='body'>
      <Navbar />
      <Hero />
      <Profile />
      <Footer nama="Ari(ARR TechZone)" />
    </div>
  );
};

export default Home;
