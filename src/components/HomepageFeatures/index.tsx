import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  link: string;
  img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Tech-Notes",
    link: "/tech-notes/",
    img: "img/tech-notes.gif",
    description: (
      <>
        Tech-Notes comprises my learning notes on various tech subjects.
        <br />
        It may contain personal notes or a summary of key concepts that are
        available in other documentation.
      </>
    ),
  },
  {
    title: "GitHub Project",
    img: "https://opengraph.githubassets.com/1/difranca/difranca.github.io",
    link: "https://github.com/difranca/difranca.github.io",
    description: (
      <>
        This website source code is available at GitHub.
        <br />
        If you liked it, you can{" "}
        <a href="https://github.com/difranca/difranca.github.io">
          Star
        </a> or{" "}
        <a href="https://github.com/difranca/difranca.github.io/subscription">
          Watch
        </a>{" "}
        the project.
      </>
    ),
  },
];

function Feature({ title, link, img: img, description }: FeatureItem) {
  return (
    <div className={clsx("col col--6")}>
      <a className="text--center" href={link}>
        <div className="feature-logo">
          <img src={img} alt={title} style={{width: "333px", height: "174px", objectFit: "contain"}}></img>
        </div>
      </a>
      <div className="text--center padding-horiz--md">
        <br />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
