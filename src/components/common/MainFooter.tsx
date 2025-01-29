import Link from 'next/link';
import Image from 'next/image';

export function MainFooter() {
  return (
    <footer className='relative overflow-hidden bg-gradient-to-t from-orange-50/90 to-orange-50/70 pb-8 pt-16'>
      {/* デコレーション要素 */}
      <div className='absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-orange-100/40 to-orange-50/30 blur-3xl'></div>
      <div className='absolute -left-20 top-40 h-40 w-40 rounded-full bg-gradient-to-br from-orange-100/40 to-orange-50/30 blur-3xl'></div>

      {/* メインコンテンツ */}
      <div className='relative mx-auto max-w-6xl px-4'>
        {/* PC版レイアウト */}
        <div className='hidden md:block'>
          <div className='mb-16 grid grid-cols-12 gap-8'>
            {/* ロゴと説明 */}
            <div className='col-span-5'>
              <div className='group flex items-center gap-3'>
                <div className='overflow-hidden rounded-xl transition-all duration-300 group-hover:shadow-md'>
                  <Image
                    src='/imaya.jpg'
                    alt='今屋のハンバーガー えひめ'
                    width={45}
                    height={45}
                    className='transform object-cover transition-all duration-300 group-hover:scale-110'
                  />
                </div>
                <div className='flex flex-col'>
                  <h3 className='text-lg font-bold text-gray-800'>今屋のハンバーガー えひめ</h3>
                  <span className='ml-6 text-xs tracking-wider text-gray-500'>
                    IMAYA HAMBURGER EHIME
                  </span>
                </div>
              </div>
              <p className='mt-6 text-sm leading-relaxed text-gray-600'>
                体に優しい食材で栄養バランスを考えた、
                <br />
                愛情たっぷりのハンバーガーをお届けします。
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <Link
                  href='https://www.instagram.com/imayahamburger.ehime/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-300 hover:from-pink-50 hover:to-orange-50'
                >
                  <svg
                    className='h-5 w-5 text-gray-600 transition-all duration-300 group-hover:scale-110 group-hover:text-pink-600'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                  </svg>
                </Link>
              </div>
            </div>

            {/* クイックリンク */}
            <div className='col-span-4'>
              <h4 className='mb-6 text-sm font-bold uppercase tracking-wider text-gray-900'>
                クイックリンク
              </h4>
              <div className='flex flex-col gap-4'>
                <Link
                  href='/'
                  className='group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900'
                >
                  <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                    />
                  </svg>
                  <span className='relative'>
                    ホーム
                    <span className='absolute -bottom-px left-0 h-px w-0 bg-gradient-to-r from-gray-600 to-gray-400 transition-all duration-300 ease-out group-hover:w-full'></span>
                  </span>
                </Link>

                <Link
                  href='/#menu'
                  className='group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900'
                >
                  <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                    />
                  </svg>
                  <span className='relative'>
                    メニュー
                    <span className='absolute -bottom-px left-0 h-px w-0 bg-gradient-to-r from-gray-600 to-gray-400 transition-all duration-300 ease-out group-hover:w-full'></span>
                  </span>
                </Link>

                <Link
                  href='/about'
                  className='group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900'
                >
                  <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span className='relative'>
                    私たちについて
                    <span className='absolute -bottom-px left-0 h-px w-0 bg-gradient-to-r from-gray-600 to-gray-400 transition-all duration-300 ease-out group-hover:w-full'></span>
                  </span>
                </Link>

                <Link
                  href='/#contact'
                  className='group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900'
                >
                  <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  <span className='relative'>
                    お問い合わせ
                    <span className='absolute -bottom-px left-0 h-px w-0 bg-gradient-to-r from-gray-600 to-gray-400 transition-all duration-300 ease-out group-hover:w-full'></span>
                  </span>
                </Link>
              </div>
            </div>

            {/* お問い合わせ */}
            <div className='col-span-3'>
              <h4 className='mb-6 text-sm font-bold uppercase tracking-wider text-gray-900'>
                お問い合わせ
              </h4>
              <div className='space-y-3 text-sm text-gray-600'>
                <Link
                  href='https://www.instagram.com/imayahamburger.ehime/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center gap-2 transition-colors hover:text-gray-900'
                >
                  <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  DMにて受付
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* モバイル版レイアウト */}
        <div className='md:hidden'>
          <div className='mb-8 flex flex-col items-center gap-6'>
            <div className='flex items-center gap-3'>
              <Image
                src='/imaya.jpg'
                alt='今屋のハンバーガー'
                width={35}
                height={35}
                className='rounded-xl'
              />
              <h3 className='text-base font-bold text-gray-800'>今屋のハンバーガー えひめ</h3>
            </div>
            <p className='text-center text-sm leading-relaxed text-gray-600'>
              体に優しい食材で栄養バランスを考えた、
              <br />
              愛情たっぷりのハンバーガーをお届けします。
            </p>
          </div>

          <div className='mb-8 flex flex-wrap justify-center gap-6 text-sm'>
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
        </div>

        {/* コピーライト */}
        <div className='border-t border-gray-200/80 pt-8'>
          <p className='text-center text-sm font-medium text-gray-500'>
            今屋のハンバーガー えひめ © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
