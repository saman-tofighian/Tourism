import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { BiDislike, BiLike } from 'react-icons/bi';

const toPersianDigits = (num) => {
  if (num === null || num === undefined) return '';
  return num.toString().replace(/\d/g, (x) => '۰۱۲۳۴۵۶۷۸۹'[x]);
};

const commentsData = [
  {
    id: 1,
    name: 'سارا محمدی',
    username: '@uharvey',
    avatar: '/img/c1.png',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
    date: '1404.1.12',
  },
  {
    id: 2,
    name: 'تینا حسینی',
    username: '@uharvey',
    avatar: '/img/c2.png',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
    date: '1404.11.12',
  },
  {
    id: 3,
    name: 'مهسا رضایی',
    username: '@uharvey',
    avatar: '/img/c1.png',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
    date: '1404.5.16',
  },
  {
    id: 4,
    name: 'ملینا احمدی',
    username: '@uharvey',
    avatar: '/img/c2.png',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
    date: '1404.4.17',
  },
];

export default function Comments() {
  const [showAll, setShowAll] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className='mt-36 px-[6%] w-full' dir='rtl'>
      <div className='flex justify-start mb-10'>
        <div className='inline-flex flex-col items-start gap-1'>
          <h2 className='flex items-center gap-2 font-bold text-[#404040] text-[32px]'>
            💬 نظرات
          </h2>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            className='block border-[#5264FF] border-b-2'
          />
        </div>
      </div>

      <motion.section
        layout
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='gap-y-8 md:gap-x-8 grid grid-cols-12 mt-6 w-full'
      >
        <AnimatePresence mode='popLayout'>
          {commentsData
            .slice(0, showAll ? commentsData.length : 3)
            .map((item, index) => (
              <motion.div
                key={item.id}
                layout
                variants={itemVariants}
                initial='hidden'
                animate='visible'
                exit={{ opacity: 0, scale: 0.9 }}
                className={`
                  col-span-12
                  md:col-span-6
                  lg:col-span-12
                  ${!showAll && index === 2 ? 'hidden lg:block' : ''}
                `}
              >
                <div className='flex flex-col items-start bg-white hover:shadow-md p-6 border border-[#40404040] rounded-[40px] h-full transition-shadow'>
                  <figure className='flex justify-start items-center gap-x-3 w-full'>
                    <Image
                      src={item.avatar}
                      width={45}
                      height={45}
                      className='rounded-full'
                      alt={item.name}
                    />
                    <figcaption className='flex flex-col text-start'>
                      <span className='font-bold text-[#5264FF] text-[15px]'>
                        {item.name}
                      </span>
                      <span className='text-[#3C3C4380] text-[13px]'>
                        {item.username}
                      </span>
                    </figcaption>
                  </figure>

                  <div className='mt-4 w-full text-start'>
                    <p className='text-[15px] text-gray-700 text-justify leading-8'>
                      {item.text}
                    </p>
                  </div>

                  <div className='flex justify-between items-center mt-6 w-full text-[#3C3C4380] text-[14px]'>
                    <span className='font-medium'>
                      {toPersianDigits(item.date)}
                    </span>
                    <div className='flex items-center gap-4'>
                      <motion.button
                        whileTap={{ scale: 0.8 }}
                        className='text-[#3C3C4380] hover:text-blue-500 transition cursor-pointer'
                      >
                        <BiLike size={22} />
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.8 }}
                        className='text-[#3C3C4380] hover:text-red-500 transition cursor-pointer'
                      >
                        <BiDislike size={22} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>

        {!showAll && (
          <motion.div
            className='col-span-12 mt-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowAll(true)}
              className='bg-[#5264FF] hover:bg-[#3e4eff] shadow-blue-100 shadow-lg py-4 rounded-[40px] w-full font-bold text-[19px] text-white transition-colors cursor-pointer'
            >
              مشاهده همه نظرات
            </motion.button>
          </motion.div>
        )}
      </motion.section>
    </section>
  );
}
