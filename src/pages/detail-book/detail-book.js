import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import {EditModal} from '../../component/edit-modal/EditModal'
import ModalDelete from '../../component/delete-modal/DeleteModal';

import './detail-book.css';
import Axios from "axios";

class DetailBook extends React.Component {
    constructor(){
        super()
        this.state = {
            book: [],
            openModalDelete : false,
        }
        this.DeleteBook=this.DeleteBook.bind(this)
    }

    getData =()=> {
        let id = this.props.match.params.id;
        // console.log("this id",id)
        Axios.get(`http://localhost:3030/book/${id}`)
            .then (book => this.setState({book: book.data[0]})
            // console.log("this book", book.data[0])
            )
            .catch (err => console.log ('error =', err));
    }
    componentDidMount(){
        this.getData()
    }
    openModalDelete(open){
        this.setState({openModalDelete: open})
    }

    handleAvailable() {
        if(this.state.book.availability === 1){
            return "Available" 
        } else{ return "Not Available"}
    }
    DeleteBook(){
        Axios.delete(`http://localhost:3030/books/${this.state.book_id}`)
            .then(res => {
                console.log(res)
                this.setState({openModalDelete: true})
            })
            .catch(err => console.log(err))
    }

    render(){
        let book = this.state.book
        console.log("book props", book.book_id)
        return(
            <React.Fragment>
                <Container style={{margin:"0px", maxWidth:"100%", fontFamily:"Airbnb Cereal App Medium"}}>
                    <Row className="image-header" style={{backgroundImage: `url(${book.image})`}}>
                        <Col md={10} style={{padding: '16px 0px 0px 19px', margin:'0px'}}>
                            <Button variant="light" style={{borderRadius:"5vh"}}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </Button>
                        </Col>
                        <Col md={2} className="float-right text-center" style={{fontSize:"20px", color:"#FFF"}}>
                            <EditModal 
                                book_id={book.book_id}
                                title={book.title}
                                description={book.description}
                                image={book.image}
                                date_released={book.date_released}
                                genre_id={book.genre_id}
                                availability={book.availability}
                            /> 
                            <ModalDelete title={book.title}
                                open={this.state.openModalDelete} hide={() => this.setState({openModalDelete: false})} />
                        </Col>
                    </Row>
                    <Row style={{padding:"3vh", paddingLeft:"40px"}}>
                        <Col md={8}>
                            <Button variant="warning" className="btn-genre"><b>{book.genre_id}</b></Button><br/>
                            <Row>
                                <Col md={10}>
                                    <h1>{book.title}</h1>
                                    <h5>{book.date_released}</h5>
                                </Col>
                                <Col>
                                    <h4 style={{color:"#99D815"}}>
                                        {this.handleAvailable()}
                                    </h4>
                                </Col>
                            </Row>
                            <p style={{marginTop:"25px"}}>
                            {book.description}
                            </p>
                        </Col>
                        <Col>
                        <Card style={{ width: '10rem',marginLeft:"30vh"}}>
                            <Card.Img variant="top" src={book.image} className="book-cover"/>
                        </Card>
                            <Button variant="warning" className="float-right btn-borrow"><b>Borrow</b></Button><br/>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default DetailBook