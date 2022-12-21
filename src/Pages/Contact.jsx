import React from "react";
import { useState } from "react";
import "./pages.css"

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "" })

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefalut()
    }
    return (
        <div id="Contact">
            <h2> TALK TO  ME</h2>
            <div className="contact-info">
                <div className="question-path">
                    <p>Do you have a project for me or a job</p>
                    <p>feel free to contact me by filling the form below:</p>

                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="What's your name?"
                        onChange={handleChange}
                        value={formData.name} />

                    <input
                        type="text"
                        name="email"
                        placeholder="What's your @mail"
                        onChange={handleChange}
                        value={formData.email} />

                    <textarea
                        name="message"
                        placeholder="What do you have to tell me/offer me"
                        onChange={handleChange}
                        value={formData.message} />


                    <button className="submit" href="mailto:justiceopara33@gmail.com">Send it to me</button>
                </form>
            </div>
        </div>
    )
}