import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsFilterRight } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
const toPersianDigits = (num) => {
  if (num === null || num === undefined) return '';
  const number =
    typeof num === 'string' ? parseFloat(num.replace(/,/g, '')) : num;
  return new Intl.NumberFormat('fa-IR').format(number);
};
const allPlaces = [
  {
    id: 1,
    title: 'تور مالزی',
    image: '/img/1.png',
    days: 3,
    nights: 4,
    price: 85000000,
    rate: 4.1,
    discount: false,
    category: 'آسیا',
  },
  {
    id: 2,
    title: 'تور دبی',
    image: '/img/2.png',
    days: 3,
    nights: 4,
    price: 65000000,
    rate: 4.9,
    discount: false,
    category: 'آسیا',
  },
  {
    id: 3,
    title: 'تور آنتالیا',
    image: '/img/3.png',
    days: 3,
    nights: 4,
    price: 45000000,
    rate: 4.1,
    discount: false,
    category: 'آسیا',
  },
  {
    id: 4,
    title: 'تور رم',
    image: '/img/1.png',
    days: 5,
    nights: 6,
    price: 125000000,
    rate: 4.8,
    discount: true,
    category: 'اروپا',
  },
  {
    id: 5,
    title: 'تور پاریس',
    image: '/img/2.png',
    days: 4,
    nights: 5,
    price: 140000000,
    rate: 4.7,
    discount: false,
    category: 'اروپا',
  },
  {
    id: 6,
    title: 'تور شیراز',
    image: '/img/3.png',
    days: 3,
    nights: 2,
    price: 12000000,
    rate: 4.5,
    discount: false,
    category: 'ایران',
  },
];

const categories = [
  { id: 'all', name: 'همه تورها' },
  { id: 'آسیا', name: 'تور آسیا' },
  { id: 'اروپا', name: 'تور اروپا' },
  { id: 'ایران', name: 'تور ایران' },
];

export default function Sell() {
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredPlaces = allPlaces.filter((place) =>
    filter === 'all' ? true : place.category === filter
  );

  const displayPlaces = filteredPlaces.slice(0, visibleCount);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className='mt-28 px-[6%] py-8 w-full overflow-hidden' dir='rtl'>
      <div className='flex xl:flex-row flex-col xl:justify-between xl:items-center gap-x-4 gap-y-8'>
        <div className='flex xl:flex-row-reverse flex-col items-center gap-8 w-full xl:w-auto'>
          <ul className='flex gap-4 md:gap-8 mt-3 pb-2 overflow-x-auto font-medium text-[#404040] text-sm'>
            {categories.map((cat) => (
              <li key={cat.id}>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setFilter(cat.id);
                    setVisibleCount(3);
                  }}
                  className={`cursor-pointer whitespace-nowrap transition-all duration-300 pb-1 ${
                    filter === cat.id
                      ? 'text-[#5264FF] border-b-2 border-[#5264FF] font-bold'
                      : 'hover:text-gray-500'
                  }`}
                >
                  {cat.name}
                </motion.button>
              </li>
            ))}
          </ul>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className='flex items-center gap-2 font-bold text-[#404040] text-2xl md:text-3xl'
          >
            پرفروش‌ترین تورها
            <Image src='/img/bomb.png' width={32} height={32} alt='bomb' />
          </motion.h2>
        </div>

        <div className='flex justify-center items-center gap-x-5'>
          <motion.div
            whileHover={{ rotate: 90 }}
            className='text-gray-600 cursor-pointer'
          >
            <BsFilterRight size='1.8rem' />
          </motion.div>
          <Link
            href='/tours'
            className='bg-[#EAEAEA] px-8 py-3 rounded-3xl text-sm cursor-pointer'
          >
            دیدن همه
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        className='hidden xl:block mt-2 border-[#5264FF] border-b-2'
      />

      <motion.div
        layout
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='gap-y-12 md:gap-x-6 xl:gap-x-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16'
      >
        <AnimatePresence mode='popLayout'>
          {displayPlaces.map((place) => (
            <motion.article
              key={place.id}
              layout
              variants={cardVariants}
              initial='hidden'
              animate='visible'
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ y: -10 }}
              className='group relative bg-white hover:shadow p-7 border border-gray-100 rounded-[40px] transition-all duration-300'
            >
              {place.discount && (
                <div className='-top-6 -right-2 z-40 absolute'>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: 'easeInOut',
                    }}
                    className='relative flex flex-col justify-center items-center bg-gradient-to-br from-[#FF9F45] to-[#FF4E50] shadow-lg rounded-full w-[85px] h-[85px] text-white'
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 8,
                        ease: 'linear',
                      }}
                      className='absolute inset-0 border-2 border-white/30 border-dashed rounded-full scale-90'
                    />
                    <span className='z-10 font-black text-xl'>
                      {toPersianDigits(20)}٪
                    </span>
                    <span className='z-10 font-medium text-[10px]'>
                      تخفیف ویژه
                    </span>
                  </motion.div>
                </div>
              )}

              <figure className='relative rounded-[30px] w-full h-[240px] overflow-hidden'>
                <Image
                  src={place.image}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-500'
                  alt={place.title}
                />
              </figure>

              <div className='flex justify-between items-center mt-6'>
                <h3 className='font-bold text-[#404040] text-2xl'>
                  {place.title}
                </h3>
                <div className='flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg'>
                  <span className='font-bold text-[#404040] text-xl'>
                    {toPersianDigits(place.rate)}
                  </span>
                  <span className='text-yellow-500 text-xl'>★</span>
                </div>
              </div>

              <p className='mt-2 font-medium text-gray-400 text-sm'>
                {toPersianDigits(place.days)} روز و{' '}
                {toPersianDigits(place.nights)} شب
              </p>

              <div className='flex justify-between items-center mt-6'>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className='flex justify-center items-center bg-[#5264FF] shadow-blue-100 shadow-lg rounded-full w-[50px] h-[50px] text-white text-2xl cursor-pointer'
                >
                  +
                </motion.button>
                <div className='text-left'>
                  <span className='font-black text-[#404040] text-2xl'>
                    {toPersianDigits(place.price)}
                  </span>
                  <span className='mr-1 font-bold text-[#404040] text-xs'>
                    تومان
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {visibleCount < filteredPlaces.length && (
        <div className='flex flex-col items-center gap-2 mt-14'>
          <span className='text-gray-400 text-xs'>مشاهده تورهای بیشتر</span>
          <motion.button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className='flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-full w-[60px] h-[60px] cursor-pointer'
          >
            <IoIosArrowDown className='text-gray-500' size='1.8rem' />
          </motion.button>
        </div>
      )}
    </section>
  );
}
