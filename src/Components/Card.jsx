import React from "react";
import { useState, useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useContextGlobal}from '../utils/Context'


const Card = ({ name, username, id }) => {

  const { state, dispatch } = useContextGlobal();

  const getFavs = () => {

    let favs = state.favs.filter(fav => fav.id == id);
    let isStored = favs == null || favs.length < 1 ? false : true;

    return isStored;
  }
  
  const [dentist, setDentist]= useState (getFavs())
  
  const addFav = ()=>{ 
    
    dispatch ({type: 'ADD_FAV', payload: 
    {name: name, username: username, id: id}})
    setDentist(true);

}
const removeFav = () => { 
  dispatch({type: 'QUIT_FAV', payload: {id: id}})
  setDentist(false);
}

  return (
    <div className="card">
          <img style={{ width: "200px" }} src="./images/doctor.jpg" alt="doctor" />
          <h6>Name : {name}</h6>
          <h6>Username : {username}</h6>
      <Link to={`/detail/${id}`}>
          <h6 className="moreInfo">Click for more info</h6>
      </Link>
        <button onClick={dentist ? removeFav : addFav} className="favButton" > {dentist ? "REMOVE FAV" : "ADD FAV"}</button>
    </div>
  );
};

export default Card;
