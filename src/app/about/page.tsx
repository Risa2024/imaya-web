import { Suspense } from 'react';
import Link from 'next/link';
import NewsList from '@/components/common/NewsList';
import { client } from '@/lib/microcms';
import { News } from '@/types/microcms';

async function getNewsList() {
  try {
    const response = await client.get({
      endpoint: 'news',
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

export default async function CompanyInfo() {
  const newsList = await getNewsList();
  if (!newsList.length) {
    return (
      <div className='py-4 text-center'>
        ニュースの読み込みに失敗しました。後ほど再度お試しください。
      </div>
    );
  }

  return (
    <div className='container mx-0 max-w-md px-4 py-10 text-sm leading-6 tracking-widest md:mx-auto md:max-w-xl'>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsList news={newsList} />
      </Suspense>
      <h1 className='mb-8 text-base font-medium md:text-center'>運営者情報</h1>
      <h2 className='mb-2 text-sm'>サービス名</h2>
      <p className='mb-5 border-b pb-5 tracking-widest'>Moodify</p>

      <h2 className='mb-2 text-sm'>運営者</h2>
      <p className='mb-5 border-b pb-5'>山田 亜樹（個人事業主）</p>

      <h2 className='mb-2 text-sm'>事業内容</h2>
      <p className='mb-5 border-b pb-5'>
        - ウェブサービス「Moodify」の企画・開発・運営
        <br />
        - 感情分析AIの研究開発
        <br />- メンタルヘルスに関するコンサルティング
      </p>

      <h2 className='mb-2 text-sm'>連絡先</h2>
      <p className='mb-5 border-b pb-5'>
        メールアドレス: info@moodify.com
        <br />
        ※お問い合わせはメールでのみ受け付けております。
      </p>

      <p className='text-center'>
        <Link href='/' className='text-blue-600 hover:underline'>
          ホームに戻る
        </Link>
      </p>
    </div>
  );
}
