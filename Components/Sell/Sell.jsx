import Image from 'next/image';
import { BsFilterRight } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

const places = [
  {
    id: 1,
    title: 'تور مالزی',
    image: '/img/1.png',
    days: '3 روز و 4 شب',
    price: '۸۵,۰۰۰,۰۰۰',
    rate: 4.1,
    discount: false,
  },
  {
    id: 2,
    title: 'تور دبی',
    image: '/img/2.png',
    days: '۳ روز و ۴ شب',
    price: '۶۵,۰۰۰,۰۰۰',
    rate: 4.9,
    discount: false,
  },
  {
    id: 3,
    title: 'تور آنتالیا',
    image: '/img/3.png',
    days: '۳ روز و ۴ شب',
    price: '۴۵,۰۰۰,۰۰۰',
    rate: 4.1,
    discount: false,
  },
  {
    id: 5,
    title: 'تور مالزی',
    image: '/img/1.png',
    days: '3 روز و 4 شب',
    price: '۸۵,۰۰۰,۰۰۰',
    rate: 4.1,
    discount: false,
  },
  {
    id: 6,
    title: 'تور دبی',
    image: '/img/2.png',
    days: '۳ روز و ۴ شب',
    price: '۶۵,۰۰۰,۰۰۰',
    rate: 4.9,
    discount: false,
  },
  {
    id: 7,
    title: 'تور آنتالیا',
    image: '/img/3.png',
    days: '۳ روز و ۴ شب',
    price: '۴۵,۰۰۰,۰۰۰',
    rate: 4.1,
    discount: true,
  },
];

export default function Sell() {
  return (
    <section className='mt-28 px-[6%] py-8 w-full overflow-hidden'>
      <div className='flex xl:flex-row flex-col xl:justify-between xl:items-center gap-x-4 gap-y-8'>
        <ul className='xl:hidden flex justify-center gap-6 xl:order-1 xl:mr-7 text-[#404040] text-sm whitespace-nowrap'>
          <button className='cursor-pointer'>تور آسیا</button>
          <button className='cursor-pointer'>تور اروپا</button>
          <button className='cursor-pointer'>تور ایران</button>
          <button className='border-b font-bold cursor-pointer'>
            همه تورها
          </button>
        </ul>
        <h2 className='xl:hidden font-bold text-[#404040] text-lg md:text-3xl text-center'>
          <div className='inline-flex flex-col items-end gap-1'>
            <span className='flex items-center gap-2'>
              <Image src='/img/bomb.png' width={32} height={32} alt='bomb' />
              پرفروش‌ترین تورها
            </span>

            <span className='block border-[#5264FF] border-b-2 w-10' />
          </div>
        </h2>

        <div className='flex justify-center xl:justify-between items-center gap-x-5'>
          <button className='bg-[#EAEAEA] px-8 py-3 rounded-3xl text-sm cursor-pointer'>
            دیدن همه
          </button>
          <BsFilterRight size='1.8rem' className='cursor-pointer' />
        </div>
        <div className='hidden xl:flex'>
          <ul className='flex gap-6 xl:order-1 xl:mr-7 text-[#404040] text-sm whitespace-nowrap'>
            <button className='cursor-pointer'>تور آسیا</button>
            <button className='cursor-pointer'>تور اروپا</button>
            <button className='cursor-pointer'>تور ایران</button>
            <button className='border-b font-bold cursor-pointer'>
              همه تورها
            </button>
          </ul>
          <h2 className='flex justify-end items-center gap-2 xl:order-2 font-bold text-[#404040] text-lg md:text-3xl'>
            <Image src='/img/bomb.png' width={32} height={32} alt='bomb' />
            پرفروش‌ترین تورها
          </h2>
        </div>
      </div>

      <span className='hidden xl:block mt-2 ml-auto border-[#5264FF] border-b-2 w-12' />

      <div className='gap-y-10 md:gap-x-6 xl:gap-x-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16'>
        {places.map((place) => (
          <article
            key={place.id}
            className='relative bg-white p-8 border border-[#40404040] rounded-[35px]'
          >
            {place.discount && (
              <div className='-top-5 right-0 z-30 absolute flex flex-col justify-center items-center bg-[#FF9F45] shadow-lg rounded-full w-[78.6px] h-[78.6px] text-white discount-badge'>
                <span className='font-bold text-[16px] leading-none'>20%</span>
                <span className='text-[16px] leading-none'>تخفیف</span>
              </div>
            )}

            <figure className='relative w-full'>
              <Image
                src={place.image}
                width={380}
                height={260}
                alt={place.title}
                className='rounded-[25px] w-full h-[240px] object-cover'
              />
            </figure>

            <div className='flex justify-between items-center mt-4'>
              <div className='flex items-center gap-1 text-[#404040] text-sm'>
                <span className='font-semibold text-[25px]'>{place.rate}</span>
                <span className='text-[22px] text-yellow-400'>★</span>
              </div>
              <h3 className='font-medium text-[#404040] text-[28px]'>
                {place.title}
              </h3>
            </div>

            <p className='mt-2 text-[17px] text-gray-400 text-start' dir='rtl'>
              <span>۳</span> روز و <span>۴</span> شب
            </p>

            <div className='flex justify-between items-center mt-4'>
              <button className='flex justify-center items-center bg-[#5264FF] rounded-full w-[45px] h-[45px] text-white text-2xl cursor-pointer'>
                +
              </button>

              <div className='text-end'>
                <span className='flex items-center gap-x-2 font-bold text-[#404040] text-lg'>
                  <span className='block mt-2 text-gray-400 text-xs'>
                    هرفرد
                  </span>
                  <span className='block text-[#404040] text-xs'>تومان</span>
                  {place.price}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className='flex justify-center mt-10 w-full'>
        <span className='flex justify-center items-center bg-[#D3D3D3] rounded-full w-[56px] h-[56px]'>
          <IoIosArrowDown color='white' size='1.6rem' />
        </span>
      </div>
    </section>
  );
}
