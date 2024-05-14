import { Link } from 'react-router-dom';
const Navbar1 = () => {
    return ( 
        <nav className="navbar">
            <Link to="/homepage1">
            <img className='logo' src='logo with name.png' alt='furry-finder logo' style={{ width: 200}}/>
            {/* <h1>
                Furrry Finder 
            </h1> */}
            </Link>
            <div className="links">
               
            
                <Link to="/">Log Out </Link >

            </div>
        </nav>
     );
}
 
export default Navbar1;