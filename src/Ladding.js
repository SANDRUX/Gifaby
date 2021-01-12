import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Login from './auth/Login'
import './Ladding.css'
import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import { Helmet } from 'react-helmet'
import Grow from '@material-ui/core/Grow'
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
import firebase from 'firebase'
import Modal from 'react-modal'
import Signup from './Register'
import errorMessage from './auth/Login'



var provider = new firebase.auth.FacebookAuthProvider();

export default function Join() {

  const [ modalIsOpen, setModalIsOpen ] = useState(false)

    const an = useRef(null)

    useEffect(() => {
      lottie.loadAnimation({
        container: an.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./img/PRODUCT/Animation 02/drawkit-grape-animation-2-LOOP.json')
      })
    }, [])

    function onFace()  {
      firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
  }

        return (
            <>
            <Helmet>
              <title>Gifaby | Login</title>
            </Helmet>
              <div className='all'>
                      <div className='logo'></div>
                      <div className='nk1' > </div>
                      <div className='nk2'></div>
                      <div className='nk3'></div>
                      <div className='navbar'>
                      </div>
                      
                      <div>
                          <div className='welcome'>
          
                          </div>
                          <Modal className='modd' isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false) } >
                            <Signup />
                          </Modal>
                          <div className='an' ref={an} ></div>
                          <div className='Form'>
                            <Login />
                          </div>
                          <div className='line' ><h8>Or</h8></div>
                          <div className='registerf' > 
                            <Button id='lico' onClick={onFace} className='facebook' ><FaFacebookF  className='iconf'/>   Continue as Facebook</Button>
                            <Button id='lico' onClick={() => setModalIsOpen(true) } className='gilaki'>Register</Button>
                          </div>
                      </div>   
                      </div> 
            </>
        )
    }

