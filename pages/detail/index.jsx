import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import Link from 'next/link';

export default function Detail() {
  return (
    <main className='w-full overflow-x-hidden'>
      <Header />
      <section className='my-28 px-[6%] w-full'>
        <div className='flex justify-between items-center w-full'>
          <Link
            href='/'
            className='px-10 py-3 border border-[#40404040] rounded-[24px]'
          >
            برگشت به خانه
          </Link>
          <span className='font-semibold text-[#404040] text-[20px]'>
            تورخارجی / تور اروپا / تور ترکیه / آنتالیا
          </span>
        </div>
      </section>
      <Footer />
    </main>
  );
}
