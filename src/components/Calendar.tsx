'use client';
import { useState } from 'react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { ja } from 'date-fns/locale';

export function Calendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className='rounded-lg bg-white p-4 shadow-md'>
      <h2 className='mb-4 text-center text-lg font-bold'>営業カレンダー</h2>
      <CalendarComponent
        mode='single'
        selected={date}
        onSelect={setDate}
        locale={ja}
        className='rounded-md border'
      />
    </div>
  );
}
