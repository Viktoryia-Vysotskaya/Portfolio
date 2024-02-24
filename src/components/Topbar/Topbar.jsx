import styles from "./Topbar.module.scss";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import clsx from "clsx";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <section className={clsx(styles.container, menuOpen && styles.active)}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.contact}>
            <PhoneIcon className={styles.icon} />
            <a href="tel:+48886180848">+48 886 180 848</a>
          </div>
          <div className={styles.contact}>
            <EmailIcon className={styles.icon} />
            <a href="mailto: radevich.vika2014@gmail.com">
              radevich.vika2014@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
