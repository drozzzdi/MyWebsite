import './footer.css';
import {ReactComponent as Wave} from './waves.svg'

function Footer(){
    return(
        <div className="footerWave">
            <Wave/>
            <div className="footerInner">
            <div className='footerTittle'>
                <div>
                    <p className='footerContact'>Kontakt:</p>
                    <p className='footerContact'>+48 665 248 451</p>
                    <p className='footerContact'>9.00-17.00</p>
                    <p className='footerContact'>Laken@gmail.com</p>
                </div>
                <div>
                    <p className='footerOffer'>Oferta:</p>
                    <p className='footerOffer'>Strony-Wizytówki</p>
                    <p className='footerOffer'>One-Page</p>
                    <p className='footerOffer'>Multipage</p>
                    <p className='footerOffer'>Sklepy internetowe</p>
                </div>
            </div>
            <div className='footerEnd'>
                <p className='footerP'>Ta strona używa ciasteczek (cookies). 
                Korzystanie z witryny oznacza, że będą one zamieszczane w Państwa 
                urządzeniu końcowym. </p>
               <h2 className='footerH2'>Copyright © 2022 Laken. Wszelkie prawa zastrzeżone.</h2>
            </div>
            
        </div>
       
        </div>
    )
}
export default Footer;