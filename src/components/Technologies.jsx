
import { motion } from "framer-motion";

import crm from '../assets/Logos/CRM.jpg'
import dataanalysis from '../assets/logos/Data Analysis.jpg'
import advancedExcel from "../assets/Logos/Advanced excel.jpg";
import fpa from "../assets/Logos/FPA.jpg";
import orderToCash from "../assets/Logos/Order to Cash.jpg";
import p2p from "../assets/Logos/P2P.jpg";
import pythonLogo from "../assets/Logos/Python-Logo.jpg";
import riskManagement from "../assets/Logos/Risk Management.jpg";
import salesforce from "../assets/Logos/Salesforce.jpg";
import sql from "../assets/Logos/SQL.jpg";
import powerBI from '../assets/Logos/Power-BI-.jpg'


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies</motion.h1>


      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        >
          <img src={advancedExcel} alt="" className="rounded-2xl w-32 h-20" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="w-[100px]"
        >
          <img src={dataanalysis} alt="" className="w-full rounded-2xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        >
          <img src={fpa} alt="" className="rounded-2xl w-32 h-20" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="w-[100px]"
        >
          <img src={crm} alt="" className="w-full rounded-2xl" />
        </motion.div>


        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        >
          <img src={orderToCash} alt="" className="rounded-2xl w-32 h-20" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="w-[100px]"
        >
          <img src={p2p} alt="" className="w-full rounded-2xl" />
        </motion.div>



        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        >
          <img src={pythonLogo} alt="" className="rounded-2xl w-32 h-20" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="w-[100px]"
        >
          <img src={salesforce} alt="" className="w-full rounded-2xl" />
        </motion.div>



        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        >
          <img src={riskManagement} alt="" className="rounded-2xl w-32 h-20" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="w-[100px]"
        >
          <img src={sql} alt="" className="w-full rounded-2xl" />
        </motion.div>


        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          
        >
          <img src={powerBI} alt="" className="rounded-2xl w-32 h-24 bg-slate-50" />
        </motion.div>

       

      </motion.div>

    </div>
  );
};

export default Technologies;
