import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsBasket3 } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';

export default function Header() {
  const [items] = useState([
    {
      id: 1,
      name: 'هتل',
      href: '/',
    },
    {
      id: 2,
      name: 'تور داخلی',
      href: '/',
    },
    {
      id: 3,
      name: 'تور خارجی',
      href: '/',
    },
    {
      id: 4,
      name: 'بیمه مسافرتی',
      href: '/',
    },
    {
      id: 5,
      name: 'سفرنامه',
      href: '/',
    },
  ]);
  return (
    <header className='px-[6%] py-4 border-[#40404040] border-b w-full h-[86px]'>
      <nav className='grid grid-cols-12 w-full h-full'>
        <section className='flex items-center gap-x-4 col-span-2 h-full'>
          <button className='flex justify-center items-center gap-x-2.5 px-8 py-3.5 border border-[#40404040] rounded-[40px] cursor-pointer'>
            حساب کاربری
            <IoPersonOutline />
          </button>
          <span className='flex justify-center items-center bg-[#5264FF] border border-[#4E30FF] rounded-[32px] w-[45px] h-[45px] text-white cursor-pointer'>
            <BsBasket3 size='1.4rem' />
          </span>
        </section>

        <section className='col-span-8 h-full'>
          <ul className='flex justify-end items-center gap-x-12 w-full h-full'>
            <span className='flex justify-center items-center mr-4 h-full'>
              <CiSearch size='1.6rem' className='cursor-pointer' />
            </span>
            {items.map((item) => (
              <li key={item.id} className='w-fit h-fit'>
                <Link href={item.href} className='text-[20px]'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <figure className='flex justify-end items-center gap-x-1 col-span-2 h-full'>
          <span className='font-extrabold text-[#404040] text-2xl'>سفر کن</span>
          <Image
            src='/img/logo.png'
            width={32}
            height={32}
            className='mt-2 h-[32px]'
          />
        </figure>
      </nav>
    </header>
  );
}
