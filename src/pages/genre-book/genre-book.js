import React from 'react';

import CardList from '../../component/card-list/CardList.component'
import {NavHead} from '../../component/navhead/NavHead'

import './genre-book.css'

class GenreBook extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <NavHead />
                <CardList />
            </React.Fragment>
        )
    }
}

export default GenreBook;