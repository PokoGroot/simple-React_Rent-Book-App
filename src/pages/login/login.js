import React from 'react';

import { Form, FormGroup, Label, Input, Button, CustomInput } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

class Login extends React.Component {

    render(){
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
                                {/* <Label for="exampleEmail">Email</Label> */}
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email" style={{width: '300px'}}/>
                            </FormGroup>
                            <FormGroup>
                                {/* <Label for="examplePassword">Password</Label> */}
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" style={{width: '300px'}}/>
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
