import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./EditarPerfil.css";

export const EditarPerfil = () => {

  const [usuarioActual, setUsuarioActual] = useState({})

  useEffect(() => {
    const usuarioActual = sessionStorage.getItem("current_user")
    setUsuarioActual(JSON.parse(usuarioActual))
  }, [])


  return (
    
   <div className="container__edit">
     <div className="edit__titulo"><h1>Mi perfil</h1> </div>
   <div className="edit__card">
  

   <label className="textE" htmlFor="us">User Name</label>
     <input type="text" id="userName" name="userName" placeholder={usuarioActual.username} /> 

     <label className="textE" htmlFor="age">Age</label>
     <input type="text" id="age" name="age" placeholder={usuarioActual.age}/>

     <label className="textE"  htmlFor="university">University</label>
     <input type="text" id="university" name="university" placeholder={usuarioActual.university}/> 

     <label className="textE"  htmlFor="career">Career</label>
     <input type="text" id="career" name="career" placeholder={usuarioActual.career}/> 

     <label className="textE"  htmlFor="semester">Semester</label>
     <input type="text" id="semester" name="semester" placeholder={usuarioActual.semester}/> 

    

      <div className="row">
      <button className="edit__button">
         Realizar
       </button>
    

       
      <Link to="/roomies">
       <button className="edit__button">
         Cancelar
       </button>      
        </Link>
      </div>
      <div className="row">
       
      </div>
    
     
       
    
   </div>
 </div>
  );
};
