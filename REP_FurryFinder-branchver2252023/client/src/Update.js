import { Link } from 'react-router-dom';
let data="";
function update()
{
  data="your information was updated successfully";
  alert(data)

}
const Update=()=> 
{
  return(
   <div>
     <h2 className="color"> <strong>update your profile info</strong> </h2>
     <div className="label">
        <label className="backgreen" For="name">Name : </label>
         <input className="backwhite" type="name" />
     </div>
     <div className="label">
        <label className="backgreen" For="Email">Email : </label>
        <input className="backwhite" type="Email"/>
     </div>
     <div className="label">
        <label className="backgreen" For ="Phone Number">PhoneNumber : </label>
        <input className="backwhite" type="Phone Number" />
     </div>
     <div className="label">
         <label className="backgreen" For="Password">Password : </label>
         <input className="backwhite" type="Password" />
     </div>
     <div><Link to="/vet"><button className="button1">I Am A Vet</button></Link></div>
    
     <Link to="/homepage1"><button className="button1" onClick={update}>Update</button></Link>
    </div>
    
  );
}
export default Update ;