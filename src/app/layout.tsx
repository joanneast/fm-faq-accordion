import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | FAQ Accrodion",
  description: "Frontend practice with Next.js + Tailwind CSS.",
  icons: "/assets/images/favicon-32x32.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="
        font-custom
        antialiased 
        bg-[url(/assets/images/background-pattern-mobile.svg)] 
        sm:bg-[url(/assets/images/background-pattern-desktop.svg)] 
        bg-no-repeat bg-cover
         bg-custLightPink"
      >
        {children}
      </body>
    </html>
  );
}
