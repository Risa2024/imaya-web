'use client';

// import Link from 'next/link';
// import Image from 'next/image';
import React, { useState } from 'react';

export const dynamic = 'force-dynamic';

export const MainHeaderTest = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'ホーム', href: '/' },
    { label: '私たちについて', href: '/products' },
  ];

  return (
    <header className='flex flex-row items-center justify-between'>
      {/* Logo */}
      <h1 className='text-2xl font-normal md:text-2xl md:font-bold'>今屋のハンバーガ えひめ</h1>
      {/* PC用メニュー */}
      {!isOpen ? <div>aaa</div> : <div>close</div>}
      <div
        className={`flex flex-row items-center justify-between gap-4 ${!isOpen && 'hidden lg:flex'}`}
      >
        {menuItems.map((item) => (
          <p key={item.href}>{item.label}</p>
        ))}
      </div>
      <div className='lg:hidden'>
        <button onClick={() => setIsOpen(!isOpen)}>メニュー</button>
      </div>
    </header>
  );
};
