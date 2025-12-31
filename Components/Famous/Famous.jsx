import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';

const places = [
  {
    id: 1,
    title: 'تور مالزی',
    image: '/img/1.png',
    days: '3 روز و 4 شب',
    price: '۸۵,۰۰۰,۰۰۰',
    rate: 4.1,
    discount: true,
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
];

export default function Famous() {
  return (
    <section className='mt-28 px-[6%] py-8 w-full overflow-hidden'>
      <div className='flex justify-between items-center'>
        <button className='bg-[#EAEAEA] px-8 py-3 rounded-3xl text-sm cursor-pointer'>
          دیدن همه
        </button>

        <div className='text-end'>
          <h2 className='flex items-center gap-2 font-bold text-[#404040] text-[19px] md:text-3xl'>
            <Image src='/img/emoji.png' width={38} height={38} alt='' />
            محبوب ترین مکان ها
          </h2>
          <span className='block mt-2 ml-auto border-[#5264FF] border-b-2 w-12'></span>
        </div>
      </div>

      <div className='gap-y-10 md:gap-x-6 xl:gap-x-12 xl:gap-y-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16'>
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
