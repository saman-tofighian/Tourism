import { Eye, EyeOff, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({ mobile: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
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
    if (!formData.mobile.trim())
      newErrors.mobile = 'لطفا شماره همراه خود را وارد کنید';
    if (!formData.password)
      newErrors.password = 'لطفا رمز عبور خود را وارد کنید';

    if (formData.mobile && !/^09\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = 'فرمت شماره همراه صحیح نیست (مثال: 0912xxxxxxx)';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert('ورود با موفقیت انجام شد!');
    } catch (error) {
      console.error('Login error:', error);
      alert('خطا در ورود. لطفا مجددا تلاش کنید.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (isGoogleLoading || isLoading) return;

    setIsGoogleLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      alert('اتصال به گوگل با موفقیت انجام شد.');
    } catch (error) {
      console.error('Google sign-in error:', error);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <main
      className='flex justify-center items-center bg-white p-4 md:p-8 w-full min-h-screen font-sans'
      dir='rtl'
    >
      <div className='bg-white mx-auto px-[5%] lg:px-0 w-full max-w-[1440px]'>
        <div className='items-center gap-8 lg:gap-12 grid grid-cols-1 lg:grid-cols-12 h-full'>
          <div className='flex flex-col justify-center order-2 lg:order-1 col-span-1 lg:col-span-5 px-2 md:px-8 lg:pr-12 text-[#404040]'>
            <div className='space-y-8 mb-10 text-right'>
              <h1 className='font-bold text-[36px] md:text-[40px] text-center lg:text-right'>
                خوش آمدید
              </h1>
              <h2 className='font-medium text-[24px] md:text-[26px] text-center lg:text-right'>
                ورود
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className='space-y-6 mx-auto lg:mx-0 w-full max-w-[400px]'
            >
              <div className='relative'>
                <input
                  id='mobile'
                  name='mobile'
                  type='text'
                  inputMode='tel'
                  placeholder='شماره همراه'
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full h-[60px] px-6 text-right border ${errors.mobile ? 'border-red-500 focus:ring-red-200' : 'border-[#E0E0E0] focus:border-blue-400 focus:ring-blue-100'} rounded-full text-lg outline-none transition-all duration-200 bg-white placeholder-[#A0A0A0]`}
                />

                {errors.mobile && (
                  <p className='mt-2 mr-4 text-red-500 text-sm'>
                    {errors.mobile}
                  </p>
                )}
              </div>

              <div className='relative'>
                <input
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='رمز عبور'
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full h-[60px] px-6 text-right border ${errors.password ? 'border-red-500 focus:ring-red-200' : 'border-[#E0E0E0] focus:border-blue-400 focus:ring-blue-100'} rounded-full text-lg outline-none transition-all duration-200 bg-white placeholder-[#A0A0A0] ltr-grid`}
                  style={{ direction: 'ltr', textAlign: 'right' }}
                />

                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='top-[18px] left-5 absolute outline-none text-gray-400 hover:text-gray-600 transition-colors'
                  tabIndex='-1'
                >
                  {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                </button>

                {errors.password && (
                  <p className='mt-2 mr-4 text-red-500 text-sm'>
                    {errors.password}
                  </p>
                )}
              </div>

              <button
                type='submit'
                disabled={isLoading || isGoogleLoading}
                className={`w-full h-[60px] mt-8 rounded-full text-white text-xl font-medium transition-all duration-300 flex items-center justify-center relative cursor-pointer overflow-hidden
                  ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-[#4A90E2] hover:bg-blue-600 hover:shadow-lg active:scale-[0.98]'}`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className='ml-2 animate-spin' size={24} />
                    <span>در حال ورود...</span>
                  </>
                ) : (
                  'ارسال'
                )}
              </button>

              <div className='mt-4 text-center'>
                <Link
                  href='/forgot-password'
                  className='text-[#404040] text-sm'
                >
                  رمز عبور خود را فراموش کرده اید؟{' '}
                  <span className='font-medium text-blue-500 hover:underline transition-all'>
                    بازیابی رمز عبور
                  </span>
                </Link>
              </div>

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
                className={`w-full h-[60px] border border-[#E0E0E0] rounded-full flex items-center justify-center gap-3 transition-all duration-200 bg-white cursor-pointer
                 ${isGoogleLoading ? 'bg-gray-100 cursor-not-allowed' : 'hover:bg-gray-50 hover:border-gray-300 active:bg-gray-100'}`}
              >
                {isGoogleLoading ? (
                  <Loader2 className='text-gray-500 animate-spin' size={24} />
                ) : (
                  <>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
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
              <span className='font-bold'>حساب کاربری ندارید؟ </span>
              <Link
                href='/signup'
                className='font-bold text-blue-500 hover:underline transition-all'
              >
                ثبت نام
              </Link>
            </div>
          </div>

          <div className='relative order-1 lg:order-2 lg:col-span-7 w-full h-[300px] lg:h-[760px]'>
            <Image
              src='/img/login.png'
              alt='عکس صفحه ورود'
              fill
              className='rounded-[56px] object-cover'
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
