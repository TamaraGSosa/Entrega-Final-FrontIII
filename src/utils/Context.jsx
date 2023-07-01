import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";


const ContextGlobal = createContext();

const initialState = {
  dentists: [], 
  dentistDetail: {}, 
  theme: "light", 
  favs: JSON.parse(localStorage.getItem('favs')) || []
}

const reducer = (state, action) =>{
  switch (action.type) {
    case "GET_ALL_DENTIST":
      return {...state, dentists: action.payload}
    case "GET_ONE_DENTIST":
      return {...state, dentistDetail: action.payload}
    case "HANDLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" }
    case "ADD_FAV":
      return {...state, favs: [...state.favs, action.payload]}
    case "QUIT_FAV":
            return {...state, favs: state.favs.filter(fav => fav.id != action.payload.id)
            }
    default:
      throw new Error();
  }
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer (reducer, initialState)
  const urlApi = `https://jsonplaceholder.typicode.com/users/`

  useEffect(() => {
    axios(urlApi).then(res => {
    dispatch({type: 'GET_ALL_DENTIST', payload: res.data})})
}, [urlApi])


  useEffect(()=> {
    console.log(state.favs)
    if(state.favs.length < 1) {
      localStorage.removeItem('favs')
    } else {
    localStorage.setItem('favs', JSON.stringify(state.favs))
    }
  },[state.favs])

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider
export const useContextGlobal = ()=> useContext(ContextGlobal)  

