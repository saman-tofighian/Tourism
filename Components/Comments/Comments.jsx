import Image from 'next/image';

export default function Comments() {
  return (
    <section className='mt-36 px-[6%] w-full'>
      <div className='flex justify-center lg:justify-end mb-10'>
        <h2 className='flex items-center gap-2 font-bold text-[#404040] text-[32px]'>
          <div className='inline-flex flex-col items-end gap-1'>
            <span className='flex items-center gap-2'>💬 نظرات</span>

            <span className='block border-[#5264FF] border-b-2 w-10' />
          </div>
        </h2>
      </div>

      <section className='gap-y-8 grid grid-cols-12 mt-6 w-full'>
        <div className='flex flex-col items-end col-span-12 p-5 border border-[#40404040] rounded-[40px]'>
          <figure className='flex items-center gap-x-2.5 px-4'>
            <figcaption className='flex flex-col gap-y-1'>
              <span className='font-bold text-[#5264FF] text-[14px]'>
                سارا محمدی
              </span>
              <span className='font-normal text-[#3C3C4380] text-[14px]'>
                @uharvey
              </span>
            </figcaption>
            <Image src='/img/c1.png' width={30} height={30} />
          </figure>
          <div className='mt-4 px-4 w-full text-end'>
            <p className='leading-8'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </div>
          <div className='flex justify-between items-center w-full'>
            <span>1403.1.12</span>
            <span className='flex items-center gap-x-3'></span>
          </div>
        </div>
      </section>
    </section>
  );
}
