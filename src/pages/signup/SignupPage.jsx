import Header from "../../components/Header";
import Signup from "../../components/Signup";
import React from 'react'

export default function SignupPage(){
    return(
        <> <div class="max-w-2xl mx-auto flex my-0 items-center justify-between">
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
              class="max-w-full mx-auto"
            />
            <Signup/> 
            </div>
        </>
    )
}