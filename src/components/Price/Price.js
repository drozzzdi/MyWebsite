import './price.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function Price(){
    return(
        <div className="priceContener">
            <div className='priceWiz'>

                <h3 className='priceH3'>Strona internetowa typu wizytówka.</h3>
                <div className='priceA'>Skonfiguruj swoje rozwiązanie, 
                wybierz szate graficzną oraz dodatkowe opcje</div>
                <div className='priceP'><span>700-1600</span> zł</div>
                <div className='priceDedline'>Termin realizacji: do 10 dni</div>
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} className='check'></FontAwesomeIcon>responsywna skalowalność</li>
                    <li><FontAwesomeIcon icon={faCheck} className='check'></FontAwesomeIcon>hosting w cenie</li>
                    <li><FontAwesomeIcon icon={faCheck} className='check'></FontAwesomeIcon>system CMS - edycja strony</li>
                    <li><FontAwesomeIcon icon={faCheck} className='check'></FontAwesomeIcon>wsparcie i pomoc techniczna</li>
                </ul>

            </div>
            <div className='priceOnePage' id='sectionPrice'>
                <h3 className='priceH3'>Strona internetowa typu OnePage.</h3>
                <div className='priceA'>Niewielka ale skuteczna wizytówka Twojej firmy 
                    w przyjaznym budżecie.</div>
                <div className='priceP'><span>1200-2000</span> zł</div>
                <div className='priceDedline'>Termin realizacji: do 16 dni</div>
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} className='check'></FontAwesomeIcon>motyw autorski lub komercyjny</li>
                    <li><FontAwesomeIcon icon={faCheck} className='check'></FontAwesomeIcon>responsywna skalowalność</li>
                    <li><FontAwesomeIcon icon={faCheck} className='check'></FontAwesomeIcon>hosting w cenie</li>
                    <li><FontAwesomeIcon icon={faCheck} className='check'></FontAwesomeIcon>wsparcie i pomoc techniczna</li>
                </ul>

            </div>
            <div className='priceMultipage'>
                <h3 className='priceH3'>Strona internetowa typu Multipage.</h3>
                <div className='priceA'>Profesjonalna strona firmowa typu Multipage dla małych, 
                średnich oraz dużych firm.</div>
                <div className='priceP'><span>2500-3500</span> zł</div>
                <div className='priceDedline'>Termin realizacji: do 25 dni</div>
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} className='check'></FontAwesomeIcon>integracja z Social Media</li>
                    <li><FontAwesomeIcon icon={faCheck} className='check'></FontAwesomeIcon>responsywna skalowalność</li>
                    <li><FontAwesomeIcon icon={faCheck} className='check'></FontAwesomeIcon>wsparcie i pomoc techniczna</li>
                    <li><FontAwesomeIcon icon={faCheck} className='check'></FontAwesomeIcon>hosting w cenie</li>
                </ul>

            </div>
            <div className='priceShop'>
                <h3 className='priceH3'>Strona internetowa typu: Sklep</h3>
                <div className='priceA'>Stwórz swoj sklep internetowy, 
                wybierz szate graficzną oraz katalog produktów</div>
                <div className='priceP'><span>3000+</span> zł</div>
                <div className='priceDedline'>Termin realizacji: do uzgodnienia</div>
                <ul>
                <li><FontAwesomeIcon icon={faCheck} className='check'></FontAwesomeIcon>konfiguracja produktów</li>
                    <li><FontAwesomeIcon icon={faCheck} className='check'></FontAwesomeIcon>integracja z Social Media</li>
                    <li><FontAwesomeIcon icon={faCheck} className='check'></FontAwesomeIcon>wsparcie i pomoc techniczna</li>
                    <li><FontAwesomeIcon icon={faCheck} className='check'></FontAwesomeIcon>responsywna skalowalność</li>
                    <li><FontAwesomeIcon icon={faCheck} className='check'></FontAwesomeIcon>hosting w cenie</li>
                    <li><FontAwesomeIcon icon={faCheck} className='check'></FontAwesomeIcon>przygotowanie grafik na stronę</li>
                    
                </ul>

            </div>

        </div>
    )
}

export default Price;