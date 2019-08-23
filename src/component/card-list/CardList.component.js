import React from 'react'
import Axios from 'axios'

import { Card } from '../card/card.component'

import './CardList.css'
import { Row, Spinner } from 'react-bootstrap';

export class CardList extends React.Component {
    constructor(){
        super()
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3030/book')
            .then (book => this.setState({books: book.data.result}))
            // .then (res => console.log(res.data))
            .catch (err => console.log ('error =', err));
    }

    handleGetDetails = (id) =>{
        window.location.href = `http://localhost:3000/detail_book/${id}`
    }

    render() {
        const books = this.state.books
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