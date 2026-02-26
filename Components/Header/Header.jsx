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
    { id: 1, name: 'هتل', href: '/hotel' },
    { id: 2, name: 'تور داخلی', href: '/iran' },
    { id: 3, name: 'تور خارجی', href: '/tours' },
    { id: 4, name: 'بیمه مسافرتی', href: '/insurance' },
    { id: 5, name: 'سفرنامه', href: '/travellog' },
    { id: 6, name: 'خانه', href: '/' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <>
      <header className='z-[100] bg-white border-[#E5E7EB] border-b w-full'>
        <nav className='flex justify-between items-center mx-auto px-[6%] max-w-[1440px] h-[86px] xl:h-[100px]'>
          <section className='hidden xl:flex items-center gap-4'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center gap-2 hover:bg-gray-50 px-8 py-3.5 border border-[#E5E7EB] rounded-full text-[#404040] text-sm transition cursor-pointer'
            >
              حساب کاربری
              <IoPersonOutline size={18} />
            </motion.button>

            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className='flex justify-center items-center bg-[#5264FF] hover:bg-[#3E4BFF] shadow shadow-blue-100 rounded-full w-[45px] h-[45px] text-white transition cursor-pointer'
            >
              <BsBasket3 size={20} />
            </motion.button>
          </section>

          <ul className='hidden xl:flex items-center gap-12'>
            <motion.button
              whileHover={{ rotate: 15 }}
              onClick={() => setSearchOpen(true)}
            >
              <CiSearch size={24} className='text-gray-700 cursor-pointer' />
            </motion.button>

            {items.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className='group relative font-medium text-[#404040] text-[17px] hover:text-[#5264FF] transition'
                >
                  {item.name}
                  <span className='right-0 bottom-[-4px] absolute bg-[#5264FF] w-0 group-hover:w-full h-[2px] transition-all' />
                </Link>
              </li>
            ))}
          </ul>

          <motion.button
            whileTap={{ scale: 0.8 }}
            className='xl:hidden p-2 cursor-pointer'
            onClick={() => setMenuOpen(true)}
          >
            <BsListNested size={30} />
          </motion.button>

          <Link href='/'>
            <figure className='flex items-center gap-2 cursor-pointer'>
              <span className='font-extrabold text-[#404040] text-2xl tracking-tighter'>
                سفر کن
              </span>
              <Image src='/img/logo.png' alt='logo' width={32} height={32} />
            </figure>
          </Link>
        </nav>
      </header>

      <AnimatePresence>
        {searchOpen && (
          <motion.section
            className='z-[110] fixed inset-0 flex justify-center items-start bg-black/60 backdrop-blur-sm pt-32'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
          >
            <motion.section
              className='bg-white shadow-2xl p-6 rounded-[28px] w-[90%] max-w-[550px]'
              initial={{ y: -100, scale: 0.9, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: -100, scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className='flex items-center gap-3 bg-gray-50 px-4 py-1 border border-gray-100 rounded-2xl'>
                <CiSearch size={24} className='text-gray-400' />
                <input
                  type='text'
                  autoFocus
                  placeholder='مقصد، هتل یا تور...'
                  className='bg-transparent py-3 outline-none w-full font-medium text-right'
                />
              </div>
            </motion.section>
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className='z-[120] fixed inset-0 bg-black/50 backdrop-blur-sm'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.aside
              className='top-0 right-0 z-[130] fixed flex flex-col gap-8 bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.1)] p-8 w-[80%] max-w-[320px] h-full'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className='flex justify-between items-center'>
                <Image src='/img/logo.png' alt='logo' width={30} height={30} />
                <motion.button
                  whileTap={{ rotate: 90 }}
                  onClick={() => setMenuOpen(false)}
                >
                  <IoClose size={32} className='text-red-500 cursor-pointer' />
                </motion.button>
              </div>

              <motion.ul
                variants={containerVariants}
                initial='hidden'
                animate='show'
                className='flex flex-col gap-7 mt-4'
              >
                {items.map((item) => (
                  <motion.li key={item.id} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className='group flex justify-between items-center font-bold text-[#404040] hover:text-[#5264FF] text-xl'
                    >
                      <span className='bg-gray-200 group-hover:bg-[#5264FF] rounded-full w-2 h-2' />
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='flex flex-col gap-4 mt-auto'
              >
                <button className='flex justify-center items-center gap-3 bg-[#5264FF] shadow-blue-100 shadow-lg py-4 rounded-2xl font-bold text-white cursor-pointer'>
                  سبد خرید
                  <BsBasket3 size={20} />
                </button>

                <Link
                  href='/login'
                  className='flex justify-center items-center gap-3 py-4 border border-gray-200 rounded-2xl font-bold text-[#404040]'
                >
                  حساب کاربری
                  <IoPersonOutline size={20} />
                </Link>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
