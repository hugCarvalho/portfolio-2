import FireFliesBackground from "@/components/FireFliesBackground";
import clsx from "clsx";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Portfolio Created with Next.js, Three.js and Tailwind CSS | %s | Hugo Carvalho",
    default:
      "Portfolio Created with Next.js, Three.js and Tailwind CSS by Hugo Carvalho",
  },
  description:
    "My portfolio designed with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
      </body>
    </html>
  );
}
