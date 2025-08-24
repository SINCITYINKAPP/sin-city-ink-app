export const metadata = {
  title: "SIN CITY INK APP – Dein Tattoo-Studio, vollautomatisch.",
  description:
    "Branding, Termine, Marketing & Local SEO: Die All-in-One KI-App für Tattoo-Studios. 1-Klick-Freigaben statt Stress.",
  openGraph: {
    title: "SIN CITY INK APP",
    description:
      "Branding, Termine, Marketing & Local SEO – alles automatisiert. Für Artists gebaut.",
    url: "https://sin-city-ink.app",
    siteName: "SIN CITY INK APP",
    images: [{ url: "/og-cover.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body style={{ margin: 0, fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif", color: "#eaeaea", background: "#0b0b0c" }}>
        {children}
      </body>
    </html>
  );
}
