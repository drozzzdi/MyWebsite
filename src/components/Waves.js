import './waves.css';
import {ReactComponent as Wave} from '../waves.svg'

function Waves(){
    return(
        <div className="header">
        <div className="inner-header">
            <div className='tittle'>
               <h2>Tworzymy</h2>
               <h1 className='wavesH1'>Strony internetowe</h1>
               <p>Produkty dostosowane do Twoich potrzeb</p>
            </div>
            
        </div>
        <Wave/>
      
        </div>
    )
}

export default Waves;