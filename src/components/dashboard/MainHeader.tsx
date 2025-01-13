// import Link from 'next/link';
// import Image from 'next/image';

export const dynamic = 'force-dynamic';

export const MainHeader = async () => {
  return (
    <header className=''>
      <nav className='container mx-auto flex max-w-6xl items-center justify-between p-2'>
        <h1 className='text-2xl font-bold'>今屋のハンバーガ えひめ</h1>
        <div className='flex flex-row items-center justify-between gap-4 lg:hidden'>
          <p>ホーム</p>
          <p>私たちについて</p>
          <p>お問い合わせ</p>
        </div>
        {/* メニューボタン */}
        <div className='lg:hidden'>
          <button>メニュー</button>
        </div>
      </nav>
    </header>
  );
};
