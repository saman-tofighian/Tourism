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

        <div className='flex flex-col gap-6 col-span-12 xl:col-span-6'>
          <span className='bg-[#FFE9D9] px-4 py-2 rounded-full w-fit text-[#FF7A00] text-sm'>
            ✨ بسیار سفر کنید، دنیا بزرگ است
          </span>

          <h1 className='font-bold text-[#404040] text-[42px] leading-[1.4]'>
            دنیا را کشف کنید <br />
            زندگی را <span className='text-[#5264FF]'>تجربه</span> کنید ✈️
          </h1>

          <div className='flex gap-6 mt-4'>
            {[
              { name: 'جنگل', icon: '🌲' },
              { name: 'شهر', icon: '🏙️' },
              { name: 'ساحل', icon: '🏖️' },
              { name: 'کمپ', icon: '🏕️' },
            ].map((item) => (
              <div
                key={item.name}
                className='flex flex-col items-center gap-2 px-4 py-3 border border-[#E5E7EB] rounded-2xl w-[90px]'
              >
                <span className='text-2xl'>{item.icon}</span>
                <span className='text-[#404040] text-sm'>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
