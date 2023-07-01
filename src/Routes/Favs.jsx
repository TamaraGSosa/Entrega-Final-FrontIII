import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../utils/Context";

const Favs = () => {
  
  const { state }= useContextGlobal();

  return (
    <div className={state.theme == 'light' ? "light main" : "dark main"}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.length == 0 ? 
        <h2>There are no dentists in Favorites</h2> :
        state.favs.map((fav) => 
        <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id}/>)}
      </div>
    </div>
  );
};

export default Favs;
