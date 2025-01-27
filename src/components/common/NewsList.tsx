'use client';

import { News } from '@/types/microcms';
import { formatDate } from '@/lib/utils';
import DOMPurify from 'isomorphic-dompurify';
import { Bell } from 'lucide-react';

type Props = {
  news: News[];
};

export const NewsList = ({ news }: Props) => {
  return (
    <div className='mt-md:py-20 mx-auto w-full max-w-4xl px-4'>
      {/* ニュースヘッダー */}
      <div className='mb-12 text-center'>
        <div className='mb-2 flex items-center justify-center gap-1.5'>
          <Bell className='h-[18px] w-[18px] text-gray-500' strokeWidth={1.5} />
        </div>
        <h2 className='text-xl font-bold tracking-tight text-gray-900 md:text-3xl'>お知らせ</h2>
      </div>

      {/* モバイル・タブレット用デザイン */}
      <div className='mx-auto max-w-3xl space-y-6 lg:hidden'>
        {news.map((item) => (
          <div
            key={item.id}
            className='transform rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md md:p-8'
          >
            <div className='mb-3'>
              <p className='text-xs text-muted-foreground md:text-sm'>
                {formatDate(item.publishedAt)}
              </p>
            </div>
            <div className='min-w-0 flex-1'>
              <h3 className='mb-4 text-base font-medium leading-tight md:text-lg'>{item.title}</h3>
              {item.content && (
                <div
                  className='prose prose-sm md:prose-base text-muted-foreground'
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(item.content),
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* デスクトップ用デザイン */}
      <div className='hidden space-y-4 lg:block'>
        {news.map((item) => (
          <div
            key={item.id}
            className='group flex items-center justify-between gap-4 border-b border-gray-200 pb-4 transition-all hover:bg-white/50'
          >
            <div className='min-w-0 flex-1 px-4 py-2'>
              <div className='flex items-center justify-between'>
                <h3 className='mb-3 text-lg font-medium leading-tight group-hover:text-gray-900'>
                  {item.title}
                </h3>
                <p className='ml-4 shrink-0 text-sm text-muted-foreground'>
                  {formatDate(item.publishedAt)}
                </p>
              </div>
              {item.content && (
                <div
                  className='text-sm text-muted-foreground'
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.content) }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
