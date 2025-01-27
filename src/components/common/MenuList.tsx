'use client';
import React from 'react';
import Image from 'next/image';
import { UtensilsCrossed } from 'lucide-react';

export function MenuList() {
  return (
    <div id='menu' className='mx-auto max-w-7xl px-4'>
      {/* メニューヘッダー */}
      <div className='mb-12 text-center'>
        <div className='mb-2 flex items-center justify-center gap-1.5'>
          <UtensilsCrossed className='h-[18px] w-[18px] text-gray-500' strokeWidth={1.5} />
        </div>
        <h2 className='text-xl font-bold tracking-tight text-gray-900 md:text-3xl'>メニュー</h2>
      </div>

      {/* メニューグリッド */}
      <div className='mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4'>
        {/* 1位 ミックスエッグ */}
        <div className='group relative overflow-hidden rounded-2xl bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-lg md:p-4'>
          <div className='absolute left-1 top-1 md:left-2 md:top-2'>
            <span className='text-3xl md:text-4xl' role='img' aria-label='1位'>
              🥇
            </span>
          </div>
          <div className='relative aspect-square w-full'>
            <Image
              src='/mixegg.jpg'
              alt='ミックスエッグ'
              fill
              className='rounded-xl object-contain'
            />
          </div>
          <div className='mx-auto my-3 h-px w-1/2 bg-gradient-to-r from-transparent via-gray-200 to-transparent md:my-4'></div>
          <div className='text-center'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>ミックスエッグ</h3>
            <p className='text-xs text-gray-500 md:text-sm'>MIXED EGG</p>
            <p className='mt-1 text-sm font-medium text-orange-600 md:text-base'>500円</p>
          </div>
        </div>

        {/* 2位 ミックスチーズ */}
        <div className='group relative overflow-hidden rounded-2xl bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-lg md:p-4'>
          <div className='absolute left-1 top-1 md:left-2 md:top-2'>
            <span className='text-3xl md:text-4xl' role='img' aria-label='2位'>
              🥈
            </span>
          </div>
          <div className='relative aspect-square w-full'>
            <Image
              src='/mixedCheese.jpg'
              alt='ミックスチーズ'
              fill
              className='rounded-xl object-contain'
            />
          </div>
          <div className='mx-auto my-3 h-px w-1/2 bg-gradient-to-r from-transparent via-gray-200 to-transparent md:my-4'></div>
          <div className='text-center'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>ミックスチーズ</h3>
            <p className='text-xs text-gray-500 md:text-sm'>MIXED CHEESE</p>
            <p className='mt-1 text-sm font-medium text-orange-600 md:text-base'>500円</p>
          </div>
        </div>

        {/* 3位 フランクエッグチーズ */}
        <div className='group relative overflow-hidden rounded-2xl bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-lg md:p-4'>
          <div className='absolute left-1 top-1 md:left-2 md:top-2'>
            <span className='text-3xl md:text-4xl' role='img' aria-label='3位'>
              🥉
            </span>
          </div>
          <div className='relative aspect-square w-full'>
            <Image
              src='/FrankEggC.jpg'
              alt='フランクエッグチーズ'
              fill
              className='rounded-xl object-contain'
            />
          </div>
          <div className='mx-auto my-3 h-px w-1/2 bg-gradient-to-r from-transparent via-gray-200 to-transparent md:my-4'></div>
          <div className='text-center'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>フランクエッグチーズ</h3>
            <p className='text-xs text-gray-500 md:text-sm'>FRANK EGG CHEESE</p>
            <p className='mt-1 text-sm font-medium text-orange-600 md:text-base'>550円</p>
          </div>
        </div>

        {/* 他のメニュー */}
        <div className='overflow-hidden rounded-2xl bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image
              src='/TomatoRetasBurger.jpg'
              alt='トマトレタスバーガー'
              fill
              className='rounded-xl object-contain'
            />
          </div>
          <div className='mx-auto my-3 h-px w-1/2 bg-gradient-to-r from-transparent via-gray-200 to-transparent md:my-4'></div>
          <div className='text-center'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>トマトレタスバーガー</h3>
            <p className='text-xs text-gray-500 md:text-sm'>TOMATO LETTUCE BURGER</p>
            <p className='mt-1 text-sm font-medium text-orange-600 md:text-base'>500円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-2xl bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image
              src='/EggBurgerChees.jpg'
              alt='エッグバーガーチーズ'
              fill
              className='rounded-xl object-contain'
            />
          </div>
          <div className='mx-auto my-3 h-px w-1/2 bg-gradient-to-r from-transparent via-gray-200 to-transparent md:my-4'></div>
          <div className='text-center'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>エッグバーガーチーズ</h3>
            <p className='text-xs text-gray-500 md:text-sm'>EGG BURGER CHEESE</p>
            <p className='mt-1 text-sm font-medium text-orange-600 md:text-base'>500円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-2xl bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image
              src='/CheesBurger.jpg'
              alt='チーズバーガー'
              fill
              className='rounded-xl object-contain'
            />
          </div>
          <div className='mx-auto my-3 h-px w-1/2 bg-gradient-to-r from-transparent via-gray-200 to-transparent md:my-4'></div>
          <div className='text-center'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>チーズバーガー</h3>
            <p className='text-xs text-gray-500 md:text-sm'>CHEESE BURGER</p>
            <p className='mt-1 text-sm font-medium text-orange-600 md:text-base'>450円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-2xl bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image
              src='/MixBurger.jpg'
              alt='ミックスバーガー'
              fill
              className='rounded-xl object-contain'
            />
          </div>
          <div className='mx-auto my-3 h-px w-1/2 bg-gradient-to-r from-transparent via-gray-200 to-transparent md:my-4'></div>
          <div className='text-center'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>ミックスバーガー</h3>
            <p className='text-xs text-gray-500 md:text-sm'>MIXED BURGER</p>
            <p className='mt-1 text-sm font-medium text-orange-600 md:text-base'>450円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-2xl bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image
              src='/hamburger.jpg'
              alt='ハンバーガー'
              fill
              className='rounded-xl object-contain'
            />
          </div>
          <div className='mx-auto my-3 h-px w-1/2 bg-gradient-to-r from-transparent via-gray-200 to-transparent md:my-4'></div>
          <div className='text-center'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>ハンバーガー</h3>
            <p className='text-xs text-gray-500 md:text-sm'>HAMBURGER</p>
            <p className='mt-1 text-sm font-medium text-orange-600 md:text-base'>400円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-2xl bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image
              src='/FrankDog.jpg'
              alt='フランクドッグ'
              fill
              className='rounded-xl object-contain'
            />
          </div>
          <div className='mx-auto my-3 h-px w-1/2 bg-gradient-to-r from-transparent via-gray-200 to-transparent md:my-4'></div>
          <div className='text-center'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>フランクドッグ</h3>
            <p className='text-xs text-gray-500 md:text-sm'>FRANK DOG</p>
            <p className='mt-1 text-sm font-medium text-orange-600 md:text-base'>450円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-2xl bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image
              src='/100hokaido.jpg'
              alt='100%北海道クリームチーズ'
              fill
              className='rounded-xl object-contain'
            />
          </div>
          <div className='mx-auto my-3 h-px w-1/2 bg-gradient-to-r from-transparent via-gray-200 to-transparent md:my-4'></div>
          <div className='text-center'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>
              100%北海道クリームチーズ
            </h3>
            <p className='text-xs text-gray-500 md:text-sm'>MIXED EGG</p>
            <p className='mt-1 text-sm font-medium text-orange-600 md:text-base'>600円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-2xl bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image
              src='/EggWiener.jpg'
              alt='エッグウインナー'
              fill
              className='rounded-xl object-contain'
            />
          </div>
          <div className='mx-auto my-3 h-px w-1/2 bg-gradient-to-r from-transparent via-gray-200 to-transparent md:my-4'></div>
          <div className='text-center'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>エッグウインナー</h3>
            <p className='text-xs text-gray-500 md:text-sm'>EGG WIENER</p>
            <p className='mt-1 text-sm font-medium text-orange-600 md:text-base'>450円</p>
          </div>
        </div>

        <div className='overflow-hidden rounded-2xl bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-md md:p-4'>
          <div className='relative aspect-square w-full'>
            <Image
              src='/WienerSand.jpg'
              alt='ウインナーサンド'
              fill
              className='rounded-xl object-contain'
            />
          </div>
          <div className='mx-auto my-3 h-px w-1/2 bg-gradient-to-r from-transparent via-gray-200 to-transparent md:my-4'></div>
          <div className='text-center'>
            <h3 className='text-base font-bold text-gray-800 md:text-lg'>ウインナーサンド</h3>
            <p className='text-xs text-gray-500 md:text-sm'>WIENER SANDWICH</p>
            <p className='mt-1 text-sm font-medium text-orange-600 md:text-base'>350円</p>
          </div>
        </div>
      </div>
    </div>
  );
}
