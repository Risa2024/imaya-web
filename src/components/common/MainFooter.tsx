import Link from 'next/link';

export function MainFooter() {
  return (
    <footer className='bg-gradient-to-t from-orange-50/90 to-orange-50/70 pb-6 pt-12'>
      <div className='mb-6 flex flex-col items-center justify-center gap-4 text-xs md:flex-row'>
        <Link href='/' className='text-gray-600 transition-colors hover:text-gray-900'>
          ホーム
        </Link>
        <Link href='/#menu' className='text-gray-600 transition-colors hover:text-gray-900'>
          メニュー
        </Link>
        <Link href='/about' className='text-gray-600 transition-colors hover:text-gray-900'>
          私たちについて
        </Link>
        <Link href='/#contact' className='text-gray-600 transition-colors hover:text-gray-900'>
          お問い合わせ
        </Link>
      </div>
      <hr className='mx-auto my-4 w-10/12 border-gray-200/80'></hr>
      <p className='text-center text-sm text-gray-500'>今屋のハンバーガー えひめ © 2025</p>
    </footer>
  );
}
