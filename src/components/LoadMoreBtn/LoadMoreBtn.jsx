import styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ loadMore }) {
  return (
    <button className={styles.loadMoreBtn} onClick={loadMore}>
    Load More
</button>
  );
}

