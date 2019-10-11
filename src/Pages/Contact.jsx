import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { useForm } from '../Components/GenUtils/useForm'
import V from 'validator'
import '../Components/Home/home.scss'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const Contact = () =>{
    const [values, handleChange] = useForm({
        firstName: "",
        // lastName: "",
        email: ""
    })

    const valid = (err) =>{
        let valid = true
        if(V.isEmpty(values.firstName)){
            valid = false
            err && console.log("First name is not valid")
        }
        // if(V.isEmpty(values.lastName)){
        //     valid = false
        //     err && console.log("Last name is not valid")
        // }
        if(!V.isEmail(values.email)){
            valid = false
            err && console.log("Email is invalid")
        }
        return valid
    }

    function send (e){
        if(valid()){
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...values })
            })
                .then(() => alert("Success!"))
                .catch(error => alert(error));
            console.log(`Is it valid ${ valid(true) }`)
            console.table(values)
        } else{
            console.log(valid(true))
            e.preventDefault()
        }
    }

    return(
        <>
            <Navbar />
            <div id="contact">
                <h1>Contact Form</h1>
                <form onSubmit={ send } action="POST">
                    <input type="text" name="name" value={ values.firstName } onChange={ handleChange }/><br /><br />
                    {/* <input type="text" name="lastName" value={ values.lastName } onChange={ handleChange }/><br /><br /> */}
                    <input type="text" name="email" value={ values.email } onChange={ handleChange }/><br /><br />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </>
    )
}

export default Contact