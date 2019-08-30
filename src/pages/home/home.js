import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import CardList from '../../component/card-list/CardList.component'
import SlideView from '../../component/carousel/carousel'
import NavHead from '../../component/navhead/NavHead'

import '../home/home.css'

class Menu extends React.Component {
    render() {
        let token = localStorage.getItem('token')
        if(!token) window.location.href = 'http://localhost:3000/login'

        return (
            <React.Fragment>
                <NavHead />
                <Container style={{margin:'10px',maxWidth:"none"}}>
                    <Route 
                        path='/home'
                        exact={true}
                        render={({history}) => {
                            return(
                                <React.Fragment>
                                    <SlideView key={this.props.books}/>
                                    <CardList />
                                </React.Fragment>
                            )
                        }}
                    />
                    <Route 
                        path='/home/explore'
                        exact={true}
                        render={({history}) => {
                            return <CardList />
                        }}
                    />
                    <Route
                        path='/home/genre/:id'
                        exact={true}
                        render={({url}) => {
                            return <CardList match={this.props.match}/>
                        }}
                    />
                    <Route
                        path='/home/year/:year'
                        exact={true}
                        render={({url}) => {
                            return <CardList />
                        }}
                    />
                </Container>
            </React.Fragment>
        )
    }
}

export default Menu;