import styles from "./Contact.module.scss";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect, useState } from "react";
import { useForm } from "@formspree/react";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwkgvgzr");
  const [send, setSend] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setSend(true);
      setTimeout(() => {
        setSend(false);
      }, 200000);
    }
  }, [state.succeeded]);

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.header}>
        <h1>Contact Me</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.left_wrapper}>
            <div className={styles.contact_box}>
              <a href="mailto:radevich.vika2014@gmail.com">
                <EmailIcon className={styles.icon} />
              </a>
              <div>
                <h1>Drop Me A Message</h1>
                <a href="mailto: radevich.vika2014@gmail.com">
                  radevich.vika2014@gmail.com
                </a>
              </div>
            </div>
            <div className={styles.contact_box}>
              <a href="tel:+48886180848">
                <PhoneIcon className={styles.icon} />
              </a>
              <div>
                <h1>Let's Connect</h1>
                <a href="tel:+48886180848">+48 886 180 848</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          {send ? (
            <div className={styles.success} aria-live="polite">
              <ThumbUpAltRoundedIcon className={styles.icon} />
              <h1>Message Sent!</h1>
              <span>Thank You For Getting In Touch!</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xwkgvgzr"
            >
              <fieldset>
                <span className={styles.contactForm}>Contact Form</span>
                <div className={styles.form_field}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name..."
                  />
                </div>
                <div className={styles.form_field}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email Address..."
                  />
                </div>
                <div className={styles.form_field}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message..."
                  />
                </div>
                <div className={styles.buttonContainer}>
                  <button type="submit" disabled={state.submitting}>
                    Send Message
                  </button>
                </div>
              </fieldset>
            </form>
          )}
        </div>
        <div className={styles.ribbon}>Viktoryia Vysotskaya</div>
      </div>
    </section>
  );
};

export default Contact;
