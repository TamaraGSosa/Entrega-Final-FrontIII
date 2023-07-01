import React from "react";
import { useState } from "react";
import { useContextGlobal } from "../utils/Context";


const Form = () => {
  const {theme, handleTheme}= useContextGlobal()
  const [name, setName]= useState("");
  const [mail, setMail]= useState ("");
  const [show, setShow]= useState (false)

  const onChangeName = (e)=> setName(e.target.value);
  const onChangeMail = (e)=> setMail(e.target.value);

  const validMail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;

  const onSubmitForm = (e) =>{
    e.preventDefault()
    if(name.length > 5 && validMail.test(mail)==true){
    console.log(name, mail);
    setShow(true)
  }else{
    alert ("Check your data: The name must have more than 5 letters and the email must be in a valid format");
    setShow(false)
  }}

  return (
    <div>
      <form onSubmit={onSubmitForm} className="form">
        <input type="text" placeholder="Ingrese su Nombre Completo" value={name} onChange= {onChangeName} required="required"></input>
        <input type="mail" placeholder="Ingrese su email" value={mail} onChange= {onChangeMail}  id= "mail" required="required"></input>
        <button type="submit" >Send</button>
      </form>
      {show &&
      <>
      <h4> Thanks {name}, we'll contact you via email as soon as possible.</h4>
      </>}
    </div>
  );
};

export default Form;
