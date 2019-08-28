import React from 'react';
import Axios from 'axios';
import { Modal, Button, Container, Row, Col, Form} from 'react-bootstrap';

class FormEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            book_id : props.book_id,
            formData:{
                title: props.title,
                description: props.description,
                image: props.image,
                date_released: props.date_released,
                genre_id: props.genre_id,
                availability: props.availability
            },
            genreList: [],
        }
    }

    handleChange = (e) => {
        let newFormData = {...this.state.formData}
        const name = e.target.name
        const value = e.target.value
        newFormData[name] = value
        this.setState({
            formData: newFormData
        })
    }

    handleSubmit = (event) => {
        // const item = localStorage.getItem('UserData');
        // const parse = JSON.parse(item);
        // const token = parse.dataUser.token;

        Axios.patch(`http://localhost:3030/book/${this.state.book_id}`,
        this.state.formData)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))
            event.preventDefault();
    }

    componentDidMount = () => {
        Axios.get ('http://localhost:3030/genre')
            .then (res => {
                this.setState ({genreList: res.data});
            })
            .catch (err => console.log ('error =', err));
    };

    render(){
        const {genreList} = this.state
        const {formData} = this.state
        console.log('form', this.formData)
        return(
            <Form onSubmit={this.handleSubmit}>
                <Container>
                    <Row className="mb-4">
                        <Col md={2}>Title</Col>
                        <Col md={10}>
                            <Form.Control type="text" name="title" placeholder="Title..." onChange={this.handleChange} value={formData.title} required />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>Image Url</Col>
                        <Col md={10}>
                            <Form.Control type="text" name="image" placeholder="Image Url..." onChange={this.handleChange} value={formData.image} required />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>Date Released</Col>
                        <Col md={10}>
                            <Form.Control type="date" name="date_released" placeholder="Date Released..." onChange={this.handleChange} value={formData.date_released} required />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>Genre</Col>
                        <Col md={10}>
                            <Form.Control as="select" name="id_genre" onChange={this.handleChange} required >
                            {genreList.length !== 0 ? genreList.map((genre) => {
                                const selected = this.state.genre_id === genre.genre_id ? 'selected':''
                                return <option {...selected} value={genre.genre_id} key={genre.genre_id}> {genre.genre_name} </option>
                                })
                                :<option>Loading...</option>
                            }
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>Status</Col>
                        <Col md={10}>
                            <Form.Control as="select" name="id_status" onChange={this.handleChange} required >
                            {/* {statusList.length !== 0 ? statusList.map((status) => {
                                const selected = this.state.id_status == status.id_status ? 'selected':''
                                return <option {...selected} value={status.id_status} key={status.id_status}> {status.availability} </option>
                                })
                                :<option>Loading...</option>
                            } */}
                            <option  value={1} key={1}> Available </option>
                            <option selected value={0} key={2}> Not Available </option>
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>Description</Col>
                        <Col md={10}>
                            <Form.Control as="textarea" name="description" rows="3" onChange={this.handleChange} value={formData.description}/>
                        </Col>
                    </Row>
                </Container>
                <Button type="submit" variant="warning" className="btn-save float-right mt-3">
                    Save
                </Button>
            </Form>
        )
    }
}

const ModalEditBook = ({book_id, title, description, image, date_released, genre_id, open, hide}) => {
    return(
        <Modal size="lg" show={open} onHide={hide}>
            <Modal.Header className="modal-header" closeButton style={{borderBottom:"none"}}>
                <Modal.Title>Edit Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormEdit 
                    book_id={book_id}
                    title={title}
                    description={description}
                    image={image}
                    date_released={date_released}
                    genre_id={genre_id}
                />
            </Modal.Body>
        </Modal>
    )
}

export default ModalEditBook