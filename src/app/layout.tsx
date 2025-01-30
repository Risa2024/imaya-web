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
    '【愛媛県松山市発】今屋のハンバーガーは、50年の歴史を持つ伝説のハンバーガー専門店です。無添加の手作りハンバーグと特製ソースにこだわった本格派ハンバーガーをキッチンカーで提供。イベントや企業様への出店も承っております。愛媛でハンバーガーの移動販売をお探しの方は、ぜひ今屋のハンバーガーへ。',
  keywords: [
    '今屋のハンバーガー',
    '今屋のハンバーガー えひめ',
    '今屋のハンバーガー 愛媛',
    '今屋のハンバーガー 松山',
    '今家',
    '愛媛 ハンバーガー',
    '松山市 ハンバーガー',
    'キッチンカー 愛媛',
    'ハンバーガー 移動販売',
    '松山市 キッチンカー',
    '無添加 ハンバーガー',
    '手作り ハンバーガー',
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
  // icons: {
  //   icon: [
  //     { url: '/favicon.ico', sizes: '32x32' },
  //     { url: '/icon.png', type: 'image/png', sizes: '32x32' },
  //   ],
  //   apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
  //   shortcut: '/favicon.ico',
  // },
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
