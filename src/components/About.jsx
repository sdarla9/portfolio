import { ABOUT_TEXT } from '../constrants';
import { motion } from "framer-motion";
import Dataimage from '../assets/Logos/Data Analytics.jpg'
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About
        <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center w-80 h-60 justify-center">
            <img className='rounded-2xl' src={Dataimage} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start'>
            <div>

              <p className='my-2 maxw-w-xl py-6'>{ABOUT_TEXT}              </p>
              <div>
                <h2 className='text-green-500 font-bold'>SKILLS & APPLICATIONS</h2>
                <ul className='list-disc pl-7'>
                  <li>Extensive experience in FP&A, Cost Accounting, and Budgeting</li>
                  <li>Proficient in Salesforce, CRM, Advanced Excel, Macros (VBA), Power BI, and Power Query</li>
                  <li>Hands-on experience with MySQL database and Python</li>
                  <li>Expertise in Risk Assessment and mitigation for customers</li>
                  <li>
                    Strong working knowledge of various applications, including Salesforce, SAP, Advanced Excel,
                    Power BI, SQL, Macros, CRM, and other ERP systems
                  </li>
                </ul>
              </div>
            </div>


          </div>

        </motion.div>


      </div>
    </div>
  );
};

export default About;
