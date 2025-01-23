import Link from 'next/link';
//import Image from 'next/image';

export default async function AboutPage() {
  return (
    <div>
      <h1 className='mb-8 text-base font-medium md:text-center'>About Us</h1>
      <h2 className='mb-2 text-sm'>「今屋のハンバーガー 愛媛店」をはじめた想い</h2>
      <p className='mb-5 border-b pb-5 tracking-widest'>
        <br />
        <br />
        「いっぱいキャベツ入れてあげてよ。」
        <br />
        <br />
        コッペパンにぎっしり詰めた、キャベツの挽肉炒めと無添加の手作りハンバーグやソーセージ。
        <br />
        <br />
        体に優しい食材で栄養バランスを考えたこの一品には、「お腹いっぱい食べてほしい」という私たちの想いが込められています。
      </p>

      <h2 className='mb-2 text-sm'>小さなキッチンカーに込めた夢</h2>
      <p className='mb-5 border-b pb-5'>
        私は小さなキッチンカーを作りました。
        <br />
        <br />
        それは、私の故郷の愛媛県を拠点に移動式子ども食堂として、「今屋の味」と「想い」をたくさんの人に届けたいという夢を実現するためです。
        <br />
        <br />
        教会で子ども食堂やフードパントリーのボランティア活動をする中で、食事に困り、救いを求める人たちが多くいる現実を知りました。
        <br />
        <br />
        そして、大病を経験した私自身が、安心で安全な食の大切さを痛感しました。
        <br />
        <br />
        健康を支える食事が、人の心を豊かにすることを、身をもって感じたのです。
      </p>

      <h2 className='mb-2 text-sm'>奇跡的に与えられた時間を誰かのために</h2>
      <p className='mb-5 border-b pb-5'>
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
        私たちのハンバーガーが、食を通じてあなたの心に少しでも温かさを届けられたら、これ以上の喜びはありません。
      </p>
      <p className='text-center'>
        <Link href='/' className='text-blue-600 hover:underline'>
          ホームに戻る
        </Link>
      </p>
    </div>
  );
}
