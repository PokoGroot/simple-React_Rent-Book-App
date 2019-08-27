import React from 'react';
import { Container } from 'react-bootstrap';

import {CardList} from '../../component/card-list/CardList.component'
import {SlideView} from '../../component/carousel/carousel'
import {NavHead} from '../../component/navhead/NavHead'

import '../home/home.css'

class Menu extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavHead />
                <Container style={{margin:'10px',maxWidth:"none"}}>
                    <SlideView />
                    <CardList />
                </Container>
            </React.Fragment>
        )
    }
}

export default Menu;