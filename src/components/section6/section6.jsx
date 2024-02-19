import { motion } from 'framer-motion';
import './section6.css'
import sun from "../../assets/sun.png"

const Section6 = () => {

    return <div className="hideSections1 d-none section6-container p-5 d-flex flex-column justify-content-center align-items-center">
        <p>Let your friends, family and co-workers (anonymously) rate your social skills.</p>
        <h1>Ever wondered what others think of you ?</h1>
        <motion.div
            initial={{ y: "-100px" }}
            animate={{ y: "-100px" }}
            className='sun-line'>
        </motion.div>
        <div className='row'>
            <div className='count-container text-center col-4 d-flex flex-column align-items-center'>
                <motion.p
                    initial={{ y: "20px" }}
                    animate={{ y: "40px" }}
                    className='count'>1</motion.p>
                <motion.img 
                
                    

                className='sun-img' src={sun} alt="" />
                <p>Answer questions on your social skills</p>
            </div>
            <motion.div className='count-container text-center col-4 d-flex flex-column align-items-center'>
                <motion.p
                    initial={{ y: "20px" }}
                    animate={{ y: "40px" }}
                    className='count'>2</motion.p>
                <img className='sun-img' src={sun} alt="" />
                <p>Let others anonymously answer the same questions about you</p>
            </motion.div>
            <div className='count-container text-center col-4 d-flex flex-column align-items-center'>
                <motion.p
                    initial={{ y: "20px" }}
                    animate={{ y: "40px" }}
                    className='count'>3</motion.p>
                <img className='sun-img' src={sun} alt="" />
                <p>Find out where you and others see things the same way - and where not!</p>
            </div>
        </div>


        <div className='anonymonos-card p-5 mt-5 d-flex flex-row justify-content-center align-items-center'>
            <div style={{ width: '100%' }} className='d-flex align-items-center'>
                <motion.div
                    animate={{ y: '-35px', x: "-40px" }}
                    className='line-name-1'>You</motion.div>
                <div className='anonymonos-round round-1'></div>
                <div className='anonymonos-line line-1'></div>
            </div>
            <div style={{ width: '100%' }} className='d-flex align-items-center'>
                <motion.div
                    animate={{ y: '35px', x: "20px" }}
                    className='line-name-2'>Anonymonos 1</motion.div>
                <div className='anonymonos-round round-2'></div>
                <div className='anonymonos-line line-2'></div>
            </div>
            <div style={{ width: '100%' }} className='d-flex align-items-center'>
                <motion.div
                    animate={{ y: '-35px', x: "0px" }}
                    className='line-name-3'>Anonymonos 2</motion.div>
                <div className='anonymonos-round round-3'></div>
                <div className='anonymonos-line'></div>
            </div>
            <div className='d-flex align-items-center'>
                <motion.div
                    animate={{ y: '35px' }}
                    className='line-name-4'>Anonymonos 3</motion.div>
                <div className='anonymonos-round round-4'></div>
            </div>

        </div>
    </div>
}

export default Section6;