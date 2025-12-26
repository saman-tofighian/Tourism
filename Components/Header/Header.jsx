import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsBasket3, BsListNested } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { IoClose, IoPersonOutline } from 'react-icons/io5';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const items = [
    { id: 1, name: 'هتل', href: '/' },
    { id: 2, name: 'تور داخلی', href: '/' },
    { id: 3, name: 'تور خارجی', href: '/' },
    { id: 4, name: 'بیمه مسافرتی', href: '/' },
    { id: 5, name: 'سفرنامه', href: '/' },
  ];

  return (
    <>
      <header className='bg-white border-[#E5E7EB] border-b w-full'>
        <nav className='flex justify-between items-center mx-auto px-[6%] max-w-[1440px] h-[86px] xl:h-[100px]'>
          <section className='hidden xl:flex items-center gap-4'>
            <button className='flex items-center gap-2 hover:bg-gray-50 px-8 py-3.5 border border-[#E5E7EB] rounded-full text-[#404040] text-sm transition cursor-pointer'>
              حساب کاربری
              <IoPersonOutline size={18} />
            </button>

            <button className='flex justify-center items-center bg-[#5264FF] hover:bg-[#3E4BFF] rounded-full w-[45px] h-[45px] text-white transition cursor-pointer'>
              <BsBasket3 size={20} />
            </button>
          </section>

          <ul className='hidden xl:flex items-center gap-12'>
            <button onClick={() => setSearchOpen(true)}>
              <CiSearch size={22} className='cursor-pointer' />
            </button>

            {items.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className='text-[#404040] text-[18px] hover:text-[#5264FF] transition'
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className='xl:hidden cursor-pointer'
            onClick={() => setMenuOpen(true)}
          >
            <BsListNested size={28} />
          </button>

          <figure className='flex items-center gap-2'>
            <span className='font-extrabold text-[#404040] text-2xl'>
              سفر کن
            </span>
            <Image src='/img/logo.png' alt='logo' width={32} height={32} />
          </figure>
        </nav>
      </header>

      <AnimatePresence>
        {searchOpen && (
          <motion.section
            className='z-50 fixed inset-0 flex justify-center items-start bg-black/40 pt-32'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
          >
            <motion.section
              className='bg-white p-6 rounded-2xl w-[90%] max-w-[500px]'
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type='text'
                placeholder='... جستجو کنید '
                className='px-4 py-3 border border-[#E5E7EB] rounded-xl outline-none w-full text-end'
              />
            </motion.section>
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.section
              className='z-40 fixed inset-0 bg-black/40'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.aside
              className='top-0 right-0 z-50 fixed flex flex-col gap-6 bg-white p-6 w-[75%] h-full'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            >
              <section className='flex justify-between items-center'>
                <IoClose
                  size='2rem'
                  className='cursor-pointer'
                  onClick={() => setMenuOpen(false)}
                  color='red'
                />
              </section>

              <input
                type='text'
                placeholder='... جستجو کنید '
                className='px-4 py-3 border border-[#E5E7EB] rounded-xl text-end'
              />

              <ul className='flex flex-col items-center gap-x-5 gap-y-9'>
                {items.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className='text-[#404040] text-[18px] hover:text-[#5264FF] transition'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className='flex flex-col gap-3 mt-auto'>
                <button className='flex justify-center items-center gap-2 bg-[#5264FF] hover:bg-[#3E4BFF] py-3 border border-[#E5E7EB] rounded-full text-white duration-500 ease-in-out cursor-pointer'>
                  سبد خرید
                  <BsBasket3 size={18} />
                </button>

                <button className='flex justify-center items-center gap-2 hover:bg-gray-50 py-3 border border-[#E5E7EB] rounded-full text-[#404040] transition cursor-pointer'>
                  حساب کاربری
                  <IoPersonOutline size={18} />
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
