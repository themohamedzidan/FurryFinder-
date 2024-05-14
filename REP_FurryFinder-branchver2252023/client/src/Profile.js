import { Link } from 'react-router-dom';

const Profile = () => {
    return ( 
        <div>
            <h2 className="color">Hello,User </h2>
            <div className="label3">
               <Link to="/petinfo"><img src="cat1.jpeg" alt="" /></Link> 
            </div>
            <div>
             <Link to="/homepage1"> <button className="button1">Remove Pet</button></Link>
             <Link to="/homepage1"> <button className="button1">Report Missing </button></Link>
            </div>
            <div>
             <Link to="/addpet"> <button className="button1">Add Pet</button></Link>
            </div>
            <div>
             <Link to="/update"> <button className="button1">Edit Profile</button></Link>
            </div>
        </div>
     );
}
 
export default Profile;