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
  metadataBase: new URL('https://www.imaya-ehime.com'),
  title: '今屋のハンバーガー えひめ | 愛媛県松山市のキッチンカー・移動販売',
  description:
    '【愛媛県松山市のキッチンカー】今から50年前、福岡市の西公園で創業した今屋のハンバーガーが、愛媛県でキッチンカーとして新たな旅を始めました。安心・安全な食材にこだわった手作りハンバーガーをぜひご賞味ください。',
  keywords: [
    '今屋のハンバーガー愛媛',
    '今屋のハンバーガーえひめ',
    '今屋のハンバーガー えひめ',
    'いまや えひめ',
    '今屋のハンバーガー 愛媛',
    '今屋 愛媛',
    '今屋 えひめ',
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
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    shortcut: '/favicon.png',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180' }, // Apple用
    ],
    other: [
      {
        rel: 'mask-icon', // Safari用ピン留めアイコン
        url: '/safari-pinned-tab.svg',
      },
    ],
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
