import type { Metadata } from "next";
import Script from "next/script";
import { Archivo, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EmergencyButton } from "@/components/EmergencyButton";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SITE_CONFIG, OC_CITIES } from "@/lib/constants";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

const GA_ID = "G-NSXT0LW7GZ";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

// Condensed display face for the homepage headlines (echoes the lettering on the truck).
const archivo = Archivo({
  variable: "--font-condensed",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Pest Control in Orange County, CA | Yogi's Pest Control",
    template: "%s | Yogi's Pest Control",
  },
  description:
    "Licensed, owner-operated pest control in Orange County, based in Tustin. Rodents, ants, roaches, bees, mosquitoes & wildlife. 5.0 on Google. Call 714-323-8262.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.name,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${jakarta.variable} ${archivo.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_title: document.title,
              send_page_view: true
            });
          `}
        </Script>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PestControlService",
              "@id": "https://yogispestcontrol.com/#business",
              name: "Yogi's Pest Control",
              url: "https://yogispestcontrol.com",
              logo: "https://yogispestcontrol.com/images/logo-transparent.png",
              image: "https://yogispestcontrol.com/images/logo-full.jpg",
              telephone: "+1-714-323-8262",
              email: SITE_CONFIG.email,
              description:
                "Family-run pest control based in Tustin, serving homes and businesses across Orange County, CA. Rodents, ants, cockroaches, bed bugs, wildlife removal & more. Licensed by the California Structural Pest Control Board (OPR 14866).",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tustin",
                addressRegion: "CA",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.7459,
                longitude: -117.8261,
              },
              areaServed: OC_CITIES.map((c) => ({
                "@type": "City",
                name: `${c.name}, CA`,
              })),
              foundingDate: SITE_CONFIG.founded,
              founder: {
                "@type": "Person",
                name: SITE_CONFIG.owner,
                jobTitle: "Owner & Licensed Pest Control Operator",
              },
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "license",
                name: "Structural Pest Control Operator License",
                identifier: SITE_CONFIG.license,
                recognizedBy: {
                  "@type": "GovernmentOrganization",
                  name: "California Structural Pest Control Board",
                  url: "https://www.pestboard.ca.gov",
                },
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "08:00",
                closes: "20:00",
              },
              priceRange: "$$",
              sameAs: [SITE_CONFIG.social.google],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Pest Control Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rodent Control" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cockroach Control" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ant Control" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wasp Control" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bee Removal" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mosquito Control" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spider Control" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bed Bug Treatment" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wildlife Trapping" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Attic Cleanout" } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SmoothScroll />
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <EmergencyButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
