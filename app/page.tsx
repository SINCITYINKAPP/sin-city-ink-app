import s from "./page.module.css";

export default function Page() {
  const goto = (href: string) => () => (window.location.href = href);

  return (
    <main>
      <div className={`${s.container} ${s.header}`}>
        <div className={s.logo}>
          <span className={s.badge}>NEW</span>
          <span>SIN CITY INK APP</span>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button className={s.linkBtn} onClick={goto("/#preise")}>Preise</button>
          <button className={s.ctaBtn} onClick={goto("https://calendly.com/")}>Demo buchen</button>
        </div>
      </div>

      {/* HERO */}
      <div className={`${s.container} ${s.hero}`}>
        <div className={s.heroInner}>
          <div>
            <h1>Dein Tattoo-Studio, <span style={{ color: "#f59e0b" }}>vollautomatisch</span>.</h1>
            <p>
              Branding, Terminplanung, Social-Media-Posts, Local-SEO, Broadcasts und
              Zahlungs-Automatisierung – alles in einer App. Mit 1-Klick-Freigaben, die Artists lieben.
            </p>
            <div className={s.heroButtons}>
              <button className={s.ctaBtn} onClick={goto("https://sin-city-ink.app/app")}>Kostenlos starten</button>
              <button className={s.linkBtn} onClick={goto("#features")}>Alle Features</button>
            </div>
            <div style={{ marginTop: 18, color: "#9aa0a6" }}>
              DSGVO-Optionen für WhatsApp, Stripe-Onboarding, Klarna/PayPal – fertig vorbereitet.
            </div>
          </div>

          <div className={s.heroMedia}>
            {/* Simuliertes App-Preview */}
            <div className={s.phone}>
              <div className={s.screen}>
                <div className={s.card}>
                  <b>Design-Assistent</b>
                  <div className={s.grid}>
                    <span>🌙 Dunkel</span><span>☀️ Hell</span><span>🎨 Custom</span>
                  </div>
                </div>
                <div className={s.card}><b>Heute 18:00</b><br/>IG-Reel „Fine Line Rose“ – <span className={s.green}>bereit zur Freigabe</span></div>
                <div className={s.card}><b>GBP-Post</b> „Neue Wanna-Do’s“ – warten auf ✅</div>
                <div className={s.card}><b>Broadcast</b> „Offene Slots N+7“ – 1-Klick senden</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <section className={`${s.container} ${s.section}`}>
        <div className={s.kpis}>
          <div className={s.kpi}><b>+42%</b><div>mehr Anfragen</div></div>
          <div className={s.kpi}><b>90%</b><div>Freigabe mit 1 Klick</div></div>
          <div className={s.kpi}><b>3-4 Tage</b><div>Onboarding komplett</div></div>
          <div className={s.kpi}><b>&lt;20 €</b><div>Ø Tech-Kosten/User</div></div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className={`${s.container} ${s.section}`}>
        <h2 style={{ marginBottom: 12 }}>Was du bekommst</h2>
        <div className={s.features}>
          <div className={s.feature}>
            <b>Influencer-Monster</b>
            <p className={s.included}>30-Tage-Plan, Clips, Captions, Hashtags, Trends – alles automatisch. 1-Klick posten.</p>
            <ul className={s.list}>
              <li>Reels/Shorts + Cross-Posting</li>
              <li>Asset-Check & Einwilligung</li>
              <li>Feierabend-Blocker bei offenen Tasks</li>
            </ul>
          </div>
          <div className={s.feature}>
            <b>Local-SEO Autopilot</b>
            <p className={s.included}>Google Business Profile: Profil-Sync, wöchentliche Posts, Reviews & Q&A Antworten.</p>
            <ul className={s.list}>
              <li>1-Klick-Freigaben</li>
              <li>Foto-Upload & Events/Offers</li>
              <li>Automatische Vorschläge</li>
            </ul>
          </div>
          <div className={s.feature}>
            <b>Broadcast Autopilot</b>
            <p className={s.included}>WhatsApp/E-Mail-Kampagnen: Wanna-Do-Drops, offene Slots, Monats-Highlights.</p>
            <ul className={s.list}>
              <li>Segmentierung (warm/hot + Stil)</li>
              <li>A/B-Texte & UTM-Tracking</li>
              <li>KPIs (CTR, Bookings/Sends)</li>
            </ul>
          </div>
          <div className={s.feature}>
            <b>Video-Idea Engine</b>
            <p className={s.included}>Tägliche, trend-aware Video-Ideen mit Hook, Shotliste, Sound-Hinweis & CTA.</p>
            <ul className={s.list}>
              <li>Säulen-Mix (Showcase/BTS/…)</li>
              <li>Score nach Asset-Fit & Trends</li>
              <li>1-Klick → Postplan</li>
            </ul>
          </div>
          <div className={s.feature}>
            <b>Nudge Engine</b>
            <p className={s.included}>Ein Task-Stream statt Chaos. Snooze, DND, Auto-Freigaben für sichere Aktionen.</p>
          </div>
          <div className={s.feature}>
            <b>Zahlungen & Recht</b>
            <p className={s.included}>Stripe-Onboarding (Abo), Klarna/PayPal fürs Studio, WhatsApp DSGVO-Optionen.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="preise" className={`${s.container} ${s.section}`}>
        <h2 style={{ marginBottom: 12 }}>Preise</h2>
        <div className={s.pricing}>
          <div className={s.plan}>
            <h3>Studio – 250€ / Monat</h3>
            <div className={s.included}>Für Solo-Artists & kleine Teams</div>
            <ul className={s.list}>
              <li>Influencer-Monster + Idea Engine</li>
              <li>Local-SEO Autopilot (GBP)</li>
              <li>Broadcast Autopilot (WA/E-Mail)</li>
              <li>Nudge-Engine & Onboarding-Assistent</li>
            </ul>
            <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
              <button className={s.ctaBtn} onClick={goto("https://sin-city-ink.app/app")}>Jetzt starten</button>
              <button className={s.linkBtn} onClick={goto("https://calendly.com/")}>Demo buchen</button>
            </div>
          </div>
          <div className={s.plan} style={{ borderColor: "#f59e0b" }}>
            <h3>Pro Studio – 500€ / Monat</h3>
            <div className={s.included}>Für Studios mit Wachstum & Ads</div>
            <ul className={s.list}>
              <li>Alles aus „Studio“</li>
              <li>Zusätzliche Brand-Profile & Artists</li>
              <li>Erweiterte Automatisierungen & Ads-Connect</li>
              <li>Priorisierter Support</li>
            </ul>
            <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
              <button className={s.ctaBtn} onClick={goto("https://sin-city-ink.app/app")}>Pro buchen</button>
              <button className={s.linkBtn} onClick={goto("https://calendly.com/")}>Beratung</button>
            </div>
          </div>
        </div>
        <p style={{ color: "#9aa0a6", marginTop: 12 }}>
          Hinweis: WhatsApp Business Platform (DSGVO-konform) wird über den Meta-Account des Studios abgerechnet.
          Alternativ bieten wir eine einfache Geräte-Kopplung (einmalige Einrichtungsgebühr via Stripe).
        </p>
      </section>

      {/* FAQ */}
      <section className={`${s.container} ${s.section}`}>
        <h2>FAQ</h2>
        <div className={s.faq}>
          <div className={s.q}><b>Wie schnell bin ich live?</b><br/>Erste Ergebnisse in 15–30 Min (Design & Kalender). Komplette Einrichtung in 3–4 Tagen mit Checkliste.</div>
          <div className={s.q}><b>Brauche ich Programmier-Skills?</b><br/>Nein. Die App führt dich Frage-für-Frage durch alles Wichtige.</div>
          <div className={s.q}><b>Welche Messenger/Payments?</b><br/>WhatsApp (2 Wege: DSGVO-konform oder Gerät), Stripe, Klarna, PayPal.</div>
        </div>
      </section>

      {/* FOOTER */}
      <div className={`${s.container} ${s.footer}`}>
        <div>© {new Date().getFullYear()} SIN CITY INK APP</div>
        <div style={{ display: "flex", gap: 18 }}>
          <a href="/impressum" style={{ color: "#9aa0a6", textDecoration: "none" }}>Impressum</a>
          <a href="/datenschutz" style={{ color: "#9aa0a6", textDecoration: "none" }}>Datenschutz</a>
        </div>
      </div>
    </main>
  );
}
