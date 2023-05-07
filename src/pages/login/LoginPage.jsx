import Header from "../../components/Header"
import Login from "../../components/Login"
import React from 'react'

export default function LoginPage(){
    return(
        <div className="w-full max-w-screen-sm mx-auto py-4">
             <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Login"
                linkUrl="/login"
                />
            <Login/>
        </div>
    )
}