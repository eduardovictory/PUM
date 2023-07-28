import React, { useState } from 'react'
import FormLogin from '../components/FormLogin';
import './styles/Login.css';

const Login = () => {

  return (
    <>
        <div className="login__container">
            <div className="login-container__formulario">
                  <div className="login__logo">
                      <h2>Logo PUM</h2>
                      <h4>Inicie sesión</h4>
                  </div>
                  <FormLogin/>
            </div>
        </div>
        
    </>
  )
}

export default Login