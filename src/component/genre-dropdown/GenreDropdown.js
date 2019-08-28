import React from 'react'
// import Axios from 'axios'
import {NavDropdown, Spinner} from 'react-bootstrap'
import { connect } from 'react-redux'
import { getGenre } from '../../Publics/Actions/genre'

class GenreDropdown extends React.Component{
    constructor(){
        super()
        this.state = {
        listGenre: [],
        }
    }

    componentDidMount = async() => {
        await this.props.dispatch (getGenre())
        this.setState ({
            listGenre: this.props.genres.genresList
        })
    }

    handleGenreSort = () => {}
    
    render() {
        const listGenre = this.state.listGenre
        return(
            <NavDropdown title="All Categories">
                {listGenre.length > 0 ? 
                listGenre.map((genre) => {
                return (
                    <NavDropdown.Item key={genre.genre_id} href={`/genre/${genre.genre_id}`} onClick={this.handleGenreSort}>{genre.genre_name}</NavDropdown.Item>
                )
                }): <NavDropdown.Item href="#/"><Spinner animation="grow" size="sm"/> Loading...</NavDropdown.Item>}
            </NavDropdown>
        )
    }
}

const MapStateToProps = state => {
    return {
        genres: state.genres,
    }
}

export default connect (MapStateToProps) (GenreDropdown)