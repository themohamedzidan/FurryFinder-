import UploadAndDisplay from "./UploadAndDisplay";
import { Link } from 'react-router-dom';

let data="";
function add()
{
  data="Pet Was added succesfully";
  alert(data)

}
const AddPet = () => {
    return ( 
     <div>
          <h2 className="color">Add A Pet</h2>
          <div className="label">
            <label className='backgreen' For="name">Name : </label>
            <input className='backwhite' type="name" />
          </div>
          <div className="label">
             <input className="backwhite" type ="date" label="Basic date picker" /> 
          </div>
          <div className='label'>
             <div className="backgreen-center">
                 <UploadAndDisplay></UploadAndDisplay>
              </div>
          </div>
              <Link to="/profile"><button className="button1" onClick={add}> Add</button></Link>
     </div>
     );
}
 
export default AddPet;