import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Menu from '../../components/Menu/Menu.jsx';
import AddMenuForm from '../../components/AddMenuForm/AddMenuForm.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import useMenuData from '../../hooks/useMenuData.js';
import './Menu.css';

const MenuPage = () => {
  const {
    menuData,
    search,
    setSearch,
    addMenu
  } = useMenuData();

  return (
    <div className='body'>
      <Navbar />
      
      <AddMenuForm onAddMenu={addMenu} />
      
      <Menu data={menuData} search={search} onSearch={setSearch} />
      <Footer nama="Ari(ARR TechZone)" />
    </div>
  );
};

export default MenuPage;
