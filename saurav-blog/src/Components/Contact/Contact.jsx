import React, { useState } from "react";
import "./contact.css";
import {client} from  "../../App"
import Loader from "../Utils/Loader";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("");
  const [progerss ,setProgress] = useState(false)


  const submitForm = (e) => {
    e.preventDefault();
    setProgress(true);
    const data = {
      name: name,
      email: email,
      message: message
    } 

    client
      .post("/createVisitor", data)
      .then((res) => {
        if (res.data.success === 1) {
          setProgress(false);
          alert("Message sent!");
        }
      })
      .catch((err) => {
        setProgress(false);
        alert("Error when Sending Message !")
        console.log(err);
      });
  };
  return (
    <div className="contact">
        <div className="contact-title">
            <p>get notified</p>
        </div>
      <div className="contact-form">
        <form className="main-form" onSubmit={submitForm}>
          <div className="form-name-container">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required="true"
            />
          </div>
          <div className="form-email-container">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email Address"
              required="true"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}

            />
          </div>
        <div className="form-message-container">
            <input
              type="text"
              id="message"
              name="message"
              placeholder="Enter Your message"
              required="true"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            />
          </div>

          <div className="form-button-container">
            <button type="submit" className="btn">send</button>
          </div>

          {progerss && <Loader/>}
        </form>
      </div>
    </div>
  );
}
