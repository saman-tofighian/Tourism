import { motion } from 'framer-motion';
import {
  ChevronLeft,
  Heart,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { toast, Toaster } from 'sonner';
import { Autoplay, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';

import 'swiper/css';
import 'swiper/css/effect-cards';

const HOTELS = [
  {
    id: 1,
    name: 'هتل اسپیناس پالاس',
    city: 'تهران',
    price: '۴,۸۰۰,۰۰۰',
    score: 4.9,
    image: '/img/h2.webp',
    date: '۱۴۰۴/۱۲/۰۵',
  },
  {
    id: 2,
    name: 'بوتیک هتل عامری‌ها',
    city: 'کاشان',
    price: '۲,۹۵۰,۰۰۰',
    score: 4.8,
    image: '/img/h3.webp',
    date: '۱۴۰۴/۱۲/۰۶',
  },
  {
    id: 3,
    name: 'هتل مجلل درویشی',
    city: 'مشهد',
    price: '۳,۴۰۰,۰۰۰',
    score: 4.7,
    image: '/img/h1.webp',
    date: '۱۴۰۴/۱۲/۰۷',
  },
];

const REVIEWS = [
  {
    id: 1,
    name: 'سامان توفیقیان',
    text: 'طراحی عالی و تجربه رزرو فوق‌العاده راحت.',
    date: '۵ اسفند ۱۴۰۴',
  },
  {
    id: 2,
    name: 'سارا احمدی',
    text: 'بهترین هتل‌هایی که تا حالا رفتم رو اینجا پیدا کردم.',
    date: '۶ اسفند ۱۴۰۴',
  },
];

export default function LuxuryHotelPage() {
  const [wishlist, setWishlist] = useState([]);

  const handleWishlist = (hotel) => {
    if (wishlist.includes(hotel.id)) {
      setWishlist(wishlist.filter((id) => id !== hotel.id));
      toast.error(`${hotel.name} از لیست حذف شد`);
    } else {
      setWishlist([...wishlist, hotel.id]);
      toast.success(`${hotel.name} به علاقه‌مندی‌ها اضافه شد`, {
        description: `مناسب برای تاریخ: ${hotel.date}`,
      });
    }
  };

  return (
    <main className='bg-[#F8FAFC] min-h-screen font-sans text-slate-900'>
      <Header />
      <Toaster dir='rtl' position='top-center' richColors />

      <section
        className='relative flex justify-center items-center bg-white px-[6%] h-[75vh] overflow-hidden'
        dir='rtl'
      >
        <div className='top-0 left-0 absolute bg-[radial-gradient(circle_at_50%_120%,#3b82f615,transparent)] w-full h-full' />

        <div className='z-10 relative space-y-8 px-6 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='inline-flex items-center gap-2 bg-blue-50 px-4 py-2 border border-blue-100 rounded-full font-bold text-blue-600 text-xs'
          >
            <Sparkles size={14} /> پلتفرم هوشمند رزرو ۲۰۲۶
          </motion.div>

          <h1 className='font-black text-slate-900 text-6xl md:text-8xl leading-tight tracking-tighter'>
            سفری به سبک <br />{' '}
            <span className='bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent'>
              اشراف‌زادگان
            </span>
          </h1>

          <div className='flex items-center bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] mx-auto p-2 border border-slate-100 rounded-[35px] max-w-2xl'>
            <div className='flex flex-1 items-center gap-3 px-6'>
              <Search size={20} className='text-slate-400' />
              <input
                placeholder='کجا می‌خواهید اقامت کنید؟'
                className='bg-transparent border-none outline-none w-full font-bold text-slate-800 text-sm'
              />
            </div>
            <button className='bg-slate-900 hover:bg-blue-600 shadow-lg px-10 py-4 rounded-[28px] font-black text-white transition-all cursor-pointer'>
              جستجو
            </button>
          </div>
        </div>
      </section>

      <section className='mx-auto px-[6%] py-24 max-w-7xl' dir='rtl'>
        <div className='flex justify-between items-end mb-16'>
          <div>
            <h2 className='mb-2 font-black text-slate-900 text-4xl'>
              پیشنهادات ویژه
            </h2>
            <p className='font-bold text-slate-400 text-sm'>
              بهترین اقامتگاه‌های برگزیده امسال
            </p>
          </div>
          <button className='group flex items-center gap-2 font-black text-blue-600 text-sm cursor-pointer'>
            مشاهده همه{' '}
            <ChevronLeft
              size={18}
              className='transition-transform group-hover:-translate-x-1'
            />
          </button>
        </div>

        <div className='gap-10 grid grid-cols-1 md:grid-cols-3'>
          {HOTELS.map((hotel) => (
            <motion.div
              key={hotel.id}
              whileHover={{ y: -12 }}
              className='group relative bg-white shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] p-4 border border-slate-50 rounded-[45px] transition-all'
            >
              <div className='relative shadow-inner rounded-[35px] h-[380px] overflow-hidden'>
                <Image
                  src={hotel.image}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-1000'
                  alt={hotel.name}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />

                <button
                  onClick={() => handleWishlist(hotel)}
                  className='top-6 right-6 z-20 absolute flex justify-center items-center bg-white/80 hover:bg-white shadow-xl backdrop-blur-md rounded-2xl w-12 h-12 text-slate-900 transition-all cursor-pointer'
                >
                  <Heart
                    size={20}
                    className={
                      wishlist.includes(hotel.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-slate-400'
                    }
                  />
                </button>
              </div>

              <div className='p-6'>
                <div className='flex justify-between items-start mb-4'>
                  <div>
                    <div className='flex items-center gap-1 mb-1 font-bold text-[10px] text-blue-600 uppercase'>
                      <MapPin size={12} /> {hotel.city}
                    </div>
                    <h3 className='font-black text-slate-900 text-2xl'>
                      {hotel.name}
                    </h3>
                  </div>
                  <div className='flex items-center gap-1 bg-yellow-400/10 px-3 py-1 rounded-xl font-black text-yellow-600 text-xs'>
                    <Star size={14} fill='currentColor' /> {hotel.score}
                  </div>
                </div>

                <div className='flex justify-between items-center pt-5 border-slate-50 border-t'>
                  <span className='font-black text-slate-900 text-xl'>
                    {hotel.price}{' '}
                    <span className='font-medium text-slate-400 text-xs'>
                      تومان / شب
                    </span>
                  </span>
                  <button className='bg-blue-50 hover:bg-blue-600 p-3 rounded-2xl text-blue-600 hover:text-white transition-all cursor-pointer'>
                    <ChevronLeft size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className='bg-[#F1F5F9] mx-4 py-32 rounded-[100px]' dir='rtl'>
        <div className='mx-auto px-6 max-w-2xl'>
          <div className='mb-20 text-center'>
            <h2 className='mb-4 font-black text-slate-900 text-4xl'>
              تجربه <span className='text-blue-600'>همسفران</span>
            </h2>
            <div className='bg-blue-600 mx-auto rounded-full w-12 h-1' />
          </div>

          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            autoplay={{ delay: 3500 }}
            className='w-full h-[320px]'
          >
            {REVIEWS.map((rev) => (
              <SwiperSlide
                key={rev.id}
                className='flex flex-col justify-between bg-white shadow-2xl shadow-slate-200 p-10 border border-slate-100 rounded-[45px]'
              >
                <div className='space-y-6'>
                  <div className='flex items-center gap-4'>
                    <div className='flex justify-center items-center bg-slate-900 rounded-2xl w-14 h-14 font-black text-white text-xl'>
                      {rev.name[0]}
                    </div>
                    <div>
                      <h4 className='font-black text-slate-900 text-lg'>
                        {rev.name}
                      </h4>
                      <p className='font-bold text-[11px] text-slate-400'>
                        {rev.date}
                      </p>
                    </div>
                  </div>
                  <p className='font-medium text-slate-600 text-xl italic leading-relaxed'>
                    "{rev.text}"
                  </p>
                </div>
                <div className='flex justify-between items-center pt-6 border-slate-50 border-t'>
                  <div className='flex gap-1 text-yellow-400'>
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                  </div>
                  <ShieldCheck className='text-green-500' size={28} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </main>
  );
}
