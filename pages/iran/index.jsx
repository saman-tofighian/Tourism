import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import {
  FaBus,
  FaCamera,
  FaChevronLeft,
  FaCloudSun,
  FaCompass,
  FaHistory,
  FaStar,
  FaTree,
  FaUmbrellaBeach,
  FaUtensils,
} from 'react-icons/fa';

const domesticTours = [
  {
    id: 1,
    title: 'سکوت کویر (شهداد تا کلوت‌ها)',
    price: '۱۲,۵۰۰,۰۰۰',
    duration: '۳ شب و ۴ روز',
    image: '/img/kerman.jpg',
    category: 'طبیعت‌گردی',
    temp: '۲۴°C',
    rating: 4.8,
    services: ['اقامت بومگردی', 'آفرود', 'رصد ستارگان'],
    location: 'کرمان',
  },
  {
    id: 2,
    title: 'شکوه هخامنشی (شیراز)',
    price: '۱۸,۹۰۰,۰۰۰',
    duration: '۴ شب و ۵ روز',
    image: '/img/shiraz.jpg',
    category: 'تاریخی',
    temp: '۲۱°C',
    rating: 4.9,
    services: ['هتل ۵ ستاره', 'لیدر تخصصی', 'ترانسفر'],
    location: 'فارس',
  },
  {
    id: 3,
    title: 'جنگل‌های مه‌آلود (اسالم به خلخال)',
    price: '۹,۸۰۰,۰۰۰',
    duration: '۲ شب و ۳ روز',
    image: '/img/ghilan.jpg',
    category: 'طبیعت‌گردی',
    temp: '۱۸°C',
    rating: 4.7,
    services: ['کمپینگ لوکس', 'پذیرایی محلی', 'بیمه'],
    location: 'گیلان',
  },
  {
    id: 4,
    title: 'آفتاب گرم جنوب (قشم و هنگام)',
    price: '۱۵,۲۰۰,۰۰۰',
    duration: '۵ شب و ۶ روز',
    image: '/img/qeshm.jpg',
    category: 'تفریحی',
    temp: '۲۸°C',
    rating: 5.0,
    services: ['گشت دریایی', 'هتل ساحلی', 'غذاهای دریایی'],
    location: 'هرمزگان',
  },
];

