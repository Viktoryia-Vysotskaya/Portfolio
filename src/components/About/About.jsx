import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Typography } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import LaptopIcon from "@mui/icons-material/Laptop";
import ScubaDivingIcon from "@mui/icons-material/ScubaDiving";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VerifiedIcon from "@mui/icons-material/Verified";
import GitHubIcon from "@mui/icons-material/GitHub";

import JavaScriptBadge from "../../../src/images/badges/JavaScriptBadge.svg";
import TypeScriptBadge from "../../../src/images/badges/TypeScriptBadge.svg";
import ReactBadge from "../../../src/images/badges/ReactBadge.svg";
import ReduxBadge from "../../../src/images/badges/ReduxBadge.svg";
import HTMLBadge from "../../../src/images/badges/HTMLBadge.svg";
import CSSBadge from "../../../src/images/badges/CSSBadge.svg";
import SASSBadge from "../../../src/images/badges/SASSBadge.svg";
import BootstrapBadge from "../../../src/images/badges/BootstrapBadge.svg";
import RWDBadge from "../../../src/images/badges/RWDBadge.svg";
import NodeJSBadge from "../../../src/images/badges/NodeJSBadge.svg";
import ExpressBadge from "../../../src/images/badges/ExpressBadge.svg";
import MySQLBadge from "../../../src/images/badges/MySQLBadge.svg";
import MongooseBadge from "../../../src/images/badges/MongooseBadge.svg";
import NestJSBadge from "../../../src/images/badges/NestJSBadge.svg";
import MongoDBBadge from "../../../src/images/badges/MongoDBBadge.svg";
import PrismaBadge from "../../../src/images/badges/PrismaBadge.svg";
import FigmaBadge from "../../../src/images/badges/FigmaBadge.svg";
import CanvaBadge from "../../../src/images/badges/CanvaBadge.svg";
import PhotoshopBadge from "../../../src/images/badges/PhotoshopBadge.svg";
import GitBadge from "../../../src/images/badges/GitBadge.svg";
import NPMBadge from "../../../src/images/badges/NPMBadge.svg";
import WebpackBadge from "../../../src/images/badges/WebpackBadge.svg";
import AJAXBadge from "../../../src/images/badges/AJAXBadge.svg";
import WebSocketBadge from "../../../src/images/badges/WebSocketBadge.svg";

