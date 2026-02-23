import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import {
  FaCalendarAlt,
  FaChevronLeft,
  FaClock,
  FaCompass,
  FaHeadset,
  FaHotel,
  FaMapMarkerAlt,
  FaStar,
  FaSuitcase,
} from 'react-icons/fa';

const tours = [
  {
    id: 1,
    title: 'تور دور فرانسه (پاریس + نیس)',
    price: '۶۵,۰۰۰,۰۰۰',
    duration: '۷ شب و ۸ روز',
    image: '/img/fr.jpg',
    category: 'اروپا',
    rating: 4.9,
    hotel: '۵ ستاره (Marriott)',
    date: '۱۵ فروردین ۱۴۰۵',
    tags: ['لوکس', 'فرهنگی'],
    itinerary: [
      'ورود به پاریس',
      'بازدید از ایفل',
      'سفر به نیس',
      'تفریحات ساحلی',
    ],
  },
  {
    id: 2,
    title: 'تلفیق مدرنیته و سنت در توکیو',
    price: '۸۹,۰۰۰,۰۰۰',
    duration: '۹ شب و ۱۰ روز',
    image: '/img/to.jpg',
    category: 'آسیا',
    rating: 5.0,
    hotel: '۵ ستاره (Hilton)',
    date: '۲۰ اردیبهشت ۱۴۰۵',
    tags: ['تکنولوژی', 'تاریخی'],
    itinerary: ['شیبویا کراسینگ', 'کوه فوجی', 'معبد سنسوجی', 'خرید در گینزا'],
  },
  {
    id: 3,
    title: 'سواحل نیلگون مالدیو',
    price: '۴۵,۰۰۰,۰۰۰',
    duration: '۵ شب و ۶ روز',
    image: '/img/ma.jpg',
    category: 'آسیا',
    rating: 4.8,
    hotel: 'ریزورت ساحلی اختصاصی',
    date: '۱۰ فروردین ۱۴۰۵',
    tags: ['ماه عسل', 'آرامش'],
    itinerary: [
      'استقبال فرودگاهی',
      'ویلا روی آب',
      'غواصی اختصاصی',
      'شام در ساحل',
    ],
  },
];

