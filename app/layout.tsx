import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/Layout";
import { CursorSpotlight } from "@/components/CursorSpotlight";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tamar Shalom | Portfolio",
    template: "%s | Tamar Shalom",
  },
  description:
    "Tamar Shalom—product-minded engineer. AI, full-stack, product research. Portfolio, projects, and writing.",
  openGraph: {
    type: "website",
    locale: "en_US",
  },
  metadataBase: new URL("https://tamarshalom.com"),
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <head>
        {/* Critical fallback so the page is never unstyled if the CSS bundle fails to load */}
        <style dangerouslySetInnerHTML={{
          __html: `body{background:#0a0a0a;color:#fafafa;font-family:system-ui,sans-serif;margin:0;min-height:100vh;}
          a{color:#a78b9e;text-decoration:none;}
          a:hover{color:#ffb3d9;}
          .font-sans,.font-serif{font-family:inherit;}
          ul{list-style:none;padding:0;margin:0;}`,
        }} />
      </head>
      <body className="font-sans min-h-screen relative">
        <div className="bg-grid" aria-hidden />
        <div className="grain" aria-hidden />
        <div className="bg-blur-shapes" aria-hidden />
        <CursorSpotlight />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
