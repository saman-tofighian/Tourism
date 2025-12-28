import Image from 'next/image';
import { BsCalendar3 } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineUsers } from 'react-icons/hi';

export default function Motto() {
  return (
    <section className='mt-6 px-[6%] w-full'>
      <div className='items-center gap-10 grid grid-cols-12'>
        <figure className='relative col-span-12 xl:col-span-6'>
          <Image
            src='/img/motto.png'
            alt='destination'
            width={636}
            height={700}
            className='rounded-[56px] w-full h-[776px] object-center'
            priority
          />

          <div className='bottom-6 left-1/2 absolute flex items-center gap-3 bg-white shadow-lg px-4 py-3 rounded-[24px] w-[92%] -translate-x-1/2'>
            <button className='bg-[#5264FF] px-6 py-3 rounded-full text-white text-sm'>
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

            <span className='bg-gray-200 w-px h-6' />

            <div className='flex items-center gap-2 text-gray-500 text-sm'>
              <HiOutlineUsers size={18} />
              تعداد
            </div>
          </div>
        </figure>

        <section className='flex flex-col items-end gap-6 col-span-12 xl:col-span-6'>
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
              <Image
                src='/img/airplan.png'
                width={59}
                height={59}
                className='h-[59px]'
              />
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
