import React from 'react'
import './styles.css'

export const Input = ({attribute, handleChange, param}) => {
    return (
        <div>
           <input
           id={attribute.id}
           name={attribute.name}
           placeholder={attribute.placeholder}
           onChange={(e)=> handleChange(e.target.name, e.target.value)}
           className="form__input"
           /> 
        </div>
    )
}
