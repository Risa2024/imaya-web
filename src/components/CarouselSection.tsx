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
            src='/kitchen2.png'
            alt='Carousel Image 1'
            width={1200}
            height={850}
            className='h-auto w-full object-cover md:hidden'
          />
          <Image
            src='/kitchen2.png'
            alt='Carousel Image 1'
            width={1200}
            height={750}
            className='hidden h-auto w-full object-cover md:block'
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src='/tomato2.png'
            alt='Carousel Image 2'
            width={1200}
            height={850}
            className='h-auto w-full object-cover md:hidden'
          />
          <Image
            src='/tomato2.png'
            alt='Carousel Image 2'
            width={1200}
            height={750}
            className='hidden h-auto w-full object-cover md:block'
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src='/sosegi3.png'
            alt='Carousel Image 3'
            width={1200}
            height={850}
            className='h-auto w-full object-cover md:hidden'
          />
          <Image
            src='/sosegi3.png'
            alt='Carousel Image 3'
            width={1200}
            height={750}
            className='hidden h-auto w-full object-cover md:block'
          />
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
