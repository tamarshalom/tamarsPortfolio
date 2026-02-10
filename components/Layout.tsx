"use client";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}
