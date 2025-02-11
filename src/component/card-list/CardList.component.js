import React from 'react'
import { connect } from 'react-redux'
import { Row, Spinner } from 'react-bootstrap'

import { Card } from '../card/card.component'
import './CardList.css'
import { getBook } from '../../Publics/Actions/book'

class CardList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            books: [],
            address: props.address,
            search: props.books
        }
    }

    componentDidMount = async () => {
        this.getBook()
    }

    getBook = async() => {
        const search = this.props.search !== null ? '&search='+this.props.search : ''
        const addressSort = this.props.match ? this.props.address+this.props.match.params.id : `${process.env.REACT_APP_HOST}/book/?sortby=book_id`+search
        console.log('s', this.props)
        await this.props.dispatch (getBook(addressSort), this.props.search)
        this.setState({
            books: this.props.books.booksList.data
        })
    }

    handleGetDetails = (id) =>{
        window.location.href = `${process.env.REACT_APP_DOMAIN}/detail_book/${id}`
    }

    render() {
        const {books} = this.state
        return(
            <Row style={{justifyContent:'center'}}>
                <div className="book-list">
                    <h3 style={{fontFamily:"Airbnb Cereal App Medium", margin:"20px 30px 30px"}}>List Book</h3>
                    <div style={{display: 'flex', flexWrap:"wrap", flexDirection: 'row'}} className="justify-content-between">
                        {books.length > 0 ?
                            <div className='card-list' style={{margin:"0 20px"}}>
                                {
                                    books.map((book) => {
                                        return (<Card key={book.book_id} book={book} getDetails={this.handleGetDetails} />)
                                    })
                                }
                            </div>
                            : <div className="loading" style={{marginTop: '45px', marginLeft: '33px'}}><Spinner animation="border" size="lg"/> Loading...</div>}
                    </div>
                </div>
            </Row>
            
        )
    }
}

const MapStateToProps = state => {
    return {
        books: state.books,
    }
}

export default connect (MapStateToProps) (CardList)