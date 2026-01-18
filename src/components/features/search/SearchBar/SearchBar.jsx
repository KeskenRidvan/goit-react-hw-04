import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter text to search for images.");
      return;
    }
    onSubmit(query.trim());
    setQuery("");
  };

  const { searchBarHeader, form, input, button } = styles;

  return (
    <header className={searchBarHeader}>
      <Toaster position="top-right" />
      <form className={form} onSubmit={handleSubmit}>
        <input
          className={input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button className={button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
