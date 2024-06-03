import styles from "./Info.module.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Info = () => {
  return (
    <section className={styles.info} id="info">
      <div className={styles.row}>
        <div className={styles.cell}>
          <img
            className={styles.foto}
            src="/images/Viktoryia.png"
            alt="Main image"
          />

          <div className={styles.textContainer}>
            <div className={styles.text}>
              Energetic and detail-oriented Junior Full Stack Developer with a
              foundation in JavaScript and Web Technologies. <br />
              Eager to contribute technical skills and creativity to a dynamic
              Development Team.
            </div>
            <div className={styles.buttonsContainer}>
              <div className={styles.buttons}>
                <a href="#about" className={styles.primaryButton}>
                  <div>About Me</div>
                </a>
                <a href="#portfolio" className={styles.secondaryButton}>
                  <div>Portfolio</div>
                </a>
              </div>
              <div className={styles.arrow}>
                <a href="#about">
                  <ExpandMoreIcon className={styles.icon} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.ribbon}>Viktoryia Vysotskaya</div>
        </div>
      </div>
      <div className={styles.counterContainer}>
        <a href="https://www.hitwebcounter.com" target="_blank">
          <img
            src="https://hitwebcounter.com/counter/counter.php?page=13840481&style=0009&nbdigits=5&type=page&initCount=0"
            title="Counter Widget"
            Alt="Visit counter For Websites"
            border="0"
            className={styles.counterImage}
          />
        </a>
      </div>
    </section>
  );
};

export default Info;
