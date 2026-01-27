import { useState } from 'react';
import menuKopiData from '../data/menuData.js';

const useMenuData = () => {
  const [menuData, setMenuData] = useState(menuKopiData);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filteredMenu = menuData.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  const addMenu = (newMenuItem) => {
    const newItem = {
      id: menuData.length + 1,
      ...newMenuItem
    };
    setMenuData(prev => [...prev, newItem]);
  };

  const toggleForm = () => {
    setShowForm(prev => !prev);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return {
    menuData: filteredMenu,
    search,
    setSearch,
    showForm,
    addMenu,
    toggleForm,
    closeForm
  };
};

export default useMenuData;
