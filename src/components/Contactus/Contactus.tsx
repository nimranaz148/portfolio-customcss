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
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Nimra Salahuddin",
      from_name: name,
      from_email: email,
      subject,
      message,
    };

    try {
      await sendEmail(templateParams);
      alert("Email sent successfully");
      setName("");
      setEmail("");
      setSubject("");
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
          I am available for frontend developer roles, internships, and freelance
          opportunities. If your team is hiring, feel free to reach out.
        </p>

        <div className={styles.contactusbottomdiv}>
          <div className={styles.contactleftdiv}>
            <div className={styles.contactleftdivcontent}>
              <MdEmail size={24} color="var(--logo-color)" />

              <div className={styles.contactleftdivtext}>
                <h6>Have a question?</h6>
                <h6>I am here to help you</h6>
                <a href="mailto:nimranaz148@gmail.com">nimranaz148@gmail.com</a>
              </div>
            </div>

            <div className={styles.contactleftdivcontent}>
              <FaMapMarkerAlt size={24} color="var(--logo-color)" />

              <div className={styles.contactleftdivtext}>
                <h6>Current Location</h6>
                <h6>Karachi, Pakistan</h6>
                <h6>Available full-time, on-site or remote</h6>
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
                  required
                />

                <input
                  type="email"
                  placeholder="Your email"
                  className={styles.inputdetails}
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className={styles.inputdetails}
                style={{ width: "100%" }}
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />

              <textarea
                placeholder="Your message"
                className={styles.inputdetails}
                style={{ height: "224px" }}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
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
