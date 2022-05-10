import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  link: string;
  Svg: string; //React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "GitHub Project",
    Svg: "https://github-readme-stats.vercel.app/api/pin/?username=difranca&repo=difranca.github.io", //require("@site/static/img/cloud/aws/logo.png").default,
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
  {
    title: "Tech-Notes",
    link: "https://difranca.github.io/tech-notes/intro",
    Svg: "img/anim.gif", //require("@site/static/img/cloud/aws/logo.png").default,
    description: (
      <>
        Tech-Notes comprises my learning notes on various tech subjects.
        <br />
        It may contain personal notes or a summary of key concepts that are
        available in other documentation.
      </>
    ),
  },
  // {
  //   title: "Powered by React",
  //   Svg: "img/cloud/aws/logo.png", //require("@site/static/img/cloud/aws/logo.png").default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({ title, link, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--6")}>
      <a className="text--center" href={link}>
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <div className="feature-logo">
          <img src={Svg} height="100px"></img>
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
