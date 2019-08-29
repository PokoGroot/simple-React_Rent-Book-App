import React from 'react';

import CardList from '../../component/card-list/CardList.component'
import {NavHead} from '../../component/navhead/NavHead'

import './genre-book.css'

class GenreBook extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log('urlgenre', this.props.match)
        return (
            <React.Fragment>
                <NavHead />
                <CardList match={this.props.match}/>
            </React.Fragment>
        )
    }
}

export default GenreBook;