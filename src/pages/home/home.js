import React from 'react';
import { Container } from 'react-bootstrap';
// import { Router } from 'react-router-dom'

import CardList from '../../component/card-list/CardList.component'
import SlideView from '../../component/carousel/carousel'
import {NavHead} from '../../component/navhead/NavHead'

import '../home/home.css'

class Menu extends React.Component {
    render() {
        let token = localStorage.getItem('token')
        if(!token) window.location.href = 'http://localhost:3000/login'

        return (
            <React.Fragment>
                <NavHead />
                <Container style={{margin:'10px',maxWidth:"none"}}>
                    {/* <Router 
                        path='/'
                        exact={true}
                        render={({history}) => {
                            return (
                                <Fragment>
                                    <SlideView />
                                    <CardList history={history}/>
                                </Fragment>
                            )
                        }}
                    /> */}
                    <SlideView key={this.props.books} />
                    <CardList />
                </Container>
            </React.Fragment>
        )
    }
}

export default Menu;