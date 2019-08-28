

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom'
import Axios from 'axios'

export class AddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            modal: false,
            formData: {
                title: '',
                description: '',
                image: '',
                date_released: '',
                genre: '',
                availability: ''
            }
    };
    }

    toggle = () => {
        this.setState({
        modal: !this.state.modal
        });
    }

    handleForm = (event) => {
        var newFormData = { ...this.state.formData}
        newFormData[event.target.name] = event.target.value
        this.setState({
            formData: newFormData
        })
    }

    handleSubmit = (event) => {
        Axios.post('http://localhost:3030/book/', this.state.formData)
            .then(res => {
                this.setState({
                showModal:true,
                modalTitle:"Success",
                modalMessage:res.data.message,
                })
            })
            .catch(err => console.log(err))
            event.preventDefault();
            window.location.reload()
    }

    render() {
        return (
            <div>
                <Link onClick={this.toggle} className="sidelist">Add Book</Link>
                <Modal isOpen={this.state.modal}>
                    <form onSubmit={this.handleSubmit}>
                        <ModalHeader>Add Book</ModalHeader>
                        <ModalBody>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label>Title:</label>
                                    <input name="title" type="text" value={this.state.name} onChange={this.handleForm} className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label>Description:</label>
                                    <input name="description" type="text" value={this.state.team} onChange={this.handleForm} className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label>Image:</label>
                                    <input name="image" type="text" value={this.country} onChange={this.handleForm} className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label>Date Released:</label>
                                    <input name="date_released" type="date" value={this.country} onChange={this.handleForm} className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label>Genre:</label>
                                    <input name="genre_id" type="text" value={this.country} onChange={this.handleForm} className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label>Availability:</label>
                                    <input name="availability" type="text" value={this.country} onChange={this.handleForm} className="form-control" />
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
                            <Button color="danger" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>
        
        );
    }
}