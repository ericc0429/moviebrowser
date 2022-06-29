// Components
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

// Styles
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
