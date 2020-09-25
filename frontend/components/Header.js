import Nav from './Nav';
import Link from 'next/link';
import styled  from 'styled-components';

const Logo = styled.h1`
font-size: 4rem;
margin-left: 2rem;
position: relative;
z-index:2;
transform: skew()(-7deg);
a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.red};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
}
`;

const Header = ()=> (
    <div>
        <div className="bar">
            <Logo>
                <Link href="/">
        <a>Super Sick Fits</a>
        </Link>
        </Logo>
        <Nav />
            </div>
            <div className="sub-bar">
                <p>Search Bar</p>
            </div>
            <div>Cart!</div>
    </div>
);

export default Header;