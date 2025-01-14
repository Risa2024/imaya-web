import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { MainHeader } from '@/components/dashboard/MainHeader';
//import { MainHeaderTest } from '@/components/dashboard/MainHeaderTest';
import { MainFooter } from '@/components/common/MainFooter';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'imaya',
  description: 'imaya is a shop in Ehime specializing in handmade kitchen car .',
};

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' className={`h-full ${notoSans.className}`}>
      <body className='flex min-h-screen flex-col'>
        <MainHeader />
        {/* <MainHeaderTest /> */}
        <main className='flex flex-grow'>{children}</main>
        <MainFooter />
      </body>
    </html>
  );
}
