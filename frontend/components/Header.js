import Nav from './Nav';

const Header = ()=> (
    <div>
        <div className="bar">
        <a href="">Sick Fits -> Worldwide Store</a>
        <Nav />
            </div>
            <div className="sub-bar">
                <p>Search Bar</p>
            </div>
            <div>Cart!</div>
    </div>
);

export default Header;