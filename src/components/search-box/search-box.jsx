import React from 'react';
import './search-box.css'
class SearchBox extends React.Component {

  render() {
    // destructure from props
    const { className, placeholder, onChangeHandler } = this.props
    return (
      <input type='search' className={className} placeholder={placeholder} onChange={onChangeHandler} />
    );
  }
}

export default SearchBox;