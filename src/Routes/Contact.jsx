import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../utils/Context'

const Contact = () => {

  const {state}= useContextGlobal();

  return (
    <div className={state.theme == 'light' ? "light main" : "dark main"}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact