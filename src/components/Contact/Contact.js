import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'

function Contact(){
    return(
        <div className='contactConteiner' id='sectionContact'>
            <div className='contactText'>
                <h2 className='contactH2'>
                    Kontakt
                </h2>
                <h3 className='contactH3'>
                    Masz pytania? Zapraszamy do kontaktu! Chętnie omówimy Twój projekt.
                </h3>
                <p className='contactP'>
                     W treści e-maila proszę o podanie kilku informacji, 
                     które pozwolą na przygotowanie oferty dopasowanej do Państwa potrzeb. 
                     Przydatne będą informacje jakiej tematyki dotyczy strona www, 
                     planowana liczba zakładek/podstron (np. Strona główna, O firmie, Oferta, Cennik, Kontakt), 
                     inne strony internetowe, które się Państwu podobają. 
                     Czy mają Państwo już wykupioną domenę czy serwer ?</p>
            </div>
            <div className='contactBlok'>
                <div className='contactEmail'><FontAwesomeIcon icon={faEnvelope} className='email'></FontAwesomeIcon><div>Laken@gmail.com</div></div>
                <div className='contactTel'><FontAwesomeIcon icon={faPhone} className='phone'></FontAwesomeIcon><div>+48 665 248 451</div></div>
                <div className='contactHours'><FontAwesomeIcon icon={faClockRotateLeft} className='clock'></FontAwesomeIcon><div>9.00-17.00</div></div>
            </div>
        </div>
    )
}

export default Contact;