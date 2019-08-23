import React from 'react'
import Axios from 'axios'
import {NavDropdown, Spinner} from 'react-bootstrap'

class TimeDropdown extends React.Component{
    constructor(){
        super()
        this.state = {
        listYear: [],
        }
    }

    componentDidMount = () => {
        Axios.get ('http://localhost:3030/book/y/year')
        .then (res => {
            this.setState ({listYear: res.data});
        })
        .catch (err => console.log ('error =', err));
    };

    render() {
        const listYear = this.state.listYear
        return(
            <NavDropdown title="All Times">
                {listYear.length > 0 ? 
                listYear.map((year) => {
                return (
                    <NavDropdown.Item href={`/year/${year.year}`} key={year.year}>{year.year}</NavDropdown.Item>
                )
                }): <NavDropdown.Item href="#/"><Spinner animation="grow" size="sm"/> Loading...</NavDropdown.Item>}
            </NavDropdown>
        )
    }
}
export default TimeDropdown