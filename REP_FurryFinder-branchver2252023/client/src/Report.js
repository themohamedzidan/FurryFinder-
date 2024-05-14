import { Link } from 'react-router-dom';
const Report = () => {
    return ( 
        <div>
           <div>
             <Link to="/reportuser"> <button className="button1">Report User </button></Link>
           </div>
           <br></br>
           <div>
             <Link to="/reportissue"> <button className="button1">Report an issue </button></Link>
           </div>
        </div>
     );
}
 
export default Report;