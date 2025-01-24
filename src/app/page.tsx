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
            <div className='md:my-20 md:flex md:flex-row md:items-center md:justify-between md:gap-20'>
              <Image
                src='/dish.jpg'
                alt='料理の画像'
                width={400}
                height={400}
                className='hidden md:block'
              />

              <div className='flex flex-col items-center gap-4'>
                <h1 className='my-8 text-2xl font-bold'>今屋のハンバーガーの歴史</h1>
                <p className='text-lg leading-7'>
                  今屋のハンバーガーは、今から50年前、
                  <br />
                  福岡市の西公園の展望台で「今崎勝美」さんによって生まれました。
                  <br />
                  <br />
                  ホットドックにかける熱い情熱と、平和を願う温かい人柄に惹かれ
                  <br />
                  日本全国、また世界中から絶え間なくお客様が訪れます。
                  <br />
                  <br />
                  幻のハンバーガーを味わいたいと、３時間待ちは当たり前の大人気店です。
                </p>
                <div className='mt-4'>
                  <Button className='mb-16 rounded-full bg-white px-12 py-5 hover:bg-gray-200'>
                    <Link href='/about'>詳細を見る</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* メニュー */}
        <h2 className='mb-2 text-center text-sm font-medium text-muted-foreground'>menu</h2>
        <div id='menu' className='mb-20 flex items-center justify-center'>
          <Image src='/menu.jpg' alt='メニューの画像' width={210} height={90} className='' />
        </div>
        <div className=''>
          <MenuList />
        </div>

        {/* お問い合わせ */}
        <div id='contact' className='relative mx-auto max-w-5xl px-4'>
          {/* 背景画像 */}
          {/*<Image
            src='/instaglam.jpg'
            alt='お問い合わせの画像'
            width={2000}
            height={600}
            className='hidden object-cover w-full md:block'
          />
          {/* スマホ版専用のテキスト */}
          <p className='my-20 text-center text-xl font-bold md:text-2xl'>
            お問い合わせは公式Instagramから
          </p>
          <div className='my-20 flex justify-center'>
            <Link
              href='https://www.instagram.com/imayahamburger.ehime/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block w-64 whitespace-nowrap rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 px-6 py-3 text-center font-bold text-white shadow-lg hover:opacity-75'
            >
              フォローはこちら
            </Link>
          </div>
        </div>

        <MainFooter />
      </div>
    </>
  );
}
