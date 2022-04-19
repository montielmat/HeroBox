import React, { useState, useEffect } from "react";
import "./index.css";

import { getHeros } from "./helpers/getHeros";
import { HeroeCard } from "./Home/HeroeCard";

const App = () => {
  const [hero, setHero] = useState([]);

  const [herosearch, setHeroSearch] = useState([]);

  const [formVal, setFormVal] = useState({ name: "" });

  const { name } = formVal;

  const handleChange = ({ target }) => {
    setFormVal({
      ...name,
      name: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (name) {
        getHeros(name).then((data) => {
          setHeroSearch(data.results);
        });
        setFormVal({
          ...name,
          name: "",
        });
      } else {
        console.log("esta vacio el campo!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setFormVal({
      ...name,
      name: "",
    });
  },[]);

  useEffect(() => {
    getHeros("batman")
    .then((data) => {
      setHero(data.results);
    });
  },[hero]);


  return (
    <div id="cont" className="container-md shadow bg-light text-white p-2">

      <h1 className="text-center text-dark rounded p-3">
        HeroBox
      </h1>


      <form onSubmit={handleSubmit} className="d-flex justify-content-center">
        <input
          type="search"
          onChange={handleChange}
          value={name}
          name="name"
          className="form-control mb-2 text-center shadow-sm w-50"
          placeholder="search a name"
        />
      </form>

      <div className="mt-4 row w-100 justify-content-center">
        {herosearch ? (
          herosearch.map( h => (
            <HeroeCard key={h.id} {...h} />
          ))
        ) : 
          <h5 className="text-white bg-danger rounded shadow p-3 text-center animate__animated animate__shakeX">
            Ups! An Error has been ocurred wrong name
          </h5>
        }

        {hero
          ? hero.map((d) => (
            <HeroeCard key={d.id} {...d} />
            ))
          : ""}
      </div>

    </div>
  );
};

export default App;
