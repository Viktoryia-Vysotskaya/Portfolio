import styles from "./Portfolio.module.scss";
import { categories } from "../../data/data";
import CategoryItem from "../CategoryItem/CategoryItem";
import { useEffect, useState } from "react";
import { portfolio } from "../../data/data";

const Portfolio = () => {
  const [selected, setSelected] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const filtered = portfolio.filter((project) =>
      project.tag.includes(selected)
    );
    setFilteredProjects(filtered.slice().sort((a, b) => b.id - a.id));
  }, [selected]);

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.header}>
        <h1>Portfolio</h1>

        <ul className={styles.categories}>
          {categories.map((item) => (
            <CategoryItem
              id={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
            />
          ))}
        </ul>
      </div>

      <div className={styles.list}>
        {filteredProjects.map((item) => (
          <div className={styles.project}>
            {item.link ? (
              <a href={item.link} className={styles.image} target="_blank">
                <img src={`${process.env.PUBLIC_URL}${item.img}`} alt="" />
                <p>Live Demo </p>
              </a>
            ) : (
              <a href={item.github} className={styles.image} target="_blank">
                <img src={`${process.env.PUBLIC_URL}${item.img}`} alt="" />
                <p>Go To GitHub</p>
              </a>
            )}

            <div className={styles.content}>
              <div className={styles.buttons}>
                {item.tag.includes("html") && (
                  <div className={styles.html_button}>HTML</div>
                )}
                {item.tag.includes("css/sass") && (
                  <div className={styles.css_sass_button}>CSS/SASS</div>
                )}
                {item.tag.includes("js") && (
                  <div className={styles.javascript_button}>JS</div>
                )}
                {item.tag.includes("ts") && (
                  <div className={styles.typescript_button}>TS</div>
                )}
                {item.tag.includes("nestJS") && (
                  <div className={styles.nestJS_button}>NestJS</div>
                )}
                {item.tag.includes("react") && (
                  <div className={styles.react_button}>React</div>
                )}
                {item.tag.includes("express") && (
                  <div className={styles.express_button}>Express</div>
                )}
                {item.tag.includes("mongoDB") && (
                  <div className={styles.mongo_button}>MongoDB</div>
                )}
                {item.tag.includes("prisma") && (
                  <div className={styles.prisma_button}>Prisma</div>
                )}
                {item.tag.includes("full-stack") && (
                  <div className={styles.bootstrap_button}>Full-Stack</div>
                )}
              </div>
              <h3>{item.title}</h3>
              <p>
                <span className={styles.projectCreation}>
                  Project Creation:
                </span>{" "}
                {item.created}
              </p>
              <p>
                <span className={styles.projectOverview}>
                  Project Overview:
                </span>{" "}
                {item.details}
              </p>
            </div>

            <div className={styles.summary}>
              {item.link && (
                <a href={item.link} className={styles.button} target="_blank">
                  Live Demo
                </a>
              )}
              <a href={item.github} className={styles.button} target="_blank">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.ribbon}>Viktoryia Vysotskaya</div> 
    </section>
  );
};

export default Portfolio;
