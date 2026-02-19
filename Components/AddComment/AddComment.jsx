import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { IoSend } from 'react-icons/io5';

export default function AddComment() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className='mt-20 px-[6%] w-full' dir='rtl'>
      <div className='flex justify-center items-center mb-8'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFormOpen(!isFormOpen)}
          className='flex items-center gap-2 bg-[#5264FF10] hover:bg-[#5264FF20] px-6 py-3 rounded-2xl font-bold text-[#5264FF] transition-colors cursor-pointer'
        >
          <IoIosAddCircleOutline size={24} />
          {isFormOpen ? 'بستن فرم' : 'نوشتن نظر'}
        </motion.button>
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className='mb-12 overflow-hidden'
          >
            <div className='bg-gray-50 p-8 border border-[#5264FF40] border-dashed rounded-[40px]'>
              <div className='gap-4 grid grid-cols-1 md:grid-cols-2 mb-4'>
                <input
                  type='text'
                  placeholder='نام شما'
                  className='bg-white px-6 py-4 border border-transparent focus:border-[#5264FF] rounded-[20px] outline-none transition-all'
                />
                <input
                  type='text'
                  placeholder='ایمیل'
                  className='bg-white px-6 py-4 border border-transparent focus:border-[#5264FF] rounded-[20px] outline-none transition-all'
                />
              </div>
              <textarea
                placeholder='متن پیام شما...'
                rows={4}
                className='bg-white mb-4 p-6 border border-transparent focus:border-[#5264FF] rounded-[25px] outline-none w-full transition-all resize-none'
              />
              <div className='flex justify-center'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='flex items-center gap-2 bg-[#5264FF] px-10 py-3 rounded-full font-bold text-white cursor-pointer'
                >
                  ارسال نظر
                  <IoSend size={18} className='rotate-180' />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
