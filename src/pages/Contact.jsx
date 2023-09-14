import React, { useState } from "react";


function Contact() {
  const [enterEmail, setEnterEmail]= useState("");
  const [enterMsg, setEnterMsg]= useState("");

   function handleEmail(event) {
    setEnterEmail(event.target.value)
   }

   function handleMsg(event) {
    setEnterMsg(event.target.value)
   }
 
    return (
        <div className="contact">
        <h3>Contact Us</h3>
        <form>
          <label>
            <span>Enter your email:</span>
            <input onChange={handleEmail} type="email" name="email" required value={enterEmail}/>
          </label>
          <label>
            <span>Enter your message:</span>
            <textarea onChange={handleMsg} name="message" required>{enterMsg}</textarea>
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
}

export default Contact;