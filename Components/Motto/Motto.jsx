import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { BsCalendar3 } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineUsers } from 'react-icons/hi';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import DatePicker from 'react-multi-date-picker';
import { Toaster, toast } from 'sonner';

const destinations = [
  { season: 'تابستان', country: 'پاتایا', image: '/img/pattaya.jpg' },
  { season: 'بهار', country: 'استانبول', image: '/img/istanbul.jpg' },
  { season: 'زمستان', country: 'دبی', image: '/img/dubai.jpg' },
  { season: 'پاییز', country: 'پاریس', image: '/img/paris.jpg' },
];
export default function Motto() {
  const [index, setIndex] = useState(0);
  const [dateRange, setDateRange] = useState(null);
  const [people, setPeople] = useState(1);
  const [destination, setDestination] = useState('');

  const next = () => setIndex((prev) => (prev + 1) % destinations.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));

  const handleSearch = () => {
    if (!destination.trim()) {
      toast.error('مقصد سفر مشخص نشده است!');
      return;
    }
    if (!dateRange || dateRange.length < 2) {
      toast.warning('بازه زمانی سفر ناقص است');
      return;
    }
    toast.success(`در حال جستجو برای ${destination}...`);
  };

  return (
    <section className='mt-6 px-[6%] pb-12 w-full overflow-hidden' dir='rtl'>
      <Toaster position='top-center' richColors closeButton dir='rtl' />

      <div className='items-center gap-y-6 lg:gap-x-8 lg:gap-y-0 grid grid-cols-12'>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-center xl:items-start gap-6 order-2 xl:order-1 col-span-12 xl:col-span-6 mt-14 xl:mt-0 text-center xl:text-right'
        >
          <span className='inline-flex items-center gap-3 bg-orange-50 px-5 py-2.5 rounded-full font-bold text-[#FF7A00] text-sm'>
            بسیار سفر باید تا پخته شود خامی
            <Image
              src='/img/beachSunrise.png'
              width={20}
              height={20}
              alt='sunrise'
            />
          </span>

          <h1 className='font-extrabold text-[#404040] lg:text-[72px] text-4xl md:text-6xl leading-[1.3] md:leading-[1.1]'>
            دنیا را کشف کنید <br />
            زندگی را <span className='text-[#5264FF]'>تجربه</span> کنید
          </h1>

          <p className='max-w-[480px] text-gray-500 text-base md:text-lg leading-relaxed'>
            لذت سفر به بکرترین نقاط جهان با برنامه‌ریزی دقیق و خاطرات ماندگار.
          </p>

          <div className='flex flex-wrap justify-center xl:justify-start gap-5 mt-2 w-full'>
            {['جنگل', 'شهر', 'ساحل', 'کمپ'].map((name, i) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={i}
                className='flex flex-col items-center gap-2'
              >
                <div className='flex justify-center items-center bg-white shadow-sm hover:shadow-md border border-gray-100 rounded-[24px] w-[74px] h-[74px] transition-all cursor-pointer'>
                  <Image
                    src={`/img/${['joungle', 'city', 'beach', 'camping'][i]}.png`}
                    width={34}
                    height={34}
                    alt={name}
                  />
                </div>
                <span className='font-medium text-xs md:text-sm'>{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className='relative order-1 xl:order-2 col-span-12 md:col-span-10 xl:col-span-6 md:col-start-2'>
          <motion.figure
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className='relative rounded-[48px] md:rounded-[56px] w-full overflow-hidden'
          >
            <Image
              src='/img/motto.png'
              alt='destination'
              width={636}
              height={776}
              className='w-full h-auto object-cover aspect-[4/5] md:aspect-[636/776]'
              priority
            />

            <div className='top-6 right-6 absolute bg-white/25 backdrop-blur-md p-4 border border-white/20 rounded-[28px] w-[150px] md:w-[180px] text-center'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                >
                  <span className='block opacity-90 text-[10px] text-white md:text-xs'>
                    {destinations[index].season}
                  </span>
                  <h3 className='mt-0.5 font-bold text-white text-xl md:text-2xl'>
                    {destinations[index].country}
                  </h3>
                </motion.div>
              </AnimatePresence>
              <div className='flex justify-between items-center mt-3 px-1'>
                <button
                  onClick={prev}
                  className='text-white hover:scale-110 transition cursor-pointer'
                >
                  <IoChevronForward size={20} />
                </button>
                <button
                  onClick={next}
                  className='text-white hover:scale-110 transition cursor-pointer'
                >
                  <IoChevronBack size={20} />
                </button>
              </div>
            </div>
          </motion.figure>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className='xl:bottom-8 xl:left-1/2 z-30 xl:absolute relative flex xl:flex-row flex-col justify-between items-center gap-1 xl:gap-2 bg-white shadow-[0_15px_45px_rgba(0,0,0,0.12)] mx-auto mt-[-45px] xl:mt-0 p-3 xl:p-2 border border-gray-50 xl:border-none rounded-[32px] w-[92%] xl:w-[108%] xl:-translate-x-1/2'
          >
            <div className='flex items-center gap-3 px-4 border-gray-100 border-b xl:border-b-0 xl:border-l w-full xl:w-1/3 h-10 xl:h-12'>
              <CiLocationOn size={22} className='text-[#5264FF] shrink-0' />
              <input
                type='text'
                placeholder='کجا می‌روید؟'
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className='bg-transparent border-none focus:outline-none w-full font-medium placeholder:text-gray-400 text-sm'
              />
            </div>

            <div className='flex items-center gap-3 px-4 border-gray-100 border-b xl:border-b-0 xl:border-l w-full xl:w-1/3 h-10 xl:h-12'>
              <BsCalendar3 size={18} className='text-[#5264FF] shrink-0' />
              <DatePicker
                value={dateRange}
                onChange={setDateRange}
                range
                calendar={persian}
                locale={persian_fa}
                placeholder='تاریخ سفر'
                inputClass='bg-transparent border-none w-full text-sm font-medium focus:outline-none cursor-pointer text-gray-600'
                containerClassName='w-full flex items-center'
              />
            </div>

            <div className='flex items-center gap-3 px-4 w-full xl:w-auto h-10 xl:h-12'>
              <HiOutlineUsers size={20} className='text-[#5264FF] shrink-0' />
              <select
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                className='bg-transparent border-none focus:outline-none w-full font-medium text-gray-600 text-sm cursor-pointer'
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n} نفر
                  </option>
                ))}
              </select>
            </div>

            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={handleSearch}
              className='bg-[#5264FF] hover:bg-blue-700 shadow-md xl:shadow-none mt-2 xl:mt-0 py-3.5 xl:py-4 rounded-2xl xl:rounded-full w-full xl:w-auto xl:min-w-[120px] font-bold text-white text-sm transition-all cursor-pointer'
            >
              جستجو
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
