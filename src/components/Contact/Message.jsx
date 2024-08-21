import { useState } from "react";

const Message = ({ toggleForm }) => {
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // const formData = new FormData(e.target);

    // console.log(formData.get("name"));
    // console.log(formData.get("email"));
    // console.log(formData.get("message"));

    toggleForm();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <label htmlFor="name" className="input-label">
          Your Name
        </label>
        <input
          type="text"
          value={name}
          name="name"
          id="name"
          className="input"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className="input-label">
          Your E-mail
        </label>

        <input
          type="email"
          value={mail}
          name="email"
          id="email"
          className="input"
          onChange={(e) => setMail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className="input-label">
          Your Message
        </label>
        <textarea
          value={message}
          name="message"
          id="message"
          placeholder="Story, Advice, or Simply Saying Hello."
          className="input"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button className="primary-btn">SEND</button>
    </form>
  );
};
export default Message;
