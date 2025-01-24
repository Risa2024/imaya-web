import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import '@/styles/globals.css';
import { MainHeader } from '@/components/common/MainHeader';
//import { MainHeaderTest } from '@/components/dashboard/MainHeaderTest';
//import { MainFooter } from '@/components/common/MainFooter';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // 必要な太さを指定
  display: 'swap',
});

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'imaya..',
  description: 'imaya is a shop in Ehime specializing in handmade kitchen car .',
};

// export const kosugi = Kosugi({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap',
//   preload: true,
//   variable: '--font-kosugi',
// });

// export const alegreya = Alegreya({
//   subsets: ['latin'],
//   display: 'swap',
//   preload: true,
//   variable: '--font-alegreya',
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' className={`h-full ${notoSansJP.className}`}>
      <body className='flex min-h-screen flex-col'>
        <MainHeader />
        {/* <MainHeaderTest /> */}
        <main className='flex flex-grow'>{children}</main>
        {/* <MainFooter /> */}
      </body>
    </html>
  );
}
