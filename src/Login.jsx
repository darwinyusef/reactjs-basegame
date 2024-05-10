import { React, useState, useEffect, useRef } from 'react'
import textCamara from '/camara.jpg'
import logoCamara from '/logoCamara.jpg'
import './login.css'

const Login = () => {

    return (
        <>
            {/*onSubmit={handleSubmit}*/}
            <form >
                <div className="container">
                    {/*puedes agregar la clase general-error*/}
                    <div className="login">
                        <div className="logo">
                            <img src={logoCamara} alt="" />
                            <img src={textCamara} alt="" />
                        </div>
                        {/*puedes agregar la clase error*/}
                        <div className="input">
                            <label>Email</label>
                            {/*ref={emailRef}*/}
                            <input type="text" name="email" placeholder='Escriba su email' />
                            <p className='hidden'>Error: email no encontrado</p>
                        </div>
                        {/*puedes agregar la clase error*/}
                        <div className="input">
                            <label>Password</label>
                            {/* ref={passRef} */}
                            <input type="password" name="password" placeholder='Escriba su password' />
                            <p className='hidden'>Error: login no encontrado</p>
                        </div>

                        <button type="submit" className='btn-login'>Ingresar</button>

                        <div className="loginFooter">
                            <span>Registrarse</span>
                            <span>Recuperar Contraseña</span>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login