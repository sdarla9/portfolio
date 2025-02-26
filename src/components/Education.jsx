import { EDUCATION } from "../constrants"
import {motion} from "framer-motion"
const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 text-center">
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
         className="my-20 text-center text-4xl">Education</motion.h1>
        <div>
            {EDUCATION.map((Educations,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className="w-full lg:w-1/4  ">
                      <div className="text-center flex flex-col items-center">
                      <p className="text-2xl text-purple-100">{Educations.Qualification}</p>
                      <img src={Educations.image} alt="" className="w-1/2  bg-transparent" />
                      </div>
                    </motion.div>

                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">
                        <span className="text-sm text-purple-100">{Educations.Branch}</span>
                        
                     </h6>
                     <span className="text-sm text-purple-100">{Educations.Institute}</span>
                     <p className="mb-4 text-neutral-400">{Educations.Board}</p>
                     <p className="text-sm text-purple-100">{Educations.CGPA}</p>
                    
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Education
