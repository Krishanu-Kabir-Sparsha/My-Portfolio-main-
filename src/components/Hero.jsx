import {motion} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';

import dp from '../assets/dp.svg'; // Assuming dp.svg is in the assets folder

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col-reverse mx-auto">
      
      <div className="absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5 px-6">
        
        {/* Dot Line */}
        <div className="hidden md:flex flex-col justify-center items-center mt-5"> {/* Hide on small devices */}
          <div className="w-5 h-5 rounded-full bg-[#763af7]" />
          <div className="w-0.5 sm:h-80 h-60 bg-[#763af7]" />
        </div>

        {/* Description and Image */}
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          {/* Text Section */}
          <div className="order-2 md:order-1">
            <h1 className={`${styles.heroHeadText} text-slate-100`}>
              Hi, I'm <span className="text-[#a47bfd]">Krishanu Kabir</span>
            </h1>

            <p className={`${styles.heroSubText} mt-3 text-slate-100`}>
              I specialize in building responsive, user-friendly web <br className="sm:block hidden" /> applications,
              focusing on designing efficient APIs, <br className="sm:block hidden" /> database structures, and 
              deploying applications to various platforms.
            </p>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center items-center order-1 md:order-2">
            <img 
              src={dp} 
              alt="Profile" 
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover" // Increased sizes
            />
          </div>
        </div>
      </div>
      
      
      <div className='flex transform -translate-y-16 ' >
        <ComputersCanvas/>
      </div>

      <div className='absolute xs:bottom-8 bottom-30 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[28px] h-[52px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />

          </div>
        </a>

      </div>

      
      
    </section>
  );
};

export default Hero;