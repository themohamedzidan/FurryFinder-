import { Link } from 'react-router-dom';

function HomePage(){
    return ( 
     <div>
        <Link to="/signin"><button className="button">Sign in</button></Link>
        <Link to="/signup"><button className="button">Sign up</button></Link>
     </div>
    );
}
export default HomePage
