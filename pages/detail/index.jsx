import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsBookmarkPlus, BsCalendar3, BsChevronDown } from 'react-icons/bs';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { IoFastFoodOutline, IoHomeOutline, IoWifi } from 'react-icons/io5';
import { RiDrinksLine } from 'react-icons/ri';
import { TbBuildingHospital } from 'react-icons/tb';

export default function Detail() {
  const videoRef = useRef(null);
  const rafRef = useRef(null);
  const containerRef = useRef(null);

  const slides = [
    {
      country: 'Türkiye',
      city: 'Antalya',
      flag: '/img/flag1.png',
      video: '/video/v2.mp4',
    },
    {
      country: 'Spain',
      city: 'Barcelona',
      flag: '/img/flag2.png',
      video: '/video/v1.mp4',
    },
    {
      country: 'Thailand',
      city: 'Phuket',
      flag: '/img/flag3.png',
      video: '/video/v3.mp4',
    },
  ];

  const places = [
    {
      id: 1,
      title: 'تور مالزی',
      image: '/img/1.png',
      days: '3 روز و 4 شب',
      price: '۸۵,۰۰۰,۰۰۰',
      rate: 4.1,
      discount: true,
    },
    {
      id: 2,
      title: 'تور دبی',
      image: '/img/2.png',
      days: '۳ روز و ۴ شب',
      price: '۶۵,۰۰۰,۰۰۰',
      rate: 4.9,
      discount: false,
    },
    {
      id: 3,
      title: 'تور آنتالیا',
      image: '/img/3.png',
      days: '۳ روز و ۴ شب',
      price: '۴۵,۰۰۰,۰۰۰',
      rate: 4.1,
      discount: false,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [people, setPeople] = useState(4);
  const [isMadrakOpen, setIsMadrakOpen] = useState(false);

  const [extras, setExtras] = useState({
    pool: false,
    massage: false,
    breakfast: true,
  });

  const toggleExtra = (key) => {
    setExtras((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 1;
      if (isPaused) {
        video.pause();
      } else {
        video
          .play()
          .catch((error) => console.error('Video playback error:', error));
      }
    }

    const updateProgress = () => {
      if (video && !isPaused) {
        const { currentTime, duration } = video;
        if (duration) {
          setProgress((currentTime / duration) * 100);
        }
      }
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    rafRef.current = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(rafRef.current);
      if (video) video.pause();
    };
  }, [current, isPaused]);

  const changeSlide = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(newIndex);
      setProgress(0);
      setFade(true);
    }, 350);
  };

  const nextSlide = () => {
    const newIndex = (current + 1) % slides.length;
    changeSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (current - 1 + slides.length) % slides.length;
    changeSlide(newIndex);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <main className='w-full overflow-x-hidden'>
      <Header />

      <section className='my-28 px-[6%] w-full'>
        <div className='flex justify-between items-center mb-8 w-full'>
          <Link
            href='/'
            className='hidden lg:flex items-center gap-x-3 px-10 py-3 border border-[#40404040] rounded-[24px]'
          >
            <GoArrowLeft size='1.4rem' />
            برگشت به خانه
          </Link>

          <Link
            href='/'
            className='lg:hidden flex justify-center items-center bg-[#F5F6FA] p-5 rounded-full'
          >
            <IoHomeOutline size='1.5rem' />
          </Link>

          <span className='font-semibold text-[#404040] text-[16px] lg:text-[20px]'>
            تور خارجی / تور اروپا / تور ترکیه / آنتالیا
          </span>
        </div>

        <div
          ref={containerRef}
          className='relative shadow-2xl mt-20 rounded-[36px] w-full h-[260px] md:h-[420px] lg:h-[600px] overflow-hidden'
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <video
            ref={videoRef}
            key={slides[current].video}
            src={slides[current].video}
            autoPlay={!isPaused}
            muted
            playsInline
            loop={false}
            onEnded={nextSlide}
            className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${
              fade ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />

          <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none' />

          <div className='top-5 left-1/2 absolute bg-white/30 rounded-full w-[88%] h-[3px] overflow-hidden -translate-x-1/2 pointer-events-none'>
            <span
              className='block bg-white h-full transition-all duration-300'
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className='top-10 right-6 absolute flex items-center gap-2 bg-white/90 shadow-md px-4 py-2 rounded-full'>
            <Image
              src={slides[current].flag}
              alt={`${slides[current].country} flag`}
              width={22}
              height={22}
              className='rounded-full'
            />
            <span className='font-medium text-[#404040] text-sm'>
              {slides[current].country}
            </span>
          </div>

          <div className='bottom-8 left-8 absolute text-white pointer-events-none'>
            <h2 className='drop-shadow-lg font-bold text-2xl md:text-4xl lg:text-5xl'>
              {slides[current].city}
            </h2>
            <span className='opacity-90 drop-shadow-md text-sm md:text-base'>
              {slides[current].country}
            </span>
          </div>

          <div className='top-6 left-6 absolute bg-black/60 px-3 py-1 rounded-md text-white text-sm pointer-events-none'>
            {current + 1}/{slides.length}
          </div>

          <button
            onClick={prevSlide}
            className='top-1/2 left-4 absolute bg-white/40 hover:bg-white/60 p-3 rounded-full text-white hover:text-gray-800 transition-all -translate-y-1/2 cursor-pointer'
            aria-label='Previous slide'
          >
            <GoArrowLeft size='1.5rem' />
          </button>
          <button
            onClick={nextSlide}
            className='top-1/2 right-4 absolute bg-white/40 hover:bg-white/60 p-3 rounded-full text-white hover:text-gray-800 transition-all -translate-y-1/2 cursor-pointer'
            aria-label='Next slide'
          >
            <GoArrowRight size='1.5rem' />
          </button>
        </div>
      </section>

      <section className='mt-28 px-[6%] py-8 w-full'>
        <div className='gap-x-5 gap-y-14 xl:gap-y-0 grid grid-cols-12 w-full'>
          <div className='order-2 xl:order-1 col-span-12 xl:col-span-3 bg-white px-6 py-8 border border-[#E5E5E5] rounded-[32px]'>
            <div className='flex justify-between items-center'>
              <span className='font-bold text-[#404040] text-xl'>
                ۴۵.۰۰۰.۰۰۰{' '}
                <span className='font-normal text-[#888] text-sm'>تومان</span>
                <span className='mr-1 font-normal text-[#888] text-sm'>
                  / هر فرد
                </span>
              </span>
              <div className='bg-[#FF6588] px-8 py-2 rounded-2xl font-bold text-white text-sm'>
                ۲۰٪
              </div>
            </div>

            <div className='bg-[#E5E5E5] my-6 h-px'></div>

            <div className='gap-4 grid grid-cols-2 mt-8 text-center'>
              <div>
                <span className='block mb-4 font-medium text-[#404040] text-sm'>
                  تاریخ شروع
                </span>
                <div className='flex justify-between items-center bg-[#F5F6FA] px-4 py-3 rounded-2xl cursor-pointer'>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={new Date()}
                    dateFormat='yyyy/MM/dd'
                    placeholderText='۱۴۰۳/۱/۱۲'
                    className='bg-transparent border-0 focus:outline-none w-full text-sm cursor-pointer'
                    wrapperClassName='w-full'
                  />
                  <BsCalendar3 size={18} className='text-[#888]' />
                </div>
              </div>

              <div>
                <span className='block mb-4 font-medium text-[#404040] text-sm'>
                  تاریخ اتمام
                </span>
                <div className='flex justify-between items-center bg-[#F5F6FA] px-4 py-3 rounded-2xl cursor-pointer'>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    minDate={startDate || new Date()}
                    dateFormat='yyyy/MM/dd'
                    placeholderText='۱۴۰۳/۱/۱۸'
                    className='bg-transparent border-0 focus:outline-none w-full text-sm cursor-pointer'
                    wrapperClassName='w-full'
                  />
                  <BsCalendar3 size={18} className='text-[#888]' />
                </div>
              </div>
            </div>

            <div className='mt-10 text-end'>
              <span className='block mb-5 font-medium text-[#404040] text-sm'>
                تعداد افراد
              </span>
              <div className='flex justify-between items-center bg-[#F5F6FA] px-5 py-2 rounded-3xl cursor-pointer'>
                <select
                  value={people}
                  onChange={(e) => setPeople(Number(e.target.value))}
                  className='bg-transparent border-0 focus:outline-none w-full font-medium text-[#404040] text-sm cursor-pointer'
                >
                  <option value={1}>۱ نفر</option>
                  <option value={2}>۲ نفر</option>
                  <option value={3}>۳ نفر</option>
                  <option value={4}>۴ نفر (۳ بزرگسال، ۱ کودک)</option>
                  <option value={5}>۵ نفر</option>
                  <option value={6}>۶ نفر</option>
                </select>
              </div>
            </div>

            <div
              onClick={() => setIsMadrakOpen(!isMadrakOpen)}
              className='flex justify-between items-center mt-12 cursor-pointer'
            >
              <span className='flex items-center gap-1 font-bold text-[#404040] text-sm'>
                ارسال مدارک مورد نیاز <span className='text-red-500'>*</span>
              </span>
              <BsChevronDown
                size={14}
                className={`text-[#888] transition-transform ${isMadrakOpen ? 'rotate-180' : ''}`}
              />
            </div>

            <div className='mt-10'>
              <div className='flex justify-between items-center gap-2 mb-4'>
                <div className='bg-gray-300 w-3 h-[2px]'></div>
                <span className='font-bold text-[#404040] text-sm'>
                  مزایا اضافه
                </span>
              </div>

              <div className='space-y-8 mt-3 text-sm'>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-400 text-xs'>۹۰.۰۰۰ تومان</span>
                  <div className='flex items-center gap-3'>
                    <span className='text-gray-500'>هزینه استخر</span>
                    <input
                      type='checkbox'
                      checked={extras.pool}
                      onChange={() => toggleExtra('pool')}
                      className='rounded w-5 h-5 accent-[#5264FF] cursor-pointer'
                    />
                  </div>
                </div>

                <div className='flex justify-between items-center'>
                  <span className='text-gray-400 text-xs'>۲۰۰.۰۰۰ تومان</span>
                  <div className='flex items-center gap-3'>
                    <span className='text-gray-500'>هزینه ماساژ هر نفر</span>
                    <input
                      type='checkbox'
                      checked={extras.massage}
                      onChange={() => toggleExtra('massage')}
                      className='rounded w-5 h-5 accent-[#5264FF] cursor-pointer'
                    />
                  </div>
                </div>

                <div className='flex justify-between items-center'>
                  <span className='font-medium text-[#404040] text-xs'>
                    ۶۰.۰۰۰ تومان
                  </span>
                  <div className='flex items-center gap-3'>
                    <span className='font-medium text-[#404040]'>
                      صبحانه برای هر نفر
                    </span>
                    <input
                      type='checkbox'
                      checked={extras.breakfast}
                      onChange={() => toggleExtra('breakfast')}
                      className='rounded w-5 h-5 accent-[#5264FF] cursor-pointer'
                    />
                  </div>
                </div>
              </div>
            </div>

            <span className='block mt-10 font-bold text-[#404040] text-sm text-end'>
              هزینه ها
            </span>
            <div className='bg-[#F5F6FA] mt-5 p-4 rounded-[32px]'>
              <div className='space-y-3 text-sm'>
                <div className='flex justify-between text-[#666]'>
                  <span className='font-bold text-[#404040]'>
                    ۱۵۰.۰۰۰.۰۰۰ تومان
                  </span>
                  <span>تور ۷ روزه</span>
                </div>
                <div className='flex justify-between text-[#666]'>
                  <span className='font-bold text-[#404040]'>۶۰.۰۰۰ تومان</span>
                  <span>صبحانه برای هر نفر</span>
                </div>
                <div className='flex justify-between text-[#666]'>
                  <span className='font-bold text-[#404040]'>۶۰.۰۰۰ تومان</span>
                  <span>هزینه سرویس</span>
                </div>
                <div className='flex justify-between text-[#FF6588]'>
                  <span className='font-bold'>۲۰.۰۰۰.۰۰۰- تومان</span>
                  <span> ٪۲۰ تخفیف</span>
                </div>
              </div>
            </div>

            <div className='flex justify-between items-center mt-6 px-2'>
              <span className='font-bold text-[#404040] text-lg'>
                ۱۳۰.۰۰۰.۰۰۰ تومان
              </span>
              <span className='font-bold text-[#404040] text-lg'>
                قیمت نهایی
              </span>
            </div>

            <button className='bg-[#5264FF] hover:bg-[#4153EF] shadow-lg mt-6 py-2.5 rounded-[40px] w-full font-bold text-white text-lg transition-colors cursor-pointer'>
              رزرو کنید
            </button>
          </div>

          <div className='order-1 xl:order-2 col-span-12 xl:col-span-8 text-right'>
            <div className='flex justify-between items-center w-full'>
              <span className='flex justify-center items-center bg-[#F5F6FA] p-4 rounded-full cursor-pointer'>
                <BsBookmarkPlus size='1.4rem' />
              </span>
              <h1 className='font-bold text-[36px]'>
                تور 7 روزه ترکیه / آنتالیا
              </h1>
            </div>
            <p className='mt-3 font-medium text-[#40404078]'>
              تور خارجی/ تور اروپا
            </p>
            <div className='mt-8 w-full'>
              <ul className='flex justify-center xl:justify-end gap-x-14 xl:gap-x-10 w-full'>
                <li className='font-semibold text-2xl cursor-pointer'>...</li>
                <li className='hidden xl:block font-semibold text-2xl cursor-pointer'>
                  نظرات
                </li>
                <li className='hidden xl:block font-semibold text-2xl cursor-pointer'>
                  میزبان تور
                </li>
                <li className='font-semibold text-2xl cursor-pointer'>
                  قوانین
                </li>
                <li className='font-semibold text-2xl cursor-pointer'>
                  مکان ها
                </li>
                <li className='font-semibold text-2xl cursor-pointer'>بررسی</li>
              </ul>

              <span className='block bg-[#40404028] mt-3 w-full h-[1px]'></span>

              <p className='mt-4 font-normal text-[18px] leading-9'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد. در این صورت می توان امید داشت
              </p>

              <span className='block bg-[#40404028] mt-3 w-full h-[1px]'></span>

              <h5 className='mt-9 font-medium text-[20px]'>ویژگی ها</h5>

              <ul className='gap-x-6 gap-y-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 mt-7 w-full text-right'>
                <li className='flex justify-end items-center gap-x-2 font-medium text-[16px]'>
                  بیمه مسافرتی
                  <TbBuildingHospital size='1.6rem' />
                </li>

                <li className='flex justify-end items-center gap-x-2 font-medium text-[16px]'>
                  میان وعده رایگان
                  <RiDrinksLine size='1.6rem' />
                </li>

                <li className='flex justify-end items-center gap-x-2 font-medium text-[16px]'>
                  وای فای رایگان
                  <IoWifi size='1.6rem' />
                </li>

                <li className='flex justify-end items-center gap-x-2 font-medium text-[16px]'>
                  ناهار رایگان
                  <IoFastFoodOutline size='1.6rem' />
                </li>
              </ul>

              <span className='block bg-[#40404028] mt-7 w-full h-[1px]'></span>

              <h5 className='mt-9 font-medium text-[20px]'>
                برنامه تور (روز به روز)
              </h5>

              <div className='flex flex-col gap-y-6 mt-8 w-full'>
                <div class='space-y-2'>
                  <details class='group [&amp;_summary::-webkit-details-marker]:hidden'>
                    <summary class='flex justify-between items-center gap-4 bg-white hover:bg-gray-50 px-4 py-3 border border-gray-200 rounded-lg font-medium text-gray-900 cursor-pointer'>
                      <svg
                        class='size-5 group-open:-rotate-180 transition-transform duration-300 shrink-0'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M19 9l-7 7-7-7'
                        ></path>
                      </svg>
                      <span>روز اول</span>
                    </summary>
                  </details>
                </div>
                <div class='space-y-2'>
                  <details class='group [&amp;_summary::-webkit-details-marker]:hidden'>
                    <summary class='flex justify-between items-center gap-4 bg-white hover:bg-gray-50 px-4 py-3 border border-gray-200 rounded-lg font-medium text-gray-900 cursor-pointer'>
                      <svg
                        class='size-5 group-open:-rotate-180 transition-transform duration-300 shrink-0'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M19 9l-7 7-7-7'
                        ></path>
                      </svg>
                      <span>روز دوم</span>
                    </summary>
                  </details>
                </div>
                <div class='space-y-2'>
                  <details class='group [&amp;_summary::-webkit-details-marker]:hidden'>
                    <summary class='flex justify-between items-center gap-4 bg-white hover:bg-gray-50 px-4 py-3 border border-gray-200 rounded-lg font-medium text-gray-900 cursor-pointer'>
                      <svg
                        class='size-5 group-open:-rotate-180 transition-transform duration-300 shrink-0'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M19 9l-7 7-7-7'
                        ></path>
                      </svg>
                      <span>روز سوم</span>
                    </summary>
                  </details>
                </div>
                <div class='space-y-2'>
                  <details class='group [&amp;_summary::-webkit-details-marker]:hidden'>
                    <summary class='flex justify-between items-center gap-4 bg-white hover:bg-gray-50 px-4 py-3 border border-gray-200 rounded-lg font-medium text-gray-900 cursor-pointer'>
                      <svg
                        class='size-5 group-open:-rotate-180 transition-transform duration-300 shrink-0'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M19 9l-7 7-7-7'
                        ></path>
                      </svg>
                      <span>روز چهارم</span>
                    </summary>
                  </details>
                </div>
                <div class='space-y-2'>
                  <details class='group [&amp;_summary::-webkit-details-marker]:hidden'>
                    <summary class='flex justify-between items-center gap-4 bg-white hover:bg-gray-50 px-4 py-3 border border-gray-200 rounded-lg font-medium text-gray-900 cursor-pointer'>
                      <svg
                        class='size-5 group-open:-rotate-180 transition-transform duration-300 shrink-0'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M19 9l-7 7-7-7'
                        ></path>
                      </svg>
                      <span>روز پنجم</span>
                    </summary>
                  </details>
                </div>
                <div class='space-y-2'>
                  <details class='group [&amp;_summary::-webkit-details-marker]:hidden'>
                    <summary class='flex justify-between items-center gap-4 bg-white hover:bg-gray-50 px-4 py-3 border border-gray-200 rounded-lg font-medium text-gray-900 cursor-pointer'>
                      <svg
                        class='size-5 group-open:-rotate-180 transition-transform duration-300 shrink-0'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M19 9l-7 7-7-7'
                        ></path>
                      </svg>
                      <span>روز ششم</span>
                    </summary>
                  </details>
                </div>
                <div class='space-y-2'>
                  <details class='group [&amp;_summary::-webkit-details-marker]:hidden'>
                    <summary class='flex justify-between items-center gap-4 bg-white hover:bg-gray-50 px-4 py-3 border border-gray-200 rounded-lg font-medium text-gray-900 cursor-pointer'>
                      <svg
                        class='size-5 group-open:-rotate-180 transition-transform duration-300 shrink-0'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M19 9l-7 7-7-7'
                        ></path>
                      </svg>
                      <span>روز هفتم</span>
                    </summary>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-28 px-[6%] py-8 w-full'>
        <div className='flex justify-between items-center'>
          <button className='bg-[#EAEAEA] px-8 py-3 rounded-3xl text-sm cursor-pointer'>
            دیدن همه
          </button>

          <div className='text-end'>
            <h2 className='flex items-center gap-2 font-bold text-[#404040] text-[19px] md:text-3xl'>
              تور های مشابه
            </h2>
            <span className='block mt-2 ml-auto border-[#5264FF] border-b-2 w-12'></span>
          </div>
        </div>

        <div className='gap-y-10 md:gap-x-6 xl:gap-x-12 xl:gap-y-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16'>
          {places.map((place) => (
            <article
              key={place.id}
              className='relative bg-white p-8 border border-[#40404040] rounded-[35px]'
            >
              {place.discount && (
                <div className='-top-5 right-0 z-30 absolute flex flex-col justify-center items-center bg-[#FF9F45] shadow-lg rounded-full w-[78.6px] h-[78.6px] text-white discount-badge'>
                  <span className='font-bold text-[16px] leading-none'>
                    20%
                  </span>
                  <span className='text-[16px] leading-none'>تخفیف</span>
                </div>
              )}

              <figure className='relative w-full'>
                <Image
                  src={place.image}
                  width={380}
                  height={260}
                  alt={place.title}
                  className='rounded-[25px] w-full h-[240px] object-cover'
                />
              </figure>

              <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center gap-1 text-[#404040] text-sm'>
                  <span className='font-semibold text-[25px]'>
                    {place.rate}
                  </span>
                  <span className='text-[22px] text-yellow-400'>★</span>
                </div>
                <h3 className='font-medium text-[#404040] text-[28px]'>
                  {place.title}
                </h3>
              </div>

              <p
                className='mt-2 text-[17px] text-gray-400 text-start'
                dir='rtl'
              >
                <span>۳</span> روز و <span>۴</span> شب
              </p>

              <div className='flex justify-between items-center mt-4'>
                <button className='flex justify-center items-center bg-[#5264FF] rounded-full w-[45px] h-[45px] text-white text-2xl cursor-pointer'>
                  +
                </button>

                <div className='text-end'>
                  <span className='flex items-center gap-x-2 font-bold text-[#404040] text-lg'>
                    <span className='block mt-2 text-gray-400 text-xs'>
                      هرفرد
                    </span>
                    <span className='block text-[#404040] text-xs'>تومان</span>
                    {place.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
