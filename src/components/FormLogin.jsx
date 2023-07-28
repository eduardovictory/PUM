import React, { useState } from 'react';
import './styles/FormLogin.css';

const FormLogin = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value
        }));
    };

    const fetchData = async () => {
        try {
            

            // const username = 'tu_usuario';
            // const password = 'tu_contra';

            // const data = {
            //     username: username,
            //     password: password
            // };

            // const response = await fetch('https://scol2.multipago.com.ar/prueba.php', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(data)
            // });

            // if (!response.ok) {
            //     throw new Error(`Error en la respuesta: ${response.status} ${response.statusText}`);
            // }

            // const responseData = await response.json();
            // console.log(responseData);
        } catch (error) {
            console.log('Error al obtener los datos:', error);
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        fetchData();
    }

  return (
      <form className="form-login__container" onSubmit={handleClick}>
          <div className="form-login__input">
              <input type="mail" name="email" placeholder='Ingrese su correo' onChange={handleChange}/> 
          </div>
          <div className="form-login__input">
              <input type="password" name="password" placeholder='*************' onChange={handleChange} /> 
          </div>
          <div className="form-login__button">
              <button>Ingresar</button>
          </div>
      </form>
  )
}

export default FormLogin