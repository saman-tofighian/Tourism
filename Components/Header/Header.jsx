import { BsBasket3 } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';

export default function Header() {
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
      </nav>
    </header>
  );
}
