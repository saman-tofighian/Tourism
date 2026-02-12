import Image from 'next/image';

export default function Login() {
  return (
    <section className='px-[6%] py-10 w-full'>
      <div className='grid grid-cols-12 w-full'>
        <figure className='col-span-7'>
          <Image
            src='/img/login.png'
            alt='loginImage'
            width={856}
            height={912}
            className='rounded-[56px]'
          />
        </figure>
        <div className='col-span-5'>
          <span className='font-bold text-[#404040] text-[36px]'>
            خوش آمدید
          </span>
        </div>
      </div>
    </section>
  );
}
