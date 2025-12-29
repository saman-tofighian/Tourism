'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineUsers } from 'react-icons/hi';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const destinations = [
  { season: 'تابستان', country: 'پاتایا' },
  { season: 'بهار', country: 'استانبول' },
  { season: 'زمستان', country: 'دبی' },
  { season: 'پاییز', country: 'پاریس' },
];

export default function Motto() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % destinations.length);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));

  return (
    <section className='mt-6 px-[6%] border border-amber-300 w-full'>
      <div className='items-center gap-10 grid grid-cols-12'>
        <figure className='relative col-span-12 xl:col-span-6 overflow-hidden'>
          <Image
            src='/img/motto.png'
            alt='destination'
            width={636}
            height={700}
            className='rounded-[56px] w-full h-[776px] object-cover'
            priority
          />

          <div className='top-6 left-6 absolute bg-white/30 backdrop-blur-lg px-5 py-4 rounded-3xl w-[190px] text-center transition-all'>
            <span className='block text-white text-xs'>
              {destinations[index].season}
            </span>

            <h3 className='mt-1 font-bold text-white text-3xl transition-all'>
              {destinations[index].country}
            </h3>

            <div className='flex justify-between items-center mt-4 text-white'>
              <button
                onClick={prev}
                className='hover:scale-110 transition cursor-pointer'
              >
                <IoChevronBack size={18} />
              </button>

              <button
                onClick={next}
                className='hover:scale-110 transition cursor-pointer'
              >
                <IoChevronForward size={18} />
              </button>
            </div>
          </div>

          <div className='bottom-8 left-1/2 z-10 absolute flex items-center gap-4 bg-white shadow-xl px-6 py-5 rounded-[32px] w-[95%] -translate-x-1/2'>
            <button className='bg-[#5264FF] px-8 py-3 rounded-full text-white text-sm shrink-0'>
              جستجو
            </button>

            <div className='flex items-center gap-2 text-gray-500 text-sm'>
              <CiLocationOn size={18} />
              مقصد خود را انتخاب کنید
            </div>

            <span className='bg-gray-200 w-px h-6' />

            <div className='flex items-center gap-2 text-gray-500 text-sm'>
              <BsCalendar3 size={16} />
              تاریخ ورود
            </div>

            <div className='flex items-center gap-2 text-gray-500 text-sm'>
              <BsCalendar3 size={16} />
              تاریخ خروج
            </div>

            <span className='bg-gray-200 w-px h-6' />

            <div className='flex items-center gap-2 text-gray-500 text-sm'>
              <HiOutlineUsers size={18} />
              تعداد
            </div>
          </div>
        </figure>

        <section className='flex flex-col items-end gap-6 col-span-12 xl:col-span-6 border border-red-600'>
          <span className='flex items-center gap-x-4 bg-[#FFE9D9] px-[19px] py-[17px] rounded-[48px] w-fit font-bold text-[#FF7A00] text-[15px]'>
            بسیار سفر باید تا پخته شود خامی
            <Image src='/img/beachSunrise.png' width={18} height={18} />
          </span>
          <h1 className='flex flex-col font-bold text-[#404040] text-[76px] text-end'>
            <strong> دنیا را کشف کنید </strong>
            <strong>
              زندگی را <span className='text-[#5264FF]'>تجربه</span>
            </strong>
            <figure className='flex justify-end items-center gap-x-5 w-full'>
              <Image src='/img/airplan.png' width={59} height={59} />
              <figcaption>
                <strong>کنید</strong>
              </figcaption>
            </figure>
          </h1>
          <div className='flex gap-6 mt-4'>
            {[
              { name: 'جنگل', icon: '/img/joungle.png' },
              { name: 'شهر', icon: '/img/city.png' },
              { name: 'ساحل', icon: '/img/beach.png' },
              { name: 'کمپ', icon: '/img/camping.png' },
            ].map((item) => (
              <section className='text-center'>
                <div
                  key={item.name}
                  className='flex flex-col items-center gap-2 px-4 py-3 border border-[#40404040] rounded-3xl w-[86px] h-[80px]'
                >
                  <figure className='flex justify-center items-center w-full h-full'>
                    <Image
                      src={item.icon}
                      width={37}
                      height={37}
                      className='h-[37px]'
                    />
                  </figure>
                </div>
                <span className='text-[#404040] text-sm text-center'>
                  {item.name}
                </span>
              </section>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
