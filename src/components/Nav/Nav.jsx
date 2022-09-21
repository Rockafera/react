import CartWidget from '../CartWidget/CartWidget';

const Nav = () => {
    return ( 
    <div className="container">
        <nav className="nav">
            <div className="nav_brand">
                <a className="nav_link" href="#">Brand</a>
            </div>
            <ul className="nav_list">
                <li>
                    <a className="nav_link" href="#">Home</a>
                </li>
                <li>
                    <a className="nav_link" href="#">About</a>
                </li>
                <li>
                    <a className="nav_link" href="#">Contact</a>
                </li>
                <li>
                    <a className="nav_link" href="#"><CartWidget /></a>
                </li>
            </ul>
        </nav>
    </div> );
}
 
export default Nav;