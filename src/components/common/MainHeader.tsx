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
        {/* 左側のロゴと文字 */}
        <div className='ml-3 flex items-center gap-3'>
          <div className='relative'>
            <Image
              src='/imaya.jpg'
              alt='今屋のハンバーガー'
              width={35}
              height={35}
              className='rounded-xl object-cover shadow-sm transition-transform duration-300 hover:scale-105'
            />
          </div>

          <div className='flex flex-col'>
            {/* PC版 */}
            <div className='hidden md:block'>
              <h1 className='text-2xl font-bold tracking-wide text-gray-900'>
                今屋のハンバーガー 愛媛
              </h1>
              <span className='mt-0.5 block text-center text-xs font-medium tracking-[0.2em] text-gray-500'>
                IMAYA HAMBURGER EHIME
              </span>
            </div>

            {/* モバイル版 */}
            <div className='md:hidden'>
              <h1 className='text-lg font-bold tracking-wide text-gray-900'>
                今屋のハンバーガー
                <span className='ml-1 text-base'>愛媛</span>
              </h1>
              <span className='mt-0.5 block text-center text-[10px] font-medium tracking-[0.15em] text-gray-500'>
                IMAYA HAMBURGER EHIME
              </span>
            </div>
          </div>
        </div>
        {/* デスクトップメニュー */}
        <div className='hidden flex-row items-center gap-8 md:flex'>
          <Link
            href='/'
            className='group relative px-3 py-2 text-gray-600 transition-all duration-300 hover:text-gray-900'
          >
            <span className='relative z-10'>ホーム</span>
            <span className='absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-gray-600 to-gray-900 transition-all duration-300 ease-out group-hover:w-full'></span>
          </Link>

          <Link
            href='/#menu'
            className='group relative px-3 py-2 text-gray-600 transition-all duration-300 hover:text-gray-900'
          >
            <span className='relative z-10'>メニュー</span>
            <span className='absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-gray-600 to-gray-900 transition-all duration-300 ease-out group-hover:w-full'></span>
          </Link>

          <Link
            href='/about'
            className='group relative px-3 py-2 text-gray-600 transition-all duration-300 hover:text-gray-900'
          >
            <span className='relative z-10'>私たちについて</span>
            <span className='absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-gray-600 to-gray-900 transition-all duration-300 ease-out group-hover:w-full'></span>
          </Link>

          <Link
            href='/#contact'
            className='group relative px-3 py-2 text-gray-600 transition-all duration-300 hover:text-gray-900'
          >
            <span className='relative z-10'>お問い合わせ</span>
            <span className='absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-gray-600 to-gray-900 transition-all duration-300 ease-out group-hover:w-full'></span>
          </Link>
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
