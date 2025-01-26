import { Suspense } from 'react';
import { CarouselSection } from '@/components/CarouselSection';
import { NewsList } from '@/components/common/NewsList';
import { MenuList } from '@/components/common/MenuList';
import { client } from '@/lib/microcms';
import { News } from '@/types/microcms';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MainFooter } from '@/components/common/MainFooter';

async function getNewsList() {
  //動機処理
  try {
    const response = await client.get({
      endpoint: 'news',
      queries: { limit: 3 },
    });

    if (!response || !response.contents) {
      throw new Error('ニュースデータの形式が不正です');
    }

    return response.contents as News[];
  } catch (error) {
    console.error('ニュース一覧の取得に失敗しました:', error);
    throw error;
  }
}

export default async function WelcomePage() {
  const newsList = await getNewsList();
  if (!newsList.length) {
    return (
      <div className='py-4 text-center'>
        ニュースの読み込みに失敗しました。後ほど再度お試しください。
      </div>
    );
  }

  return (
    <>
      <div className='flex flex-col'>
        <CarouselSection />
        <Suspense fallback={<div>Loading...</div>}>
          <div className='mx-auto my-10 mb-20 max-w-7xl'>
            <NewsList news={newsList} />
          </div>
        </Suspense>
        <div className='mb-20 bg-gray-100'>
          <div className='mx-4 max-w-7xl md:mx-auto'>
            <div className='md:my-20 md:flex md:flex-row md:items-center md:justify-center md:gap-20'>
              {/* モバイル版 */}
              <div className='flex flex-col items-center gap-4 px-4 py-8 md:hidden'>
                <h1 className='mb-4 text-center text-xl font-bold'>今屋のハンバーガーの歴史</h1>
                <Image
                  src='/dish.jpg'
                  alt='料理の画像'
                  width={300}
                  height={300}
                  className='mb-6 rounded-lg'
                />
                <p className='text-center text-sm leading-loose'>
                  今屋のハンバーガーは、今から50年前
                  <br />
                  福岡市の西公園の展望台で
                  <br />
                  「今崎勝美」さんによって生まれました。
                  <br />
                  <br />
                  ホットドックにかける熱い情熱と
                  <br />
                  平和を願う温かい人柄に惹かれ
                  <br />
                  日本全国、また世界中から
                  <br />
                  絶え間なくお客様が訪れます。
                  <br />
                  <br />
                  幻のハンバーガーを味わいたいと
                  <br />
                  ３時間待ちは当たり前の大人気店です。
                </p>
                <div className='mt-8'>
                  <Button className='rounded-full bg-white px-10 py-4 text-sm hover:bg-gray-200'>
                    <Link href='/about'>詳細を見る</Link>
                  </Button>
                </div>
              </div>

              {/* デスクトップ版 */}
              <div className='hidden md:flex md:flex-row md:items-center md:justify-center md:gap-20'>
                <div className='w-[400px]'>
                  <Image
                    src='/dish.jpg'
                    alt='料理の画像'
                    width={400}
                    height={400}
                    className='rounded-lg'
                  />
                </div>
                <div className='flex w-[500px] flex-col items-center gap-4'>
                  <h1 className='my-8 text-2xl font-bold'>今屋のハンバーガーの歴史</h1>
                  <p className='mb-8 text-lg leading-7'>
                    今屋のハンバーガーは、今から50年前、福岡市の西公園の展望台で
                    <br />
                    「今崎勝美」さんによって生まれました。
                    <br />
                    <br />
                    ホットドックにかける熱い情熱と、平和を願う温かい人柄に惹かれ
                    <br />
                    日本全国、また世界中から絶え間なくお客様が訪れます。
                    <br />
                    <br />
                    幻のハンバーガーを味わいたいと、３時間待ちは当たり前の大人気店です。
                  </p>
                  <div>
                    <Button className='mb-16 rounded-full bg-white px-12 py-5 hover:bg-gray-200'>
                      <Link href='/about'>詳細を見る</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* メニュー */}
        <div className=''>
          <MenuList />
        </div>

        {/* お問い合わせ */}
        <div id='contact' className='relative mx-auto max-w-5xl px-4'>
          <div className='py-12 md:flex md:items-center md:justify-between md:gap-20 md:py-20'>
            {/* 画像セクション */}
            <div className='md:w-1/2'>
              <Image
                src='/instaglam.jpg'
                alt='お問い合わせの画像'
                width={600}
                height={400}
                className='hidden rounded-lg object-cover md:block'
              />
            </div>

            {/* テキストとボタンセクション */}
            <div className='flex flex-col items-center md:w-1/2'>
              {/* モバイル版テキスト */}
              <p className='mb-8 text-center text-lg font-bold md:text-left md:text-2xl'>
                お問い合わせは
                <br className='md:hidden' />
                公式Instagramから
              </p>

              {/* Instagramボタン */}
              <Link
                href='https://www.instagram.com/imayahamburger.ehime/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block w-64 transform rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 px-6 py-3 text-center font-bold text-white shadow-lg transition-transform hover:scale-105 hover:opacity-90 md:w-72 md:px-8 md:py-4 md:text-lg'
              >
                フォローはこちら
              </Link>
            </div>
          </div>
        </div>

        <MainFooter />
      </div>
    </>
  );
}
