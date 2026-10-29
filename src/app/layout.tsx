import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bangalore RO Care | RO Water Purifier Repair & Service in Bangalore",
  description:
    "Bangalore RO Care provides professional RO water purifier service, repair, installation, filter replacement and AMC in Bangalore. Expert doorstep service for all major water purifier models.",
  keywords: [
    "RO service in Bangalore",
    "RO repair Bangalore",
    "Water purifier service Bangalore",
    "RO UV water purifier service Bangalore",
    "Multi brand RO service Bangalore",
    "RO filter replacement Bangalore",
    "RO AMC Bangalore",
    "RO installation Bangalore",
    "Water purifier repair Bangalore",
  ],
  authors: [{ name: "Bangalore RO Care" }],
  openGraph: {
    title: "Bangalore RO Care | RO Water Purifier Repair & Service in Bangalore",
    description:
      "Expert doorstep RO repair, filter replacement, installation & AMC across Bangalore. Quick 90-min service for all major water purifier models.",
    type: "website",
    locale: "en_IN",
    siteName: "Bangalore RO Care",
  },
};

export const viewport: Viewport = {
  themeColor: "#050b14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
      </head>
      <body>{children}</body>
    </html>
  );
}
