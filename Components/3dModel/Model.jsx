import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  useGLTF,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Suspense } from 'react';

function AirplaneModel() {
  const { scene } = useGLTF('/img/airplane.glb');
  return (
    <primitive object={scene} scale={3.3} rotation={[0, -Math.PI / 2, 0]} />
  );
}

export default function PreCommentSection() {
  return (
    <section className='items-center gap-12 grid grid-cols-1 lg:grid-cols-2 mt-32 px-[6%] w-full overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='order-2 lg:order-1 text-right'
        dir='rtl'
      >
        <div className='inline-block bg-blue-50 mb-4 px-4 py-1 rounded-full font-bold text-[#5264FF] text-sm'>
          آماده سفر هستید؟
        </div>
        <h2 className='mb-6 font-black text-[#404040] text-4xl md:text-5xl leading-[1.3]'>
          پروازی آرام به سوی <br />
          <span className='text-[#5264FF]'>بهترین خاطرات</span>
        </h2>
        <p className='mb-8 max-w-xl text-gray-500 text-lg leading-9'>
          قبل از اینکه نظرات همسفران ما را در بخش پایین بخوانید، بدانید که ما
          برای هر ثانیه از سفر شما برنامه‌ریزی کرده‌ایم. با ما، فاصله شما با
          مقصد محبوبتان فقط یک کلیک است.
        </p>

        <div className='flex flex-wrap justify-start gap-4'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-[#5264FF] shadow-blue-200 shadow-xl px-10 py-4 rounded-[20px] font-bold text-white cursor-pointer'
          >
            رزرو اولین بلیت
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className='bg-white px-10 py-4 border-2 border-gray-100 rounded-[20px] font-bold text-gray-500 cursor-pointer'
          >
            مشاهده مقاصد
          </motion.button>
        </div>
      </motion.div>

      <div className='relative order-1 lg:order-2 w-full h-[500px]'>
        <div className='top-1/2 left-1/2 -z-10 absolute bg-[#5264FF15] blur-[100px] rounded-full w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2' />

        <Canvas shadows>
          <ambientLight intensity={0.7} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            castShadow
            intensity={2}
          />
          <pointLight
            position={[-10, -10, -10]}
            color='#5264FF'
            intensity={1.5}
          />

          <Suspense
            fallback={
              <Html
                center
                dir='rtl'
                className='font-bold text-[#5264FF] whitespace-nowrap'
              >
                در حال آماده‌سازی پرواز...
              </Html>
            }
          >
            <PresentationControls rotation={[0.3, 0.9, 0]}>
              <Float speed={3} rotationIntensity={1} floatIntensity={1.5}>
                <group position={[0, -1, 0]}>
                  <AirplaneModel />
                </group>
              </Float>
            </PresentationControls>

            <ContactShadows
              position={[0, -2.5, 0]}
              opacity={0.4}
              scale={20}
              blur={3}
              far={4.5}
            />
          </Suspense>
          <Environment preset='city' />
        </Canvas>
      </div>
    </section>
  );
}
useGLTF.preload('/img/airplane.glb');
