import Link from 'next/link';
//import Image from 'next/image';

export default async function AboutPage() {
  return (
    <div>
      <h1 className='mb-8 text-base font-medium md:text-center'>私たちについて</h1>
      <h2 className='mb-2 text-sm'>「今屋のハンバーガー 愛媛店」をはじめた想い</h2>
      <p className='mb-5 border-b pb-5 tracking-widest'></p>

      <h2 className='mb-2 text-sm'>小さなキッチンカーに込めた夢</h2>
      <p className='mb-5 border-b pb-5'></p>

      <h2 className='mb-2 text-sm'>奇跡的に与えられた時間を誰かのために</h2>
      <p className='mb-5 border-b pb-5'>
        <br />

        <br />
      </p>
      <p className='text-center'>
        <Link href='/' className='text-blue-600 hover:underline'>
          ホームに戻る
        </Link>
      </p>
    </div>
  );
}
