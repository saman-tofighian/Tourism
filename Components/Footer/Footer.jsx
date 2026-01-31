import Image from 'next/image';
import Link from 'next/link';
import { FaTelegram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { IoLogoGithub } from 'react-icons/io';

export default function Footer() {
  return (
    <section className='bg-[#232323] mt-28 px-[6%] py-9 w-full'>
      <div className='flex lg:flex-row flex-col justify-between items-center gap-y-8 mt-10 w-full'>
        <figure className='flex items-center gap-2'>
          <span className='font-extrabold text-white text-2xl'>سفر کن</span>
          <Image src='/img/logo.png' alt='logo' width={32} height={32} />
        </figure>
        <ul className='flex gap-x-4'>
          <li className='text-[16px] text-white cursor-pointer'>تماس با ما</li>
          <span className='text-white'>|</span>
          <li className='text-[16px] text-white cursor-pointer'>درباره ما</li>
          <span className='text-white'>|</span>
          <li className='text-[16px] text-white cursor-pointer'>صفحه اصلی</li>
        </ul>
      </div>
      <div className='flex justify-center bg-white mt-10 w-full h-[1px]'></div>

      <div className='flex lg:flex-row flex-col justify-between items-center gap-y-8 mt-10 w-full'>
        <ul className='flex gap-x-7'>
          <Link
            href='https://www.linkedin.com/in/saman-tofighian/'
            target='_blank'
            className='text-[19px] text-white'
          >
            <FaLinkedin />
          </Link>
          <Link href='/' target='_blank' className='text-[19px] text-white'>
            <IoLogoGithub />
          </Link>

          <Link
            href='https://www.linkedin.com/in/saman-tofighian/'
            target='_blank'
            className='text-[19px] text-white'
          >
            <FaTelegram />
          </Link>
        </ul>
        <span className='flex items-center text-white md:text-[16px] text-sm'>
          <strong className='mx-1 !text-[#5264FF]'>سامان توفیقیان</strong> طراحی
          و توسعه توسط
          <span> © 2025</span>
        </span>
      </div>
    </section>
  );
}
