import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kentro | RO Service in Bangalore | Kent & Pureit RO Repair",
  description:
    "Bangalore RO Care provides professional RO water purifier service, repair, installation, filter replacement and AMC in Bangalore. Expert doorstep service for Kent, Pureit and other major RO brands.",
  keywords: [
    "RO service in Bangalore",
    "RO repair Bangalore",
    "Water purifier service Bangalore",
    "Kent RO service Bangalore",
    "Kent RO repair Bangalore",
    "Pureit service Bangalore",
    "Pureit RO repair Bangalore",
    "RO filter replacement Bangalore",
    "RO AMC Bangalore",
    "RO installation Bangalore",
    "Water purifier repair Bangalore",
  ],
  authors: [{ name: "Bangalore RO Care" }],
  openGraph: {
    title: "Kentro | RO Service in Bangalore | Kent & Pureit RO Repair",
    description:
      "Expert doorstep RO repair, filter replacement, installation & AMC across Bangalore. Quick 90-min service for Kent, Pureit and top brands.",
    type: "website",
    locale: "en_IN",
    siteName: "Kentro",
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
