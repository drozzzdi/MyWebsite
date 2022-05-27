import react, { useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './offer.css';

function Offer(){

    useEffect(()=>{
        Aos.init({duration:1500});
    },[]);
   
    return(
        <div className='cotenerOffer' id='sectionOffer'>
            <div className='cardOffer'>
            <div data-aos="fade-left" className='card' id='sectionCard'>
               <h4 className='cardH4'> Strony typu 'wizytówka': </h4>
               <p className='cardP'>Strona przeznaczona dla mikro i małych firm. 
                Ma za zadanie w prosty sposób przekazać najważniejsze informacje o firmię. 
                Wizytówka będzie najlepszym rozwiązaniem dla początkujących działalnośći.</p>
            </div>
            </div>
            <div className='onePageOffer'>
            <div data-aos="fade-right" className='onePage' id='sectionOnePage'>
               <h4 className='cardH4'> Strony typu 'OnePage': </h4>
               <p className='cardP'>Strona głowna stanowi całość serwisu, 
                    a rolę podstron (zakładek) stanowi efekt scrollowania. 
                    Dzięki temuczemu strona niejako przełączając się między 
                    pozycjami menu przewija się do odpowiednich treści. 
                    Idealne rozwiązanie dla małych firm. 
                    Rozwiązanie to z sukcesem może zastąpić stronę konwencjonalną.</p>
            </div>
            <div className='traiangularLeft1'></div>
            </div>
            <div className='multipageOffer'>
            <div data-aos="fade-left" className='multipage' id='sectionMultipage'>
               <h4 className='cardH4'> Strony typu 'multipage': </h4>
               <p className='cardP'>Składa się z wielu podstron, do których można wchodzić 
               za pośrednictwem menu nawigacyjnego.Dzięki temu rozwiązaniu nie trzeba 
               ograniczać informacji i treści, którą chce się przekazać. Tego typu strona 
               umożliwia dowolne rozbudowywanie w zależności od tego jakie są potrzeby. 
               Najlepiej sprawdzi się dla działalności cechującymi się dużą ilością produktów lub usług. 
               Świetnie funkcjonuje także w przypadku serwisu z poradami lub recenzjami.</p>
            </div>
            </div>
            <div className='storeOffer'>
            <div data-aos="fade-up" className='store' id='sectionStore'>
               <h4 className='cardH4'> Sklepy internetowe: </h4>
               <p className='cardP'>To strona, której głównym celem jest sprzedawanie towarów przez Internet. 
               Można ją przyrównać do wirtualnego katalogu, w którym składamy zamówienie. W przypadku sklepów 
               internetowych zyskują na znaczeniu cechy, które powinny mieć wszystkie strony www, takie jak 
               przejrzystość, łatwa nawigacja i atrakcyjny wygląd. Szczególnie moduł zakupowy należy 
               zaprojektować tak, aby maksymalnie ułatwiać klientowi dokonanie zamówienia. Intuicyjne powinno 
               być również poruszanie się po produktach oraz kategoriach, by droga zakupowa konsumenta była 
               krótka i jak najwygodniejsza. </p>
            </div>
            <div className='trapeze'></div>
            </div>
            <div className='clear'></div>

        </div>
    )
}

export default Offer;