import React from 'react';
import { Modal, Button, Container, Row, Col, Form} from 'react-bootstrap';
import { connect } from 'react-redux';
import { borrowBook } from '../../Publics/Actions/transaction';

class ModalRentBook extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            formData:{},
        }
    }

    handleChange = (e) => {
        this.setState({
            formData: {
                user_id: e.target.value,
                book_id: this.props.bookDetailPro.book_id
            }
        })
    }

    handleSubmit = async(event) => {
        await this.props.dispatch (borrowBook(this.state.formData))
            .then(()=> window.location.reload())
    }

    render(){
        const today = new Date()
        const borrowDate = today.toDateString()
        const returnDay = new Date()
        returnDay.setTime(today.getTime()+(1000*60*60*24*7))
        const returnDate = returnDay.toDateString()

        return(
            <Modal size="lg" show={this.props.open} onHide={this.props.hide}>
                <Modal.Header className="modal-header" closeButton style={{borderBottom:"none"}}>
                    <Modal.Title>Borrow Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row className="mb-4">
                            <Col md={3}>User ID</Col>
                            <Col md={9}>
                                <Form.Control required type="text" name="user_id" placeholder="User ID" onChange={this.handleChange} />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={3}>Borrow Date</Col>
                            <Col md={9}>
                                <p>{borrowDate}</p>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={3}>Return Date</Col>
                            <Col md={9}>
                                <p>{returnDate}</p>
                            </Col>
                        </Row>
                    </Container>
                    <Button type="submit" variant="warning" className="btn-save float-right mt-3" onClick={() => this.handleSubmit()}>
                        Borrow
                    </Button>
                </Modal.Body>
            </Modal>
        )
    }
}

const MapStateToProps = state => {
    return {
        books: state.books,
    }
}

export default connect (MapStateToProps) (ModalRentBook)