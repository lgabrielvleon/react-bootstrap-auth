import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faCheckCircle, faExclamationCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import {Modal, Button} from 'react-bootstrap'

const TYPESTATUS = ['warning', 'success', 'fail']

const ModalStatusVerticalAlign = (props) => {
    
    var checkTypeStatus = TYPESTATUS.includes(props.typeStatus)? props.typeStatus : TYPESTATUS[0] 
    var statusImg
    if (checkTypeStatus === 'warning') {
        statusImg = {
            icon: faExclamationCircle,
            color: '#ffc107'
        }
    }

    if (checkTypeStatus === 'success') {
        statusImg = {
            icon: faCheckCircle,
            color: '#28a745'
        }
    }
    if (checkTypeStatus === 'fail') {
        statusImg = {
            icon: faTimesCircle,
            color: '#dc3545'
        }
    }

    return(
        <>
            <Modal show={props.show} {...props.onHide} size="sm" centered>
                <Modal.Body className="text-center">
                    <FontAwesomeIcon icon={statusImg.icon} className="my-2" size="5x" color={statusImg.color}/>
                    <h2>{props.title}</h2>
                    <p>{props.message}</p>
                    <Button variant="primary" type='button' onClick={props.onClick}>Entendido</Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalStatusVerticalAlign