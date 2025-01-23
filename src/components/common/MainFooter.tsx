import Link from 'next/link';

export function MainFooter() {
  return (
    <footer className='bg-gray-50 pb-6 pt-12 text-center text-gray-500'>
      <div className='mb-6 flex flex-col items-center justify-center gap-4 text-xs md:flex-row'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About Us</Link>
        <Link href='/'>Contact</Link>
      </div>
      <hr className='mx-auto my-4 w-10/12 border-gray-200'></hr>
      <p className='mb-1'>今屋のハンバーガー えひめ © 2025</p>
    </footer>
  );
}
