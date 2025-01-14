import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { MainHeader } from '@/components/dashboard/MainHeader';
//import { MainHeaderTest } from '@/components/dashboard/MainHeaderTest';
import { MainFooter } from '@/components/common/MainFooter';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: '今屋のハンバーガー 愛媛店 - 愛媛発の本格クラフトバーガー専門店',
  description:
    '愛媛県松山市で人気の手作りハンバーガー専門店。100%国産牛パティと自家製バンズで作る本格クラフトバーガーをご提供。テイクアウトも可能で、地元の方々に愛される味をお届けします。',
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
