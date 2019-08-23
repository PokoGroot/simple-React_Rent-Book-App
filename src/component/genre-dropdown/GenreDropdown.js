import React from 'react'
import Axios from 'axios'
import {NavDropdown, Spinner} from 'react-bootstrap'

class GenreDropdown extends React.Component{
    constructor(){
        super()
        this.state = {
        listGenre: [],
        }
    }

    componentDidMount = () => {
        Axios.get ('http://localhost:3030/genre')
        .then (res => {
            this.setState ({listGenre: res.data});
        })
        .catch (err => console.log ('error =', err));
    };
    
    render() {
        const listGenre = this.state.listGenre
        return(
            <NavDropdown title="All Categories">
                {listGenre.length > 0 ? 
                listGenre.map((genre) => {
                return (
                    <NavDropdown.Item key={genre.genre_id} href={`/genre/${genre.genre_id}`}>{genre.genre_name}</NavDropdown.Item>
                )
                }): <NavDropdown.Item href="#/"><Spinner animation="grow" size="sm"/> Loading...</NavDropdown.Item>}
            </NavDropdown>
        )
    }
}
export default GenreDropdown