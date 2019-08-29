import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import Axios from "axios";

import './detail-book.css';
import ModalEditBook from '../../component/edit-modal/EditModal'
import ModalDelete from '../../component/delete-modal/DeleteModal'

class DetailBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            book_id : this.props.match.params.id,
            openModalEdit : false,
            openModalDelete : false,
            bookDetail: []
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id
        Axios.get(`http://localhost:3030/book/${id}`)
        .then((result) =>{
            this.setState({
                bookDetail: result.data.data[0]
            })
        })
        .catch(err => console.log(err))
    }

    openModalEdit = (open) => {
        this.setState({openModalEdit: open})
    }

    openModalDelete = (open) => {
        this.setState({openModalDelete: open})
    }

    render(){
        // console.log('detail', this)
        const { bookDetail } = this.state

        return(
            <React.Fragment>
                <Container style={{margin:"0px", maxWidth:"100%", fontFamily:"Airbnb Cereal App Medium"}}>
                    <Row style={{padding:"0px"}} className="image-header">
                        <Col md={10} style={{padding: '16px 0px 0px 19px', margin:'0px'}}>
                            <Link to='../home'>
                                <Button variant="light" style={{borderRadius:"5vh"}}>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </Button>
                            </Link>
                        </Col>
                        <Col md={2} className="float-right text-center" style={{fontSize:"20px", color:"#FFF"}}>
                            <span><a href="javascript:void(0)" style={{color: '#fff', textDecoration: 'none'}} onClick={() => this.openModalEdit(true)}>Edit</a></span>&nbsp;&nbsp; 
                            <span><a href="javascript:void(0)" style={{color: '#fff', textDecoration: 'none'}} onClick={this.DeleteBook}>Delete</a></span>
                        </Col>
                    </Row>
                    <Row style={{padding:"3vh", paddingLeft:"40px"}}>
                        <Col md={8}>
                            <Button variant="warning" className="btn-genre"><b>{bookDetail.genre_id}</b></Button><br/>
                            <Row>
                                <Col md={10}>
                                    <h1>{bookDetail.title}</h1>
                                    <h5>{bookDetail.date_released}</h5>
                                </Col>
                                <Col>
                                    { (bookDetail.availability === 1) ? 
                                        <h4 style={{color:"#99D815"}}>AVAILABLE</h4>
                                    : <h4 style={{color:"red"}}>NOT AVAILABLE</h4>}
                                </Col>
                            </Row>
                            <p style={{marginTop:"25px"}}>
                                {bookDetail.description}
                            </p>
                        </Col>
                        <Col>
                        <Card style={{ width: '10rem',marginLeft:"30vh"}}>
                            <Card.Img variant="top" src={bookDetail.image} className="book-cover"/>
                        </Card>
                            <Button variant="warning" className="float-right btn-borrow"><b>Borrow</b></Button><br/>
                        </Col>
                    </Row>
                </Container>
                <ModalEditBook
                    id_book={bookDetail.id_book}
                    title={bookDetail.title}
                    description={bookDetail.description}
                    image={bookDetail.image}
                    date_released={bookDetail.date_released}
                    id_genre={bookDetail.id_genre}
                    id_status={bookDetail.id_status}
                    open={this.state.openModalEdit}
                    hide={() => this.setState({openModalEdit: false})}
                />

                <ModalDelete
                    title={bookDetail.title}
                    open={this.state.openModalDelete}
                    hide={() => this.setState({openModalDelete: false})}
                    />
            </React.Fragment>
        )
    }
}

export default DetailBook