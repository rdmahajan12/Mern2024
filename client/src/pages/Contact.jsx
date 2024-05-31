import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const initialData = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(initialData);

  const [userData, setUserData] = useState(true);
  const { user, API } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const onChangeUser = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (res.ok) {
        const contactData = await res.json();
        setContact(initialData);
        console.log({ contactData });
      }
    } catch (error) {
      toast.error("contact", error);
    }
  };

  return (
    <div>
      <section className="section-contact">
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img
              src="/images/support.png"
              alt="login page"
              width="500"
              height="500"
            />
          </div>
          <section className="section-form">
            <h1 className="main-heading mb-3">Contact Us</h1>
            <br />
            <form onSubmit={onSubmitForm}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  autoComplete="off"
                  required
                  id="username"
                  value={contact.username}
                  onChange={onChangeUser}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={onChangeUser}
                />
              </div>
              <div>
                <label htmlFor="password">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  value={contact.message}
                  onChange={onChangeUser}
                  autoComplete="off"
                ></textarea>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156091!2d73.78056543154418!3d18.52459859950238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716467427561!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </div>
  );
};

export default Contact;
