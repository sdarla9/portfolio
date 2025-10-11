import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return <nav className=" flex items-center justify-between ">
    <div className="  flex flex-shrink-0 items-center">
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='https://www.linkedin.com/in/srihari-darla-021a97137/'><FaLinkedin/></a>
        <a href='https://github.com/sdarla9/'><FaGithub/></a>
        
     
    </div>
  </nav>
   
}
 
export default Navbar
