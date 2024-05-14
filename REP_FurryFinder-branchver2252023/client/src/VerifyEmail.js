import { Link } from 'react-router-dom';

const VerifyEmail = () => {
    return (
        <div>
          <div className="color">
             <h2>We sent a Verifaction code to mail</h2>
          </div>
          <div className="label">
            <label className="backgreen" for="Number">Insert here : </label>
            <input className="backwhite" For ="Number" /> 
          </div>
          <Link to="/homepage1"> <button className="button1">Submit</button></Link>
        </div>
      );
}
 
export default VerifyEmail;