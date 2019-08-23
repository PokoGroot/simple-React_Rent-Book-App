import React from 'react';

import {CardList} from '../../component/card-list/CardList.component'
import {NavHead} from '../../component/navhead/NavHead'

import './explore.css'

class Menu extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavHead />
                {/* <Container style={{margin:'10px',maxWidth:"none"}}> */}
                    <CardList />
                {/* </Container> */}
            </React.Fragment>
        )
    }
}

export default Menu;