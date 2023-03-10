import './search-box.css'

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <input type='search' className={className} placeholder={placeholder} onChange={onChangeHandler} />
  );
}

export default SearchBox;