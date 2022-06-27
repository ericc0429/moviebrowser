// Styles
import styles from "./Layout.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a>A website for browsing movies.</a>

      <a href="https://github.com/ericc0429">
        Created by Eric Chen (ericc0429).
      </a>
    </footer>
  ); // End return
}
