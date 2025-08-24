import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroTag}>SIN CITY INK APP</div>
        <h1 className={styles.title}>
          Deine <span>All-in-One KI-App</span> für Tattoo-Studios
        </h1>
        <p className={styles.subtitle}>
          Branding, Terminplanung, Marketing, Local SEO &amp; Automationen – in
          einem Tool. 1-Klick-Freigaben, fertig. Entwickelt für Artists.
        </p>
        <div className={styles.ctaRow}>
          <a className={styles.ctaPrimary} href="/signup">Jetzt kostenlos starten</a>
          <a className={styles.ctaGhost} href="#features">Features ansehen</a>
        </div>
        <div className={styles.heroNote}>
          <span>⚡</span> In 10 Minuten zum ersten fertigen Design & Kalender.
        </div>
      </section>

      {/* TRUST */}
      <section className={styles.trust}>
        <div className={styles.trustGrid}>
          <div>🔒 DSGVO-ready</div>
          <div>🧠 KI-Automationen</div>
          <div>📈 Mehr Buchungen</div>
          <div>🛠️ Für Artists gebaut</div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className={styles.features}>
        <h2>Was die App für dich übernimmt</h2>
        <div className={styles.grid3}>
          <article className={styles.card}>
            <h3>Design-Assistent</h3>
            <p>
              Dunkel/hell, Logo-Upload, Farben, Schriften – dein Look in
              Minuten. Auf Knopfdruck Layout-Vorschläge oder komplett eigenes
              Design.
            </p>
          </article>
          <article className={styles.card}>
            <h3>Kalender & Buchungen</h3>
            <p>
              Mehrere Artists, Abos/Anzahlungen via Stripe, Klarna & PayPal,
              intelligente Slots & automatische Bestätigungen.
            </p>
          </article>
          <article className={styles.card}>
            <h3>Influencer-Monster</h3>
            <p>
              30-Tage-Plan, Ideen, Clips, Captions & Hashtags. 1-Klick
              freigeben, die App postet und optimiert automatisch.
            </p>
          </article>
          <article className={styles.card}>
            <h3>Broadcast-Autopilot</h3>
            <p>
              WhatsApp & E-Mail-Kampagnen (Open Slots, Wanna-Dos, Aktionen) mit
              A/B-Texten und KPIs.
            </p>
          </article>
          <article className={styles.card}>
            <h3>Local-SEO Autopilot</h3>
            <p>
              Google Business Profile Posts, Q&amp;A, Reviews – Vorschläge als
              Task, 1-Klick-Freigabe.
            </p>
          </article>
          <article className={styles.card}>
            <h3>Nudge-Engine</h3>
            <p>
              Clevere Erinnerungen (Feierabend-Gate, Auto-Freigaben, Snooze &
              DND), damit nichts liegen bleibt.
            </p>
          </article>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.how}>
        <h2>So startest du – 3 Schritte</h2>
        <ol className={styles.steps}>
          <li>
            <strong>Design wählen</strong> – Logo zeigen, Farben auswählen, Look bestätigen.
          </li>
          <li>
            <strong>Kalender & Zahlungen</strong> – Stripe verbinden, Klarna/PayPal aktivieren,
            Artists & Öffnungszeiten anlegen.
          </li>
          <li>
            <strong>Kanäle koppeln</strong> – Instagram/TikTok, WhatsApp (DSGVO-konform oder
            pragmatisch), Google-Profil.
          </li>
        </ol>
        <a className={styles.ctaPrimary} href="/signup">Jetzt einrichten</a>
      </section>

      {/* PRICING TEASER */}
      <section className={styles.pricing}>
        <h2>Einfaches Preismodell</h2>
        <div className={styles.grid2}>
          <div className={styles.plan}>
            <div className={styles.planBadge}>Studio</div>
            <div className={styles.price}>€250<span>/Monat</span></div>
            <ul>
              <li>Design-Assistent</li>
              <li>Kalender & Buchungen</li>
              <li>Influencer-Monster (Standard)</li>
              <li>Broadcast-Autopilot</li>
              <li>Local-SEO Autopilot</li>
            </ul>
            <a className={styles.ctaSecondary} href="/signup">Auswählen</a>
          </div>
          <div className={`${styles.plan} ${styles.planPro}`}>
            <div className={styles.planBadge}>Pro</div>
            <div className={styles.price}>€500<span>/Monat</span></div>
            <ul>
              <li>Alles aus Studio</li>
              <li>Erweiterte KI-Optimierung</li>
              <li>Mehr Automationen & Post-Kontingente</li>
              <li>Priorisierter Support</li>
            </ul>
            <a className={styles.ctaPrimary} href="/signup">Pro starten</a>
          </div>
        </div>
        <p className={styles.smallNote}>
          Abrechnung via Stripe. Zusatzkosten (z. B. WhatsApp Convos) direkt beim Anbieter.
        </p>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div>
            <div className={styles.logo}>SIN CITY INK APP</div>
            <p>Die KI-Plattform für moderne Tattoo-Studios.</p>
          </div>
          <nav className={styles.footerNav}>
            <a href="#features">Features</a>
            <a href="/signup">Signup</a>
            <a href="mailto:hello@sin-city-ink.app">Kontakt</a>
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
          </nav>
        </div>
        <div className={styles.copy}>© {new Date().getFullYear()} SIN CITY INK APP</div>
      </footer>
    </main>
  );
}
