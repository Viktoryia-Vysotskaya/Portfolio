import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.scrollContainer}>
          <span>Coded by Viktoryia Vysotskaya</span>
          <span>Copyright &copy; Portfolio 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
