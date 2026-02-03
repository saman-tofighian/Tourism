import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { IoHomeOutline } from 'react-icons/io5';

export default function Detail() {
  const videoRef = useRef(null);
  const rafRef = useRef(null);
  const containerRef = useRef(null);

  const slides = [
    {
      country: 'Türkiye',
      city: 'Antalya',
      flag: '/img/flag1.png',
      video: '/video/v2.mp4',
    },
    {
      country: 'Spain',
      city: 'Barcelona',
      flag: '/img/flag2.png',
      video: '/video/v1.mp4',
    },
    {
      country: 'Thailand',
      city: 'Phuket',
      flag: '/img/flag3.png',
      video: '/video/v3.mp4',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 1; // Ensure normal speed
      if (isPaused) {
        video.pause();
      } else {
        video
          .play()
          .catch((error) => console.error('Video playback error:', error));
      }
    }

    const updateProgress = () => {
      if (video && !isPaused) {
        const { currentTime, duration } = video;
        if (duration) {
          setProgress((currentTime / duration) * 100);
        }
      }
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    rafRef.current = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(rafRef.current);
      if (video) video.pause();
    };
  }, [current, isPaused]);

  const changeSlide = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(newIndex);
      setProgress(0);
      setFade(true);
    }, 350);
  };

  const nextSlide = () => {
    const newIndex = (current + 1) % slides.length;
    changeSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (current - 1 + slides.length) % slides.length;
    changeSlide(newIndex);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
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
            className='lg:hidden flex justify-center items-center bg-[#F5F6FA] p-5 rounded-full'
          >
            <IoHomeOutline size='1.5rem' />
          </Link>

          <span className='font-semibold text-[#404040] text-[16px] lg:text-[20px]'>
            تور خارجی / تور اروپا / تور ترکیه / آنتالیا
          </span>
        </div>

        <div
          ref={containerRef}
          className='relative shadow-2xl mt-20 rounded-[36px] w-full h-[260px] md:h-[420px] lg:h-[600px] overflow-hidden'
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <video
            ref={videoRef}
            key={slides[current].video}
            src={slides[current].video}
            autoPlay={!isPaused}
            muted
            playsInline
            loop={false}
            onEnded={nextSlide}
            className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${
              fade ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />

          <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none' />

          {/* Progress bar */}
          <div className='top-5 left-1/2 absolute bg-white/30 rounded-full w-[88%] h-[3px] overflow-hidden -translate-x-1/2 pointer-events-none'>
            <span
              className='block bg-white h-full transition-all duration-300'
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Country info */}
          <div className='top-10 right-6 absolute flex items-center gap-2 bg-white/90 shadow-md px-4 py-2 rounded-full'>
            <Image
              src={slides[current].flag}
              alt={`${slides[current].country} flag`}
              width={22}
              height={22}
              className='rounded-full'
            />
            <span className='font-medium text-[#404040] text-sm'>
              {slides[current].country}
            </span>
          </div>

          {/* City title */}
          <div className='bottom-8 left-8 absolute text-white pointer-events-none'>
            <h2 className='drop-shadow-lg font-bold text-2xl md:text-4xl lg:text-5xl'>
              {slides[current].city}
            </h2>
            <span className='opacity-90 drop-shadow-md text-sm md:text-base'>
              {slides[current].country}
            </span>
          </div>

          {/* Counter */}
          <div className='top-6 left-6 absolute bg-black/60 px-3 py-1 rounded-md text-white text-sm pointer-events-none'>
            {current + 1}/{slides.length}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className='top-1/2 left-4 absolute bg-white/40 hover:bg-white/60 p-3 rounded-full text-white hover:text-gray-800 transition-all -translate-y-1/2 cursor-pointer'
            aria-label='Previous slide'
          >
            <GoArrowLeft size='1.5rem' />
          </button>
          <button
            onClick={nextSlide}
            className='top-1/2 right-4 absolute bg-white/40 hover:bg-white/60 p-3 rounded-full text-white hover:text-gray-800 transition-all -translate-y-1/2 cursor-pointer'
            aria-label='Next slide'
          >
            <GoArrowRight size='1.5rem' />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
