import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  FaCheckCircle,
  FaFileInvoiceDollar,
  FaHospitalUser,
  FaPassport,
} from 'react-icons/fa';

function PlanCard({ title, price, items, isFeatured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      className={`p-12 rounded-[50px] text-right transition-all duration-500 ${isFeatured ? 'bg-[#5264FF] text-white shadow-[0_30px_60px_rgba(82,100,255,0.3)]' : 'bg-white/5 backdrop-blur-md border border-white/10 text-white'}`}
    >
      <h3
        className={`mb-2 font-black text-2xl ${isFeatured ? 'text-white' : 'text-blue-400'}`}
      >
        {title}
      </h3>
      <div className='mb-10 font-black text-4xl'>
        {price} <span className='opacity-60 font-light text-sm'>تومان</span>
      </div>
      <div className='space-y-5 mb-12'>
        {items.map((item, i) => (
          <div
            key={i}
            className='flex items-center gap-3 opacity-90 font-medium text-sm'
          >
            <FaCheckCircle
              className={isFeatured ? 'text-blue-200' : 'text-blue-500'}
            />{' '}
            {item}
          </div>
        ))}
      </div>
      <button
        className={`w-full py-5 rounded-2xl font-black cursor-pointer transition-all ${isFeatured ? 'bg-white text-[#5264FF]' : 'bg-blue-500 text-white'}`}
      >
        انتخاب پلن
      </button>
    </motion.div>
  );
}

function Counter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace(/\D/g, ''));
      if (start === end) return;

      let totalMiliseconds = duration * 1000;
      let incrementTime = totalMiliseconds / end;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {value.includes('+') ? '+' : value.includes('%') ? '٪' : ''}
    </span>
  );
}

