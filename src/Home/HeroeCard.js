import React,{useState} from 'react';
import "../index.css";

export const HeroeCard = ({
    id,
    name,
    image,
    powerstats,
    biography,
    appearance
}) => {

const [team, setTeam] = useState(false)

const addToTeam = ()=>{
setTeam(true)
}
const removeOfTeam = ()=>{
  setTeam(false)
  }
  
    return (
      <div className='col-md-4 col-sm-6'>
      <div className={team ? "card  mx-3 text-center text-white bg-success bg-opacity-75 mb-4 shadow animate__animated animate__fadeIn": 
         "card mx-3 text-center text-dark mb-4 shadow animate__animated animate__fadeIn"
        }
        >
        <img src={image.url} className="card-img-top" alt={name} />
        <div className="card-body p-2">
          <h5 className="card-title text-dark fw-bold">{name}</h5>
          <hr />
          <p className={powerstats.intelligence > 65 ? "card-text text-success me-2 fw-bold": "card-text text-danger me-2 fw-bold"}>
            <span className="text-dark me-2">Intelligence:</span>
            { powerstats.intelligence}
          </p>
          <p className={powerstats.strength > 65 ? "card-text text-success me-2 fw-bold": "card-tex text-danger me-2 fw-bold"}>
            <span className="text-dark me-2">Strength:</span>
            { powerstats.strength}
          </p>
          <p className={powerstats.durability > 65 ? "card-text text-success me-2 fw-bold": "card-text text-danger me-2 fw-bold"}>
            <span className="text-dark me-2">Durability:</span>
            { powerstats.durability}
          </p>
          <p className={powerstats.power > 65 ? "card-text text-success me-2 fw-bold": "card-text text-danger me-2 fw-bold"}>
            <span className="text-dark me-2">Power:</span>
            { powerstats.power}
          </p>
          <p className={powerstats.speed > 65 ? "card-text text-success me-2 fw-bold": "card-text text-danger me-2 fw-bold"}>
            <span className="text-dark me-2">Speed:</span>
            { powerstats.speed}
          </p>
          <p className={powerstats.combat > 65 ? "card-text text-success me-2 fw-bold": "card-text text-danger me-2 fw-bold"}>
            <span className="text-dark me-2">Combat:</span>
            { powerstats.combat}
          </p>
          <p className="card-text text-dark me-2 fw-bold">
            <span className="text-dark me-2">Race:</span>
            { appearance.race}
          </p>
          <p className={biography.alignment == "good" ? "card-text text-success me-2 fw-bold": "card-text text-danger me-2 fw-bold"}>
            <span className="text-dark me-2">Alignment:</span>
            {biography.alignment}
          </p>
        </div>
{
  team ? 
<button id="rr" className='card-link btn btn-danger d-block text-white' onClick={removeOfTeam}>Remove of my team</button>
:<button id="dd" className='btn btn-primary-outline d-block text-dark' onClick={addToTeam}>Add to my team</button>
}

        <div className="card-footer bg-secondary text-white fw-bold">
            <div>{biography.publisher}</div>
        </div>
      </div>
      </div>

    )
}
