import { Link } from 'react-router-dom';

const homepage1 = () => {
    return ( 
            
        <div >
           <img src="nfc.png" alt="" />
           <Link to="/profile"><button className="button3">My Profile </button></Link> 
           <Link to="/profile"><button className="button3">Chat </button></Link> 
           <Link to="/vetsmap"><button className="button3">Vets Near Me </button></Link>    
           <Link to="/report"><button className="button3">Report </button></Link>   
           
        </div>
       
     );
}
 
export default homepage1;