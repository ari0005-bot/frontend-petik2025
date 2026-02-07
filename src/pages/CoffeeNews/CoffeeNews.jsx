import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { coffeeService } from "../../services/coffeeService.js";
import "./CoffeeNews.css";

const CoffeeNews = () => {
  const [news, setNews] = useState([]);
  const [coffeeTypes, setCoffeeTypes] = useState([]);
  const [activeTab, setActiveTab] = useState("news");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (activeTab === "news") {
      fetchCoffeeNews();
    } else if (activeTab === "hot") {
      fetchHotCoffee();
    } else if (activeTab === "iced") {
      fetchIcedCoffee();
    }
  }, [activeTab]);

  const fetchCoffeeNews = async () => {
    try {
      setLoading(true);
      setError("");
      const newsData = await coffeeService.getCoffeeNews();
      setNews(newsData);
    } catch (err) {
      setError("Gagal memuat berita kopi");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchHotCoffee = async () => {
    try {
      setLoading(true);
      setError("");
      const coffeeData = await coffeeService.getAllCoffee();
      setCoffeeTypes(coffeeData);
    } catch (err) {
      setError("Gagal memuat data kopi panas");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchIcedCoffee = async () => {
    try {
      setLoading(true);
      setError("");
      const coffeeData = await coffeeService.getIcedCoffee();
      setCoffeeTypes(coffeeData);
    } catch (err) {
      setError("Gagal memuat data kopi dingin");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="coffee-news-page">
      <Navbar />
      <div className="coffee-news-container">
        <h1 className="page-title">Kopi Berita & Info</h1>

        <div className="tab-buttons">
          <button
            className={`tab-btn ${activeTab === "news" ? "active" : ""}`}
            onClick={() => handleTabClick("news")}
          >
            Berita Kopi
          </button>
          <button
            className={`tab-btn ${activeTab === "hot" ? "active" : ""}`}
            onClick={() => handleTabClick("hot")}
          >
            ☕ Kopi Panas
          </button>
          <button
            className={`tab-btn ${activeTab === "iced" ? "active" : ""}`}
            onClick={() => handleTabClick("iced")}
          >
            Kopi Dingin
          </button>
        </div>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Memuat data...</p>
          </div>
        )}

        {error && !loading && (
          <div className="error-message">
            <p>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="retry-btn"
            >
              Coba Lagi
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="content-grid">
            {activeTab === "news" &&
              news.map((item) => (
                <div key={item.id} className="news-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="news-image"
                  />
                  <div className="news-content">
                    <h3>{item.title}</h3>
                    <p className="news-description">{item.description}</p>
                    <div className="news-meta">
                      <span className="news-source">{item.source}</span>
                      <span className="news-date">{formatDate(item.date)}</span>
                    </div>
                  </div>
                </div>
              ))}

            {(activeTab === "hot" || activeTab === "iced") &&
              coffeeTypes.map((coffee) => (
                <div key={coffee.id} className="coffee-card">
                  <div className="coffee-image-container">
                    <img
                      src={coffee.image}
                      alt={coffee.title}
                      className="coffee-image"
                    />
                  </div>
                  <div className="coffee-info">
                    <h3>{coffee.title}</h3>
                    <p>{coffee.description}</p>
                    <div className="coffee-ingredients">
                      {coffee.ingredients &&
                        coffee.ingredients.map((ingredient, index) => (
                          <span key={index} className="ingredient-tag">
                            {ingredient}
                          </span>
                        ))}
                    </div>
                    <div className="coffee-price">
                      <span className="price">{coffee.price}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      <Footer nama="Ari(ARR TechZone)" />
    </div>
  );
};

export default CoffeeNews;
