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
        if(!token) window.location = '/login'

        return (
            <React.Fragment>
                <NavHead history={this.props.history} />
                <Container style={{margin:'10px',maxWidth:"none"}}>
                    <Route 
                        path='/home'
                        exact={true}
                        render={({history}) => {
                            let params = new URLSearchParams(window.location.search)
                            return(
                                <React.Fragment>
                                    <SlideView key={this.props.books}/>
                                    <CardList search={params.get('search')} history={history} key={window.location.href}/>
                                </React.Fragment>
                            )
                        }}
                    />
                    <Route 
                        path='/home/explore'
                        exact={true}
                        render={({history}) => {
                            let params = new URLSearchParams(window.location.search)
                            return <CardList search={params.get('search')} history={history} key={window.location.href}/>
                        }}
                    />
                    <Route
                        path='/home/genre/:id'
                        exact={true}
                        render={(props) => {
                            return <CardList {...props}  address={`${process.env.REACT_APP_HOST}/book/g/genre/`} />
                        }}
                    />
                    <Route
                        path='/home/year/:id'
                        exact={true}
                        render={(props) => {
                            return <CardList {...props} address={`${process.env.REACT_APP_HOST}/book/y/year/`} />
                        }}
                    />
                    <Route 
                        path='/home/history'
                        exact={true}
                        render={({history}) => {
                            let params = new URLSearchParams(window.location.search)
                            return <CardList search={params.get('search')} history={history} key={window.location.href}/>
                        }}
                    />
                </Container>
            </React.Fragment>
        )
    }
}

export default Menu;