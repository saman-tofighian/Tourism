import { AnimatePresence, motion } from 'framer-motion'; // انیمیشن
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
      toast.error('مقصد سفر مشخص نشده است!', {
        description: 'لطفاً نام شهر یا کشور مورد نظر را وارد کنید.',
      });
      return;
    }
    if (!dateRange || dateRange.length < 2) {
      toast.warning('بازه زمانی سفر ناقص است', {
        description: 'تاریخ ورود و خروج را در تقویم انتخاب کنید.',
      });
      return;
    }

    toast.success('در حال جستجوی بهترین پروازها...', {
      description: `سفر به ${destination} برای ${people} نفر`,
    });
  };

  return (
    <section
      className='mt-6 px-[5%] md:px-[6%] pb-12 w-full overflow-hidden'
      dir='rtl'
    >
      <Toaster position='top-center' richColors closeButton dir='rtl' />

      <div className='items-center gap-10 lg:gap-16 grid grid-cols-12'>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-center xl:items-start gap-8 order-2 xl:order-1 col-span-12 xl:col-span-6 mt-12 xl:mt-0 text-center xl:text-right'
        >
          <span className='inline-flex items-center gap-3 bg-orange-50 px-6 py-3 rounded-full font-bold text-[#FF7A00] text-sm'>
            بسیار سفر باید تا پخته شود خامی
            <Image
              src='/img/beachSunrise.png'
              width={24}
              height={24}
              alt='sunrise'
            />
          </span>

          <h1 className='font-extrabold text-[#404040] lg:text-[75px] text-4xl md:text-6xl leading-[1.4] md:leading-[1.1]'>
            دنیا را کشف کنید <br />
            زندگی را <span className='text-[#5264FF]'>تجربه</span> کنید
          </h1>

          <p className='max-w-[500px] text-gray-500 text-lg'>
            لذت سفر به بکرترین نقاط جهان با برنامه‌ریزی دقیق و خاطرات ماندگار.
          </p>

          <div className='flex flex-wrap justify-center xl:justify-start gap-6 mt-4 w-full'>
            {['جنگل', 'شهر', 'ساحل', 'کمپ'].map((name, i) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={i}
                className='flex flex-col items-center gap-2'
              >
                <div className='flex justify-center items-center bg-white shadow-sm hover:shadow-md border border-gray-100 rounded-[28px] w-20 h-20 transition-all cursor-pointer'>
                  <Image
                    src={`/img/${['joungle', 'city', 'beach', 'camping'][i]}.png`}
                    width={38}
                    height={38}
                    alt={name}
                  />
                </div>
                <span className='font-medium text-sm'>{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className='relative order-1 xl:order-2 col-span-12 md:col-span-8 xl:col-span-6 md:col-start-3'>
          <motion.figure
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className='relative shadow-2xl rounded-[40px] md:rounded-[56px] w-full overflow-hidden'
          >
            <Image
              src='/img/motto.png'
              alt='destination'
              width={636}
              height={776}
              className='w-full h-auto object-cover aspect-[4/5] md:aspect-[636/776]'
              priority
            />
            <div className='top-6 right-6 absolute bg-white/20 backdrop-blur-md p-4 rounded-3xl w-[160px] md:w-[190px] text-center'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={index}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className='block opacity-80 text-white text-xs'>
                    {destinations[index].season}
                  </span>
                  <h3 className='mt-1 font-bold text-white text-2xl md:text-3xl'>
                    {destinations[index].country}
                  </h3>
                </motion.div>
              </AnimatePresence>

              <div className='flex justify-between items-center mt-3 text-white'>
                <button
                  onClick={prev}
                  className='hover:bg-white/30 p-1 rounded-full transition cursor-pointer'
                >
                  <IoChevronForward size={22} />
                </button>
                <button
                  onClick={next}
                  className='hover:bg-white/30 p-1 rounded-full transition cursor-pointer'
                >
                  <IoChevronBack size={22} />
                </button>
              </div>
            </div>
          </motion.figure>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='xl:bottom-10 xl:left-1/2 xl:z-20 xl:absolute relative flex xl:flex-row flex-col justify-between items-center gap-4 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] mx-auto mt-[-60px] xl:mt-0 p-4 xl:p-2 border border-gray-100 xl:border-none rounded-[32px] w-[94%] xl:w-[110%] xl:-translate-x-1/2'
          >
            <div className='flex items-center gap-3 px-4 w-full xl:w-1/3 h-12'>
              <CiLocationOn size={24} className='text-[#5264FF]' />
              <input
                type='text'
                placeholder='کجا می‌روید؟'
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className='bg-transparent border-none focus:outline-none w-full font-medium placeholder:text-gray-400'
              />
            </div>

            <span className='hidden xl:block bg-gray-200 w-px h-8' />

            <div className='flex items-center gap-3 px-4 w-full xl:w-1/3 h-12'>
              <BsCalendar3 size={20} className='text-[#5264FF]' />
              <DatePicker
                value={dateRange}
                onChange={setDateRange}
                range
                calendar={persian}
                locale={persian_fa}
                calendarPosition='bottom-right'
                placeholder='تاریخ رفت و برگشت'
                inputClass='bg-transparent border-none w-full font-medium focus:outline-none cursor-pointer text-gray-600'
                containerClassName='w-full'
              />
            </div>

            <span className='hidden xl:block bg-gray-200 w-px h-8' />

            <div className='flex items-center gap-3 px-4 w-full xl:w-auto h-12'>
              <HiOutlineUsers size={22} className='text-[#5264FF]' />
              <select
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
                className='bg-transparent border-none focus:outline-none font-medium text-gray-600 cursor-pointer'
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n} نفر
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSearch}
              className='bg-[#5264FF] hover:bg-blue-700 py-4 xl:py-4 rounded-2xl xl:rounded-full w-full xl:w-auto xl:min-w-[130px] font-bold text-white transition-colors cursor-pointer'
            >
              جستجو
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
