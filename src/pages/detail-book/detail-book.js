import React from "react";
import { Container, Row, Col, Button, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SweetAlert from 'react-bootstrap-sweetalert'

import { borrowBook, returnBook } from "../../Publics/Actions/transaction"
import { getProfile } from '../../Publics/Actions/user'
import { getBookById, deleteBook } from '../../Publics/Actions/book'
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
            bookDetail: [],
            userInfo: {},
            borrowData: {},
            returnData: {
                book_id: this.props.match.params.id
            }
        }
    }

    componentDidMount = async() => {
        let id = this.props.match.params.id
        await this.props.dispatch(getBookById(id))
        await this.props.dispatch(getProfile())
        this.setState({
            bookDetail: this.props.books.bookDetail,
            userInfo: this.props.users.userProfile,
            borrowData: {
                user_id: this.props.users.userProfile.id,
                book_id: this.props.match.params.id
            }
        })
    }

    openModalEdit = (open) => {
        this.setState({openModalEdit: open})
    }

    openModalDelete = async(open) => {
        let id = this.props.match.params.id
        this.setState({openModalDelete: open})
        await this.props.dispatch(deleteBook(id))
    }

    handleBorrow = async() => {
        await this.props.dispatch(borrowBook(this.state.borrowData))
        window.location.reload()
    }

    handleReturn = async() => {
        await this.props.dispatch(returnBook(this.state.returnData))
        window.location.reload()
    }

    render(){
        const { bookDetail } = this.state
        const datee = new Date(bookDetail.date_released)
        const level = this.state.userInfo.level
        console.log(this.state)

        return(
            <React.Fragment>
                <Container style={{margin:"0px", maxWidth:"100%", fontFamily:"Airbnb Cereal App Medium"}}>
                    <Row style={{padding:"0px", backgroundImage: `url(${bookDetail.image})`}} className="bgHeader">
                        <Col md={10} style={{padding: '16px 0px 0px 19px', margin:'0px'}}>
                            <Link to='../home'>
                                <Button variant="light" style={{borderRadius:"5vh"}}>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </Button>
                            </Link>
                        </Col>
                        <Col md={2} className="float-right text-center" style={{fontSize:"20px", color:"#FFF"}}>
                            {level === 'admin' ?
                            <div>
                                <span><a href="#" style={{color: '#fff', textDecoration: 'none'}} onClick={() => this.openModalEdit(true)}>Edit</a></span>&nbsp;&nbsp; 
                                <span><a href="#" style={{color: '#fff', textDecoration: 'none'}} onClick={() => this.openModalDelete(true)}>Delete</a></span>
                            </div>:''}
                        </Col>
                    </Row>
                    <Row style={{padding:"3vh", paddingLeft:"40px"}}>
                        <Col md={8}>
                            <Button variant="warning" className="btn-genre"><b>{ bookDetail.genre_name }</b></Button><br/>
                            <Row>
                                <Col md={10}>
                                    <h1>{bookDetail.title}</h1>
                                    <h5>{datee.toLocaleDateString().replace(/\//g,'-')}</h5>
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
                            {level === 'admin' ? 
                                (bookDetail.availability) === 1 ?
                                    <div>
                                        <Button variant="warning" className="float-right btn-borrow" onClick={() => this.handleBorrow()}><b>Borrow</b></Button><br/>
                                    </div>:
                                    <div>
                                        <Button variant="danger" className="float-right btn-borrow" onClick={() => this.handleReturn()}><b>Return</b></Button><br/>
                                    </div>
                                    :''}
                        </Col>
                    </Row>
                </Container>
                <ModalEditBook
                    bookDetailPro={ bookDetail }
                    open={this.state.openModalEdit}
                    hide={() => this.setState({openModalEdit: false})}
                />

                <ModalDelete
                    title={bookDetail.title}
                    open={this.state.openModalDelete}
                    hide={() => {
                        this.setState({openModalDelete: false},
                        ()=>{window.location.replace('/home')})
                        }}
                    />
                
            </React.Fragment>
        )
    }
}

const MapStateToProps = state => {
    return {
        books: state.books,
        users: state.users,
        transactions: state.transactions
    }
}

export default connect(MapStateToProps) (DetailBook)