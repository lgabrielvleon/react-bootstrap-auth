import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons'
import './FooterAuth.scss'

const FooterAuth = (props) =>{

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="my-2 mt-4 footer-auth-message">- {props.message} -</p>
                        <div className="row my-4 justify-content-center">
                            <FontAwesomeIcon className="mx-2" size="2x" icon={faFacebook}/>
                            <FontAwesomeIcon className="mx-2" size="2x" icon={faGoogle}/>
                        </div>
                        <p className="my-3 footer-auth-terminos-condiciones">Al crear tu cuenta, aceptas nuestra <span>Políticas de Privacidad y de Cookies</span><br/> Al unirse aceptas nuestros <span>Términos y condiciones</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterAuth