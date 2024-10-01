import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utilities/motion';
import { SectionWrapper } from '../hoc';




const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
          <div 
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}

            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[285px] flex justify-evenly items-center flex-col'
            
            >
              <img src={icon} alt={title}
              className='w-16 h-16 object-contain' />

              <h3 className='text-slate-100 text-[22px] font-extrabold text-center'>{title}</h3>

          </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='mt-8'>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary tex-[18px] max-w-3xl leading-[30px]'
      >
        I am a versatile Software Developer with a solid background in both front-end and back-end development, specializing in JavaScript and the MERN stack. With experience in building responsive, user-friendly web applications, I focus on designing efficient APIs, structuring databases, and deploying scalable solutions across platforms. My skill set includes modern frameworks like Tailwind CSS and expertise in creating full stack solutions that integrate seamless user interfaces with robust server-side architectures. I thrive on problem-solving and continuously learning, ensuring that each project is built to be both efficient and future-proof while meeting client and business needs.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-11'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");