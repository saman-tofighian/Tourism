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
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const travelStories = [
  {
    id: 1,
    title: 'غروب جادویی در سواحل بالی',
    excerpt: 'سفری به اعماق فرهنگ اندونزی و تجربه آرامشی بی‌نظیر...',
    author: 'سامان توفیقیان',
    date: '۱۴۰۴/۱۱/۲۰',
    image: '/img/t1.jpg',
    category: 'آسیا',
    time: '۸ دقیقه',
  },
  {
    id: 2,
    title: 'کشف رازهای اهرام جیزه',
    excerpt: 'ایستادن در مقابل عظمت تاریخ؛ گزارشی از قلب قاهره...',
    author: 'سامان توفیقیان',
    date: '۱۴۰۴/۱۲/۰۵',
    image: '/img/t2.jpg',
    category: 'آفریقا',
    time: '۱۲ دقیقه',
  },
  {
    id: 3,
    title: 'پیاده‌روی در کوه‌های آلپ',
    excerpt: 'تجربه هوای پاک و مناظر بی‌نظیر سوئیس در فصل بهار...',
    author: 'سامان توفیقیان',
    date: '۱۴۰۴/۰۱/۱۵',
    image: '/img/t3.jpg',
    category: 'اروپا',
    time: '۱۵ دقیقه',
  },
  {
    id: 4,
    title: 'شب‌های پر ستاره کویر لوت',
    excerpt: 'سکوت مطلق و آسمانی که انگار می‌توانید ستاره‌هایش را لمس کنید...',
    author: 'سامان توفیقیان',
    date: '۱۴۰۴/۰۲/۱۰',
    image: '/img/t4.jpg',
    category: 'ایران',
    time: '۶ دقیقه',
  },
  {
    id: 5,
    title: 'مدرنیته در قلب توکیو',
    excerpt: 'از معابد قدیمی تا برج‌های سر به فلک کشیده ژاپن...',
    author: 'سامان توفیقیان',
    date: '۱۴۰۴/۰۳/۲۲',
    image: '/img/t5.jpg',
    category: 'آسیا',
    time: '۱۰ دقیقه',
  },
  {
    id: 6,
    title: 'ونیز؛ شهری روی آب',
    excerpt: 'گشت و گذار با گوندولا در میان کوچه‌پس‌کوچه‌های تاریخی...',
    author: 'سامان توفیقیان',
    date: '۱۴۰۴/۰۴/۰۵',
    image: '/img/t6.jpg',
    category: 'اروپا',
    time: '۹ دقیقه',
  },
];

const categories = ['آفریقا', 'اروپا', 'آسیا', 'ایران', 'همه'];

export default function TravelLogPage() {
  const [filter, setFilter] = useState('همه');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const filteredStories =
    filter === 'همه'
      ? travelStories
      : travelStories.filter((s) => s.category === filter);

  return (
    <main ref={containerRef}>
      <Header />
      <section className='relative flex justify-center items-center px-[6%] w-full min-h-[65vh] overflow-hidden'>
        <motion.div style={{ y }} className='z-0 absolute inset-0'>
          <Image
            src='/img/t0.jpg'
            fill
            className='brightness-[0.45] object-cover'
            alt='Travel Hero'
            priority
          />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className='z-10 relative px-4 text-white text-center'
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='inline-block bg-white/20 backdrop-blur-md mb-4 px-4 py-1 rounded-full font-medium text-sm'
          >
            سفرنامه‌های اختصاصی
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='mb-6 font-black text-5xl md:text-8xl leading-tight'
          >
            روایت <span className='text-[#5264FF]'>ناتمام</span> سفر
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='opacity-90 max-w-2xl font-light text-lg md:text-xl'
          >
            جایی که خاطرات زنده می‌شوند و جاده‌ها لب به سخن می‌گشایند
          </motion.p>
        </motion.div>
        <div className='bottom-0 absolute inset-x-0 bg-gradient-to-t from-[#fbfcfe] to-transparent h-32' />
      </section>

      <div className='top-[80px] z-40 sticky mb-10 sm:mb-16 px-4 sm:px-[6%] py-6 sm:py-8'>
        <div className='flex flex-wrap justify-center gap-3 sm:gap-4'>
          <div className='flex flex-wrap bg-white/70 shadow-blue-500/5 shadow-xl backdrop-blur-xl p-2 border border-white/50 rounded-2xl sm:rounded-full'>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-4 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? 'text-white'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <span className='z-10 relative'>{cat}</span>

                {filter === cat && (
                  <motion.span
                    layoutId='activeTab'
                    className='z-0 absolute inset-0 bg-gradient-to-r from-[#5264FF] to-[#3b49df] shadow-blue-500/30 shadow-lg rounded-full'
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className='px-[6%]'>
        <motion.div
          layout
          className='gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          dir='rtl'
        >
          <AnimatePresence mode='popLayout'>
            {filteredStories.map((story) => (
              <motion.div
                key={story.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -12 }}
                className='group bg-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(82,100,255,0.12)] rounded-[40px] overflow-hidden transition-all duration-500'
              >
                <div className='relative h-80 overflow-hidden'>
                  <Image
                    src={story.image}
                    fill
                    className='object-cover group-hover:scale-110 transition-transform duration-1000'
                    alt={story.title}
                  />
                  <div className='top-6 right-6 absolute bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl font-bold text-[#5264FF] text-xs uppercase tracking-wider'>
                    {story.category}
                  </div>
                </div>
                <div className='p-10 text-right' dir='rtl'>
                  <div className='flex justify-between items-center mb-6 font-bold text-[11px] text-gray-400'>
                    <span className='flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full'>
                      <FaCalendarAlt className='text-[#5264FF]' /> {story.date}
                    </span>
                    <span className='flex items-center gap-2'>
                      <FaClock className='text-[#5264FF]' /> {story.time}
                    </span>
                  </div>

                  <h3 className='mb-5 font-black text-[#1a1a1a] text-[16px] group-hover:text-[#5264FF] md:text-2xl leading-snug transition-colors'>
                    {story.title}
                  </h3>

                  <p className='mb-10 font-medium text-gray-400 text-sm line-clamp-2 leading-relaxed'>
                    {story.excerpt}
                  </p>

                  <div className='flex justify-between items-center pt-8 border-gray-100 border-t'>
                    <motion.button
                      whileHover={{ gap: '12px' }}
                      className='flex items-center gap-2 font-extrabold text-[#5264FF] text-[12px] sm:text-sm cursor-pointer'
                    >
                      ادامه روایت
                      <span className='text-xl'>←</span>
                    </motion.button>

                    <div className='flex items-center gap-2'>
                      <span className='font-bold text-[10px] text-gray-400 uppercase'>
                        توسط {story.author}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
