// Components
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

// Styles
import styles from "./Layout.module.css";

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Header />
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
}
