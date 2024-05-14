function validation(cred) {
    let errors = {};
    // RE Patterns 
    const pattern_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/                       // Must be without space *@*.*
    const pattern_pass  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/ // Must be 8 char long, and contaion the foloowing chars.
  
    // Old pass check.
    if(cred.oldpass === "") { // Check if empty.
        errors.oldpass = "Password should not be empty"
    } else if(!pattern_pass.test(cred.oldpass)){
        errors.oldpass = "Password is not coulified"
    } else { // Pass.
        errors.oldpass = "";
    }

    // New pass check.
    if(cred.newpass === "") { // Check if empty.
        errors.newpass = "Password should not be empty" 
    } else if(!pattern_pass.test(cred.newpass)){
        errors.newpass = "Password is not coulified"
    } else { // Pass.
        errors.newpass = "";
    }

    // Email check.
    if(cred.email === "") { // Check if empty.
        errors.email = "Email should not be empty"
    } else if(!pattern_email.test(cred.email)) { // Check if meet standart.
        errors.email = "Email is not coulified"
    } else { // Pass.
        errors.email = "";
    }

    return errors; // Return errors.

} // End of function validation.

export default validation;