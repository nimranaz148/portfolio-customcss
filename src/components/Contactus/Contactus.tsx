"use client";
import React, { useState } from "react";
import styles from "./Contactus.module.css";
import { caveatFont, interFont } from "@/font";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { sendEmail } from "@/utils/emailService";

function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Nimra Naaz",
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      await sendEmail(templateParams);
      alert("Email sent successfully");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJs Error", error);
      alert("Failed to send email");
    }
  };

  return (
    <>
      <section id="contact" className={`${styles.Contactus} ${interFont.className}`}>
        <h1 className={caveatFont.className}>
          <span>C</span>ontact <span>M</span>e
        </h1>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          aperiam illo assumenda dolorem quas! Error necessitatibus, similique
          est aliquid voluptate temporibus itaque ex quae, repellat at quisquam
          optio totam rerum?
        </p>

        <div className={styles.contactusbottomdiv}>
          <div className={styles.contactleftdiv}>
            <div className={styles.contactleftdivcontent}>
              <MdEmail size={24} color="var(--logo-color)" />

              <div className={styles.contactleftdivtext}>
                <h6>Have a question</h6>
                <h6>Iam here to help you</h6>
                <h6>Email me at nimranaz222@gmil.com</h6>
              </div>
            </div>

            <div className={styles.contactleftdivcontent}>
              <FaMapMarkerAlt size={24} color="var(--logo-color)" />

              <div className={styles.contactleftdivtext}>
                <h6>Current Location</h6>
                <h6>Karachi, Pakistan</h6>
                <h6>Serving clients worldwide</h6>
              </div>
            </div>
          </div>

          <div className={styles.contactrightdiv}>
            <form onSubmit={handleSubmit}>
              <div className={styles.topinputdiv}>
                <input
                  type="text"
                  placeholder="Your name"
                  className={styles.inputdetails}
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Your email"
                  className={styles.inputdetails}
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <input
                type="text"
                placeholder="subject"
                className={styles.inputdetails}
                style={{ width: "100%" }}
              />

              <textarea
                placeholder="your message"
                className={styles.inputdetails}
                style={{ height: "224px" }}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <input
                type="submit"
                className={styles.inputbtn}
                value={"Send message"}
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactus;
