import NavLinks from "./NavLinks";
import './navigation.css';
import logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';

const MobileNav=()=>{

    const [open, setOpen]=useState(false);

    const hamburgerIcon=<FontAwesomeIcon icon={faBars}  
                        onClick={()=>setOpen(!open)} 
                        className='burgerItem' >
                        </FontAwesomeIcon>
    const closeIcon=<FontAwesomeIcon icon={faXmark}  
                    onClick={()=>setOpen(!open)} 
                    className='closeItem' >
                    </FontAwesomeIcon>

    const closeMobileMenu= ()=>setOpen(false);
    return(

         <nav className="mobileNav">
             <div className='logo'>
                <img src={logo} alt="logo"/>
            </div>
                    
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>
    );
}

export default MobileNav;