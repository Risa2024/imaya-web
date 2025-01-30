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
  title: '今屋のハンバーガー えひめ',
  description:
    '愛媛県松山市を中心に展開する今屋のハンバーガーのキッチンカー。50年前に福岡で生まれた伝説のハンバーガーが、愛媛に登場。無添加の手作りハンバーグと特製ソースが織りなす懐かしくも新しい味わい。ぜひ一度、お越し下さいませ。',
  keywords: [
    '今屋のハンバーガー',
    '今屋のハンバーガー えひめ',
    '今屋のハンバーガー 愛媛',
    '今屋のハンバーガー 松山',
    '今家',
    '愛媛',
    'キッチンカー',
    'ハンバーガー',
    '移動販売',
    '松山市',
    '無添加',
    '手作り',
  ],
  verification: {
    google: '8ikgo81jBqMD8mLDf2WPrgV_eydOHasX5pM14BEgfs0',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
