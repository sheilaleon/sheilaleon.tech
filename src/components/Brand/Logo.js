import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ stopColourStart, stopColourEnd }) => (
  <motion.svg
    key="logo"
    width="36"
    height="36"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-current"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.85 }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.3356 19.8404C35.6044 18.5345 36.8719 17.6895 38.1778 17.9583C39.4837 18.1888 40.2135 19.4563 39.9446 20.7622C39.932 20.8435 39.9111 20.9896 39.8841 21.1773C39.7803 21.9006 39.5878 23.2415 39.4453 23.8733C38.6003 27.8294 35.0667 30.6717 31.1106 30.6717C28.614 30.6717 26.1943 29.6346 24.4659 27.8294C21.5471 24.7748 21.9999 21.0701 22.7375 17.3822C22.9276 16.3176 23.0434 15.1227 23.1639 13.8791C23.5322 10.0796 23.9445 5.82528 26.6552 3.43983C28.0763 2.21075 29.8431 1.78825 31.8404 2.13393C33.8376 2.51802 35.2588 4.05437 35.5276 6.16685C35.6428 7.12707 35.5276 8.16411 35.1435 9.27796C35.1435 9.31637 35.1435 9.35478 35.1051 9.39319C34.7594 10.3918 34.2217 11.4289 33.492 12.3891C32.5317 13.6182 31.3411 14.5784 30.3424 15.2697C29.088 16.229 27.7563 17.5804 27.3081 19.149C26.6902 20.9205 26.5345 23.0997 27.9611 24.5262C28.7677 25.3712 29.9199 25.8706 31.1106 25.8706C32.839 25.8706 34.3754 24.6031 34.7594 22.8747C35.1025 20.5985 35.3356 19.8404 35.3356 19.8404ZM30.7265 6.70458C29.8047 6.24367 28.8445 6.97344 28.1531 8.39456C27.5386 9.73887 27.2313 11.16 27.8843 11.5057C28.5372 11.8898 29.7279 11.0064 30.5345 9.77728C31.4179 8.47138 31.5715 7.16548 30.7265 6.70458ZM28.5154 32.4826C31.4729 32.6362 32.9709 32.0601 33.547 31.7528C36.0897 30.5563 39.2297 32.2961 38.2329 35.2864C37.9693 36.0479 37.1523 36.9513 36.1204 37.3221C31.375 38.9982 22.2921 37.463 16.4935 32.9435C16.2246 32.7515 15.8406 32.4058 15.4565 32.0601C14.381 30.9078 12.691 31.2919 12.691 31.2919C6.89131 33.0971 2.8968 29.7172 2.74317 29.5635C1.16841 28.1424 0.208189 26.2604 0.0161447 24.1863C-0.175899 21.4977 1.36045 19.0395 3.81861 18.1177C4.74042 17.7721 7.62108 17.0423 10.6938 19.6157C11.402 20.1982 12.3838 21.4209 13.0367 23.1109C13.0367 23.1109 13.4976 24.1479 14.2658 24.1095C14.8419 24.0327 15.0724 23.2645 15.1492 22.7268C15.3796 20.4991 14.0353 18.6939 11.0779 17.3111C4.81724 14.3537 5.73905 9.59099 6.16155 8.20827C7.12177 5.02034 10.5017 3.0999 14.3426 3.48399C18.4139 3.90649 21.2178 6.82556 20.8721 10.2439C20.7185 11.6651 19.4894 12.7021 18.0683 12.5485C16.6471 12.3948 15.7153 11.1401 15.7637 9.74462C15.752 8.91116 14.9172 8.00903 13.2288 8.16986C10.8858 8.28509 10.9626 10.2055 10.9626 10.2055C10.9242 10.8201 11.2315 11.7035 13.2672 12.6637C19.0285 15.3907 21.4482 20.0766 19.7967 25.2618C19.6512 25.7185 19.451 26.1836 19.2973 26.5292C19.1437 26.8749 18.6444 28.2192 19.8735 29.1026C20.0399 29.2179 20.2021 29.3331 20.3643 29.4483C20.6886 29.6788 21.0129 29.9092 21.3714 30.1397C22.7541 30.9847 25.4043 32.329 28.5154 32.4826ZM6.46882 26.2988C7.6979 27.2974 9.15743 27.5279 9.73356 26.8365C10.3097 26.1452 9.77197 24.7624 8.54289 23.7254C5.69595 21.426 3.64375 23.9151 6.46882 26.2988Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="0"
        y1="2.0177"
        x2="35.7622"
        y2="41.7926"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={`var${stopColourStart}`} />
        <stop offset="1" stopColor={`var${stopColourEnd}`} />
      </linearGradient>
    </defs>
  </motion.svg>
);

export default Logo;
