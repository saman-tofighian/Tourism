import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { IoHomeOutline } from 'react-icons/io5';

export default function Detail() {
  const videoRef = useRef(null);
  const rafRef = useRef(null);

  const slides = [
    {
      country: 'Türkiye',
      city: 'Antalya',
      flag: '/img/flag1.png',
      video: '/img/v1.mp4',
    },
    {
      country: 'Spain',
      city: 'Barcelona',
      flag: '/img/flags/spain.png',
      video: '/videos/spain.mp4',
    },
    {
      country: 'Thailand',
      city: 'Phuket',
      flag: '/img/flags/thailand.png',
      video: '/videos/thailand.mp4',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const update = () => {
      if (videoRef.current) {
        const { currentTime, duration } = videoRef.current;
        if (duration) {
          setProgress((currentTime / duration) * 100);
        }
      }
      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafRef.current);
  }, [current]);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setProgress(0);
      setFade(true);
    }, 350);
  };

  return (
    <main className='w-full overflow-x-hidden'>
      <Header />

      <section className='my-28 px-[6%] w-full'>
        <div className='flex justify-between items-center mb-8 w-full'>
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
            تور خارجی / تور اروپا / تور ترکیه / آنتالیا
          </span>
        </div>

        <div className='relative mt-20 rounded-[36px] w-full h-[260px] md:h-[420px] lg:h-[540px] overflow-hidden'>
          <video
            ref={videoRef}
            key={slides[current].video}
            src={slides[current].video}
            autoPlay
            muted
            playsInline
            onEnded={nextSlide}
            className={`w-full h-full object-cover transition-all duration-300 ${
              fade ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.04]'
            }`}
          />

          <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent' />

          <div className='top-5 left-1/2 absolute bg-white/30 rounded-full w-[88%] h-[3px] overflow-hidden -translate-x-1/2'>
            <span
              className='block bg-white h-full transition-all'
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className='top-10 right-6 absolute flex items-center gap-2 bg-white/90 shadow px-4 py-2 rounded-full'>
            <Image
              src={slides[current].flag}
              alt={slides[current].country}
              width={22}
              height={22}
              className='rounded-full'
            />
            <span className='font-medium text-[#404040] text-sm'>
              {slides[current].country}
            </span>
          </div>

          {/* city title */}
          <div className='bottom-8 left-8 absolute text-white'>
            <h2 className='font-bold text-2xl md:text-4xl'>
              {slides[current].city}
            </h2>
            <span className='opacity-90 text-sm'>
              {slides[current].country}
            </span>
          </div>

          {/* counter */}
          <div className='top-6 left-6 absolute bg-black/50 px-3 py-1 rounded-md text-white text-sm'>
            {current + 1}/{slides.length}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
