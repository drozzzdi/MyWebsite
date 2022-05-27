import react, { useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './about.css';



function AboutUs(){

   useEffect(()=>{
       Aos.init({duration:1500});
   },[]);

    return(
        <div  className='containerAbout' id='sectionAboutUs'>
            <div data-aos="fade-left" className='objective'>
                <h2 className='h2About'>Tak działamy:</h2>
                <p  className='pAbout'>Zdajemy sobie sprawę jak bardzo zróżnicowane są poszczególne branże. 
                Każda z nich wymaga <span>indywidualnego</span> podejścia aby jak najlepiej sprostać oczekiwanią przyszłych klientów.
                Przykładamy wagę do każdego szczegółu tak aby tworzone przez nas produkty były na najwyzszym poziomie. 
                Dzisiaj internet jest jednym z głównych źródeł informacji, nie zwlekaj! <span>Pozwól się znaleźć!</span> </p>
            </div>
            <div data-aos="fade-right" className='expectations'>
                <h2 className='h2About'>Tego możesz od nas oczekiwać:</h2>
                <p className='pAbout'><span>Unikalnosć:</span> każdy z naszych projektów jest tworzony od podstaw przez nas. 
                Nie sprzedajemy powielanych, gotowych rozwiązań.</p>
                <p className='pAbout'><span>Responsive Web Design:</span> staramy się aby na każdym urządzeniu komfort 
                użytkowani był taki sam. Każdy produkt jest dostosowany do wyświetlania na 
                komputerach, laptopach, tabletach, telefonach.  </p>
                <p className='pAbout'><span>Poprawki:</span> przy każdym projekcie klient ma możliwość 
                dokonania trzech poprawek w cenie produktu. </p>
            </div>
        </div>
    )
}

export default AboutUs;