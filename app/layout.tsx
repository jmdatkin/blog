import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Footer from "./components/footer";
import { Navbar } from "./components/nav";
import "./global.css";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Julian Atkin",
    template: "%s | Julian Atkin",
  },
  description: "Backend engineer hungry to learn and improve.",
  openGraph: {
    title: "Julian Atkin",
    description: "Backend engineer hungry to learn and improve.",
    url: baseUrl,
    siteName: "Julian Atkin",
    locale: "en_US",
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
};

const inter = Inter({ weight: ["400", "700"], subsets: ["latin-ext"] });
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        inter.className
      )}
    >
      <body className="antialiased max-w-2xl mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 flex flex-col px-6">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