export default function DomesticToursPage() {
  const [filter, setFilter] = useState('همه');

  const filteredTours =
    filter === 'همه'
      ? domesticTours
      : domesticTours.filter((t) => t.category === filter);

  return (
    <main className='bg-[#fafbfc] min-h-screen font-sans'>
      <Header />

      <section
        className='relative flex items-center px-[6%] h-[60vh] overflow-hidden'
        dir='rtl'
      >
        <div className='z-0 absolute inset-0'>
          <Image
            src='/img/tour.jpg'
            fill
            className='brightness-50 object-cover'
            alt='Iran Travel'
          />
        </div>

        <div className='z-10 relative max-w-3xl'>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className='inline-block bg-orange-500 mb-4 px-4 py-1 rounded-lg font-bold text-white text-xs'
          >
            ایران را باید دید!
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className='mb-6 font-black text-white text-5xl md:text-7xl leading-tight'
          >
            سفری به اعماق <br />{' '}
            <span className='text-orange-400'>فرهنگ و طبیعت</span> ایران
          </motion.h1>
        </div>
      </section>

      <section className='z-20 relative px-[6%] -translate-y-12'>
        <div className='gap-4 grid grid-cols-2 md:grid-cols-4'>
          {[
            { name: 'طبیعت‌گردی', icon: <FaTree />, color: 'bg-green-500' },
            { name: 'تاریخی', icon: <FaHistory />, color: 'bg-amber-600' },
            { name: 'تفریحی', icon: <FaUmbrellaBeach />, color: 'bg-blue-500' },
            { name: 'همه', icon: <FaCompass />, color: 'bg-gray-800' },
          ].map((cat) => (
            <button
              key={cat.name}
              onClick={() => setFilter(cat.name)}
              className={`flex items-center justify-center gap-3 p-6 rounded-[25px] transition-all cursor-pointer shadow-xl ${
                filter === cat.name
                  ? `${cat.color} text-white scale-105`
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className='text-xl'>{cat.icon}</span>
              <span className='font-bold text-sm'>{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section className='px-[6%] py-20' dir='rtl'>
        <div className='gap-12 grid grid-cols-1 md:grid-cols-2'>
          <AnimatePresence mode='popLayout'>
            {filteredTours.map((tour) => (
              <motion.div
                key={tour.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className='group flex md:flex-row flex-col bg-white shadow-2xl shadow-gray-200/50 border border-gray-100 rounded-[40px] h-full md:h-[350px] overflow-hidden'
              >
                <div className='relative w-full md:w-[40%] h-[250px] md:h-full'>
                  <Image
                    src={tour.image}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-700'
                    alt={tour.title}
                  />
                  <div className='top-4 right-4 absolute flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white'>
                    <FaCloudSun className='text-yellow-400' /> {tour.temp}
                  </div>
                </div>

                <div className='flex flex-col flex-1 justify-between p-8'>
                  <div>
                    <div className='flex justify-between items-start mb-4'>
                      <span className='bg-orange-50 px-3 py-1 rounded-full font-black text-[10px] text-orange-500'>
                        {tour.location}
                      </span>
                      <div className='flex items-center gap-1 font-bold text-sm'>
                        <FaStar className='text-yellow-400' /> {tour.rating}
                      </div>
                    </div>
                    <h3 className='mb-4 font-black text-gray-800 text-2xl'>
                      {tour.title}
                    </h3>

                    <div className='flex flex-wrap gap-2 mb-6'>
                      {tour.services.map((s, i) => (
                        <span
                          key={i}
                          className='flex items-center gap-1 font-bold text-[9px] text-gray-400'
                        >
                          <FaBus className='text-[8px]' /> {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className='flex justify-between items-center pt-6 border-gray-50 border-t'>
                    <div>
                      <p className='mb-1 font-bold text-[10px] text-gray-400'>
                        {tour.duration}
                      </p>
                      <p className='font-black text-gray-900 text-2xl'>
                        {tour.price}{' '}
                        <span className='font-medium text-xs'>تومان</span>
                      </p>
                    </div>
                    <button className='group/btn flex items-center gap-2 bg-gray-900 hover:bg-orange-500 px-6 py-3 rounded-2xl font-bold text-white transition-colors cursor-pointer'>
                      رزرو تور{' '}
                      <FaChevronLeft className='text-xs transition-transform group-hover/btn:-translate-x-1' />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <section
        className='relative bg-gray-900 mx-[2%] mb-20 px-[6%] py-20 rounded-[60px] overflow-hidden text-white'
        dir='rtl'
      >
        <div className='top-0 right-0 absolute opacity-10 font-black text-[200px] -rotate-12 translate-x-20'>
          IRAN
        </div>
        <div className='z-10 relative flex md:flex-row flex-col items-center gap-16'>
          <div className='md:w-1/2'>
            <h2 className='mb-8 font-black text-4xl md:text-5xl leading-snug'>
              با <span className='text-orange-400'>راهنمایان محلی</span>،
              ناشناخته‌ها را کشف کنید
            </h2>
            <div className='space-y-6'>
              {[
                {
                  t: 'لیدرهای کارت‌دار',
                  d: 'تمامی تورهای ما توسط لیدرهای مجرب سازمان میراث فرهنگی هدایت می‌شوند.',
                  i: <FaCamera />,
                },
                {
                  t: 'حمایت از جوامع محلی',
                  d: 'ما با اقامت در بومگردی‌ها به اقتصاد روستایی کمک می‌کنیم.',
                  i: <FaUtensils />,
                },
              ].map((item, i) => (
                <div key={i} className='flex gap-4'>
                  <div className='bg-orange-400/20 p-4 rounded-2xl h-fit text-orange-400'>
                    {item.i}
                  </div>
                  <div>
                    <h4 className='mb-1 font-black'>{item.t}</h4>
                    <p className='text-gray-400 text-sm'>{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='gap-4 grid grid-cols-2 md:w-1/2'>
            <div className='space-y-4'>
              <div className='relative rounded-3xl h-48 overflow-hidden'>
                <Image
                  src='/img/iran-1.jpg'
                  fill
                  className='object-cover'
                  alt='i1'
                />
              </div>
              <div className='relative rounded-3xl h-64 overflow-hidden'>
                <Image
                  src='/img/iran-2.jpg'
                  fill
                  className='object-cover'
                  alt='i2'
                />
              </div>
            </div>
            <div className='space-y-4 pt-12'>
              <div className='relative rounded-3xl h-64 overflow-hidden'>
                <Image
                  src='/img/iran-3.jpg'
                  fill
                  className='object-cover'
                  alt='i3'
                />
              </div>
              <div className='relative rounded-3xl h-48 overflow-hidden'>
                <Image
                  src='/img/iran-4.jpg'
                  fill
                  className='object-cover'
                  alt='i4'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
