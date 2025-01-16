import { Suspense } from 'react';
import { CarouselSection } from '@/components/CarouselSection';
import { NewsList } from '@/components/common/NewsList';
import { client } from '@/lib/microcms';
import { News } from '@/types/microcms';

async function getNewsList() {
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
          <NewsList news={newsList} />
        </Suspense>
      </div>
    </>
  );
}
