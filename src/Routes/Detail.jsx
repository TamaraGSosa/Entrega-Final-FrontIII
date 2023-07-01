import { useContextGlobal } from '../utils/Context'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Detail = () => {
  
  const { state, dispatch }= useContextGlobal();
  const params = useParams()
  const urlID = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {

    axios(urlID).then(response => {
      console.log(response);
      dispatch ({type: 'GET_ONE_DENTIST', payload: response.data})
      state.theme == 'light' ? "light main" : "dark main"
    })
  })
  
  return (
    <div className={state.theme == 'light' ? "light main" : "dark main"}>
      <h1>Contact Detail Dentist</h1>
      
      <h3> {state.dentistDetail.name}</h3>
      <h3> {state.dentistDetail.email}</h3>
      <h3> {state.dentistDetail.phone}</h3>
      <h3> {state.dentistDetail.website}</h3>
    </div>
  )
}

export default Detail