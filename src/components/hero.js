import React from 'react'

import GitHubIcon from './icons/github'
import LinkedinIcon from './icons/linkedin'
import InstagramIcon from './icons/instagram'
import TwitterIcon from './icons/twitter'

const Hero = () => (
  <section className="hero max-w-screen-lg flex flex-col justify-center">
    <h1 className="my-16">
      UI/UX Designer, self-taught Frontend Developer &amp; Product Manager based out of Sydney, Australia.
    </h1>
    <div className="social flex items-center justify-start mb-16">
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
