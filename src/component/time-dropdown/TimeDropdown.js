import React from 'react'
// import Axios from 'axios'
import { NavDropdown, Spinner } from 'react-bootstrap'
import { getYear } from '../../Publics/Actions/book'
import { connect } from 'react-redux'

class TimeDropdown extends React.Component{
    constructor(){
        super()
        this.state = {
        listYear: [],
        }
    }

    componentDidMount = async() => {
        await this.props.dispatch(getYear())
        this.setState({
            listYear: this.props.books.yearsList
        })
    }

    render() {
        const listYear = this.state.listYear
        return(
            <NavDropdown title="All Times">
                {listYear.length > 0 ? 
                listYear.map((year) => {
                return (
                    <NavDropdown.Item href={`/home/year/${year.year}`} key={year.year}>{year.year}</NavDropdown.Item>
                )
                }): <NavDropdown.Item href="#/"><Spinner animation="grow" size="sm"/> Loading...</NavDropdown.Item>}
            </NavDropdown>
        )
    }
}
const MapStateToProps = state => {
    return {
        books: state.books
    }
}
export default connect (MapStateToProps) (TimeDropdown)