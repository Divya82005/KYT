
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Blogs.css';
import searchIcon from '../assets/searchicon.jpeg';

const cities = [
  { id: 1, name: "Mexico", img: "/Mexico.webp", desc: "Mexico, a land of vibrant culture, stunning landscapes", link: "/mexico" },
  { id: 2, name: "Sitges", img: "", desc: "A beautiful coastal town known for its beaches and festivals.", link: "#" },
  { id: 3, name: "Mumbai", img: "", desc: "The bustling 'City of Dreams' with a vibrant nightlife.", link: "#" },
  { id: 4, name: "Amsterdam", img: "", desc: "Famous for its artistic heritage and elaborate canal.", link: "#" },
  // Add more city objects as needed to fill the grid
];

const Blog = () => {
  const navigate = useNavigate();

  const handleCityClick = (link) => {
    if (link !== "#") {
      navigate(link);
    }
  };
  return (
    <div className="blog-container">
      {/* Header Section */}
      <header className="hero-section">
        <h1>Know your safety before you go</h1>
        <div className="search-bar">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input type="text" placeholder="Search your Destination Safety Score" />
        </div>
      </header>

      {/* Grid Section */}
      <main className="city-grid">
        {cities.map((city) => (
          <div key={city.id} className="city-card">
            {city.img ? (
              <img 
                src={city.img} 
                alt={city.name} 
                className="city-image" 
                onClick={() => handleCityClick(city.link)}
                style={{ cursor: city.link !== "#" ? "pointer" : "default" }}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            ) : (
              <div className="city-image"></div>
            )}
            <h3>{city.name.toUpperCase()}</h3>
            <p>{city.desc}</p>
            <a 
              href={city.link} 
              className="read-more"
              onClick={(e) => {
                e.preventDefault();
                handleCityClick(city.link);
              }}
            >
              Read More &gt;
            </a>
          </div>
        ))}
      </main>

      <div className="load-more-container">
        <button className="load-more-btn">Load More ⌵</button>
      </div>
    </div>
  );
};

export default Blog;