export default function InsurancePage() {
  const containerRef = useRef(null);
  const [age, setAge] = useState(25);
  const [destination, setDestination] = useState('europe');
  const [totalPrice, setTotalPrice] = useState(120000);

  useEffect(() => {
    let base =
      destination === 'europe'
        ? 150000
        : destination === 'asia'
          ? 80000
          : 250000;
    let ageMultiplier = age > 60 ? 2 : age > 40 ? 1.5 : 1;
    setTotalPrice(base * ageMultiplier);
  }, [age, destination]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroImgY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <main
      ref={containerRef}
      className='bg-[#f4f7ff] min-h-screen overflow-x-hidden'
    >
      <Header />
      <section className='relative flex items-center px-[6%] h-[90vh] overflow-hidden'>
        <motion.div style={{ y: heroImgY }} className='z-0 absolute inset-0'>
          <Image
            src='/img/nature.jpg'
            fill
            className='brightness-[0.4] object-cover scale-110'
            alt='Security'
            priority
          />
        </motion.div>

        <div className='z-10 relative flex w-full' dir='rtl'>
          <motion.div className='max-w-4xl'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-xl mb-6 px-4 py-2 border border-white/20 rounded-full text-blue-200 text-sm'
            >
              <FaCheckCircle /> صدور آنی با کد ملی
            </motion.div>
            <h1 className='mb-8 font-black text-white text-6xl md:text-8xl leading-none tracking-tight'>
              سفر ایمن، <br />
              <span className='bg-clip-text bg-gradient-to-l from-blue-400 to-indigo-300 text-transparent'>
                تخصص ماست
              </span>
            </h1>
            <p className='mb-10 max-w-xl text-gray-300 text-lg md:text-xl'>
              نگران هزینه‌های درمان در سفر نباشید؛ ما در تمام قاره‌ها کنار شما
              هستیم.
            </p>
            <div className='flex gap-4'>
              <button className='bg-[#5264FF] hover:bg-blue-600 shadow-2xl px-12 py-5 rounded-2xl font-black text-white transition-all cursor-pointer'>
                شروع استعلام
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className='z-20 relative px-[6%] -translate-y-1/2'>
        <div className='gap-6 grid grid-cols-2 md:grid-cols-4'>
          {[
            { label: 'مسافر بیمه شده', value: '50000+' },
            { label: 'رضایت مشتریان', value: '98%' },
            { label: 'کشورهای تحت پوشش', value: '190' },
            { label: 'اپراتورهای فعال', value: '24' },
          ].map((stat, i) => (
            <div
              key={i}
              className='bg-white/90 shadow-2xl backdrop-blur-2xl p-8 border border-white rounded-[35px] text-center'
            >
              <div className='mb-1 font-black text-[#5264FF] text-4xl'>
                <Counter value={stat.value} />
              </div>
              <div className='font-bold text-gray-400 text-xs'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='px-[6%] py-20' dir='rtl'>
        <div className='flex lg:flex-row flex-col bg-white shadow-2xl border border-gray-100 rounded-[50px] overflow-hidden'>
          <div className='p-12 lg:w-1/2'>
            <h2 className='mb-8 font-black text-gray-900 text-3xl'>
              محاسبه‌گر <span className='text-[#5264FF]'>هوشمند</span> قیمت
            </h2>
            <div className='space-y-8'>
              <div>
                <label className='block mb-4 font-bold text-gray-600 text-sm'>
                  سن مسافر: {age} سال
                </label>
                <input
                  type='range'
                  min='1'
                  max='85'
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className='bg-gray-200 rounded-lg w-full h-2 accent-[#5264FF] appearance-none cursor-pointer'
                />
              </div>
              <div>
                <label className='block mb-4 font-bold text-gray-600 text-sm'>
                  مقصد سفر:
                </label>
                <div className='gap-3 grid grid-cols-3'>
                  {['asia', 'europe', 'worldwide'].map((dest) => (
                    <button
                      key={dest}
                      onClick={() => setDestination(dest)}
                      className={`py-3 rounded-xl font-bold text-xs transition-all cursor-pointer ${destination === dest ? 'bg-[#5264FF] text-white' : 'bg-gray-100 text-gray-500'}`}
                    >
                      {dest === 'asia'
                        ? 'آسیا'
                        : dest === 'europe'
                          ? 'اروپا (شینگن)'
                          : 'کل دنیا'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center bg-gradient-to-br from-[#5264FF] to-[#3b49df] p-12 lg:w-1/2 text-white'>
            <span className='opacity-70 mb-2 text-sm'>
              هزینه تقریبی روزانه:
            </span>
            <div className='mb-6 font-black text-6xl'>
              {totalPrice.toLocaleString()}{' '}
              <span className='text-xl'>تومان</span>
            </div>
            <button className='bg-white px-10 py-4 rounded-2xl font-black text-[#5264FF] hover:scale-105 transition-transform cursor-pointer'>
              خرید پلن {destination}
            </button>
          </div>
        </div>
      </section>

      <section className='px-[6%] py-24'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 font-black text-gray-900 text-4xl'>
            مدارک لازم برای دریافت خسارت
          </h2>
          <p className='text-gray-500'>
            در صورت بروز حادثه، این مدارک را همراه داشته باشید
          </p>
        </div>
        <div className='gap-10 grid grid-cols-1 md:grid-cols-3'>
          {[
            { title: 'گذرنامه و ویزا', icon: <FaPassport />, color: '#6366f1' },
            {
              title: 'گزارش درمانی',
              icon: <FaHospitalUser />,
              color: '#ec4899',
            },
            {
              title: 'فاکتورهای پرداخت',
              icon: <FaFileInvoiceDollar />,
              color: '#10b981',
            },
          ].map((doc, i) => (
            <motion.div
              key={i}
              whileHover={{ rotateY: 15 }}
              className='bg-white shadow-xl p-10 border-b-4 rounded-[40px] text-center'
              style={{ borderColor: doc.color }}
            >
              <div
                className='flex justify-center mb-6 text-5xl'
                style={{ color: doc.color }}
              >
                {doc.icon}
              </div>
              <h3 className='mb-3 font-black text-gray-800 text-xl'>
                {doc.title}
              </h3>
              <p className='text-gray-400 text-sm'>
                نسخه اصلی یا کپی برابر اصل با مهر رسمی مرکز درمانی.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        className='relative bg-[#0f172a] py-32 overflow-hidden'
        dir='rtl'
      >
        <div className='top-0 right-0 absolute bg-blue-600/20 blur-[150px] rounded-full w-[500px] h-[500px]' />
        <div className='px-[6%] text-center'>
          <h2 className='mb-20 font-black text-white text-4xl'>
            پلن‌های هوشمند
          </h2>
          <div className='gap-10 grid grid-cols-1 md:grid-cols-3'>
            <PlanCard
              title='پلن نقره‌ای'
              price='۵۸,۰۰۰'
              items={[
                'پوشش ۳۰ هزار یورو',
                'فوریت‌های دندان',
                'پشتیبانی آنلاین',
              ]}
            />
            <PlanCard
              title='پلن طلایی'
              price='۱۲۵,۰۰۰'
              items={['پوشش ۵۰ هزار یورو', 'پوشش کامل کرونا', 'کنسلی پرواز']}
              isFeatured={true}
            />
            <PlanCard
              title='پلن بیزنس'
              price='۲۱۰,۰۰۰'
              items={['پوشش نامحدود', 'ترانسفر اختصاصی', 'بیمه لوازم دیجیتال']}
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
