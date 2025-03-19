import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./context/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Ultimate hackathon, Kodessphere - Konnexions v2.0",
  description:
    "Gear up! Konnexions is back with the ultimate hackathon, Kodessphere v2.0. Brace yourself for an exhilarating journey of problem-solving, collaboration, and cutting-edge development. Whether you're a coding maestro or a budding genius, this is your chance to showcase your talent and make waves in the digital realm. Don't let this opportunity slip through your fingertips! Secure your spot now —register fast!",
  icons: {
    icon: null,
  },
  openGraph: {
    title: "Code. Collaborate. Conquer | Kodessphere v2.0",
    description:
      "Gear up! Konnexions is back with the ultimate hackathon, Kodessphere v2.0. Brace yourself for an exhilarating journey of problem-solving, collaboration, and cutting-edge development. Whether you're a coding maestro or a budding genius, this is your chance to showcase your talent and make waves in the digital realm. Don't let this opportunity slip through your fingertips! Secure your spot now —register fast!",
    type: "website",
    authors: ["Konnexions", "KIIT"],
    images: [
      {
        url: null,
        width: 800,
        height: 600,
      },
      {
        url: null,
        width: 1800,
        height: 1600,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
