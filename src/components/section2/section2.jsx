import { motion, useInView, } from 'framer-motion';
import { useRef, } from 'react';
import funny from "../../assets/funny.png";
import flower from "../../assets/flower.png";
import leaf from "../../assets/leaf.png";
import "./section2.css";

let a = 0;

const Section2 = () => {
    const ref = useRef(null)
    const isInView = useInView(ref);

    const ref2 = useRef(null)
    let isInView2 = useInView(ref2);

    if (isInView2) {
        const element = document.getElementById("horizontalScroll");
        let scrollFunction = (e) => {
            const deltaX = e.deltaX;
            const deltaY = e.deltaY;
            const isTouchpadScrolling = Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10;

            if (deltaY > 0) {
                if (isTouchpadScrolling) {
                    element.scrollTo(a, 0);
                    a += 1
                    if ((element.offsetWidth - 100) < a) {
                        document.querySelectorAll(".hideSections1").forEach(ele => {
                            ele.classList.remove("d-none")
                        });
                    }
                } else {
                    element.scrollTo(a, 0);
                    a += 50
                    if ((element.offsetWidth - 100) < a) {
                        document.querySelectorAll(".hideSections1").forEach(ele => {
                            ele.classList.remove("d-none")
                        });
                    }
                }
            }


        }
        window.addEventListener("wheel", (e) => {
            scrollFunction(e);

            if ((element.offsetWidth - 100) < a) {
            }
        });
    }


    return (
        <div>
            <div className='mt-5 d-flex' ref={ref}>
                <motion.h1
                    initial={{ x: -100, y: 100, fontSize: '10px', opacity: 0.1 }}
                    animate={isInView && { x: 0, y: 0, fontSize: '50px', opacity: 1, transition: { duration: 1 } }}
                    className='section2-heading ps-4'>Does this sound familiar...
                </motion.h1>
                <motion.img
                    initial={{ width: 80, height: 80, x: 1000, y: 100, rotate: '-90deg' }}
                    animate={isInView && { width: 80, height: 80, x: 0, y: 0, rotate: '0deg', transition: { duration: 1 } }}
                    src={funny} />
            </div>
            <div id='horizontalScroll' className='d-flex flex-row align-items-center familiar-images-container'>

                <div className='familar-cards card-1 me-4'>
                    <h5>You argue with a colleague</h5>
                    <p>You get angry and defective instead of staying open and working towards common ground.</p>
                </div>
                <div className='familar-cards card-2 me-4'>
                    <h5>You argue with a colleague</h5>
                    <p>You get angry and defective instead of staying open and working towards common ground.</p>
                </div>
                <motion.div
                    initial={{ rotate: '0deg' }}
                    animate={isInView && { rotate: '-5deg' }}
                    className='familar-cards card-3 me-4'>
                    <h5>You argue with a colleague</h5>
                    <p>You get angry and defective instead of staying open and working towards common ground.</p>
                </motion.div>
                <div className='familar-cards card-4 me-4 text-white'>
                    <h5>You attend a class reunion</h5>
                    <p>You compare yourself with your peers achievements, instead of making your self-judgement more independent of others.</p>
                </div>
                <div className='familar-cards card-5 me-4'>
                    <h5>You are at a lively dinner party</h5>
                    <p>You play on your phone, Instead of confidently approching strangers and stiking up a chat.</p>
                </div>
                <div className='familar-cards card-6 me-4'>
                    <h5>You hit dead end in a negotiation</h5>
                    <p>You get nervous, frazzled and frustrated, instead of staying optimistic and solution-oriented.</p>
                </div>
            </div>
            <div ref={ref2} className='d-flex justify-content-end flower'>
                <motion.img
                    initial={{ width: 75, height: 75 }}
                    animate={{ width: 75, height: 75, rotate: "360deg", transition: { duration: 30, repeat: Infinity, repeatType: "loop", delay: 0 } }}
                    src={flower} />
                <motion.img
                    initial={{ x: -120, y: 20, width: 60, height: 60 }}
                    animate={{ x: -120, y: 20, width: 60, height: 60, rotate: "360deg", transition: { duration: 30, repeat: Infinity, repeatType: "loop", delay: 0 } }}
                    src={leaf} />
            </div>
        </div>

    )


}

export default Section2