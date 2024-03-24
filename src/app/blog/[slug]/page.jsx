import Image from "next/image";
import styles from "./singlePost.module.css"
const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/19550017/pexels-photo-19550017/free-photo-of-damascus-goat-on-grassland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>Title</div>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/19550017/pexels-photo-19550017/free-photo-of-damascus-goat-on-grassland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Zulkifal</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publish</span>
            <span className={styles.detailValue}>01.05.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          dignissimos beatae tempora fuga. Ut maxime iure magni adipisci
          eligendi nisi, rerum architecto quo vero, impedit odio enim iste
          deleniti quibusdam.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
