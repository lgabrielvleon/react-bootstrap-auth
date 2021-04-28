import React from 'react'
import FooterAuth from './FooterAuth'
import InputFlotting from './InputFlotting'
import './Login.scss'

const LoginAction = (props) => {
    
    var FooterAuthProps = {
        message: 'O Únanse con'
    }

    return (
        <>
            <div className="row align-center mt-1 px-1">
                <div className="col-12">
                    <InputFlotting descLabel="Correo electrónico" name="username" type="email" id="email" placeholder="Ejemplo. john@gmail.com" />
                    <InputFlotting descLabel="Contraseña" type="password" name="password" id="password" placeholder="Al menos 8 caracteres"/>
                </div>
            </div>

            <div className="row mb-2">
                <div className="col-12 text-right">
                    <a href="#!" className="olvido-clave">¿Has olvidado tu contraseña?</a>
                </div>
            </div>

            <div className="row justify-content-center">
                <button className="btn btn-primary custom-btn-login" type="button">INICIAR SESIÓN</button>
            </div>
            <FooterAuth {...FooterAuthProps}/>
        </>
    )
}

export default LoginAction