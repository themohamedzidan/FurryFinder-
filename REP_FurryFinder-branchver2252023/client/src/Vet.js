import UploadAndDisplay from "./UploadAndDisplay";
import { Link } from 'react-router-dom';

let data="";
function send()
{
  data="Your Information Was Sent Successfully";
  alert(data)

}
const Vet = () => {
    return (
      <div>
        <div>
            <h2 className="color">
                Please Insert Your Vet Lisencee
            </h2>
        </div>
        <div className="label">
            <div className="backgreen-center">
              <UploadAndDisplay></UploadAndDisplay>
            </div>
        </div>
        <br/>
        <Link to="/profile"><button className="button1" onClick={send}>Send</button></Link>

      </div>
    );
}
 
export default Vet;