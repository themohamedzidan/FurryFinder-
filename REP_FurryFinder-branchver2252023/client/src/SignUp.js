import React                 from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation            from './SingUpValidation';
import { useState }          from 'react';
import axios                 from 'axios'

function SignUp () {
    // Create var
    const navigate           = useNavigate();
    const [errors,setErrors] = useState({})
    const [cred,setCred]     = useState({
      name     : '',   
      email    : '',
      phone    : '',
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
    if(errors.name === "" && errors.pass === "" &&  errors.email === "" &&  errors.phone === ""){
      axios.post("/signup",cred).then(
        res=> {
          if(res.data === "Success"){
           navigate("/homepage1");
          }else{
            alert("no")
          }
        }
      )
    }
 }

  return ( 
      <div>
        <form action='' onSubmit={handelSubmit}> 
           
           <div className="label">
             <label className='backgreen' For="name">Name : </label>
             <input className='backwhite' type='text' placeholder='Enter Full name' name='name' onChange={handelInput}/>
             {errors.name && <span>{errors.name}</span>}
           </div>
           
           <div className="label">
             <label className='backgreen' For="Email">Email : </label>
             <input className='backwhite' placeholder='Enter Email' type="Email"  name='email' onChange={handelInput}/>
             {errors.email && <span>{errors.email}</span>}
           </div>

           <div className="label">
             <label className='backgreen' For ="Number">PhoneNumber : </label>
             <input className='backwhite' placeholder='Enter Phone Number ' type='number' name='phone' onChange={handelInput}/>
             {errors.phone && <span>{errors.phone}</span>} 
           </div>

           <div className="label">
             <label className='backgreen' For="Password">Password : </label>
             <input className='backwhite' placeholder='Enter password' type="Password" name='password' onChange={handelInput}/>
             {errors.pass && <span>{errors.pass}</span>} 
           </div>
           <button className="button1" type='submit'>Submit</button>
           
           <p>Already have an account?</p>
           <Link to="/signin"> <button className="button1">Sign in here</button></Link>
          </form> 
       </div>
    
  )
}
 
export default SignUp;