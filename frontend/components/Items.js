import React, { Component } from 'react'
import {Query} from 'react-apollo';
import gql from  'graphql-tag';

const ALL_ITEMS_QUERY = gql `
query ALL_ITEMS_QUERY {
    itmes {
        id
        title
        price
        description
        image
        largeImage
    }
}
`;

class Items extends Component {
    render() {
        return (
            <div>
                <p>Items!</p>
            </div>
        )
    }
}

export default Items;