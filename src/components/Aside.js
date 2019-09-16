import React, { Component } from "react";

export default function Aside() {
  return (
    <aside>
      <div className="fixed">
        <a href="https://www.linkedin.com/in/toshikokuno/" target="_blank">
          <i className="fab fa-linkedin ico"></i>
        </a>
        <a href="https://www.instagram.com/t0ci/?hl=ja" target="_blank">
          <i className="fab fa-instagram ico"></i>
        </a>
        <a href="https://github.com/Tocico" target="_blank">
          <i className="fab fa-github ico"></i>
        </a>
        <a href="mailto:info&#64;toshikokuno.com">
          <i className="far fa-envelope ico"></i>
        </a>
      </div>
    </aside>
  );
}
