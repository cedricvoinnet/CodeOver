import React from "react";
import "./Home.css";

const Home = () => (
  <div className="Home">
    <div className="Home-sidebar">
      <a href="/">HelloWorld</a>
      <a href="/">Strlen</a>
      <a href="/">PutChar</a>
      <a href="/">Count</a>
    </div>
    <div className="Home-body">
      <figure>
        <figcaption>Test</figcaption>
        <pre>
          <code
            contentEditable
            spellCheck="false"
            className="langage-python shadowlift"
          >
            def test():\n pass
          </code>
        </pre>
      </figure>
    </div>
  </div>
);

export default Home;
