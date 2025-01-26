'use client';
import React from 'react';
import Image from 'next/image';

export const MenuList = () => {
  return (
    <div className='mx-auto max-w-7xl px-4'>
      {/* メニューヘッダー */}
      <h2 id='menu' className='mb-2 text-center text-sm font-medium text-muted-foreground'>
        menu
      </h2>
      <div className='mb-8 flex items-center justify-center'>
        <Image
          src='/menu.png'
          alt='メニューの画像'
          width={210}
          height={90}
          className='hover:scale-105'
        />
      </div>
      {/* メニューグリッド */}
      <div className='mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4'>
        {/* メニューアイテム */}
        <div className='overflow-hidden rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image src='/mixegg.jpg' alt='ミックスエッグ' fill className='object-contain' />
          </div>
          <div className='mt-2 text-center md:mt-4'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>ミックスエッグ</h3>
            <p className='text-xs text-gray-500 md:text-sm'>MIXED EGG</p>
            <p className='mt-1 text-sm font-bold text-gray-700 md:mt-2 md:text-base'>500円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image src='/mixedCheese.jpg' alt='ミックスチーズ' fill className='object-contain' />
          </div>
          <div className='mt-2 text-center md:mt-4'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>ミックスチーズ</h3>
            <p className='text-xs text-gray-500 md:text-sm'>MIXED CHEESE</p>
            <p className='mt-1 text-sm font-bold text-gray-700 md:mt-2 md:text-base'>500円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image
              src='/FrankEggC.jpg'
              alt='フランクエッグチーズ'
              fill
              className='object-contain'
            />
          </div>
          <div className='mt-2 text-center md:mt-4'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>フランクエッグチーズ</h3>
            <p className='text-xs text-gray-500 md:text-sm'>FRANK EGG CHEESE</p>
            <p className='mt-1 text-sm font-bold text-gray-700 md:mt-2 md:text-base'>550円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image
              src='/TomatoRetasBurger.jpg'
              alt='トマトレタスバーガー'
              fill
              className='object-contain'
            />
          </div>
          <div className='mt-2 text-center md:mt-4'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>トマトレタスバーガー</h3>
            <p className='text-xs text-gray-500 md:text-sm'>TOMATO LETTUCE BURGER</p>
            <p className='mt-1 text-sm font-bold text-gray-700 md:mt-2 md:text-base'>500円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image
              src='/EggBurgerChees.jpg'
              alt='エッグバーガーチーズ'
              fill
              className='object-contain'
            />
          </div>
          <div className='mt-2 text-center md:mt-4'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>エッグバーガーチーズ</h3>
            <p className='text-xs text-gray-500 md:text-sm'>EGG BURGER CHEESE</p>
            <p className='mt-1 text-sm font-bold text-gray-700 md:mt-2 md:text-base'>500円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image src='/CheesBurger.jpg' alt='チーズバーガー' fill className='object-contain' />
          </div>
          <div className='mt-2 text-center md:mt-4'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>チーズバーガー</h3>
            <p className='text-xs text-gray-500 md:text-sm'>CHEESE BURGER</p>
            <p className='mt-1 text-sm font-bold text-gray-700 md:mt-2 md:text-base'>450円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image src='/MixBurger.jpg' alt='ミックスバーガー' fill className='object-contain' />
          </div>
          <div className='mt-2 text-center md:mt-4'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>ミックスバーガー</h3>
            <p className='text-xs text-gray-500 md:text-sm'>MIXED BURGER</p>
            <p className='mt-1 text-sm font-bold text-gray-700 md:mt-2 md:text-base'>450円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image src='/hamburger.jpg' alt='ハンバーガー' fill className='object-contain' />
          </div>
          <div className='mt-2 text-center md:mt-4'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>ハンバーガー</h3>
            <p className='text-xs text-gray-500 md:text-sm'>HAMBURGER</p>
            <p className='mt-1 text-sm font-bold text-gray-700 md:mt-2 md:text-base'>400円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image src='/FrankDog.jpg' alt='フランクドッグ' fill className='object-contain' />
          </div>
          <div className='mt-2 text-center md:mt-4'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>フランクドッグ</h3>
            <p className='text-xs text-gray-500 md:text-sm'>FRANK DOG</p>
            <p className='mt-1 text-sm font-bold text-gray-700 md:mt-2 md:text-base'>450円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image
              src='/100hokaido.jpg'
              alt='100%北海道クリームチーズ'
              fill
              className='object-contain'
            />
          </div>
          <div className='mt-2 text-center md:mt-4'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>
              100%北海道クリームチーズ
            </h3>
            <p className='text-xs text-gray-500 md:text-sm'>MIXED EGG</p>
            <p className='mt-1 text-sm font-bold text-gray-700 md:mt-2 md:text-base'>600円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image src='/EggWiener.jpg' alt='エッグウインナー' fill className='object-contain' />
          </div>
          <div className='mt-2 text-center md:mt-4'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>エッグウインナー</h3>
            <p className='text-xs text-gray-500 md:text-sm'>EGG WIENER</p>
            <p className='mt-1 text-sm font-bold text-gray-700 md:mt-2 md:text-base'>450円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image src='/WienerSand.jpg' alt='ウインナーサンド' fill className='object-contain' />
          </div>
          <div className='mt-2 text-center md:mt-4'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>ウインナーサンド</h3>
            <p className='text-xs text-gray-500 md:text-sm'>WIENER SANDWICH</p>
            <p className='mt-1 text-sm font-bold text-gray-700 md:mt-2 md:text-base'>350円</p>
          </div>
        </div>
      </div>
    </div>
  );
};
