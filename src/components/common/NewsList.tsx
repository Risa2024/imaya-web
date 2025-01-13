import { News } from '@/types/microcms';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {news.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='prose dark:prose-invert'>{item.content}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
