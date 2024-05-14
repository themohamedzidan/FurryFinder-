import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/">
            <img className='logo' src='logo with name.png' alt='furry-finder logo' style={{ width: 200}}/>
            {/* <h1>
                Furrry Finder 
            </h1> */}
           
            </Link>
            <div className="links">
                {/* <a href="/home">Home</a> */}
                <Link to="/aboutus">About Us</Link>
                <Link to="/contactus">Contact us </Link >

            </div>
        </nav>
     );
}
 
export default Navbar;