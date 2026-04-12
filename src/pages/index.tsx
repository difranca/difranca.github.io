import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function SocialLinks() {
  return (
    <div className={clsx(styles.socialLinks, styles.fadeIn, styles.fadeDelay7)}>
      <a
        href="https://github.com/difranca"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={styles.socialLink}
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/difranca"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={styles.socialLink}
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.fadeIn, styles.fadeDelay1)}>{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", styles.fadeIn, styles.fadeDelay2)}>{siteConfig.tagline}</p>
        <div className={styles.roles}>
          <span className={clsx(styles.fadeIn, styles.fadeDelay3)}>📐 Solutions Architect</span>
          <span className={clsx(styles.fadeIn, styles.fadeDelay4)}>👨‍💻 Staff Software Engineer</span>
          <span className={clsx(styles.fadeIn, styles.fadeDelay5)}>🧠 Machine Learning enthusiast</span>
          <span className={clsx(styles.fadeIn, styles.fadeDelay6)}>👨‍🎓 Electronics Engineer by training</span>
        </div>
        <SocialLinks />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="Diego Francia's tech notes on cloud architecture, Kubernetes, DevSecOps, and software engineering."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
