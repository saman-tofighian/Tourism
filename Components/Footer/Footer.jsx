'use client'; // حتماً این بالا باشد

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTelegram } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';

export default function Footer() {
  const currentYear = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
    year: 'numeric',
  }).format(new Date());

  // تنظیمات انیمیشن برای پدیدار شدن نرم
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section className='bg-[#1a1a1a] mt-28 px-[6%] py-12 border-white/5 border-t w-full overflow-hidden'>
      {/* ردیف اول: لوگو و ناوبری */}
      <motion.div
        {...fadeInUp}
        className='flex lg:flex-row flex-col justify-between items-center gap-y-8 w-full'
      >
        <figure className='group flex items-center gap-3 cursor-pointer'>
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className='relative rounded-xl'
          >
            <Image src='/img/logo.png' alt='logo' width={38} height={38} />
          </motion.div>
          <span className='font-black text-white text-2xl tracking-tight'>
            سفر کن
          </span>
        </figure>

        <nav>
          <ul className='flex items-center gap-x-6 md:gap-x-8'>
            {['صفحه اصلی', 'درباره ما', 'تماس با ما'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className='group relative'
              >
                <span className='font-medium text-[15px] text-gray-400 group-hover:text-[#5264FF] transition-colors duration-300 cursor-pointer'>
                  {item}
                </span>
                <span className='right-0 bottom-[-4px] absolute bg-[#5264FF] w-0 group-hover:w-full h-[2px] transition-all duration-300' />
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>

      {/* خط جداکننده متحرک */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className='bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50 my-10 w-full h-[1px] origin-center'
      />

      {/* ردیف دوم: سوشیال و کپی‌رایت */}
      <div className='flex lg:flex-row flex-col justify-between items-center gap-y-8 w-full'>
        <div className='flex gap-x-5'>
          {[
            {
              icon: <FaLinkedin />,
              href: 'https://www.linkedin.com/in/saman-tofighian/',
            },
            {
              icon: <IoLogoGithub />,
              href: 'https://github.com/saman-tofighian',
            },
            { icon: <FaTelegram />, href: 'https://t.me/yourid' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target='_blank'
              whileHover={{ y: -5, color: '#5264FF' }}
              whileTap={{ scale: 0.9 }}
              className='text-[22px] text-gray-500 transition-colors duration-200 cursor-pointer'
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='flex items-center font-medium text-gray-400 md:text-[15px] text-sm'
          dir='rtl'
        >
          <span className='tabular-nums'> {currentYear}© </span>
          طراحی و توسعه توسط
          <Link
            href='https://linkedin.com/in/saman-tofighian'
            className='mx-1.5 font-bold text-white hover:text-[#5264FF] transition-colors'
          >
            سامان توفیقیان
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
