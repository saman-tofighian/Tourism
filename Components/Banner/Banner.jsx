import Image from 'next/image';

export default function Banner() {
  return (
    <section className='mt-28 px-[6%] w-full'>
      <div className='flex justify-center w-full'>
        <div className='relative bg-[url("/img/banner.png")] bg-cover bg-center rounded-[54px] w-full max-w-[1200px] h-[260px] overflow-hidden'>
          <div className='z-10 relative flex flex-col justify-center items-center px-6 h-full text-center'>
            <div className='px-8 py-6 rounded-[24px] max-w-[700px]'>
              <h5 className='font-bold text-[32px] text-white md:text-[26px] leading-relaxed'>
                برنامه سفرکن را دانلود کنید تا از آخرین ویژگی‌های این برنامه در
                تلفن همراه بهره‌مند شوید
              </h5>
            </div>

            <div className='flex flex-wrap justify-center gap-4 mt-6'>
              <button className='flex items-center gap-2 bg-white shadow px-5 py-2 rounded-full cursor-pointer'>
                <Image
                  src='/img/bazar.png'
                  alt='bazar'
                  width={32}
                  height={32}
                />
                <span className='font-medium text-[#404040] text-sm'>
                  دریافت از بازار
                </span>
              </button>

              <button className='flex items-center gap-2 bg-white shadow px-5 py-2 rounded-full cursor-pointer'>
                <Image
                  src='/img/myket.png'
                  alt='myket'
                  width={32}
                  height={32}
                />
                <span className='font-medium text-[#404040] text-sm'>
                  دریافت از مایکت
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
