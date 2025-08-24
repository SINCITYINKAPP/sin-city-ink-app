.import styles from "./page.module.css";

export default function Page() {
  const goto = (href: string) => () => (window.location.href = href);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.badge}>NEW</span>
          SIN CITY INK APP
        </div>
        <div className={styles.headerButtons}>
          <button onClick={goto("#preise")}>Preise</button>
          <button onClick={goto("https://calendly.com/")}>Demo buchen</button>
        </div>
      </header>

      <section className={styles.hero}>
        <h1>Dein Tattoo-Studio <span style={{ color: "#ff5e0e" }}>vollautomatisch</span></h1>
        <p>
          Branding, Terminplanung, Social-Media-Posts, Local-SEO, Broadcasts und Zahlungs-Automatisierung –
          alles in einer App. Mit 1-Klick-Freigaben, die Artists wirklich nutzen.
        </p>
        <div className={styles.heroButtons}>
          <button onClick={goto("#features")}>Alle Features</button>
          <button onClick={goto("https://sin-city-ink.app/signup")}>Jetzt starten</button>
        </div>
      </section>
    </main>
  );
}
