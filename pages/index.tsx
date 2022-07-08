// Styles
import styles from "styles/Home.module.css";

export default function Main() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Welcome to Movie Browser!</h1>

      <div className={styles.linkContainer}>
        <a
          className={styles.link}
          href="https://github.com/ericc0429/moviebrowser"
        >
          GitHub Repo Link
        </a>
      </div>

      <p className={styles.text}>
        This website was created using NextJS, and aims to utilize The Movie
        Database&apos;s API to introduce the user to various movies that are
        currently trending, and allows for the user to search for a specific
        movie by name.
      </p>
    </div>
  ); // End return
}
