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
              <div className='flex flex-col items-center py-8 md:hidden'>
                <div className='w-full'>
                  <Image
                    src='/dish.jpg'
                    alt='料理の画像'
                    width={400}
                    height={400}
                    className='mx-auto rounded-lg'
                  />
                </div>
                <div className='flex flex-col items-center gap-4 px-4'>
                  <h1 className='my-8 text-2xl font-bold'>今屋のハンバーガーの歴史</h1>
                  <p className='mb-8 text-center text-sm leading-7'>
                    今屋のハンバーガーは、今から50年前、福岡市の西公園の展望台で
                    「今崎勝美」さんによって生まれました。
                    <br />
                    <br />
                    ホットドックにかける熱い情熱と、平和を願う温かい人柄に惹かれ
                    日本全国、また世界中から絶え間なくお客様が訪れます。
                    <br />
                    <br />
                    幻のハンバーガーを味わいたいと、３時間待ちは当たり前の大人気店です。
                  </p>
                  <div>
                    <Button className='mb-8 rounded-full bg-white px-12 py-5 hover:bg-gray-200'>
                      <Link href='/about'>詳細を見る</Link>
                    </Button>
                  </div>
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
        <div className='mb-20'>
          <MenuList />
        </div>

        {/* お問い合わせ */}
        <div className='relative overflow-hidden'>
          {/* グラデーション背景 */}
          <div className='absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50'></div>

          {/* コンテンツ */}
          <div className='relative mx-auto max-w-7xl px-4 py-20'>
            <div className='flex flex-col items-center'>
              {/* デスクトップ版 */}
              <div className='hidden md:flex md:w-full md:items-end md:justify-between'>
                {/* 左側の画像 */}
                <div className='flex-shrink-0'>
                  <Image
                    src='/follow.png'
                    alt='フォロー'
                    width={450}
                    height={450}
                    className='w-[300px] mix-blend-multiply xl:w-[350px]'
                  />
                </div>

                {/* 中央のコンテンツ */}
                <div className='-ml-10 flex flex-col items-center'>
                  {/* タイトルとInstagramロゴを含むコンテナ */}
                  <div className='mb-4 flex flex-col items-center'>
                    <p className='mb-1 text-center text-2xl font-bold tracking-wider'>
                      今屋のハンバーガー 愛媛 公式
                    </p>
                    <Image
                      src='/Instagram_logo.svg.png'
                      alt='Instagramのロゴ'
                      width={350}
                      height={350}
                      className='mb-2'
                    />
                    <p className='text-center text-xl font-bold tracking-wide text-gray-700'>
                      お問い合わせはDMから
                    </p>
                  </div>

                  {/* フォローボタン */}
                  <Link
                    href='https://www.instagram.com/imayahamburger.ehime/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative inline-block w-72 transform'
                  >
                    <div className='absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 opacity-70 blur transition-all group-hover:opacity-100'></div>
                    <div className='relative rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 px-8 py-4 text-center text-lg font-bold text-white transition-all hover:scale-105'>
                      フォローはこちら
                    </div>
                  </Link>
                </div>

                {/* 右側のQRコード */}
                <div className='mr-8 flex-shrink-0'>
                  <Image
                    src='/qr.png'
                    alt='QRコード'
                    width={200}
                    height={200}
                    className='mix-blend-multiply'
                  />
                </div>
              </div>

              {/* モバイル版 */}
              <div className='flex flex-col items-center gap-10 py-3 md:hidden'>
                {/* タイトルとInstagramロゴ */}
                <div className='flex flex-col items-center'>
                  <p className='mb-1 text-center text-xl font-bold tracking-wider'>
                    今屋のハンバーガー 愛媛 公式
                  </p>
                  <Image
                    src='/Instagram_logo.svg.png'
                    alt='Instagramのロゴ'
                    width={250}
                    height={250}
                    className='mb-4'
                  />
                  <p className='text-center text-lg font-bold tracking-wide text-gray-700'>
                    お問い合わせはDMから
                  </p>
                </div>

                {/* QRコード */}
                <Image
                  src='/qr.png'
                  alt='QRコード'
                  width={180}
                  height={180}
                  className='mix-blend-multiply'
                />

                {/* フォローボタン */}
                <Link
                  href='https://www.instagram.com/imayahamburger.ehime/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative inline-block w-64 transform'
                >
                  <div className='absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 opacity-70 blur transition-all group-hover:opacity-100'></div>
                  <div className='relative rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 px-6 py-3 text-center font-bold text-white transition-all hover:scale-105'>
                    フォローはこちら
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <MainFooter />
      </div>
    </>
  );
}
