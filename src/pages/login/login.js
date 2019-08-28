import React from 'react';
import { FormGroup, Label, Input, Button, CustomInput } from 'reactstrap'
import { Redirect, Link } from 'react-router-dom'
import Axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                email: '',
                password: '',
            },
            loggedIn: false,
        }
    }

    handleFormChange = (e) => {
        const newFormData = {...this.state.formData}
        newFormData[e.target.name] = e.target.value

        this.setState({
            formData: newFormData
        })
    }

    handleSubmit = (e) => {
        const data = this.state.formData
        Axios.post('http://localhost:3030/user/login', data)
            .then((res) => {
                console.log('res', res)
                if(res.status == 401){
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
        localStorage.setItem('token', res.data.token)
        window.location.reload()
    }

    render(){
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
                        {/* <Form > */}
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
                            <Button color="primary" className='login-button' onClick={this.handleSubmit}>Login</Button>
                            <Link to='register'>
                                <Button outline color="secondary" className='register-button'>Register</Button>
                            </Link>
                        {/* </Form> */}
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
