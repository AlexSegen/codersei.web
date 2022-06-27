import styles from "./youtube.module.scss";

const Youtube = ({ id }) => {
    return ( 
        <div className={styles.container}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          allow="autoplay; encrypted-media"
          title="Embedded YouTube video"
          className={styles.frame}
        />
      </div>
     );
}
 
export default Youtube;