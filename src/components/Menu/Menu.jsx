import styles from "./Menu.module.scss";
import clsx from "clsx";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import MailIcon from "@mui/icons-material/Mail";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <section className={clsx(styles.menu, menuOpen && styles.active)}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <span>
            <HomeIcon />
          </span>
          <a href="#info"> Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <span>
            <InfoIcon />
          </span>
          <a href="#about"> About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <span>
            <WorkIcon />
          </span>
          <a href="#portfolio"> Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <span>
            <MailIcon />
          </span>
          <a href="#contact"> Contact</a>
        </li>
      </ul>
      <div className={styles.icons}>
        <a
          href="https://www.linkedin.com/in/viktoryia-vysotskaya"
          target="_blank"
        >
          <LinkedInIcon className={styles.icon} />
        </a>
        <a href="https://github.com/Viktoryia-Vysotskaya" target="_blank">
          <GitHubIcon className={styles.icon} />
        </a>
      </div>
    </section>
  );
};

export default Menu;
