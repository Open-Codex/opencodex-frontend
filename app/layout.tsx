import './globals.css';
import { ThemeProvider } from 'next-themes';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ReactQueryProvider>
            <Navbar />
            <main className="p-4 max-w-6xl mx-auto">{children}</main>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}