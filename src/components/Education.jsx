import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import {educations} from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utilities/motion";




const EducationCard = ({education}) => {
   return (

    <VerticalTimelineElement 
    contentStyle={{background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date = {education.date}
    iconStyle={{background: education.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src={education.icon}
          alt={education.institution_name} 
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
      <div>
        <h3 className="text-slate-50 text-[24px] font-bold">{education.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{margin:0}}>{education.institution_name}</p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {education.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
  </VerticalTimelineElement>

   );
};

const Education = () => {
  return (
    <>
    {/* Education Section */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Academic Journey</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
          <VerticalTimeline>

            {educations.map((education, index) => (
              <EducationCard key={index} education={education}/>
            ) )}

          </VerticalTimeline>
      </div>


    </>
  )
}

export default SectionWrapper(Education, "academy");