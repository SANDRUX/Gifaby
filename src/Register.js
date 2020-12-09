import './Register.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import { Form, Col, Row, Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import firebase from 'firebase'
import { Helmet } from 'react-helmet'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Newu from './newuser'



var provider = new firebase.auth.FacebookAuthProvider();

export class Register extends Component {

    

    constructor(props) {
        super(props);

        this.state = {
            nickname: '',
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            month: 'month',
            day: 'day',
            year: 'year',
            errorMessage: '',
            user: null
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

    onSignUp(){
        const { user, errorMessage, nickname, email, password, lastname, firstname, month, day, year } = this.state
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((authUser) => {
                return authUser.user.updateProfile({
                    displayName: nickname
                })
            }).then((result) =>{
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        firstname,
                        lastname,
                        nickname,
                        email,
                        password,
                        month,
                        day,
                        year, 
                    })
                })
        .catch((error) => {
            this.setState({errorMessage: error.message})
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

 render() {
    const {newuser} = this.state
    return(
        <>
        <div className='allr'>

                <Form onSubmit={this.onSignUp} className='loginn'>
                 <Form.Label class='fonz' size='large' id='liso'>SignUp</Form.Label>
                    <Form.Row className='nn' >
                        <Col>
                        <Form.Control name='firstname' type='name' onChange={this.handleChange} placeholder="First name" />
                        </Col>
                        <Col>
                        <Form.Control name='lastname' type='name' onChange={this.handleChange} placeholder="Last name" />
                        </Col>
                    </Form.Row>

                    <Form.Group controlId="formBasicEmail">
                       
                       <Form.Control onChange={this.handleChange} name='nickname' type="nickname" placeholder="Nickname" />
                       </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                       
                        <Form.Control onChange={this.handleChange} name='email' type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                        
                            <Form.Control onChange={this.handleChange} name='password' type="password" placeholder="Password" />
                        </Form.Group>
                        <Row>
                            <Col>
                                <div as={Col} >
                                <Form.Label className='fnn' >Birthday</Form.Label>
                                <Form.Control name='month' type='month' onChange={this.handleChange} as="select" defaultValue="Month">
                                    <option>Month</option>
                                    <option>Jan</option>
                                    <option>Fab</option>
                                    <option>Mar</option>
                                    <option>Apr</option>
                                    <option>May</option>
                                    <option>Jun</option>
                                    <option>Jul</option>
                                    <option>Aug</option>
                                    <option>Sep</option>
                                    <option>Oct</option>
                                    <option>Nov</option>
                                    <option>Dec</option>
                                </Form.Control>
                                </div>
                            </Col>
                            <Col>
                                <div as={Col} >
                               
                                <Form.Control name='day' type='day' onChange={this.handleChange} className='inps' as="select" defaultValue="Day">
                                <option value="0">Day</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7" selected="1">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option>
                                </Form.Control>
                                </div>
                            </Col>
                            <Col>
                                <div as={Col} >
                               
                                <Form.Control name='year' type='year' onChange={this.handleChange} className='inps' as="select" defaultValue="Year">
                                    <option value="0">Year</option><option value="2020" selected="1">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option><option value="1929">1929</option><option value="1928">1928</option><option value="1927">1927</option><option value="1926">1926</option><option value="1925">1925</option><option value="1924">1924</option><option value="1923">1923</option><option value="1922">1922</option><option value="1921">1921</option><option value="1920">1920</option><option value="1919">1919</option><option value="1918">1918</option><option value="1917">1917</option><option value="1916">1916</option><option value="1915">1915</option><option value="1914">1914</option><option value="1913">1913</option><option value="1912">1912</option>
                                </Form.Control>
                                </div>
                            </Col>
                       </Row>
                       <div className='gge' >
                            <Form.Label className='fnn' >Gender</Form.Label>
                                        <Form.Control as="select" defaultValue="Gender">
                                            <option>Gender</option>
                                            <option>Female</option>
                                            <option>Male</option>
                                            <option>Custom</option>
                                        </Form.Control>
                        </div>        
                        <Form.Group controlId="formBasicCheckbox" className='checkk'>

                            <Form.Check type="checkbox" label="You agree to our terms , data management policy and cookie usage policy ." />
                        </Form.Group>
                        <Button id='lico' onClick={this.onSignUp} className='loginbtnn'  >
                            Submit
                        </Button>
                        <Form.Group class='frg'>
                        </Form.Group>
                        { this.state.errorMessage &&
                         <Alert variant='danger' className="error"> { this.state.errorMessage } </Alert> }
                    </Form>

                    <div>
                        
                    </div>

            </div>
        </>
    )
}
}
export default Register