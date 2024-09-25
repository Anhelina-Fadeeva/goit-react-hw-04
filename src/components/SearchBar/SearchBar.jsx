import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const inputValue = e.target.elements.searchInput.value; 
    if (!inputValue) {
      return toast('Text must be entered to search for images!', {
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }
    onSubmit(inputValue);
  };

  return (
    <header className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.inputField}
          name='searchInput'
          type='text'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
        />
        <button className={styles.submitButton} type='submit'>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
