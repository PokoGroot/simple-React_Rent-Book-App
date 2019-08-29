import React from 'react';
import Axios from 'axios';
import { Modal, Button, Container, Row, Col, Form} from 'react-bootstrap';
import { getGenre } from '../../Publics/Actions/genre'
import { connect } from 'react-redux';
import { editBook } from '../../Publics/Actions/book';

class ModalEditBook extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            formData:{},
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
        this.props.dispatch (editBook(this.state.formData, this.props.book_id))
        window.location.reload()
        event.preventDefault();
    }

    componentDidMount = async() => {
        await this.props.dispatch (getGenre())
        // const newwformData = this.props
        // console.log('aa', this.props)
        this.setState ({
            genreList: this.props.genres.genresList,
        })
        // console.log('1', newwformData)
    }


    render(){
        console.log(this.props)
        const {genreList, formData} = this.state
        return(
            <Modal size="lg" show={this.props.open} onHide={this.props.hide}>
                <Modal.Header className="modal-header" closeButton style={{borderBottom:"none"}}>
                    <Modal.Title>Edit Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        {/* <Form> */}
                            <Container>
                                <Row className="mb-4">
                                    <Col md={2}>Title</Col>
                                    <Col md={10}>
                                        <Form.Control type="text" name="title" placeholder="Title..." onChange={this.handleChange} value={formData.title}  />
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Col md={2}>Image Url</Col>
                                    <Col md={10}>
                                        <Form.Control type="text" name="image" placeholder="Image Url..." onChange={this.handleChange} value={formData.image}  />
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Col md={2}>Date Released</Col>
                                    <Col md={10}>
                                        <Form.Control type="date" name="date_released" placeholder="Date Released..." onChange={this.handleChange} value={formData.date_released}  />
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Col md={2}>Genre</Col>
                                    <Col md={10}>
                                        <Form.Control as="select" name="genre_id" onChange={this.handleChange}  >
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
                                    <Col md={2}>Description</Col>
                                    <Col md={10}>
                                        <Form.Control as="textarea" name="description" rows="3" onChange={this.handleChange} value={formData.description}/>
                                    </Col>
                                </Row>
                    </Container>
                    <Button type="submit" variant="warning" className="btn-save float-right mt-3" onClick={this.handleSubmit}>
                        Save
                    </Button>
                {/* </Form> */}
                </Modal.Body>
            </Modal>
        )
    }
}

const MapStateToProps = state => {
    return {
        genres: state.genres,
    }
}

export default connect (MapStateToProps) (ModalEditBook)