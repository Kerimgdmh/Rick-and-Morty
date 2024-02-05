// src/components/EpisodeList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EpisodeList.css'; // Stil dosyasını ekleyin

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${currentPage}`);
        setEpisodes(response.data.results);
        setTotalPages(response.data.info.pages);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchEpisodes();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <ul className="episode-list">
        {episodes.map((episode) => (
          <li key={episode.id} className="episode-item">
            {episode.name}
          </li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className="page-link"
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EpisodeList;
