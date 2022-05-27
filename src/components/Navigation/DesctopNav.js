import NavLinks from "./NavLinks";
import './navigation.css';
import logo from '../../img/logo.png';

const DesctopNav=()=>{
    return(
        <nav className="desctNav">
            <div className='logo'>
                <img src={logo} alt="logo"/>
            </div>
            <NavLinks/>
        </nav>
        
    );
}
export default DesctopNav;