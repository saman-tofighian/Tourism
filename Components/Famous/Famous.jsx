import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };
  return (
    <section className='mt-28 px-[6%] py-8 w-full overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='flex flex-wrap justify-between items-center'
      >
        <Link
          href='/tours'
          className='bg-[#EAEAEA] hover:bg-gray-200 px-8 py-3 rounded-3xl text-sm transition-colors cursor-pointer'
        >
          دیدن همه
        </Link>

        <div className='text-end'>
          <h2 className='flex items-center gap-2 font-bold text-[#404040] text-[19px] md:text-3xl'>
            <Image src='/img/emoji.png' width={38} height={38} alt='' />
            محبوب ترین مکان ها
          </h2>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='block mt-2 ml-auto border-[#5264FF] border-b-2'
          ></motion.span>
        </div>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        className='gap-y-10 md:gap-x-6 xl:gap-x-12 xl:gap-y-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16'
      >
        {places.map((place) => (
          <motion.article
            key={place.id}
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className='relative bg-white shadow-sm hover:shadow-xl p-6 md:p-8 border border-[#40404040] rounded-[35px] transition-shadow'
          >
            {place.discount && (
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className='-top-5 right-0 z-30 absolute flex flex-col justify-center items-center bg-[#FF9F45] shadow-lg rounded-full w-[78px] h-[78px] text-white'
              >
                <span className='font-bold text-[16px] leading-none'>20%</span>
                <span className='text-[16px] leading-none'>تخفیف</span>
              </motion.div>
            )}
            <figure className='relative rounded-[25px] w-full overflow-hidden'>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={place.image}
                  width={380}
                  height={260}
                  alt={place.title}
                  className='w-full h-[240px] object-cover'
                />
              </motion.div>
            </figure>

            <div className='flex justify-between items-center mt-4'>
              <div className='flex items-center gap-1 text-[#404040] text-sm'>
                <span className='font-semibold text-[25px]'>{place.rate}</span>
                <span className='text-[22px] text-yellow-400'>★</span>
              </div>
              <h3 className='font-medium text-[#404040] text-[24px] md:text-[28px]'>
                {place.title}
              </h3>
            </div>

            <p className='mt-2 text-[17px] text-gray-400 text-start' dir='rtl'>
              {place.days}
            </p>

            <div className='flex justify-between items-center mt-4'>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className='flex justify-center items-center bg-[#5264FF] shadow-md rounded-full w-[45px] h-[45px] text-white text-2xl cursor-pointer'
              >
                +
              </motion.button>
              <div className='text-end'>
                <span className='flex items-center gap-x-2 font-bold text-[#404040] text-lg'>
                  <span className='block mt-2 text-[10px] text-gray-400 md:text-xs'>
                    هرفرد
                  </span>
                  <span className='block text-[#404040] text-xs'>تومان</span>
                  {place.price}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='flex justify-center mt-10 w-full'
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className='flex justify-center items-center bg-[#D3D3D3] rounded-full w-[56px] h-[56px] cursor-pointer'
        >
          <IoIosArrowDown color='white' size='1.6rem' />
        </motion.span>
      </motion.div>
    </section>
  );
}
