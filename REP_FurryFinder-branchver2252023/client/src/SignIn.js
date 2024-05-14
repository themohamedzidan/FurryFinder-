// Imports
import React             from 'react';
import { Link,useNavigate} from 'react-router-dom';
import validation        from './LoginValidation';
import { useState }      from 'react';
//import axios             from 'axios';

function SignIn () {
  
  // Create var
  const navigate           = useNavigate();
  const [errors,setErrors] = useState({})
  const [cred,setCred]     = useState({
    email    : '',
    password : ''
  })

  // Handel Input
  const handelInput = (event) => {
    setCred(prev => ({...prev, [event.target.name]:[event.target.value]}))
  }

  // Handel submit
  const handelSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(cred));
    if(errors.email === "" &&  errors.pass === "") {
      navigate("/homepage1");
      // axios.post("http://localhost:3000/SignIn",cred).then(
      //   res => {
      //     if(res.data === "Success"){
      //       navigate("/homepage1");
      //     }else{
      //       alert("no")
      //     }
      //   }
      // )
    }
  }

  // Start page here.
  return ( 
    <div>
      <form action='' onSubmit={handelSubmit}>
          <div className="label">
            <label className='backgreen' For="Email">Email : </label>
            <input className='backwhite' type="Email" name='email'placeholder='Enter Email' onChange={handelInput}/>
            {errors.email && <span>{errors.email}</span>}
          </div>

          <div className="label">
            <label className='backgreen' For="Password">Password : </label>
            <input className='backwhite' type="Password" name='password' placeholder='Enter password' onChange={handelInput}/>
            {errors.pass && <span>{errors.pass}</span>}
          </div>

          <button type='submit' className="button1">Submit</button>
          <p>You are agree to our terms and policies</p>
          
          <div>
            <br />
            <h4 className='color'>forgot your password?</h4>
            <Link to="/resetpass"><button className="button1"> click here</button></Link>
          </div>
        </form>
    </div>
  )
 } // End of page.
 
export default SignIn ;