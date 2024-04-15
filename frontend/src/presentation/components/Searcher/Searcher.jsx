import './Searcher.css';
import PropTypes from 'prop-types';
import { BsSearchHeartFill } from "react-icons/bs";

export const Searcher = ({ searchTerm, onSearchTermChange }) => {
  return (
    <div className='searcher-container'>
    <input
      className='searcher'
      type='text'
      placeholder='Busca tu receta'
      value={searchTerm}
      onChange={(e) => onSearchTermChange(e.target.value)}
      
    />
    <BsSearchHeartFill className='search-icon' />
    </div>
  )
}

Searcher.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearchTermChange: PropTypes.func.isRequired,
  };
