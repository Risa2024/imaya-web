import { Suspense } from 'react';
import { CarouselSection } from '@/components/CarouselSection';
import { NewsList } from '@/components/common/NewsList';
import { MenuList } from '@/components/common/MenuList';
import { client } from '@/lib/microcms';
import { News } from '@/types/microcms';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
          <div className='mx-auto my-10 max-w-7xl'>
            <NewsList news={newsList} />
          </div>
        </Suspense>
        <div className='mx-auto max-w-5xl px-4'>
          <div className='my-40 mb-60 flex flex-col items-center justify-between gap-20 md:flex-row'>
            <Image src='/dish.jpg' alt='料理の画像' width={400} height={400} />
            <div className='flex flex-col items-center gap-4'>
              <h1 className='mb-8 text-2xl font-bold'>今屋のハンバーガーの歴史</h1>
              <p className='leading-7'>
                今屋のハンバーガーは、今から50年前、福岡市の西公園の展望台で「今崎勝美」さんによって生まれました。
                <br />
                <br />
                ホットドックにかける熱い情熱と、平和を願う温かい人柄に惹かれ日本全国、また世界中から絶え間なくお客様が訪れます。
                <br />
                <br />
                幻のハンバーガーを味わいたいと、３時間待ちは当たり前の大人気店です。
              </p>
              <div className='mt-4'>
                <Button className='rounded-full bg-white px-12 py-5 hover:bg-green-700 hover:text-white'>
                  <Link href='/about'>詳細を見る</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <MenuList />
        </div>
      </div>
    </>
  );
}
