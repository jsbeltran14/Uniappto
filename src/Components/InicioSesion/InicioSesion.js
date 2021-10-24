import React, {useState} from 'react';
import { Input } from "../Input/Input";
import './styles.css'

export const InicioSesion = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(name,value){

        if(name==='usuario'){
            setUser(value);
        }else{
            setPassword(value);
        }

    }

    function handleSubmit(){
        let account = {user, password}
        if(account){
            console.log('account: ', account)
        }
    }

    return (
        <div className="container__login">
            <div className="login__titulo">
                <h1>Inicia Sesion</h1>
            </div>
            <div className="login__card">
                
                <h2>Email o Telefono</h2>
                <Input 
                attribute={{
                    id:'usuario',
                    name:'usuario',
                    type:'text',
                    placeholder:'Ingrese su Email o Numero'
                }}    
                handleChange={handleChange}
                />
                <h2>Contraseña</h2>
                <Input
                attribute={{
                    id:'contraseña',
                    name:'contraseña',
                    type:'text',
                    placeholder:'Ingrese su contraseña'
                }}
                handleChange={handleChange}
                />
                <button onClick={handleSubmit} className="login__button">Ingresar</button>

            </div>
        </div>
    )
}
