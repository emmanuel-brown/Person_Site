import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { useForm } from '../Components/GenUtils/useForm'
import V from 'validator'
import '../Components/Home/home.scss'

const Contact = () =>{
    const [values, handleChange] = useForm({
        firstName: "",
        lastName: "",
        email: ""
    })

    const valid = (err) =>{
        let valid = true
        if(V.isEmpty(values.firstName)){
            valid = false
            err && console.log("First name is not valid")
        }
        if(V.isEmpty(values.lastName)){
            valid = false
            err && console.log("Last name is not valid")
        }
        if(!V.isEmail(values.email)){
            valid = false
            err && console.log("Email is invalid")
        }

        return valid
    }

    function send (e){
        e.preventDefault()
        console.log(`Is it valid ${ valid(true) }`)
    }

    return(
        <>
            <Navbar />
            <div id="contact">
                <h1>Contact Form</h1>
                <form onSubmit={ send } data-netlify="true">
                    <input type="text" name="firstName" value={ values.firstName } onChange={ handleChange }/>
                    <input type="text" name="lastName" value={ values.lastName } onChange={ handleChange }/>
                    <input type="text" name="email" value={ values.email } onChange={ handleChange }/>
                    <input type="file" name="myfile" id="myfile" palceholder="Upload File" />
                    <div className="file">
                        <div data-netlify-recaptcha="true"></div>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </>
    )
}

export default Contact