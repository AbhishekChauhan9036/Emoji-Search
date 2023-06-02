import React, { useState } from 'react';

const EmojiSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const emojis = [
    { emoji: '😀', name: 'Grinning Face' },
    { emoji: '😃', name: 'Grinning Face with Big Eyes' },
    { emoji: '😄', name: 'Grinning Face with Smiling Eyes' },
  ];

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const results = emojis.filter((emoji) =>
      emoji.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for an emoji..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <ul>
        {searchResults.map((emoji, index) => (
          <li key={index}>
            <span>{emoji.emoji}</span>
            <span>{emoji.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmojiSearch;
