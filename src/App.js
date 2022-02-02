import equilibrium from "./assets/equilibrium.jpg"
import ethe from "./assets/ethe.svg"
import clock from "./assets/clock.svg"
import iavatar from "./assets/iavatar.png"

import './App.css';

function App() {

  return (
    <div>
      

        <div className="card2">
          <div className="img3">
            <img className='imageCard'src={equilibrium} alt="photo equilibrium" aria-hidden="true"/> 
            </div>
            <div classname="txt4">
              <h2>Equilibrium #3429</h2>
              <p className="descript">Our Equilibrium collection promotes balance and calm.</p>
            </div>
        
            <div classname="txt5">
              <div classname="icones">
                <ul>
                <li><img className='ether'src={ethe} alt="photo ethe" aria-hidden="true"/>
                <span className="eth"> 0.041 ETH</span></li>
                <li><img className='clock'src={clock} alt="photo clock" aria-hidden="true"/>
                <span className="days"> 3 days letf</span></li></ul>
              </div>
            </div>
            <div class="trait"></div>
            <hr/>
            <div className="crea6">
              <div className="crea7">
            <p>Creation of <b>Jules Wyvern</b></p>
           </div>
            <div className="crea7">
            <img className="avatar" src={iavatar} alt="avatar" aria-hidden="true"/>
            </div>
          </div>
        </div>
        
      
    </div>
    )
}

export default App;
