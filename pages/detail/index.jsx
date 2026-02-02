import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { IoHomeOutline } from 'react-icons/io5';

export default function Detail() {
  const [current, setCurrent] = useState(0);
  const images = ['/img/v1.mp4'];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className='w-full overflow-x-hidden'>
      <Header />
      <section className='my-28 px-[6%] w-full'>
        <div className='flex justify-between items-center w-full'>
          <Link
            href='/'
            className='hidden lg:flex items-center gap-x-3 px-10 py-3 border border-[#40404040] rounded-[24px]'
          >
            <GoArrowLeft size='1.4rem' />
            برگشت به خانه
          </Link>
          <Link
            href='/'
            className='lg:hidden flex justify-center items-center bg-[#F5F6FA] p-6 rounded-full'
          >
            <IoHomeOutline size='2rem' />
          </Link>

          <span className='font-semibold text-[#404040] text-[16px] lg:text-[20px]'>
            تورخارجی / تور اروپا / تور ترکیه / آنتالیا
          </span>
        </div>

        {/* image slider */}
        <div className='mt-8 w-full'>
          <div className='relative w-full h-[300px] md:h-[400px] lg:h-[500px]'>
            <video
              src={images[current]}
              alt={`Antalya image ${current + 1}`}
              autoPlay
              loop
              muted
              className='rounded-2xl w-[1276px] h-[600px]'
            />
            <div className='bottom-4 left-4 absolute bg-black/50 px-3 py-1 rounded-md text-white text-sm'>
              {current + 1}/3
            </div>
            <div className='bottom-10 left-1/2 absolute flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full -translate-x-1/2'>
              <Image
                src='/images/flag-turkey.png'
                alt='Turkey flag'
                width={24}
                height={24}
                className='rounded-full'
              />
              <span className='font-medium text-[#404040]'>Türkiye</span>
            </div>
            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className='top-1/2 left-4 absolute bg-white/50 hover:bg-white/70 p-2 rounded-full transition -translate-y-1/2'
            >
              <GoArrowLeft size='1.5rem' />
            </button>
            <button
              onClick={nextSlide}
              className='top-1/2 right-4 absolute bg-white/50 hover:bg-white/70 p-2 rounded-full rotate-180 transition -translate-y-1/2'
            >
              <GoArrowLeft size='1.5rem' />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
