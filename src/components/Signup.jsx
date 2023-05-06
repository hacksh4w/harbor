import React, {useContext} from 'react'
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import {auth} from "../firebase"
import { ThemeContext } from "../App.jsx";

const fields=signupFields;
let fieldsState={};
fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){

  const {signupState,setSignupState} = useContext(ThemeContext);
  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount=()=>{
    const { email, password } = signupState;
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("User created:", user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });

    // Listener for auth state changes
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log("User logged in:", user.email);
        // TODO: handle successful login
      } else {
        console.log("User logged out");
        // TODO: handle logout
      }
    });
  }

  return(
    <form className="mt-8 space-y-6 py-2 px-4" onSubmit={handleSubmit}>
      <div className="">
        {
          fields.map(field=>
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          )
        }
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  )
}