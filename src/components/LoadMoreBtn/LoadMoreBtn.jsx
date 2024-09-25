import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ loadMore }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.loadButton} onClick={loadMore} type='button'>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;