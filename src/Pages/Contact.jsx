import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

import "./pages.css"

export default function Contact() {

    const form = useRef();

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     console.log(formData)

    //     emailjs.sendForm('contact_form',  'service_fs4t9nv','form.current','cKKCi2L2m5g0JJszG')

    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    // }
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm( 'service_fs4t9nv','contact_form', form.current, 'cKKCi2L2m5g0JJszG')
            .then((result) => {
                console.log(result.text,"pass text");
            }, (error) => {
                console.log(error.text,"error");
            });
    };


    return (
        <div id="Contact">

            <h2> TALK TO  ME</h2>

            <div className="contact-info">
                <div className="question-path">
                    <p>Do you have a project for me or a job</p>
                    <p>feel free to contact me by filling the form below:</p>

                </div>

                <form ref={form} onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="What's your name?" />

                    <input
                        type="email"
                        name="email"
                        placeholder="What's your @mail"
                    />

                    <textarea
                        name="message"
                        placeholder="What do you have to tell me/offer me" />


                    <button type="submit" value="send" className="submit" >Send it to me</button>
                </form>
            </div>
        </div>
    )
}