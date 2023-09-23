import React, { useState } from "react";

function Contact() {
  const [enterEmail, setEnterEmail] = useState("");
  const [enterMsg, setEnterMsg] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedMsg, setSubmittedMsg] = useState("");

  function handleEmail(event) {
    setEnterEmail(event.target.value);
  }

  function handleMsg(event) {
    setEnterMsg(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedEmail(enterEmail);
    setSubmittedMsg(enterMsg);
    setEnterEmail(""); // Clear input after submission
    setEnterMsg(""); // Clear input after submission
  }

  return (
    <div className="contact">
      <h3>Contact Me</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Enter your email:</span>
          <input
            onChange={handleEmail}
            type="email"
            name="email"
            required
            value={enterEmail}
          />
        </label>
        <label>
          <span>Enter your message:</span>
          <textarea
            onChange={handleMsg}
            name="message"
            required
            value={enterMsg}
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedEmail && (
        <div className="submitt">
          <p>Submitted Email: {submittedEmail}</p>
          <p>Submitted Message: {submittedMsg}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
