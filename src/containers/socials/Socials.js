import React from "react";
import "./socials.css";

import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

export default function Socials() {
  return (
    <section className="socials container" id="socials">
      <div className="social-text">
        <h2>Let's Communicate</h2>
        <p>Mag first move kana!</p>
        <a href="https://ng-el.netlify.app">
          <button>Send an Annonymous message</button>
        </a>
      </div>
      <div className="social-links">
        <a href="https://facebook.com/Lloyd.Sem" target="_blank">
          <FaFacebook size={60} color="black" />
        </a>
        <a href="https://github.com/lloydshine" target="_blank">
          <FaGithub size={60} color="black" />
        </a>
        <FaGoogle size={60} color="black" />
      </div>
    </section>
  );
}
