import type { Metadata } from 'next';
import './globals.css';
import { Roboto } from 'next/font/google';
import ClientLoader from '../components/ClientLoader/ClientLoader'; // Asegúrate que esta ruta sea correcta

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-roboto">
        <ClientLoader />
        {children}
      </body>
    </html>
  );
}
