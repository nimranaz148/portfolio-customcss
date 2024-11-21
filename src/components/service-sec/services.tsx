import React from "react";
import styles from "./services.module.css";
import { caveatFont, interFont } from "@/font";
import Image from "next/image";
import Servicescard from "./services-card/Servicescard";

function services() {
  return (
    <>
      <section id="services" className={styles.services}>
        <h1 className={caveatFont.className}>
          <span>W</span>hat <span>I</span> <span>D</span>o <span>F</span>or{" "}
          <span>C</span>lients
        </h1>

        <p className={interFont.className}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          rerum nesciunt laborum aspernatur id delectus velit ullam deleniti{" "}
          <br /> aut tenetur tempore cumque fugit, quibusdam recusandae nulla
          eveniet, impedit alias distinctio!
        </p>

        <div className={styles.servicescarddiv}>
          <Servicescard/>
        </div>
      </section>
    </>
  );
}

export default services;