import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.claim}>
            <Typography variant="h5" className={styles.typography}>
              <WavingHandIcon
                fontSize="small"
                className={styles.typographyIcon}
              />{" "}
              Hi, I'm Viktoryia.
            </Typography>
            <Typography variant="body1" className={styles.typography}>
              <LaptopIcon fontSize="small" className={styles.typographyIcon} />{" "}
              Junior Full Stack Developer.
            </Typography>
            <Typography variant="body1" className={styles.typography}>
              <ScubaDivingIcon
                fontSize="small"
                className={styles.typographyIcon}
              />{" "}
              I'm diving more and more into JavaScript.
            </Typography>
            <Typography variant="body1" className={styles.typography}>
              <LibraryMusicIcon
                fontSize="small"
                className={styles.typographyIcon}
              />{" "}
              The world of Web Development seems like an exciting symphony to
              me, where Frontend and Backend play important roles.
            </Typography>
            <Typography variant="body1" className={styles.typography}>
              <RocketLaunchIcon
                fontSize="small"
                className={styles.typographyIcon}
              />{" "}
              My Development Journey is just beginning, and I'm looking forward
              to exploring new technologies and techniques to become a more
              experienced Full Stack Developer. I believe that learning is
              always possible and I'm ready to overcome any challenges that may
              come my way.
            </Typography>
            <Typography variant="body1" className={styles.typography}>
              <AutoFixHighIcon
                fontSize="small"
                className={styles.typographyIcon}
              />{" "}
              Let's create "Beauty" together, applications that will be useful
              and satisfy the needs of users! If you have ideas, suggestions, or
              just want to chat, please contact me - I'm always glad to meet new
              people and work together.
            </Typography>
            <Typography variant="body1" className={styles.typography}>
              <FavoriteIcon
                fontSize="small"
                className={`${styles.typographyIcon} ${styles.animateHeart}`}
              />{" "}
              I hope that I and my knowledge can be useful to many people.
            </Typography>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.claim}>
            <Typography variant="h5" className={styles.lead}>
              <BusinessCenterIcon
                fontSize="small"
                className={styles.skillsIcon}
              />{" "}
              Skills
            </Typography>

            <h3>Languages</h3>
            <p>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
              >
                <img
                  className={styles.badge}
                  src={JavaScriptBadge}
                  alt="JavaScript"
                />
              </a>
              <a
                href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
                target="_blank"
              >
                <img
                  className={styles.badge}
                  src={TypeScriptBadge}
                  alt="TypeScript"
                />
              </a>
            </p>

            <h3>Front-End Development</h3>
            <p>
              <a
                href="https://legacy.reactjs.org/docs/getting-started.html"
                target="_blank"
              >
                <img className={styles.badge} src={ReactBadge} alt="React" />
              </a>
              <a
                href="https://redux.js.org/introduction/getting-started"
                target="_blank"
              >
                <img className={styles.badge} src={ReduxBadge} alt="Redux" />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
              >
                <img className={styles.badge} src={HTMLBadge} alt="HTML" />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
              >
                <img className={styles.badge} src={CSSBadge} alt="CSS" />
              </a>
              <a href="https://sass-lang.com/documentation" target="_blank">
                <img className={styles.badge} src={SASSBadge} alt="SASS" />
              </a>
              <a
                href="https://getbootstrap.com/docs/5.0/getting-started/introduction"
                target="_blank"
              >
                <img
                  className={styles.badge}
                  src={BootstrapBadge}
                  alt="Bootstrap"
                />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
                target="_blank"
              >
                <img className={styles.badge} src={RWDBadge} alt="RWD" />
              </a>
            </p>

            <h3>Back-End Development</h3>
            <p>
              <a
                href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"
                target="_blank"
              >
                <img className={styles.badge} src={NodeJSBadge} alt="Node.js" />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs"
                target="_blank"
              >
                <img
                  className={styles.badge}
                  src={ExpressBadge}
                  alt="Express"
                />
              </a>
              <a
                href="https://dev.mysql.com/doc/mysql-getting-started/en"
                target="_blank"
              >
                <img className={styles.badge} src={MySQLBadge} alt="MySQL" />
              </a>
              <a href="https://www.npmjs.com/package/mongoose" target="_blank">
                <img
                  className={styles.badge}
                  src={MongooseBadge}
                  alt="Mongoose"
                />
              </a>
              <a href="https://docs.nestjs.com" target="_blank">
                <img className={styles.badge} src={NestJSBadge} alt="NestJS" />
              </a>
            </p>

            <h3>Database</h3>
            <p>
              <a
                href="https://www.mongodb.com/docs/manual/introduction"
                target="_blank"
              >
                <img
                  className={styles.badge}
                  src={MongoDBBadge}
                  alt="MongoDB"
                />
              </a>
              <a
                href="https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma"
                target="_blank"
              >
                <img className={styles.badge} src={PrismaBadge} alt="Prisma" />
              </a>
            </p>

            <h3>Design and Prototyping Tools</h3>
            <p>
              <a
                href="https://www.figma.com/resources/learn-design"
                target="_blank"
              >
                <img className={styles.badge} src={FigmaBadge} alt="Figma" />
              </a>
              <a
                href="https://www.canva.com/designschool/tutorials/getting-started"
                target="_blank"
              >
                <img className={styles.badge} src={CanvaBadge} alt="Canva" />
              </a>
              <a
                href="https://helpx.adobe.com/photoshop/user-guide.html"
                target="_blank"
              >
                <img
                  className={styles.badge}
                  src={PhotoshopBadge}
                  alt="Photoshop"
                />
              </a>
            </p>

            <h3>Version Control and Tools</h3>
            <p>
              <a
                href="https://developer.mozilla.org/en-US/docs/Glossary/Git"
                target="_blank"
              >
                <img className={styles.badge} src={GitBadge} alt="Git" />
              </a>
              <a href="https://docs.npmjs.com/about-npm" target="_blank">
                <img className={styles.badge} src={NPMBadge} alt="npm" />
              </a>
              <a href="https://webpack.js.org/concepts" target="_blank">
                <img
                  className={styles.badge}
                  src={WebpackBadge}
                  alt="Webpack"
                />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Glossary/Ajax"
                target="_blank"
              >
                <img className={styles.badge} src={AJAXBadge} alt="AJAX" />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
                target="_blank"
              >
                <img
                  className={styles.badge}
                  src={WebSocketBadge}
                  alt="WebSocket"
                />
              </a>
            </p>

            <Typography variant="h5" className={styles.lead}>
              <VerifiedIcon fontSize="small" className={styles.verifiedIcon} />{" "}
              Certificates
            </Typography>
            <Typography variant="body1" className={styles.body1}>
              <a href="/images/certificates/EN_Certificate.pdf" target="_blank">
                Full-Stack Developer Plus
              </a>{" "}
              (Codemy S.A.,
              <a href="https://kodilla.com/" target="_blank">
                Kodilla
              </a>
              , January 2024)
            </Typography>

            <div className={styles.buttons}>
              <a
                href="https://www.linkedin.com/in/viktoryia-vysotskaya"
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className={styles.icon} />
                <span>See My Profile</span>
              </a>

              <div className={styles.button_alt}>
                <CloudDownloadIcon className={styles.icon} />
                <span>Resume:</span>
                <div className={styles.languages}>
                  <a
                    href="/images/resume/CV-Vysotskaya-English.pdf"
                    download="ViktoryiaVysotskayaCV"
                    aria-label="Download ENG Resume"
                  >
                    ENG
                  </a>
                  <span className={styles.separator}>/</span>
                  <a
                    href="/images/resume/CV-Vysotskaya-Polski.pdf"
                    download="ViktoryiaVysotskayaCV"
                    aria-label="Download PL Resume"
                  >
                    PL
                  </a>
                </div>
              </div>

              <a href="#portfolio" className={styles.button}>
                <RemoveRedEyeIcon className={styles.icon} />
                <span>See My Projects</span>
              </a>
              <a
                href="https://github.com/Viktoryia-Vysotskaya"
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className={styles.icon} />
                <span>See My GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.ribbon}>Viktoryia Vysotskaya</div>
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

export default About;