export default function ForeignToursPage() {
  const [activeTab, setActiveTab] = useState('همه');
  const [hoveredTour, setHoveredTour] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const filteredTours =
    activeTab === 'همه' ? tours : tours.filter((t) => t.category === activeTab);

  return (
    <main
      ref={containerRef}
      className='bg-[#fbfcfe] min-h-screen overflow-x-hidden'
    >
      <Header />
      <section className='relative flex justify-center items-center px-[6%] h-[100vh] overflow-hidden'>
        <motion.div style={{ y: yRange }} className='z-0 absolute inset-0'>
          <Image
            src='/img/tour.jpg'
            fill
            className='brightness-[0.4] object-cover scale-110'
            alt='Luxury Travel'
            priority
          />
        </motion.div>

        <div className='z-10 relative px-4 text-center' dir='rtl'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className='inline-block bg-white/10 backdrop-blur-md mb-6 px-6 py-2 border border-white/20 rounded-full font-bold text-white text-sm'
          >
            ✨ تجربه‌ای فراتر از یک سفر معمولی
          </motion.div>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='mb-8 font-black text-white text-6xl md:text-9xl leading-tight'
          >
            رویاهایتان را <br />{' '}
            <span className='bg-clip-text bg-gradient-to-l from-blue-400 to-indigo-400 text-transparent'>
              سفر کنید
            </span>
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='mx-auto max-w-5xl'
          >
            <div className='flex md:flex-row flex-col items-center gap-4 bg-white/90 shadow-2xl backdrop-blur-2xl p-4 border border-white rounded-[40px]'>
              <div className='flex flex-1 items-center gap-3 px-6 w-full'>
                <FaMapMarkerAlt className='text-blue-500' />
                <div className='text-right'>
                  <p className='font-bold text-[10px] text-gray-400'>
                    مقصد سفر
                  </p>
                  <select className='bg-transparent outline-none font-black text-gray-800'>
                    <option>انتخاب کنید...</option>
                    <option>پاریس، فرانسه</option>
                    <option>توکیو، ژاپن</option>
                  </select>
                </div>
              </div>
              <div className='hidden md:block bg-gray-200 w-[1px] h-12' />
              <div className='flex flex-1 items-center gap-3 px-6 w-full'>
                <FaCalendarAlt className='text-blue-500' />
                <div className='text-right'>
                  <p className='font-bold text-[10px] text-gray-400'>
                    تاریخ حرکت
                  </p>
                  <p className='font-black text-gray-800 text-sm'>
                    اردیبهشت ۱۴۰۵
                  </p>
                </div>
              </div>
              <button className='bg-[#5264FF] hover:bg-blue-600 shadow-xl px-12 py-5 rounded-3xl w-full md:w-auto font-black text-white transition-all cursor-pointer'>
                جستجو
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className='z-20 relative px-[6%] -translate-y-16' dir='rtl'>
        <div className='gap-8 grid grid-cols-1 md:grid-cols-3'>
          {[
            {
              title: 'برنامه‌ریزی دقیق',
              icon: <FaCompass />,
              desc: 'تمام لحظات سفر شما از پیش طراحی شده است.',
            },
            {
              title: 'پشتیبانی VIP',
              icon: <FaHeadset />,
              desc: 'در تمام طول سفر، همکاران ما در کنار شما هستند.',
            },
            {
              title: 'بهترین قیمت',
              icon: <FaSuitcase />,
              desc: 'تضمین بالاترین کیفیت با قیمت رقابتی بازار.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className='flex items-center gap-6 bg-white shadow-xl p-8 border border-gray-50 rounded-[35px]'
            >
              <div className='flex justify-center items-center bg-blue-50 rounded-2xl w-16 h-16 text-[#5264FF] text-3xl'>
                {item.icon}
              </div>
              <div>
                <h4 className='font-black text-gray-800'>{item.title}</h4>
                <p className='mt-1 text-gray-400 text-xs'>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className='px-[6%] py-20' dir='rtl'>
        <div className='flex md:flex-row flex-col justify-between items-center gap-10 mb-20'>
          <div className='text-right'>
            <span className='font-bold text-[#5264FF] text-sm uppercase tracking-widest'>
              Packages
            </span>
            <h2 className='mt-2 font-black text-gray-900 text-5xl'>
              تورهای <span className='text-[#5264FF]'>ویژه</span>
            </h2>
          </div>

          <div className='flex bg-gray-100 p-2 rounded-[20px]'>
            {['همه', 'اروپا', 'آسیا'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-3 rounded-xl font-bold transition-all cursor-pointer ${activeTab === tab ? 'bg-white shadow-md text-[#5264FF]' : 'text-gray-400'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className='gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <AnimatePresence mode='wait'>
            {filteredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredTour(tour.id)}
                onMouseLeave={() => setHoveredTour(null)}
                className='group relative bg-white shadow-2xl shadow-blue-900/5 border border-gray-100 rounded-[50px] overflow-hidden'
              >
                <div className='relative h-[400px] overflow-hidden'>
                  <Image
                    src={tour.image}
                    fill
                    className='object-cover group-hover:scale-110 transition-transform duration-1000'
                    alt={tour.title}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent' />

                  <div className='top-6 right-6 absolute flex flex-wrap gap-2'>
                    {tour.tags.map((tag) => (
                      <span
                        key={tag}
                        className='bg-white/20 backdrop-blur-md px-4 py-1 rounded-full font-bold text-[10px] text-white'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className='right-8 bottom-8 left-8 absolute text-white text-right'>
                    <div className='flex items-center gap-2 mb-2 font-bold text-yellow-400 text-sm'>
                      <FaStar /> {tour.rating}{' '}
                      <span className='font-medium text-white/60'>
                        (۱۲۰ نظر)
                      </span>
                    </div>
                    <h3 className='font-black text-3xl'>{tour.title}</h3>
                  </div>
                </div>

                <div className='p-10'>
                  <div className='gap-y-6 grid grid-cols-2 mb-10'>
                    <div className='flex items-center gap-3'>
                      <FaClock className='text-blue-500' />
                      <div className='text-right'>
                        <p className='font-bold text-[10px] text-gray-400'>
                          مدت سفر
                        </p>
                        <p className='font-bold text-gray-800 text-sm'>
                          {tour.duration}
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center gap-3 text-right'>
                      <FaHotel className='text-blue-500' />
                      <div>
                        <p className='font-bold text-[10px] text-gray-400'>
                          اقامت
                        </p>
                        <p className='font-bold text-gray-800 text-sm'>
                          {tour.hotel.split(' ')[0] +
                            ' ' +
                            tour.hotel.split(' ')[1]}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='bg-gray-50 mb-10 p-6 rounded-3xl'>
                    <p className='mb-4 font-black text-gray-800 text-xs'>
                      برنامه سفر در یک نگاه:
                    </p>
                    <ul className='space-y-3'>
                      {tour.itinerary.map((step, i) => (
                        <li
                          key={i}
                          className='flex items-center gap-3 font-medium text-gray-500 text-xs'
                        >
                          <span className='bg-blue-500 rounded-full w-1.5 h-1.5' />{' '}
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='flex justify-between items-center pt-8 border-gray-100 border-t'>
                    <div>
                      <p className='font-bold text-[10px] text-gray-400'>
                        قیمت برای هر نفر
                      </p>
                      <p className='font-black text-[#5264FF] text-3xl'>
                        {tour.price} <span className='text-xs'>تومان</span>
                      </p>
                    </div>
                    <button className='bg-[#5264FF] hover:bg-blue-700 shadow-lg p-5 rounded-2xl text-white transition-all cursor-pointer'>
                      <FaChevronLeft />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <section className='mt-16 px-[6%]' dir='rtl'>
        <div className='relative flex md:flex-row flex-col justify-between items-center gap-10 bg-[#0f172a] p-12 rounded-[50px] overflow-hidden'>
          <div className='top-0 right-0 absolute bg-blue-600/20 blur-[100px] rounded-full w-64 h-64' />
          <div className='z-10 relative'>
            <span className='inline-block bg-red-500 mb-4 px-4 py-1 rounded-full font-bold text-[10px] text-white animate-pulse'>
              پیشنهاد ویژه
            </span>
            <h2 className='mb-4 font-black text-white text-4xl md:text-5xl'>
              تورهای <span className='text-blue-400'>لحظه آخری</span>
            </h2>
            <p className='max-w-md text-gray-400'>
              تا ۴۰٪ تخفیف برای تورهای خروجی هفته آینده. چمدان‌هایتان را ببندید!
            </p>
          </div>
          <button className='z-10 relative bg-white px-12 py-5 rounded-[25px] font-black text-[#0f172a] hover:scale-105 transition-transform cursor-pointer'>
            مشاهده لیست تخفیف‌ها
          </button>
        </div>
      </section>

      <section className='mt-18 px-[6%]' dir='rtl'>
        <div className='relative bg-[#5264FF] p-16 rounded-[60px] overflow-hidden text-center'>
          <div className='z-0 absolute inset-0 opacity-10'>
            <Image
              src='/img/world-map.jpg'
              fill
              className='object-contain'
              alt='map'
            />
          </div>
          <div className='z-10 relative'>
            <h2 className='mb-6 font-black text-white text-4xl md:text-5xl'>
              از تخفیف‌های مخفی باخبر شوید!
            </h2>
            <p className='mb-10 text-blue-100 text-lg'>
              ایمیل خود را وارد کنید تا پکیج‌های لحظه آخری را قبل از همه دریافت
              کنید.
            </p>
            <div className='flex md:flex-row flex-col justify-center gap-4 mx-auto max-w-2xl'>
              <input
                type='text'
                placeholder='ایمیل خود را اینجا بنویسید...'
                className='flex-1 bg-white/20 backdrop-blur-md px-8 py-5 border border-white/30 rounded-[25px] outline-none text-white placeholder:text-blue-100'
              />
              <button className='bg-white px-12 py-5 rounded-[25px] font-black text-[#5264FF] hover:scale-105 transition-transform cursor-pointer'>
                عضویت
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
