import React from "react";
import styles from "./services.module.css";
import { caveatFont, interFont } from "@/font";
import Servicescard from "./services-card/Servicescard";

function services() {
  return (
    <>
      <section id="services" className={styles.services}>
        <h1 className={caveatFont.className}>
          <span>W</span>hat <span>I</span> <span>B</span>ring <span>T</span>o{" "}
          <span>P</span>roducts
        </h1>

        <p className={interFont.className}>
          I help teams build frontend experiences that are responsive, maintainable,
          SEO-aware, and ready to scale from landing pages to production dashboards.
        </p>

        <div className={styles.servicescarddiv}>
          <Servicescard/>
        </div>
      </section>
    </>
  );
}

export default services;
