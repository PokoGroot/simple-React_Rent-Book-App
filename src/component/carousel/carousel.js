import React from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'react-responsive-carousel';
import { getBook } from '../../Publics/Actions/book'

import "react-responsive-carousel/lib/styles/carousel.min.css";

class SlideView extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dataBook: []
        }
    }

    // componentDidMount() {
    //     Axios.get('http://localhost:3030/book')
    //         .then (book => this.setState({books: book.data.data}))
    //         .catch (err => console.log ('error =', err));
    // }

    componentDidMount = async() => {
        await this.props.dispatch (getBook( undefined, undefined, undefined, undefined, undefined, undefined ))
        this.setState({
            dataBook : this.props.books.booksList.data
        })
    }

    render() {
        console.log('dataa',this.props)
        const books = this.state.dataBook
        return (
            <Carousel
                showStatus={false}
                showThumbs={false}
                autoPlay={true}
            >
                {books ? books.map((book) => {
                    return (<div style={{width: '1340px', height: '300px'}} key={book.book_id}>
                                <img src={book.image} alt="Error" style={{maxWidth: '1340px'}}/>
                                <p className="legend">{book.title}</p>
                            </div>)
                    }): <p>asasasasa</p>
                }
            </Carousel>
        );
    }
};

const MapStateToProps = state => {
    return {
        books: state.books,
    }
}

export default connect (MapStateToProps) (SlideView)