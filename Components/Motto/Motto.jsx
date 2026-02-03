import Image from 'next/image';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendar3 } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineUsers } from 'react-icons/hi';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const destinations = [
  { season: 'تابستان', country: 'پاتایا', image: '/img/pattaya.jpg' },
  { season: 'بهار', country: 'استانبول', image: '/img/istanbul.jpg' },
  { season: 'زمستان', country: 'دبی', image: '/img/dubai.jpg' },
  { season: 'پاییز', country: 'پاریس', image: '/img/paris.jpg' },
];

export default function Motto() {
  const [index, setIndex] = useState(0);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [people, setPeople] = useState(1);
  const [destination, setDestination] = useState('');

  const next = () => setIndex((prev) => (prev + 1) % destinations.length);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));

  const handleSearch = () => {
    if (!startDate || !endDate || !destination) {
      alert('لطفاً تمام فیلدها را پر کنید.');
      return;
    }
    if (endDate < startDate) {
      alert('تاریخ خروج باید پس از تاریخ ورود باشد.');
      return;
    }
  };

  return (
    <section className='mt-6 px-[6%] pb-8 w-full'>
      <div className='items-center gap-10 grid grid-cols-12'>
        <figure className='relative col-span-12 xl:col-span-6 rounded-[56px] overflow-hidden'>
          <Image
            src='/img/motto.png'
            alt='destination'
            width={636}
            height={700}
            className='w-full h-auto object-cover aspect-[636/700] md:aspect-[636/776]'
            priority
          />

          <div className='top-6 left-6 absolute bg-white/30 backdrop-blur-lg px-5 py-4 rounded-3xl w-[190px] text-center transition-all'>
            <span className='block text-white text-xs'>
              {destinations[index].season}
            </span>

            <h3 className='mt-1 font-bold text-white text-3xl transition-all'>
              {destinations[index].country}
            </h3>

            <div className='flex justify-between items-center mt-4 text-white'>
              <button
                onClick={prev}
                className='hover:scale-110 transition cursor-pointer'
              >
                <IoChevronBack size={18} />
              </button>

              <button
                onClick={next}
                className='hover:scale-110 transition cursor-pointer'
              >
                <IoChevronForward size={18} />
              </button>
            </div>
          </div>

          <div className='bottom-5 xl:bottom-8 left-1/2 z-10 absolute flex xl:flex-row flex-col-reverse justify-between items-center gap-4 bg-white shadow-xl px-6 py-5 rounded-[32px] w-[95%] -translate-x-1/2'>
            <button
              onClick={handleSearch}
              className='bg-[#5264FF] hover:bg-[#3f51b5] px-8 py-3 rounded-full text-white text-sm transition-colors cursor-pointer shrink-0'
            >
              جستجو
            </button>

            <div className='flex items-center gap-2 text-gray-500 text-sm'>
              <HiOutlineUsers size={18} />
              <select
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
                className='bg-transparent border-none focus:outline-none cursor-pointer'
              >
                {[...Array(10).keys()].map((n) => (
                  <option key={n + 1} value={n + 1}>
                    {n + 1} نفر
                  </option>
                ))}
              </select>
            </div>

            <span className='hidden xl:block bg-gray-200 w-px h-6' />

            <div className='flex items-center gap-2 w-full xl:w-auto text-gray-500 text-sm'>
              <BsCalendar3 size={16} />
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                minDate={new Date()}
                dateFormat='yyyy/MM/dd'
                placeholderText='تاریخ ورود - خروج'
                className='bg-transparent border-none focus:outline-none w-full cursor-pointer'
                wrapperClassName='w-full'
              />
            </div>

            <span className='hidden xl:block bg-gray-200 w-px h-6' />

            <div className='flex items-center gap-2 w-full xl:w-auto text-gray-500 text-sm'>
              <CiLocationOn size={18} />
              <input
                type='text'
                placeholder='مقصد خود را انتخاب کنید'
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className='bg-transparent border-none focus:outline-none w-full text-right'
              />
            </div>
          </div>
        </figure>

        <section className='flex flex-col items-center xl:items-end gap-6 col-span-12 xl:col-span-6'>
          <span className='flex items-center gap-x-4 bg-[#FFE9D9] px-[19px] py-[17px] rounded-[48px] w-fit font-bold text-[#FF7A00] text-[15px]'>
            بسیار سفر باید تا پخته شود خامی
            <Image
              src='/img/beachSunrise.png'
              width={18}
              height={18}
              alt='beach sunrise'
            />
          </span>
          <h1 className='flex flex-col font-bold text-[#404040] lg:text-[76px] text-3xl md:text-5xl text-center xl:text-end'>
            <strong> دنیا را کشف کنید </strong>
            <strong>
              زندگی را <span className='text-[#5264FF]'>تجربه</span>
            </strong>
            <figure className='flex justify-center xl:justify-end items-center gap-x-5 w-full'>
              <Image
                src='/img/airplan.png'
                width={59}
                height={59}
                alt='airplane'
              />
              <figcaption>
                <strong>کنید</strong>
              </figcaption>
            </figure>
          </h1>
          <div className='flex flex-wrap justify-center xl:justify-end gap-6 mt-4 w-full'>
            {[
              { name: 'جنگل', icon: '/img/joungle.png' },
              { name: 'شهر', icon: '/img/city.png' },
              { name: 'ساحل', icon: '/img/beach.png' },
              { name: 'کمپ', icon: '/img/camping.png' },
            ].map((item) => (
              <section key={item.name} className='min-w-[86px] text-center'>
                <div className='flex flex-col items-center gap-2 hover:shadow-md px-4 py-3 border border-[#40404040] rounded-3xl w-[86px] h-[80px] transition-shadow'>
                  <figure className='flex justify-center items-center w-full h-full'>
                    <Image
                      src={item.icon}
                      width={37}
                      height={37}
                      alt={item.name}
                      className='h-[37px]'
                    />
                  </figure>
                </div>
                <span className='block mt-2 text-[#404040] text-sm text-center'>
                  {item.name}
                </span>
              </section>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
