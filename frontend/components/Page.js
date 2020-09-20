import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';

 class Page extends Component {
    render() {
        return(
            <div>
                <Meta />
               <Header />
               <button>Click Me!</button>
               <button>Make a purchase</button>
                {this.props.children}
            </div>
        );
    }
} 
export default Page;
