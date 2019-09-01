import React from 'react';
import { Link } from 'react-router-dom'
import { FormGroup, Label, Input, Button, CustomInput } from 'reactstrap'
import Axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                username: '',
                fullname: '',
                email: '',
                password: '',
            }
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
        Axios.post(`${process.env.REACT_APP_HOST}/user/register`, data)
            .then((res) => {
                console.log(res)
                if(res.data.status === 401){
                    alert("Data not valid!");
                }else if(res.data.status === 403){
                    alert("Email already in use!");
                }else{
                    alert("Register Success");
                    window.location.href="http://localhost:3000/login"
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            e.preventDefault();
    }

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
                    <div className="row" style={{marginTop:'20px', height: '450px'}}>
                        <div className="col form">
                        <div className='greet'>
                            <h2>Register</h2>
                            <p>Welcome Back, Please Register <br/> to create account</p>
                        </div>
                        {/* <Form style={{margin: '12px auto'}}> */}
                            <FormGroup>
                                <Input type="text" name="username" id="username" placeholder="username" style={{width: '300px'}} onChange={this.handleFormChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="fullname" id="fullname" placeholder="fullname" style={{width: '300px'}} onChange={this.handleFormChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="email" name="email" id="email" placeholder="email" style={{width: '300px'}} onChange={this.handleFormChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" id="password" placeholder="password" style={{width: '300px'}} onChange={this.handleFormChange}/>
                            </FormGroup>
                            <FormGroup check style={{marginBottom: '20px'}}>
                                <Label check>
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Remember me" />
                                </Label>
                            </FormGroup>
                            <Link to='login'>
                                <Button color="primary" className='login-button'>Login</Button>
                            </Link>
                            <Button outline color="secondary" className='register-button' onClick={this.handleSubmit}>Register</Button>
                        {/* </Form> */}
                        </div>
                    </div>
                    <div className="row" style={{height:'20px'}}>
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

export default Register;
