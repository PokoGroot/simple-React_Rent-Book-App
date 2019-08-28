import React from 'react';
import { Form, FormGroup, Label, Input, Button, CustomInput } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import Axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false,
            email: '',
            password: '',
        }
    }

    handleFormChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        this.setState({
            [name]: value
        })
    }

    //not yet edit
    handleSubmit(e){
        Axios.post('http://localhost:3030/user/login', {
            email: this.state.email, 
            password: this.state.password
        })
            .then((res) => {
                if(res.data.status == 401){
                    alert("Your Email or Password Incorrect");
                }else{
                    this.loggingIn(res)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            e.preventDefault();
    }
    loggingIn(res){
        console.log(res)
        localStorage.setItem('token', res.data.dataUser.token)
        window.location.reload()
    }

    render(){
        //not yet edit
        if(localStorage.getItem('token')) return <Redirect to="/home"/>
        else

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8 left">
                    <p>Book is a window <br /> to the world</p>
                    </div>
                    <div className="col-4 right">
                    <div className="row">
                        <div className="col logo">
                        <img src="https://image.flaticon.com/icons/svg/808/808506.svg" alt="Bookshelf" />
                        </div>
                    </div>
                    <div className="row" style={{marginTop: '40px', height:'410px'}}>
                        <div className="col form">
                        <div className='greet'>
                            <h2>Login</h2>
                            <p>Welcome Back, Please Login <br/> to your account</p>
                        </div>
                        <Form>
                            <FormGroup>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email" style={{width: '300px'}} onChange={this.handleFormChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" style={{width: '300px'}} onChange={this.handleFormChange} />
                            </FormGroup>
                            <FormGroup check style={{marginBottom: '20px'}}>
                                <Label check>
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Remember me" />
                                </Label>
                            </FormGroup>
                            <Button color="primary" className='login-button'>Login</Button>
                            <Button outline color="secondary" className='register-button'>Register</Button>
                        </Form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col footer">
                        <p>By signing up, you agree to Book's <br /> <a href='http://github.com'>Terms and Condition</a> & <a href='http://github.com'>Privacy and Policy</a> </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
