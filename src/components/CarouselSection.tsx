'use client';

import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //CarouselNext,
  //CarouselPrevious,
} from '@/components/ui/carousel';

export function CarouselSection() {
  return (
    <Carousel
      className='z-0'
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{
        align: 'start',
        loop: true,
      }}
    >
      <CarouselContent className=''>
        <CarouselItem>
          <Image
            src='/kitchenLg.jpg'
            alt='Carousel Image 1'
            width={1200}
            height={630}
            className='h-auto w-full object-cover md:hidden'
          />
          <Image
            src='/kitchen.png'
            alt='Carousel Image 1'
            width={1200}
            height={630}
            className='hidden h-auto w-full object-cover md:block'
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src='/tomatoLg.jpg'
            alt='Carousel Image 2'
            width={1200}
            height={630}
            className='h-auto w-full object-cover md:hidden'
          />
          <Image
            src='/tomato.png'
            alt='Carousel Image 2'
            width={1200}
            height={630}
            className='hidden h-auto w-full object-cover md:block'
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src='/sosegiLg.jpg'
            alt='Carousel Image 3'
            width={1200}
            height={630}
            className='h-auto w-full object-cover md:hidden'
          />
          <Image
            src='/sosegi.png'
            alt='Carousel Image 3'
            width={1200}
            height={630}
            className='hidden h-auto w-full object-cover md:block'
          />
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
