// Imports
import React               from 'react';
import { Link,useNavigate} from 'react-router-dom';
import validation          from './ResetpassValidate';
import { useState }        from 'react';
import axios                 from 'axios';

function ResetPass() {
  const navigate           = useNavigate();
  const [errors,setErrors] = useState({})
  const [cred,setCred]     = useState({   
    email    : '',
    oldpass  : '',
    newpass  : ''
  })
  
  // Handel submit
  const handelSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(cred));
    if(errors.email === "" &&  errors.newpass === "" &&  errors.oldpass === "") {
      axios.post("/resetpass",cred).then(
        res=> {
          if(res.data === "Success"){
            alert("Password changed successfuly")
            navigate("/signin");
          }else{
            alert("Faild to reset password")
          }
        }
      )
    }
  }
  // Handel Input
  const handelInput = (event) => {
    setCred(prev => ({...prev, [event.target.name]:[event.target.value]}))
  }

  return ( 
    <div>
      <form action='' onSubmit={handelSubmit}>
         <h2 className="color"> reset your password here</h2><br></br>
         
         <div className="label">
             <label className='backgreen' For="Email">Email : </label>
             <input className='backwhite' placeholder='Enter Email' type="Email"  name='email' onChange={handelInput}/>
             {errors.email && <span>{errors.email}</span>}
        </div>

         <div className="label">
           <label className="backgreen" For="old Password"> old Password : </label>
           <input className="backwhite" type="Password" name='oldpass' placeholder='Enter old password' onChange={handelInput}/> 
           {errors.oldpass && <span>{errors.oldpass}</span>}
         </div>
         
         <br></br>
         
         <div className="label">
           <label className="backgreen" For="new Password"> new Password : </label>
           <input className="backwhite" type="password" name='newpass' placeholder='Enter new password' onChange={handelInput}/>
           {errors.newpass && <span>{errors.newpass}</span>}
         </div>
         
         <br></br>
         <button type='submit' className="button1">Reset</button>
     </form>
    </div>
  );
}

export default ResetPass;