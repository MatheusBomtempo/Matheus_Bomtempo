import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "MatheusBomtempo.com",
    template: "%s | MatheusBomtempo.com",
  },
  description: "Portifolio de Matheus Bomtempo.",
  openGraph: {
    title: "MatheusBomtempo.com",
    description:
      "Portifolio de Matheus Bomtempo",
    url: "https://matheus-bomtempo.vercel.app",
    siteName: "MatheusBomtempo.com",
    images: [
      {
        url: "https://matheus-bomtempo.vercel.app/mfbomt.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "MatheusBomtempo",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/faviconm.ico",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
