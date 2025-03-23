import "./globals.css";
import Provider from "./context/Provider";

export const metadata = {
  title: "Ultimate hackathon, Kodessphere - Konnexions v2.0",
  description:
    "Gear up! Konnexions is back with the ultimate hackathon, Kodessphere v2.0. Brace yourself for an exhilarating journey of problem-solving, collaboration, and cutting-edge development. Whether you're a coding maestro or a budding genius, this is your chance to showcase your talent and make waves in the digital realm. Don't let this opportunity slip through your fingertips! Secure your spot now —register fast!",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Code. Collaborate. Conquer | Kodessphere v2.0",
    description:
      "Gear up! Konnexions is back with the ultimate hackathon, Kodessphere v2.0. Brace yourself for an exhilarating journey of problem-solving, collaboration, and cutting-edge development. Whether you're a coding maestro or a budding genius, this is your chance to showcase your talent and make waves in the digital realm. Don't let this opportunity slip through your fingertips! Secure your spot now —register fast!",
    type: "website",
    authors: ["Konnexions", "KIIT"],
    images: [
      {
        url: "https://events.konnexions.dev/images/kodesphereBanner.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://events.konnexions.dev/images/kodesphereBanner.jpg",
        width: 1800,
        height: 1600,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
