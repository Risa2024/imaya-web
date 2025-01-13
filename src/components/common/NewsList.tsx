'use client';

import { News } from '@/types/microcms';
import { formatDate } from '@/lib/utils';
import DOMPurify from 'isomorphic-dompurify';

type Props = {
  news: News[];
};

export const NewsList = ({ news }: Props) => {
  return (
    <div className='mx-auto w-full px-4 py-8'>
      <div className='mb-8 text-center'>
        <h2 className='mb-2 text-lg font-medium text-muted-foreground'>News</h2>
        <h1 className='text-3xl font-bold'>お知らせ</h1>
      </div>
      <div className='space-y-4'>
        {news.map((item) => (
          <div key={item.id} className='flex items-start gap-4 border-b border-gray-200 pb-2'>
            <div className='mb-4 min-w-0 flex-1'>
              <h3 className='mb-3 text-lg font-medium leading-tight'>{item.title}</h3>
              {item.content && (
                <div
                  className='mb-1 text-sm text-muted-foreground'
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
