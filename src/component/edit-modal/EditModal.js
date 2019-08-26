import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { Link } from 'react-router-dom'
import Axios from 'axios'

export class EditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            modal: false,
            book_id: props.book_id,
            formData: {
                book_id: props.book_id,
                title: '',
                description: '',
                image: '',
                date_released: '',
                genre: '',
                availability: ''
            },
            genres: []
    };

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggle() {
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

    handleSubmit(event) {
        Axios.patch(`http://localhost:3030/book/${this.state.formData.book_id}`, this.state.formData)
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
    componentDidMount() {
        Axios.get(`http://localhost:3030/genre/`)
            .then (genre => this.setState({genres: genre.data}))
            // .then (genre => console.log(genre.data))
            .catch (err => console.log ('error =', err));
    }

    render() {
        console.log(this.state.formData.book_id)
        return (
            
            <div>
                <Link onClick={this.toggle} className="sidelist">Edit Book</Link>
                <Modal size="lg" isOpen={this.state.modal}>
                    <form onSubmit={this.handleSubmit}>
                        <ModalHeader>Edit Book</ModalHeader>
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
                                    <input required name="image" type="text" value={this.country} onChange={this.handleForm} className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label>Date Released:</label>
                                    <input required name="date_released" type="date" value={this.country} onChange={this.handleForm} className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label>Genre:</label>

                                    <Input required type="select" name="genre_id" id="genreLabel" onChange={this.handleForm}>
                                        {this.state.genres.map((genre) => {return <option value={genre.genre_id} key={genre.genre_id}>{genre.genre_name}</option>})}
                                    </Input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label>Availability:</label>
                                    <input required name="availability" type="text" value={this.country} onChange={this.handleForm} className="form-control" />
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