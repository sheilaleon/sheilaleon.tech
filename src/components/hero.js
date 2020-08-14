import React from 'react'

import GitHubIcon from './icons/github'
import LinkedinIcon from './icons/linkedin'
import InstagramIcon from './icons/instagram'
import TwitterIcon from './icons/twitter'

const Hero = () => (
  <section className="hero">
    <h1>UI/UX Designer, Product Manager &amp; self-taught Frontend Developer based out of Sydney, Australia.</h1>
    <div className="social">
      <a href="https://github.com/sheilaleon" title="GitHub" target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>
      <a href="https://linkedin.com/in/sheilaleon" title="LinkedIn" target="_blank" rel="noopener noreferrer">
        <LinkedinIcon />
      </a>
      <a href="https://instagram.com/sheilaleon_" title="Instagram" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </a>
      <a href="https://twitter.com/kan" title="Twitter" target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
      </a>
    </div>
  </section>
)

export default Hero
