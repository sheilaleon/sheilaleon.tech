import React from 'react';
import { Link } from 'gatsby';

const Hero = () => (
  <section className="hero">
    <p className="greetings">
      👋🏼 Heyas<em>!</em>
    </p>
    <h1>I'm Sheila, a Frontend Developer based out of Sydney, Australia.</h1>
    <p>
      With over a decade of industry experience, I specialise in user
      interfaces, customer experience, visual design and product strategy.
    </p>
    <p>
      You can read more <Link to="/about/">about me</Link> or have a look at
      what <Link to="/now/">I'm currently up to</Link>.
    </p>
  </section>
);

export default Hero;
