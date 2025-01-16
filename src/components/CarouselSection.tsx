'use client';

import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function CarouselSection() {
  return (
    <Carousel
      className='z-0'
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      opts={{
        align: 'start',
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem>
          <Image
            src='/kitchen.jpg'
            alt='Carousel Image 1'
            width={1200}
            height={800}
            className='h-auto w-full object-cover'
          />
        </CarouselItem>
        <Image
          src='/tomato.jpg'
          alt='Carousel Image 1'
          width={1200}
          height={800}
          className='h-auto w-full object-cover'
        />
        <Image
          src='/sosegi.jpg'
          alt='Carousel Image 1'
          width={1200}
          height={800}
          className='h-auto w-full object-cover'
        />
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
