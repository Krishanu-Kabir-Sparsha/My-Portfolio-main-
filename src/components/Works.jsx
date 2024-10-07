import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {styles} from "../styles";
import {github} from "../assets";
import {SectionWrapper} from "../hoc";
import {projects} from "../constants";
import {fadeIn, textVariant} from "../utilities/motion";


const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
        <Tilt 
          options={{
            max: 45,
            scale: 1,
            speed: 445
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[240px]">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover rounded-2xl " 
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              {/* Github Link */}
              <div
                onClick={()=> window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img  
                  src={github} 
                  alt="github"
                  className="w-1/2 h-1/2 object-contain" 
                />

              </div>

              {/* Live Demo */}
              {/* <div
                onClick={()=> window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img  
                  src={github} 
                  alt="github"
                  className="w-1/2 h-1/2 object-contain" 
                />
              </div> */}

            </div>
          </div>

          <div className="mt-5">
              <h3 className="text-white font-semibold text-[25px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p 
                  key={tag.name} 
                  className={`text-[14px] ${tag.color}`}>

                    #{tag.name}

                </p>
              ))}
          </div>

        </Tilt>
      </motion.div>
    )
}


const Works = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Work so far..
        </p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
          <motion.p 
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[18px] max-w-3xl leading-[30px]"
          >
            The following projects showcases my skills and few experiences through the examples of my work. Each project is described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively. 
          </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-8">
        {projects.map((project,index)=>(
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
        
          />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Works, "");