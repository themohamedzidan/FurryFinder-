import { Link } from 'react-router-dom';

let data="";
function send()
{
  data="Your Report Was Sent";
  alert(data)
}
const ReportUser = () => {
    return ( 
      <div>
        <div>
           <label className='color' For="name" style={{ fontWeight: 'bold' }}>UserName : </label>
        </div>
        <div className='label'>
           <input className='backwhite' type="name" />
        </div>
        <div >
           <label className='color' For="text" style={{ fontWeight: 'bold' }}>The Report : </label>
        </div>
        <div className='label'> 
           <textarea id="w3review" name="w3review" rows="20" cols="50"></textarea>
        </div>
        <div>
           <Link to="/homepage1"> <button className="button1" onClick={send} >Send  </button></Link>
         </div>
      </div>
     );
}
 
export default ReportUser;