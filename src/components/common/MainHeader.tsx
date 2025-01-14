'use client';
import { Menu } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
// import Link from 'next/link';
// import Image from 'next/image';
export const dynamic = 'force-dynamic';
export const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className='container z-50 mx-auto flex max-w-6xl items-center justify-between p-2'>
      <h1 className='text-2xl font-bold'>今屋のハンバーガ えひめ</h1>
      <div className='hidden flex-row items-center gap-4 md:flex'>
        {/* デスクトップサイズでのメニュー表示 */}
        <div className='hidden flex-row items-center gap-4 md:flex'></div>
        <p>ホーム</p>
        <p>私たちについて</p>
      </div>
      {/* モバイルサイズでのメニューボタン */}
      <div className='lg:hidden'>
        {/*{isMenuOpen ? 'true' : 'false'}*/}
        <Button variant='default' size='icon' onClick={toggleMenu}>
          <Menu />
          {/*メニュータグを置く*/}
        </Button>
        {/* <button onClick={toggleMenu} className='rounded bg-gray-200 p-2'>
          メニュー
        </button> */}
        {/* モバイルサイズでのトグルメニュー */}
        {isMenuOpen && (
          <div className='z-100 absolute left-0 top-12 flex w-full flex-col gap-2 bg-white p-4 shadow-md'>
            <p>Home</p>
            <p>about us</p>
            <p>contact</p>
          </div>
        )}
      </div>
    </header>
  );
};
