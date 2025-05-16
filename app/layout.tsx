import type { Metadata } from 'next';
import './globals.css';
import { Roboto } from 'next/font/google';
import ClientWrapper from '../components/ClientWrapper/ClientWrapper'; // asegúrate de que la ruta sea correcta

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Insight',
  description: 'Todo lo que está bien',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-roboto">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
