import { React, useState, useEffect, useRef } from 'react'
import textCamara from '/camara.jpg'
import logoCamara from '/logoCamara.jpg'
import './login.css'

const Login = () => {
    const emailRef = useRef(null);
    const passRef = useRef(null);

    if (localStorage.getItem('login') == 'logueado') {
        window.location = "/"
    }
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/MesaDavisEnterprises/API_URL/main/USERS_DATA.json")
            .then((response) => response.json())
            .then((res) => {
                let info = res.filter((r) => {
                    let char = "T1 ";
                    if (String(r.user_name).search(char) != -1) {
                        return r
                    }
                })
                setUsers(info)
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents default form submission behavior

        const em = emailRef.current.value
        const ps = passRef.current.value

        const vEmail = validateEmail(em);
        let email = "";
        try {
            if (!vEmail) {
                email = null;
                alert('El email no es valido');
            }
        } catch (e) {
            console.log('El formato de email no es valido');
        }
        // si no hay error el email pasa y se carga para validación de la api de lo contrario detiene el proceso
        if (email == null) {
            return;
        }

        try {
            email = vEmail[0]
            let findEmail = users.find((res) => {
                return res.email == email && res.password == ps
            });
            if (findEmail === 'undefined') {
                alert('El usuario no ha sidio encontrado');
            } else {
                localStorage.setItem('login', 'logueado');
                console.log('aqui lo que sigue');
                window.location = "/"
            }

        } catch (e) {
            console.log(e, 'Error al encontrar el usuario usuario');
        }

    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
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
                            <input ref={emailRef} type="text" name="email" placeholder='Escriba su email' />
                            <p className='hidden'>Error: email no encontrado</p>
                        </div>
                        {/*puedes agregar la clase error*/}
                        <div className="input">
                            <label>Password</label>
                            <input ref={passRef} type="password" name="password" placeholder='Escriba su password' />
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