import { useState, useContext } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "../components/FormAction";
import FormExtra from "../components/FormExtra";
import Input from "./Input";
import {auth} from "../firebase";
import { ThemeContext } from "../App.jsx";

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

    export default function Login() {
        const {loginState, setLoginState} = useContext(ThemeContext);
      
        const handleChange = (e) => {
          setLoginState({ ...loginState, [e.target.id]: e.target.value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          authenticateUser();
        };
      
        const authenticateUser = () => {
          const { email, password } = loginState;
      
          auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log(user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.error(errorCode, errorMessage);
            });
        };
      
        return (
          <form className="mt-8 space-y-6 w-full max-w-screen-xl" onSubmit={handleSubmit}>
            <div className="-space-y-px">
              {fields.map((field) => (
                <Input
                  key={field.id}
                  handleChange={handleChange}
                  value={loginState[field.id]}
                  labelText={field.labelText}
                  labelFor={field.labelFor}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
      
            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text="Login" />
          </form>
        );
      }