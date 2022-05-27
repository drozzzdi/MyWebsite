import './carts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCircleUser, faDisplay, faFileLines, faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons';
import Link from 'react-scroll/modules/components/Link';

function Carts (){
    return(
        <div className='cartsPlates'>
            <h2 className='cartsH2'>OFERTA</h2>
        <div className='cartsContener'>
        
        <Link
                activeClass='active'
                to='sectionCard'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                <div className='trapez1'>
                <h4 className='trapez1H4'>Wizytówki</h4>
                <FontAwesomeIcon icon={faCircleUser} className='addressCard'></FontAwesomeIcon>
                </div>
        </Link>        
        <Link
                activeClass='active'
                to='sectionOnePage'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>   
            <div className='trapez2'>
                <h4 className='trapez2H4'>OnePage</h4>
                <FontAwesomeIcon icon={faFileLines} className='fileLines'></FontAwesomeIcon>
                
            </div>
        </Link>
        <Link
                activeClass='active'
                to='sectionMultipage'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>     
            <div className='trapez3' ><h4 className='trapez3H4'>Multipage</h4>
            <FontAwesomeIcon icon={faUsersBetweenLines} className='usersBetweenLines' ></FontAwesomeIcon><p></p>
            </div>
        </Link>
        <Link
                activeClass='active'
                to='sectionStore'
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}> 
            <div className='trapez4'><h4 className='trapez4H4'>Sklepy</h4>
            <FontAwesomeIcon icon={faDisplay} className='display'></FontAwesomeIcon><p></p>
            </div>
        </Link>
        </div>
        
        </div>
    )
}

export default Carts;