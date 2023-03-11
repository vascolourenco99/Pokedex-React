import "./Topbar.css";
import pokeball from "../images/pokeball.jpg"
import pokeballcolor from "../images/pokebalblack.png"

function Topbar() {
  return(
    <div className="title">
      <div className="title__left">
        <p>Pokedex</p>
        <div className="caught-seen">
          <div className="caught">
            <img
              src={pokeball}
              alt="pokeball"
              style={{width: "30px", marginRight: "10px"}}
            />
            <p>438</p>
          </div>
          <div className="seen">
            <img 
            src={pokeballcolor}
            alt="pokeball" style={{width:"30px", marginRight: "10px"}}/>
            <p>649</p>
          </div>
        </div>
      </div>
      <p style={{color:"white"}}></p>
    </div>
  )
}

export default Topbar