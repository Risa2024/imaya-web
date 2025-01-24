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
    <header className='container z-50 mx-auto flex max-w-6xl items-center justify-between p-2'>
      {/* 左側の画像 */}
      <div className='flex items-center'>
        <Image
          src='/imaya.jpg'
          alt='今屋のハンバーガー'
          width={25}
          height={25}
          className='mr-4 w-auto'
        />
        <h1 className='text-xl font-bold md:text-3xl'>今屋のハンバーガ 愛媛</h1>
      </div>
      <div className='hidden flex-row items-center gap-4 md:flex'>
        {/* デスクトップサイズでのメニュー表示 */}
        <Link href='/'>Home</Link>
        <Link href='/#menu'>メニュー</Link>
        <Link href='/#about'>私たちについて</Link>
        <Link href='/#contact'>お問い合わせ</Link>
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
            <Link href='/'>Home</Link>
            <Link href='/about'>About Us</Link>
            <Link href='/contact'>Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
};
