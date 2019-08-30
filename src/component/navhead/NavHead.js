import React from 'react'
import Sidebar from 'react-sidebar';
import { Link } from 'react-router-dom'
import {  Navbar, Nav, Form, InputGroup, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars ,faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../../source/logo.png'
import user from '../../source/user.png'

import { getBook } from '../../Publics/Actions/book'
import GenreDropdown from '../genre-dropdown/GenreDropdown'
import TimeDropDown from '../time-dropdown/TimeDropdown'
import AddModal from '../add-modal/AddModal'
import './Navhead.css'

class NavHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            search: ''
        };
    }

    componentDidMount = () => {
        this.keywordSearch()
    }

    keywordSearch = async() => {
        const search = this.state.search
        await this.props.dispatch (getBook( search, undefined, undefined, undefined, undefined, undefined ))
    }

    onSetSidebarOpen = (open) => {
        this.setState({ sidebarOpen: open });
    }
    onSetSidebarClose = (close) => {
        this.setState({ sidebarOpen: close });
    }

    handleSearch = (e) => {
        this.setState({search: e.target.value})
    }

    logOut = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }

    render() {
        const styleSideBar = {
            sidebar: { 
                background: "white",
                width: '45vh',
                position: 'fixed'
            }
        }
        const contentSidebar = (
            <div>
                <span className="float-right" style={{fontSize: "3vh", marginRight:"2vh"}}>
                    <FontAwesomeIcon icon={faBars} onClick={() => this.onSetSidebarClose(false)}/>
                </span>

                <img src={user} alt="Not Found" className="userImage"/>
                <center><h5>Fadil Himawan A</h5></center>

                <div style={{marginTop:"8vh", marginLeft:"4vh"}}>
                    <Link className="sidelist" to="/home/explore">Explore</Link>
                    <Link className="sidelist">History</Link>
                    <AddModal />
                    <h6><a href="javascript:void(0)" className='sidelist' onClick={this.logOut}>Log out</a></h6>
                </div>
            </div>
        )

        return (
            <React.Fragment>
                <Sidebar
                    sidebar= {contentSidebar}
                    open= {this.state.sidebarOpen}
                    onSetOpen= {this.onSetSidebarOpen}
                    styles= {styleSideBar}
                >
                </Sidebar>
                <Navbar bg="light" expand="lg" style={{boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.25)'}}>
                    <Navbar.Brand href="">
                        <FontAwesomeIcon icon={faBars} onClick={() => this.onSetSidebarOpen(true)}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" style={{marginLeft: '10px'}}>
                            <GenreDropdown />
                            <TimeDropDown />
                        </Nav>
                        <Form inline style={{marginRight: '270px'}}>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend" className="icon-search">
                                    <FontAwesomeIcon icon={faSearch}/>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl type="text" placeholder="Search book" className="mr-sm-2 btn-search"  style={{width:'350px'}} onChange={this.handleSearch} />
                        </Form>
                        <Link to='/'>
                            <img src={logo} style={{width: '50px'}} alt="Not Found"/>
                        </Link>
                        <b style={{fontSize: '30px', marginRight: '43px'}}>Library</b>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}

const MapStateToProps = state => {
    return {
        books: state.books,
    }
}

export default connect (MapStateToProps) (NavHead)