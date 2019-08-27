import React from 'react'
import Axios from 'axios'

import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

export class SlideView extends React.Component {
    constructor(){
        super()
        this.state = {
            books: []
        }
    }
    // state= {
    //     books:[]
    // }

    componentDidMount() {
        Axios.get('http://localhost:3030/book')
            .then (book => this.setState({books: book.data.result}))
            // .then (book => console.log(book.data.result))
            .catch (err => console.log ('error =', err));
    }

    render() {
        const books = this.state.books
        return (
            <Carousel
                showStatus={false}
                showThumbs={false}
                autoPlay={true}
            >
                {books.map((book) => {
                    return (<div style={{width: '1340px', height: '300px'}} key={book.book_id}>
                                <img src={book.image} alt="Error" style={{maxWidth: '1340px'}}/>
                                <p className="legend">{book.title}</p>
                            </div>)
                    })
                }
            </Carousel>
        );
    }
};