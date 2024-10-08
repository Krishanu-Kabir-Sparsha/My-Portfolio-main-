import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utilities/motion";


// this is a component that will instantly return. A function returning a function ! 
const SectionWrapper = (Component, idName) => 
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >

                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component/>
            </motion.section>
        )

}

export default SectionWrapper;
