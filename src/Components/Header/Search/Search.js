import "./Search.scss";

export const Search = () => {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Поиск"
        className="search-wrapper__input"
      />
      <button className="search-wrapper__btn"></button>
    </div>
  );
};
