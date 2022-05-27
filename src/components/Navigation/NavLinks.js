import Link from 'react-scroll/modules/components/Link';
import './navigation.css';


const NavLinks=(props)=>{
    return(
        <div>
            <div className='menuNav'>
            <div className='aboutUs' >
            <Link
                activeClass='active'
                to='sectionAboutUs'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={()=>props.isMobile && props.closeMobileMenu()}>
                <h3>O nas</h3>
                </Link>
            </div>
            <div className='offer' >
                <Link
                activeClass='active'
                to='sectionOffer'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={()=>props.isMobile && props.closeMobileMenu()}>
                <h3>Oferta</h3>
                </Link>
                
            </div>
            
            <div className='adress' >
            <Link
                activeClass='active'
                to='sectionContact'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={()=>props.isMobile && props.closeMobileMenu()}>
                <h3>Kontakt</h3>
                </Link>
            </div>
            <div className='wrapperButton' >
            <Link
                activeClass='active'
                to='sectionPrice'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={()=>props.isMobile && props.closeMobileMenu()}>
            <button className='valuation'>Ceny</button>
            </Link>
            </div>
            </div>
           
        </div>
    )
}

export default NavLinks;