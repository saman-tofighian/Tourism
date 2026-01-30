import Image from 'next/image';
import { useState } from 'react';
import { BiDislike, BiLike } from 'react-icons/bi';
const commentsData = [
  {
    id: 1,
    name: 'سارا محمدی',
    username: '@uharvey',
    avatar: '/img/c1.png',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
    date: '1403.1.12',
  },
  {
    id: 2,
    name: 'تینا حسینی',
    username: '@uharvey',
    avatar: '/img/c2.png',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
    date: '1403.1.12',
  },
  {
    id: 3,
    name: 'مهسا رضایی',
    username: '@uharvey',
    avatar: '/img/c1.png',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
    date: '1403.1.12',
  },
  {
    id: 4,
    name: 'ملینا احمدی',
    username: '@uharvey',
    avatar: '/img/c2.png',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
    date: '1403.1.12',
  },
];

export default function Comments() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className='mt-36 px-[6%] w-full'>
      <div className='flex justify-center lg:justify-end mb-10'>
        <div className='inline-flex flex-col items-end gap-1'>
          <h2 className='flex items-center gap-2 font-bold text-[#404040] text-[32px]'>
            💬 نظرات
          </h2>
          <span className='block border-[#5264FF] border-b-2 w-10' />
        </div>
      </div>
      <section className='gap-y-8 md:gap-x-8 lg:gap-x-0 grid grid-cols-12 mt-6 w-full'>
        {commentsData
          .slice(0, showAll ? commentsData.length : 3)
          .map((item, index) => (
            <div
              key={item.id}
              className={`
                col-span-12
                md:col-span-6
                lg:col-span-12
          
                ${!showAll && index === 2 ? 'hidden lg:block' : ''}
              `}
            >
              <div className='flex flex-col items-end p-5 border border-[#40404040] rounded-[40px] h-full'>
                <figure className='flex items-center gap-x-2.5 px-4'>
                  <figcaption className='flex flex-col text-end'>
                    <span className='font-bold text-[#5264FF] text-[14px]'>
                      {item.name}
                    </span>
                    <span className='text-[#3C3C4380] text-[14px]'>
                      {item.username}
                    </span>
                  </figcaption>
                  <Image
                    src={item.avatar}
                    width={30}
                    height={30}
                    alt={item.name}
                  />
                </figure>
                <div className='mt-4 px-4 w-full text-end'>
                  <p className='text-[15px] text-end leading-8'>{item.text}</p>
                </div>
                <div className='flex justify-between items-center mt-4 px-4 w-full text-[#3C3C4380] text-[14px]'>
                  <div className='flex items-center gap-4 text-[#404040]'>
                    <button className='text-[#3C3C4380] hover:text-[#5264FF] transition cursor-pointer'>
                      <BiLike size={20} />
                    </button>
                    <button className='text-[#3C3C4380] hover:text-[#5264FF] transition cursor-pointer'>
                      <BiDislike size={20} />
                    </button>
                  </div>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        {!showAll && (
          <div className='col-span-12 mt-4'>
            <button
              onClick={() => setShowAll(true)}
              className='bg-[#5264FF] py-3 rounded-[40px] w-full font-bold text-[19px] text-white cursor-pointer'
            >
              دیدن همه
            </button>
          </div>
        )}
      </section>
    </section>
  );
}
