import Link from 'next/link';

const Nav = () => (
    <div>
<Link href="/sell">
        <a>Page for selling merchandise!</a>
        </Link>
        <Link href="/">
        <a>Home Page</a>
        </Link>

    </div>
);

export default Nav;