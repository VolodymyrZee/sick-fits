import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const MyButton = styled.button`
background: red;
font-size: ${props=> (props.huge ? '100px' : '50px' )};
.poop {
    font-size: 100px;
}
`;

 class Page extends Component {
    render() {
        return(
            <div>
                <Meta />
               <Header />
               <MyButton huge = "100">
                   Click Me!
                   <span className="poop">+poop</span>
                   </MyButton>
                   <Header />
                   <MyButton>
                   Click Me!
                   <span className="poop">+poop</span>
                   </MyButton>
                {this.props.children}
            </div>
        );
    }
} 
export default Page;
