import React, {useState,useEffect} from 'react'
// import axios from 'axios'

function RegistrationForm () {

    useEffect( () => {

    },[])

    const[values,setValues]=useState({
        email: '',
        password: '',
    });

        const[showSuccess, setShowSuccess] = useState();

    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }))
    }

    const handlePasswordInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            password: event.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefualt();
        setShowSuccess(true);
    };
 
 
    return(
        <div>

<form class='register-form' onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="email" value={values.email}
          onChange={handleEmailInputChange} />
          <input type="password" name="password" placeholder="Enter your password" value={values.password}
          onChange={handlePasswordInputChange}/>
          <button type="submit" onClick={handleSubmit}  >Register</button>
       </form>

       {showSuccess && <div class='success-message'>Success! Thank you for registering</div>}

        </div>
       
       
     
    )}

export default RegistrationForm;