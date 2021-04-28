import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './assets/scss/App.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import logo from './assets/images/logo_corto_black.png'
import LoginAction from './components/Login';
import SingUpAction from './components/SingUp';
function App() {

  const [auth, setauth] = useState(false)
  const [action, setaction] = useState({login: true, singup: false})
  const handleOpenModal = () => setauth(true)
  const handleCloseModal = () => setauth(false)
  const handleLogin = () => setaction({login:true, singup: false})
  const handleSignUp = () => setaction({login:false, singup: true})
  return (
    <>
      <Button onClick={handleOpenModal}>Click me</Button>

      <div id="auth" {...{className:`auth ${auth?'auth-active':''}`}}>
        <div className="container mt-3">
          <div className="row">
            <div className="col-12 text-right">
              <FontAwesomeIcon size="lg" className="mx-3" icon={faTimes} onClick={handleCloseModal}/>
            </div>
            <div className="col-12">
              <div className="row cont-logo justify-content-center my-3">
                <img src={logo} alt=""/>
                <p className="mx-2">Fixenova</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-3">
            <div className="col-6 text-center">
              <a {...{className:`py-1 action-auth ${action.singup?'action-auth-active':''}`}} onClick={handleSignUp}>Registrarme</a>
            </div>
            <div className="col-6 text-center">
              <a {...{className:`py-1 action-auth ${action.login?'action-auth-active':''}`}} onClick={handleLogin}>Iniciar sesión</a>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          
        </div>
        <div className="container mb-3">
          <div className="row my-5">
            <div className="col-12">
              {action.login ? <LoginAction/> : <SingUpAction/>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
