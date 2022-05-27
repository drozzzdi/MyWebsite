
import logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'react-scroll/modules/components/Link';
import './navigation.css';
import MobileNav from './MobileNav';
import DesctopNav from './DesctopNav';

function Navigation (){
    return(
        <div className='containerNav'>
        <MobileNav/>
        <DesctopNav/>            
        </div>
    )
}

export default Navigation;