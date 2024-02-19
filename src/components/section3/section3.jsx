import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import smile from "../../assets/smile.png";
import flower from "../../assets/flower.png";
import leaf from "../../assets/leaf.png";
import "./section3.css";

const Section3 = () => {
    const ref = useRef(null)
    const isInView = useInView(ref);


    return (
        <div className='d-none hideSections1'>
            <div className='mt-5' ref={ref}>
                <motion.p
                    initial={{ x: -100, y: 100, fontSize: '10px', opacity: 0.1 }}
                    animate={isInView && { x: 0, y: 0, fontSize: '20px', opacity: 1, transition: { duration: 1 } }}
                    className='ps-4'>Built out of frustration</motion.p>
                <motion.h1
                    initial={{ x: -100, y: 100, fontSize: '10px', opacity: 0.1 }}
                    animate={isInView && { x: 0, y: 0, fontSize: '50px', opacity: 1, transition: { duration: 1 } }}
                    className='section2-heading ps-4'>Meet the ahead app
                </motion.h1>

            </div>
            <div className='row ps-4 section3-main'>
                <div className='col-6'>
                    <motion.img className='flower2'
                        initial={{ width: 0, height: 0, x: 220, y: 120 }}
                        animate={isInView && [{ rotate: "360deg", transition: { duration: 30, repeat: Infinity, repeatType: "loop", delay: 0 } },
                        { width: 70, height: 70, x: 190, y: 0, transition: { duration: 1, delay: 1 } }]}
                        src={flower} />
                    <motion.img
                        initial={{ y: 300, x: 100, rotate: "30deg", height: 10, width: 10 }}
                        animate={isInView && { y: 50, x: 150, rotate: "0deg", height: 150, width: 150, transition: { duration: 1 } }}
                        src={smile} />
                    <motion.img className='leaf2'
                        initial={{ x: 220, y: 200, width: 60, height: 60 }}
                        animate={{ x: 220, y: 100, width: 60, height: 60, rotate: "360deg", transition: { duration: 30, repeat: Infinity, repeatType: "loop", delay: 0 } }}
                        src={leaf} />
                </div>
                <motion.div
                    initial={{ y: 200, opacity: 0, width: "300px" }}
                    animate={isInView && { y: 0, opacity: 1, width: "400px", transition: { duration: 1 } }}
                    className='col-6 '>
                    <motion.p
                        initial={{ fontSize: "13px" }}
                        animate={isInView && { fontSize: "17px", transition: { duration: 1 } }}
                    >A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence. <br /> <br /> Think of it as a pocket cheerleader towards a better, more fulfilling.</motion.p>

                </motion.div>

            </div>
        </div>

    )


}

export default Section3