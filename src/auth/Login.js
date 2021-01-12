import React, { Component, Link } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Alert, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../Ladding.css'
import firebase from 'firebase'
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';

var provider = new firebase.auth.FacebookAuthProvider();

export class Login extends Component {



    

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            loading: false,
            errorM: ''

        }
        this.onSignUp = this.onSignUp.bind(this)
    }

    onFace() {
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

    onSignUp(event) {
        const { errorM, email, password } = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            this.setState({errorM: error.message})
        })
        this.setState({ loading : true })

        setTimeout(()=>{
            this.setState({ loading : false })
        }, 3000)
      
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {loading} = this.state

        return (
            <>
            <Form className='login' onSubmit={this.onSignUp} >
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label id='liso' >Email address</Form.Label>
                        <Form.Control onChange={this.handleChange} name='email' type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                        <Form.Label id='liso' >Password</Form.Label>
                        <Form.Control onChange={this.handleChange} name='password' type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox" className='check'>
                        <Form.Check type="checkbox" label="Remeber me." />
                        </Form.Group>
                        <Button disabled={loading} id='lico' onClick={this.onSignUp} variant='info' className='ogb' >
                        { loading && <Spinner className='oo' animation="grow" size="sm" variant="light" /> }
                        { loading && <Spinner className='oo' animation="grow" size="sm" variant="light" /> }
                        { loading && <Spinner className='oo' animation="grow" size="sm" variant="light" /> }
                        { !loading && <span>Login</span> }
                        </Button>
                        <div className='lol' ></div>
                        <Button size='sm' type='submit' className='linkb' href='/reset' variant="link">Forgot Password?</Button>
                        <Form.Group class='frg'>
                                    
                        </Form.Group>
                        
                        </Form>
                        <div class='error_'>
                        { this.state.errorM &&
                         <Alert variant='danger' className="errorrr"> { this.state.errorM } </Alert> }
                       </div>
            </>
        )
}
}
export default Login