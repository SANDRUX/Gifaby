import React, { Component } from 'react'
import firebase from 'firebase'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Alert } from 'react-bootstrap';
import './Register.css'
import ReactDOM from 'react-dom';
import jojs from './img/name/SVG/drawkit-grape-pack-illustration-16.svg'



export default class frgp extends Component {

    

    constructor(props) {
        super(props);

        this.state = {
            email: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSignUp = this.onSignUp.bind(this)
    }


        
    onSignUp(){
        const { email } = this.state
        firebase.auth().sendPasswordResetEmail(email).then(function() {
            
          }).catch(function(error) {
            console.log(error)
          });
        setTimeout(() => {
            window.location.href = '/'
        }, 3000)

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <div className='all' >
                <div className='anso' ><img src={jojs} ></img></div>
                <Form className='con' onSubmit={this.onSignUp} >
                    <center><h2 className='text-gradient' >Forgot Password</h2></center>
                    <Form.Group className='bbn' controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={this.handleChange} name='email' type="email" placeholder="name@example.com" />
                        <Button id='lico' className='bb'  onClick={this.onSignUp}>Send</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
