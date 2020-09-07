import React from "react";
import Fade from "react-reveal/Fade";

//Styling in app.scss

function About() {
  return (
    <Fade>
      <div className="about container_static">
        <div className="about_header">
          <h2>About MyShoes</h2>
          <h3>Shoes for a long way.</h3>
        </div>
        <div className="about_body">
          <h3>Our principles:</h3>
          <ul>
            <li>
              <div>
                <h4>Customer first.</h4>
                <p>
                  Our shop focuses on customers and their satisfaction, not on
                  pick up the race with competitors.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h4>Thinking in long-term.</h4>
                <p>
                  Leaders at MyShoes never give on short-term results instead of
                  long-term results.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h4>We think in long-term.</h4>
                <p>
                  Leaders at MyShoes never give on short-term results instead of
                  long-term results.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h4>Diversity</h4>
                <p>
                  We believe evolving comes with changing. We never rush to
                  invent new things but we never close them out.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Fade>
  );
}

export default About;
