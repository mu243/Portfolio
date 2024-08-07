import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { IoMail } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { CONTACT } from "../constants";


const link = `mailto:${CONTACT.email}`

const NavBar = () => {
  return (
    
<nav className="flex items-center mb-20 justify-between py—6">
    <div className="flex flex-shrink-0 items-center">
    <img className="mx-2 w-10 scale-100" src={logo} alt="logo"/>
    </div>
    <div className="m-8 flex justify-center items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/siddharth-chandani/"> <FaLinkedin/> </a>
        <a href="https://github.com/siddharth-chandani"> <FaGithub/> </a>
        <a href={link}><IoMail/> </a>
        <a href="https://x.com/"> <BsTwitterX/> </a>
    </div>
</nav>
  )
}

export default NavBar
