import React from "react";

const Contact = () => {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>Have questions or feedback? We'd love to hear from you!</p>

      <h2>📞 Phone</h2>
      <p>+91 98765 43210</p>

      <h2>📧 Email</h2>
      <p>support@spatulastories.com</p>

      <h2>📍 Location</h2>
      <p>Ahmedabad, Gujarat, India</p>

      <h2>🔗 Follow Us</h2>
      <p>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a> |{" "}
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a> |{" "}
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
      </p>
    </div>
  );
};

export default Contact;
