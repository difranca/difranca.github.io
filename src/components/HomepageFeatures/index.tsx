import React, { useEffect, useRef, useState, useCallback } from "react";
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
        </a> and{" "}
        <a href="https://github.com/difranca/difranca.github.io/fork">
          Fork
        </a>{" "}
        the project.
      </>
    ),
  },
];

const PULSE_DELAY_MS = 4000;
const TOOLTIP_DELAY_MS = 5000;

function Feature({
  title,
  link,
  img: img,
  description,
  highlight,
  showTooltip,
  onLinkClick,
}: FeatureItem & { highlight?: boolean; showTooltip?: boolean; onLinkClick?: () => void }) {
  return (
    <div className={clsx("col col--6")} onClick={onLinkClick}>
      <a className="text--center" href={link}>
        <div className={clsx("feature-logo", styles.featureCard, highlight && styles.pulse)}>
          <img
            className={styles.featureImg}
            src={img}
            alt={title}
          />
        </div>
      </a>
      <div className="text--center padding-horiz--md">
        <br />
        <h3><a href={link}>{title}</a></h3>
        <p>{description}</p>
      </div>
      {showTooltip !== undefined && (
        <div
          className={clsx(styles.tooltip, showTooltip && styles.tooltipVisible)}
        >
          <a href={link} className={styles.tooltipContent}>
            ⬆️ Check out Tech-Notes! ⬆️
          </a>
        </div>
      )}
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const [showPulse, setShowPulse] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pulseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTimers = useCallback(() => {
    if (dismissed) return;

    pulseTimer.current = setTimeout(() => {
      setShowPulse(true);
    }, PULSE_DELAY_MS);

    tooltipTimer.current = setTimeout(() => {
      setShowTooltip(true);
    }, TOOLTIP_DELAY_MS);
  }, [dismissed]);

  const clearTimers = useCallback(() => {
    if (pulseTimer.current) clearTimeout(pulseTimer.current);
    if (tooltipTimer.current) clearTimeout(tooltipTimer.current);
  }, []);

  const resetIdle = useCallback(() => {
    clearTimers();
    setShowPulse(false);
    setShowTooltip(false);
    startTimers();
  }, [clearTimers, startTimers]);

  const handleLinkClick = useCallback(() => {
    setDismissed(true);
    clearTimers();
    setShowPulse(false);
    setShowTooltip(false);
  }, [clearTimers]);

  useEffect(() => {
    startTimers();

    const events = ["click", "scroll", "mousemove", "keydown", "touchstart"];
    events.forEach((e) => window.addEventListener(e, resetIdle, { passive: true }));

    return () => {
      clearTimers();
      events.forEach((e) => window.removeEventListener(e, resetIdle));
    };
  }, [startTimers, clearTimers, resetIdle]);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature
              key={idx}
              {...props}
              highlight={idx === 0 && showPulse}
              showTooltip={idx === 0 ? showTooltip : undefined}
              onLinkClick={handleLinkClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
