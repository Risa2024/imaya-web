'use client';

import { News } from '@/types/microcms';
import { formatDate } from '@/lib/utils';
import DOMPurify from 'isomorphic-dompurify';

type Props = {
  news: News[];
};

export const NewsList = ({ news }: Props) => {
  return (
    <div className='mt-md:py-20 mx-auto w-full px-4'>
      <div className='mb-12 text-center'>
        <h2 className='mb-2 text-sm font-medium text-muted-foreground'>News</h2>
        <h1 className='text-xl font-bold md:text-3xl'>お知らせ</h1>
      </div>

      {/* モバイル・タブレット用デザイン */}
      <div className='mx-auto max-w-3xl space-y-8 lg:hidden'>
        {news.map((item) => (
          <div
            key={item.id}
            className='transform rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md md:p-8'
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
          <div key={item.id} className='flex items-start gap-4 border-b border-gray-200 pb-4'>
            <div className='min-w-0 flex-1'>
              <h3 className='mb-3 text-lg font-medium leading-tight'>{item.title}</h3>
              {item.content && (
                <div
                  className='mb-2 text-sm text-muted-foreground'
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.content) }}
                />
              )}
              <div>
                <p className='text-sm text-muted-foreground'>{formatDate(item.publishedAt)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
