import Image from 'next/image';

const features = [
  {
    title: 'رزرو آنلاین',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    img: '/img/singleplane.png',
  },
  {
    title: 'ضمانت بهترین قیمت',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    img: '/img/dollar.png',
  },
  {
    title: 'پشتیبانی ۲۴ ساعته',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    img: '/img/clock.png',
  },
];

export default function WhyTravel() {
  return (
    <section className='mt-32 px-[6%] w-full'>
      <div className='flex justify-end mb-10'>
        <h2 className='flex items-center gap-2 font-bold text-[#404040] text-[32px]'>
          <span className='text-red-500 text-3xl'>؟</span>
          چرا سفر کنم
        </h2>
      </div>

      <div className='bg-[#5264FF] p-[48px] rounded-[56px]'>
        <div className='flex flex-wrap xl:flex-nowrap justify-center xl:justify-between gap-8'>
          {features.map((item, i) => (
            <div key={i} className='w-full md:w-80 xl:w-[32%]'>
              <div
                className='flex flex-col items-center bg-[#7A89FF] shadow-xl px-8 py-12 text-white text-center'
                style={{
                  clipPath:
                    'polygon(6% 0%, 94% 0%, 100% 6%, 100% 94%, 94% 100%, 6% 100%, 0% 94%, 0% 6%)',
                }}
              >
                <figure className='flex justify-center items-center bg-[#3E5CFB73] shadow-md mb-5 rounded-full w-[66px] h-[66px]'>
                  <Image
                    src={item.img}
                    width={42}
                    height={42}
                    className='w-auto h-[42px]'
                    alt={item.title}
                  />
                </figure>

                <h3 className='mb-5 font-bold text-xl'>{item.title}</h3>

                <p
                  className='opacity-90 max-w-[200px] text-sm leading-7'
                  dir='rtl'
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
