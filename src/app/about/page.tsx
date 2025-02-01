import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default async function AboutPage() {
  return (
    <div className='mx-auto max-w-5xl bg-orange-50/30 px-4'>
      <div className='flex flex-col items-center gap-2 pb-6 pt-12'>
        <h1 className='text-xl font-bold sm:text-2xl'>私たちについて</h1>
      </div>
      {/* <h1 className='mb-8 text-base font-medium bg-green-50 p-4 md:text-center'>About Us</h1> */}
      <h2 className='mb-2 text-base font-bold md:text-2xl'>
        <br />
        <span>今屋のハンバーガーえひめ をはじめた想い</span>
        <hr className='my-2 border-gray-300' />
      </h2>
      <p className='mb-5 pb-5 text-sm tracking-widest md:text-base'>
        <br />
        「いっぱいキャベツ入れてあげてよ。」
        <br />
        <br />
        コッペパンにぎっしり詰めた、キャベツの挽肉炒めと
        <br />
        <br />
        無添加の手作りハンバーグやソーセージ。
        <br />
        <br />
        体に優しい食材で栄養バランスを考えたこの一品には
        <br />
        <br />
        「お腹いっぱい食べてほしい」という
        <br />
        <br />
        私たちの想いが込められています。
      </p>

      <h2 className='mb-2 text-base font-bold md:text-2xl'>
        <span>小さなキッチンカーに込めた夢</span>
        <hr className='my-2 border-gray-300' />
      </h2>
      <p className='mb-5 pb-5 text-sm tracking-widest md:text-base'>
        <br />
        私は小さなキッチンカーを作りました。
        <br />
        <br />
        それは、私の故郷の愛媛県・松山市を拠点に移動式子ども食堂として、
        <br />
        <br />
        「今屋の味」と「想い」をたくさんの人に届けたいという夢を実現するためです。
        <br />
        <br />
        教会で子ども食堂やフードパントリーのボランティア活動をする中で
        <br />
        <br />
        食事に困り、救いを求める人たちが多くいる現実を知りました。
        <br />
        <br />
        そして病を経験した私自身が、安心で安全な食の大切さを痛感しました。
        <br />
        <br />
        健康を支える食事が、人の心を豊かにすることを身をもって感じたのです。
      </p>
      <div className='mb-8'>
        <Image src='/about.png' alt='木漏れ日' width={1200} height={630} />
      </div>
      <p className='mb-5 pb-5 text-sm tracking-widest md:text-base'>
        奇跡的に与えられたこの時間を、誰かの幸せのために使いたい。
        <br />
        <br />
        そんな想いで、一つひとつ丁寧にハンバーガーを作っています。
        <br />
        <br />
        食事はただの栄養ではありません。
        <br />
        <br />
        それは人を支え、笑顔を生み出し、明日を生きる力をくれるものです。
        <br />
        <br />
        私たちのハンバーガーが、食を通じてあなたの心に少しでも温かさを届けられたら
        <br />
        <br />
        これ以上の喜びはありません。
      </p>
      <p className='text-center'>
        <Button className='my-10 rounded-full bg-gray-900 px-10 text-sm text-white transition-all hover:scale-105 hover:bg-gray-600 sm:px-12 sm:py-5 sm:text-base'>
          <Link href='/'>ホームに戻る</Link>
        </Button>
      </p>
    </div>
  );
}
