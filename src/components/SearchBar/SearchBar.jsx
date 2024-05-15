import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setIsError(false); // Clear error state when input changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      setIsError(true); // Set error state if input is empty
      return; // Prevent form submission
    }
    onSubmit(inputValue); // Pass inputValue to onSubmit
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className="search-box">
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleInputChange}
        />
        {isError && <p>Please enter a search term.</p>}
        <button type="submit">🔍</button>
      </form>
    </header>
  );
}