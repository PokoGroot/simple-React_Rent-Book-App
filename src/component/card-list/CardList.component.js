import React from 'react'
// import Axios from 'axios'
import { connect } from 'react-redux'

import { Card } from '../card/card.component'

import './CardList.css'
import { Row, Spinner } from 'react-bootstrap';
import { getBook } from '../../Publics/Actions/book'

class CardList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            books: [],
        }
    }

    componentDidMount = async () => {
        const genre = this.props.match? this.props.match.params.id : null
        // console.log(this.props.match.params.id)
        //const search =
        await this.props.dispatch (getBook( undefined, undefined, undefined, genre, undefined, undefined ))
        this.setState({
            books: this.props.books.booksList.data
        })
    }

    handleGetDetails = (id) =>{
        window.location.href = `http://localhost:3000/detail_book/${id}`
    }

    render() {
        // console.log('url', this.props.match)
        const {books} = this.state
        // console.log("book", books)
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