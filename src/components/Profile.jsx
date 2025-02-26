import { fullName, Profile_Summary, roles } from "../constrants";
import logo from "../assets/Profile pic.jpg"
import { motion } from "framer-motion";
const container = (delay)=>({
  hidden:{x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay:delay}
  },
});

const Profile = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      
      <div className="flex flex-wrap lg:flex-nowrap ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            < motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-4xl  tracking-tight lg:mt-10 lg:text-7xl ">
              {fullName}
            </motion.h1>
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
             className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              {roles}
            </motion.span>

            <p className="mt-2 font-bold">
            Professional Summary:
            </p>
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
             className="my-2 maxw-w-xl">
              {Profile_Summary}
            </motion.p>
          </div>
        </div>
        <div className="w-full  lg:w-1/2 lg:p-8">
          <div className="flex justify-end lg:justify-center ml-4">
            <motion.img initial={{x:100,opacity:0}} 
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            src={logo} alt="profilePic" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
