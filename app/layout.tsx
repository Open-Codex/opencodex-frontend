import './globals.css';
import { ThemeProvider } from 'next-themes';
import ReactQueryProvider from '@/components/common/ReactQueryProvider';
import LayoutController from '@/components/common/LayoutController';
import { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Open Codex",
  description: "Creado por Felipe Castillo | Hardcode",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ReactQueryProvider>
            <LayoutController>
              {children}
            </LayoutController>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}