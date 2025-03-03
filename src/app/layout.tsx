import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DM_Serif_Text } from "next/font/google";

// Use DM Serif Text for headings
const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "TorresUI | Brandon Torres - Software Engineer",
  description:
    "Personal website of Brandon Torres (TorresUI), a software engineer specializing in web development and user interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSerif.className}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
