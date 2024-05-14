function validation(cred) {
    let errors = {};
    // RE Patterns 
    const pattern_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/                       // Must be without space *@*.*
    const pattern_pass  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/ // Must be 8 char long, and contaion the foloowing chars.
  
    // Name check.
    if(cred.name === "") { // Check if empty.
        errors.name = "Name should not be empty"
    } else { // Pass.
        errors.name = "";
    }

    // Phone check.
    if(cred.phone === "") { // Check if empty.
        errors.phone = "phone should not be empty"
    } else { // Pass.
        errors.phone = "";
    }

    // Email check.
    if(cred.email === "") { // Check if empty.
        errors.email = "Email should not be empty"
    } else if(!pattern_email.test(cred.email)) { // Check if meet standart.
        errors.email = "Email is not coulified"
    } else { // Pass.
        errors.email = "";
    }

    // Password check.
    if(cred.password === "") { // Check if empty.
        errors.pass = "Password should not be empty"
    } else if(!pattern_pass.test(cred.password)) { // Check if meet standart.
        errors.pass = "Password is not coulified"
    } else { // Pass.
        errors.pass = "";
    }

    return errors; // Return errors.

} // End of function validation.

export default validation;