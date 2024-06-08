import logo from '../assets/shared/logo.svg';
import { NavItem } from '../styledcomponents';

const NavBar = () => {
  return (
    <nav className='flex w-full items-center justify-center'>
        <div className='flex-1 flex items-center mt-8 gap-10 ml-12 z-20'>
            <img src={logo} className='w-[48px] h-[48px]'/>
            <hr className='w-full relative border-[1.4px] border-white/[0.2] left-5'/>
        </div>
        <ul className='flex items-center gap-7 h-[100px] mt-8 justify-start flex-1 px-5 pl-[110px] z-10 bg-white/[0.05] backdrop-blur-xl'>
            <NavItem><span>00</span> HOME</NavItem>
            <NavItem><span>01</span> DESTINATION</NavItem>
            <NavItem><span>02</span> CREW</NavItem>
            <NavItem><span>03</span> TECHNOLOGY</NavItem>
        </ul>
    </nav>
  )
}

export default NavBar;