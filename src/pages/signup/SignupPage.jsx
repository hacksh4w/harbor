import Header from "../../components/Header";
import Signup from "../../components/Signup";
import React from 'react'

export default function SignupPage(){
    return(
        <div className="w-full max-w-screen mx-auto py-0"> 
        <div class="max-w-xl mx-auto flex my-0 items-center justify-between">
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
              class="max-w-full mx-auto"
            />
            <Signup/> 
            </div>
        </div>
    )
}