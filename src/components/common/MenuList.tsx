'use client';
import React from 'react';
import Image from 'next/image';

export const MenuList = () => {
  return (
    <div className='mx-auto grid max-w-7xl gap-6 p-4 md:grid-cols-3'>
      <div className='overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300'>
        <div className='relative h-48 w-full'>
          <Image src='/mixegg.jpg' alt='ミックスエッグ' fill className='object-contain' />
        </div>
        <div className='p-4 text-center'>
          <h3 className='text-lg font-bold text-gray-800 md:text-lg'>ミックスエッグ</h3>
          <p className='text-sm text-gray-500'>MIXED EGG</p>
          <p className='mt-2 text-sm font-bold text-gray-700'>500円</p>
        </div>
      </div>

      <div className='overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300'>
        <div className='relative h-48 w-full'>
          <Image src='/mixedCheese.jpg' alt='ミックスチーズ' fill className='object-contain' />
        </div>
        <div className='p-4 text-center'>
          <h3 className='text-lg font-bold text-gray-800'>ミックスチーズ</h3>
          <p className='text-sm text-gray-500'>MIXED CHEESE</p>
          <p className='mt-2 text-sm font-bold text-gray-700'>500円</p>
        </div>
      </div>

      <div className='overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300'>
        <div className='relative h-48 w-full'>
          <Image src='/FrankEggC.jpg' alt='フランクエッグチーズ' fill className='object-contain' />
        </div>
        <div className='p-4 text-center'>
          <h3 className='text-lg font-bold text-gray-800'>フランクエッグチーズ</h3>
          <p className='text-sm text-gray-500'>FRANK EGG CHEESE</p>
          <p className='mt-2 text-sm font-bold text-gray-700'>550円</p>
        </div>
      </div>

      <div className='overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300'>
        <div className='relative h-48 w-full'>
          <Image
            src='/TomatoRetasBurger.jpg'
            alt='トマトレタスバーガー'
            fill
            className='object-contain'
          />
        </div>
        <div className='p-4 text-center'>
          <h3 className='text-lg font-bold text-gray-800'>トマトレタスバーガー</h3>
          <p className='text-sm text-gray-500'>TOMATO LETTUCE BURGER</p>
          <p className='mt-2 text-sm font-bold text-gray-700'>500円</p>
        </div>
      </div>

      <div className='overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300'>
        <div className='relative h-48 w-full'>
          <Image
            src='/EggBurgerChees.jpg'
            alt='エッグバーガーチーズ'
            fill
            className='object-contain'
          />
        </div>
        <div className='p-4 text-center'>
          <h3 className='text-lg font-bold text-gray-800'>エッグバーガーチーズ</h3>
          <p className='text-sm text-gray-500'>EGG BURGER CHEESE</p>
          <p className='mt-2 text-sm font-bold text-gray-700'>500円</p>
        </div>
      </div>

      <div className='overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300'>
        <div className='relative h-48 w-full'>
          <Image src='/CheesBurger.jpg' alt='チーズバーガー' fill className='object-contain' />
        </div>
        <div className='p-4 text-center'>
          <h3 className='text-lg font-bold text-gray-800'>チーズバーガー</h3>
          <p className='text-sm text-gray-500'>CHEESE BURGER</p>
          <p className='mt-2 text-sm font-bold text-gray-700'>450円</p>
        </div>
      </div>

      <div className='overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300'>
        <div className='relative h-48 w-full'>
          <Image src='/MixBurger.jpg' alt='ミックスバーガー' fill className='object-contain' />
        </div>
        <div className='p-4 text-center'>
          <h3 className='text-lg font-bold text-gray-800'>ミックスバーガー</h3>
          <p className='text-sm text-gray-500'>MIXED BURGER</p>
          <p className='mt-2 text-sm font-bold text-gray-700'>450円</p>
        </div>
      </div>

      <div className='overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300'>
        <div className='relative h-48 w-full'>
          <Image src='/hamburger.jpg' alt='ハンバーガー' fill className='object-contain' />
        </div>
        <div className='p-4 text-center'>
          <h3 className='text-lg font-bold text-gray-800'>ハンバーガー</h3>
          <p className='text-sm text-gray-500'>HAMBURGER</p>
          <p className='mt-2 text-sm font-bold text-gray-700'>400円</p>
        </div>
      </div>

      <div className='overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300'>
        <div className='relative h-48 w-full'>
          <Image src='/FrankDog.jpg' alt='フランクドッグ' fill className='object-contain' />
        </div>
        <div className='p-4 text-center'>
          <h3 className='text-lg font-bold text-gray-800'>フランクドッグ</h3>
          <p className='text-sm text-gray-500'>FRANK DOG</p>
          <p className='mt-2 text-sm font-bold text-gray-700'>450円</p>
        </div>
      </div>

      <div className='overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300'>
        <div className='relative h-48 w-full'>
          <Image
            src='/100hokaido.jpg'
            alt='100%北海道クリームチーズ'
            fill
            className='object-contain'
          />
        </div>
        <div className='p-4 text-center'>
          <h3 className='text-lg font-bold text-gray-800'>100%北海道クリームチーズ</h3>
          <p className='text-sm text-gray-500'>MIXED EGG</p>
          <p className='mt-2 text-sm font-bold text-gray-700'>600円</p>
        </div>
      </div>

      <div className='overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300'>
        <div className='relative h-48 w-full'>
          <Image src='/EggWiener.jpg' alt='エッグウインナー' fill className='object-contain' />
        </div>
        <div className='p-4 text-center'>
          <h3 className='text-lg font-bold text-gray-800'>エッグウインナー</h3>
          <p className='text-sm text-gray-500'>EGG WIENER</p>
          <p className='mt-2 text-sm font-bold text-gray-700'>450円</p>
        </div>
      </div>

      <div className='overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300'>
        <div className='relative h-48 w-full'>
          <Image src='/WienerSand.jpg' alt='ウインナーサンド' fill className='object-contain' />
        </div>
        <div className='p-4 text-center'>
          <h3 className='text-lg font-bold text-gray-800'>ウインナーサンド</h3>
          <p className='text-sm text-gray-500'>WIENER SANDWICH</p>
          <p className='mt-2 text-sm font-bold text-gray-700'>350円</p>
        </div>
      </div>
    </div>
  );
};
