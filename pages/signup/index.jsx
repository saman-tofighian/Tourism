import { motion } from 'framer-motion';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Toaster, toast } from 'sonner';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'لطفا شماره همراه خود را وارد کنید';
    } else if (!/^09\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = 'فرمت شماره همراه صحیح نیست';
    }

    if (!formData.password) {
      newErrors.password = 'لطفا رمز عبور خود را وارد کنید';
    } else if (formData.password.length < 6) {
      newErrors.password = 'رمز عبور باید حداقل ۶ کاراکتر باشد';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'لطفا تکرار رمز عبور را وارد کنید';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'رمز عبور و تکرار آن مطابقت ندارند';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast.error('لطفا اطلاعات را به درستی وارد کنید.');
    }
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

    toast.promise(promise, {
      loading: 'در حال ثبت اطلاعات...',
      success: () => {
        setIsLoading(false);
        return 'ثبت نام با موفقیت انجام شد! خوش آمدید.';
      },
      error: (err) => {
        setIsLoading(false);
        return 'خطا در برقراری ارتباط با سرور.';
      },
    });
  };

  const handleGoogleSignIn = async () => {
    if (isGoogleLoading || isLoading) return;
    setIsGoogleLoading(true);

    const googlePromise = new Promise((resolve) => setTimeout(resolve, 1500));

    toast.promise(googlePromise, {
      loading: 'در حال اتصال به گوگل...',
      success: 'اتصال به حساب گوگل موفقیت‌آمیز بود.',
      error: 'خطا در اتصال به گوگل.',
      finally: () => setIsGoogleLoading(false),
    });
  };

  return (
    <main
      className='flex justify-center items-center bg-white p-4 md:p-8 w-full min-h-screen font-sans text-[#404040]'
      dir='rtl'
    >
      <Toaster position='top-center' richColors dir='rtl' closeButton />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='bg-white mx-auto w-full max-w-[1440px]'
      >
        <div className='items-center gap-8 lg:gap-12 grid grid-cols-1 lg:grid-cols-12 h-full'>
          <div className='flex flex-col justify-center order-2 lg:order-1 col-span-1 lg:col-span-5 px-2 md:px-8 lg:pr-12'>
            <div className='space-y-4 mb-8 text-center lg:text-right'>
              <h1 className='font-bold text-[36px] md:text-[40px]'>
                خوش آمدید
              </h1>
              <h2 className='font-medium text-[24px] text-gray-500 md:text-[26px]'>
                ثبت نام
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className='space-y-5 mx-auto lg:mx-0 w-full max-w-[400px]'
            >
              <div className='relative'>
                <input
                  name='mobile'
                  type='text'
                  inputMode='tel'
                  placeholder='شماره همراه'
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full h-[60px] px-6 text-right border ${errors.mobile ? 'border-red-500 focus:ring-red-100' : 'border-[#E0E0E0] focus:border-blue-400 focus:ring-blue-50'} rounded-full text-lg outline-none transition-all duration-200 bg-white placeholder-[#A0A0A0]`}
                />
                {errors.mobile && (
                  <p className='mt-1 mr-4 text-red-500 text-xs'>
                    {errors.mobile}
                  </p>
                )}
              </div>

              <div className='relative'>
                <input
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='رمز عبور'
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full h-[60px] px-6 text-right border ${errors.password ? 'border-red-500 focus:ring-red-100' : 'border-[#E0E0E0] focus:border-blue-400 focus:ring-blue-50'} rounded-full text-lg outline-none transition-all duration-200 bg-white placeholder-[#A0A0A0]`}
                  style={{ direction: 'ltr', textAlign: 'right' }}
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='top-[18px] left-6 absolute outline-none text-gray-400 hover:text-gray-600 transition-colors'
                >
                  {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                </button>
                {errors.password && (
                  <p className='mt-1 mr-4 text-red-500 text-xs'>
                    {errors.password}
                  </p>
                )}
              </div>

              <div className='relative'>
                <input
                  name='confirmPassword'
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder='تکرار رمز عبور'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full h-[60px] px-6 text-right border ${errors.confirmPassword ? 'border-red-500 focus:ring-red-100' : 'border-[#E0E0E0] focus:border-blue-400 focus:ring-blue-50'} rounded-full text-lg outline-none transition-all duration-200 bg-white placeholder-[#A0A0A0]`}
                  style={{ direction: 'ltr', textAlign: 'right' }}
                />
                <button
                  type='button'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className='top-[18px] left-6 absolute outline-none text-gray-400 hover:text-gray-600 transition-colors'
                >
                  {showConfirmPassword ? (
                    <EyeOff size={24} />
                  ) : (
                    <Eye size={24} />
                  )}
                </button>
                {errors.confirmPassword && (
                  <p className='mt-1 mr-4 text-red-500 text-xs'>
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <button
                type='submit'
                disabled={isLoading || isGoogleLoading}
                className={`w-full h-[60px] mt-8 rounded-full text-white text-xl font-medium transition-all duration-300 flex items-center justify-center relative cursor-pointer
                  ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-[#4A90E2] hover:bg-blue-600 hover:shadow-lg active:scale-[0.98]'}`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className='ml-2 animate-spin' size={24} />
                    <span>در حال ثبت نام...</span>
                  </>
                ) : (
                  'ثبت نام'
                )}
              </button>

              <div className='relative flex justify-center items-center mt-8 mb-6'>
                <div className='absolute border-[#E0E0E0] border-t w-full'></div>
                <span className='z-10 bg-white px-4 font-medium text-[#A0A0A0] text-sm'>
                  وارد شدن با
                </span>
              </div>

              <button
                type='button'
                onClick={handleGoogleSignIn}
                disabled={isGoogleLoading || isLoading}
                className='flex justify-center items-center gap-3 bg-white hover:bg-gray-50 active:bg-gray-100 border border-[#E0E0E0] rounded-full w-full h-[60px] transition-all duration-200 cursor-pointer'
              >
                {isGoogleLoading ? (
                  <Loader2 className='text-gray-500 animate-spin' size={24} />
                ) : (
                  <>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
                      <path
                        d='M23.7663 12.2764C23.7663 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.7663 15.9274 23.7663 12.2764Z'
                        fill='#4285F4'
                      />
                      <path
                        d='M12.2399 24.0008C15.4765 24.0008 18.2059 22.9382 20.1944 21.1039L16.3274 18.1055C15.2516 18.8375 13.8626 19.252 12.2444 19.252C9.11378 19.252 6.45936 17.1399 5.50695 14.3003H1.5165V17.3912C3.55361 21.4434 7.7028 24.0008 12.2399 24.0008Z'
                        fill='#34A853'
                      />
                      <path
                        d='M5.50243 14.3003C5.00226 12.8099 5.00226 11.1961 5.50243 9.70575V6.61481H1.51649C-0.185507 10.0056 -0.185507 14.0004 1.51649 17.3912L5.50243 14.3003Z'
                        fill='#FBBC05'
                      />
                      <path
                        d='M12.2399 4.74966C13.9508 4.7232 15.6043 5.36697 16.8433 6.54867L20.2694 3.12262C18.0999 1.0855 15.2206 -0.0344664 12.2399 0.000808666C7.7028 0.000808666 3.55361 2.55822 1.5165 6.61481L5.50243 9.70575C6.45054 6.86173 9.10931 4.74966 12.2399 4.74966Z'
                        fill='#EA4335'
                      />
                    </svg>
                    <span className='font-medium text-[#404040] text-lg'>
                      Google
                    </span>
                  </>
                )}
              </button>
            </form>

            <div className='mt-10 lg:pl-14 text-sm text-center'>
              <span className='font-bold'>عضو سفرکن هستید؟ </span>
              <Link
                href='/login'
                className='font-bold text-blue-500 hover:underline'
              >
                ورود
              </Link>
            </div>
          </div>

          <div className='relative order-1 lg:order-2 lg:col-span-7 w-full h-[300px] md:h-[500px] lg:h-[760px]'>
            <Image
              src='/img/login.png'
              alt='تصویر ثبت نام'
              fill
              className='rounded-[40px] lg:rounded-[56px] object-cover'
              priority
            />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
