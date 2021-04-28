import React from 'react'
import FooterAuth from './FooterAuth'
import InputFlotting from './InputFlotting'
import './Login.scss'

const SingUpAction = (props) => {
    var FooterAuthProps = {
        message: 'o Inicia Sesión con'
    }
    return (
        <>
            <div className="row align-center mt-1 px-1">
                <div className="col-12">
                    <InputFlotting descLabel="Nombre completo" name="fullname" type="text" id="fullname" placeholder="John Perez" />
                    <InputFlotting descLabel="Correo electrónico" name="username" type="email" id="email" placeholder="Ejemplo. john@gmail.com" />
                    <InputFlotting descLabel="Contraseña" type="password" name="password" id="password" placeholder="Al menos 8 caracteres"/>
                </div>
            </div>

            <FooterAuth {...FooterAuthProps}/>
            <div className="row justify-content-center mt-4">
                <button className="btn btn-primary custom-btn-login" type="button">REGISTRARME</button>
            </div>
        </>
    )
}

export default SingUpAction