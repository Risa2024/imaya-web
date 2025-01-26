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
        <div className='mb-20 bg-gray-100 shadow-md'>
          <div className='mx-4 max-w-7xl md:mx-auto'>
            <div className='md:my-20 md:flex md:flex-row md:items-center md:justify-center md:gap-20'>
              {/* モバイル版 */}
              <div className='flex flex-col items-center py-8 md:hidden'>
                {/* タイトルセクション */}
                <div className='flex flex-col items-center gap-2 pb-6'>
                  <h2 className='text-sm font-medium text-muted-foreground'>history</h2>
                  <h1 className='text-xl font-bold sm:text-2xl'>今屋のハンバーガーの歴史</h1>
                </div>

                {/* 画像 */}
                <div className='w-full px-4 pb-6'>
                  <Image
                    src='/dish.jpg'
                    alt='料理の画像'
                    width={400}
                    height={400}
                    className='mx-auto rounded-lg shadow-xl hover:shadow-2xl'
                  />
                </div>

                {/* テキストコンテンツ */}
                <div className='flex flex-col items-center gap-4 px-6'>
                  <p className='text-center text-sm leading-7 tracking-widest sm:text-base'>
                    今屋のハンバーガーは、今から50年前
                    <br />
                    福岡市、西公園の展望台で
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
                  <Button className='mt-4 rounded-full bg-gray-900 px-10 py-4 text-sm text-white transition-all hover:scale-105 hover:bg-gray-600 sm:px-12 sm:py-5 sm:text-base'>
                    <Link href='/about'>今屋のハンバーガー愛媛とは</Link>
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
                    className='rounded-lg shadow-xl hover:shadow-2xl'
                  />
                </div>
                <div className='flex w-[500px] flex-col items-center gap-4'>
                  <div className='flex flex-col items-center gap-2'>
                    <h2 className='text-sm font-medium text-muted-foreground'>history</h2>
                    <h1 className='mb-5 text-2xl font-bold lg:text-3xl'>
                      今屋のハンバーガーの歴史
                    </h1>
                  </div>
                  <p className='mb-8 text-lg leading-7 tracking-wide'>
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
                  <Button className='rounded-full bg-gray-900 px-12 py-5 text-white transition-all hover:scale-105 hover:bg-gray-800'>
                    <Link href='/about'>今屋のハンバーガー愛媛とは</Link>
                  </Button>
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
          <div className='relative mx-auto max-w-7xl px-4 py-16 sm:py-20 md:py-24'>
            <div className='flex flex-col items-center'>
              {/* デスクトップ版 */}
              <div className='hidden md:flex md:w-full md:items-end md:justify-between'>
                {/* 左側の画像 */}
                <div className='mb-4 flex-shrink-0 self-end pl-8'>
                  <Image
                    src='/follow.png'
                    alt='フォロー'
                    width={450}
                    height={450}
                    className='w-[280px] mix-blend-multiply lg:w-[320px] xl:w-[380px]'
                  />
                </div>

                {/* 中央のコンテンツ */}
                <div className='flex flex-col items-center'>
                  {/* タイトルとInstagramロゴを含むコンテナ */}
                  <div className='mb-8 flex flex-col items-center'>
                    <p className='mb-4 text-center text-2xl font-bold tracking-wider lg:text-3xl'>
                      今屋のハンバーガー 愛媛 公式
                    </p>
                    <Image
                      src='/Instagram_logo.svg.png'
                      alt='Instagramのロゴ'
                      width={350}
                      height={350}
                      className='mb-4 w-[280px] lg:w-[320px] xl:w-[350px]'
                    />
                    <p className='text-center text-xl font-bold tracking-wide text-gray-700 lg:text-2xl'>
                      お問い合わせはDMから
                    </p>
                  </div>

                  {/* フォローボタン */}
                  <Link
                    href='https://www.instagram.com/imayahamburger.ehime/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative inline-block w-80 transform lg:w-96'
                  >
                    <div className='absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 opacity-70 blur transition-all group-hover:opacity-100'></div>
                    <div className='relative rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 px-8 py-4 text-center text-lg font-bold text-white transition-all hover:scale-105 lg:px-10 lg:py-5 lg:text-xl'>
                      フォローはこちら
                    </div>
                  </Link>
                </div>

                {/* 右側のQRコード */}
                <div className='mb-4 flex-shrink-0 self-end pr-8'>
                  <Image
                    src='/qr.png'
                    alt='QRコード'
                    width={200}
                    height={200}
                    className='w-[180px] mix-blend-multiply lg:w-[200px] xl:w-[220px]'
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
