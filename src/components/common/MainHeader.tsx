'use client';
import { Menu } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';
export const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className='bg-orange-50'>
      <div className='z-50 mx-auto flex max-w-6xl items-center justify-between py-5'>
        {/* 左側の画像 */}
        <div className='items-cente ml-3 flex'>
          <Image
            src='/imaya.jpg'
            alt='今屋のハンバーガー'
            width={25}
            height={25}
            className='mr-4 w-auto rounded-xl'
          />
          <h1 className='text-xl font-bold md:text-3xl'>今屋のハンバーガ 愛媛</h1>
        </div>
        <div className='hidden flex-row items-center gap-4 md:flex'>
          {/* デスクトップサイズでのメニュー表示 */}
          <Link href='/'>ホーム</Link>
          <Link href='/#menu'>メニュー</Link>
          <Link href='/about'>私たちについて</Link>
          <Link href='/#contact'>お問い合わせ</Link>
        </div>
        {/* モバイルメニューボタン */}
        <div className='mr-3 lg:hidden'>
          <Button
            variant='ghost'
            size='icon'
            onClick={toggleMenu}
            className='relative overflow-hidden rounded-xl bg-white/80 transition-all duration-300 hover:bg-white hover:shadow-md active:scale-95'
          >
            <Menu className='h-5 w-5 text-gray-700' />
          </Button>

          {/* モバイルメニュー */}
          {isMenuOpen && (
            <div className='absolute left-0 top-[72px] z-[100] w-full'>
              <div className='mx-4 overflow-hidden rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm'>
                <nav className='flex flex-col space-y-2'>
                  <Link
                    href='/'
                    className='group relative overflow-hidden rounded-xl px-4 py-3 transition-all duration-300 hover:scale-[1.02]'
                  >
                    <span className='relative z-10 flex items-center text-gray-600 transition-colors duration-300 group-hover:text-gray-900'>
                      <span className='mr-2 scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100'>
                        →
                      </span>
                      ホーム
                    </span>
                    <span className='absolute inset-0 -z-10 bg-gradient-to-r from-orange-50 to-orange-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></span>
                  </Link>

                  <Link
                    href='/#menu'
                    className='group relative overflow-hidden rounded-xl px-4 py-3 transition-all duration-300 hover:scale-[1.02]'
                  >
                    <span className='relative z-10 flex items-center text-gray-600 transition-colors duration-300 group-hover:text-gray-900'>
                      <span className='mr-2 scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100'>
                        →
                      </span>
                      メニュー
                    </span>
                    <span className='absolute inset-0 -z-10 bg-gradient-to-r from-orange-50 to-orange-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></span>
                  </Link>

                  <Link
                    href='/about'
                    className='group relative overflow-hidden rounded-xl px-4 py-3 transition-all duration-300 hover:scale-[1.02]'
                  >
                    <span className='relative z-10 flex items-center text-gray-600 transition-colors duration-300 group-hover:text-gray-900'>
                      <span className='mr-2 scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100'>
                        →
                      </span>
                      私たちについて
                    </span>
                    <span className='absolute inset-0 -z-10 bg-gradient-to-r from-orange-50 to-orange-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></span>
                  </Link>

                  <Link
                    href='/#contact'
                    className='group relative overflow-hidden rounded-xl px-4 py-3 transition-all duration-300 hover:scale-[1.02]'
                  >
                    <span className='relative z-10 flex items-center text-gray-600 transition-colors duration-300 group-hover:text-gray-900'>
                      <span className='mr-2 scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100'>
                        →
                      </span>
                      お問い合わせ
                    </span>
                    <span className='absolute inset-0 -z-10 bg-gradient-to-r from-orange-50 to-orange-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></span>
                  </Link>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
