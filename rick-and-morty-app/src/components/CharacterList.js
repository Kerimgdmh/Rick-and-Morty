// src/components/CharacterList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CharacterList.css'; // Stil dosyasını ekleyin

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
        setCharacters(response.data.results);
        setTotalPages(response.data.info.pages);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <ul className="character-list">
        {characters.map((character) => (
          <li key={character.id} className="character-item">
            <img src={character.image} alt={character.name} />
            <div>
              <h3>{character.name}</h3>
              <p>{character.species} - {character.status}</p>
            </div>
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

export default CharacterList;
