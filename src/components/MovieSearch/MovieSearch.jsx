import { useState } from "react";
export function MovieSearch({ onFormSubmit }) { 
     const [searchValue, setSearchValue] = useState('');

  const inputChange = event => {
    setSearchValue(event.target.value);
  };
  const handleSubmit = event => {
        event.preventDefault();
        onFormSubmit(searchValue);
        event.target.reset();
      };
   return (
    <header className='{css.Searchbar}'>
      <form className='{css.SearchForm}' onSubmit={handleSubmit}>
        <button type="submit" className='{css.SearchFormButton}'>
          <span className='{css.SearchFormButtonLabel}'>Search</span>
        </button>

        <input
          className='{css.SearchFormInput}'
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={inputChange}
        />
      </form>
    </header>
  );
}