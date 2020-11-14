import React, { Component } from 'react';

export default class Icon extends Component {
  render() {
    const { name, className } = this.props;

    switch (name) {
      case 'close':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none" />
            <line
              x1="200"
              y1="56"
              x2="56"
              y2="200"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <line
              x1="200"
              y1="200"
              x2="56"
              y2="56"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
        );
      case 'moon':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 256 256"
            className={`fill-current ${className}`}
          >
            <rect width="256" height="256" fill="none" />
            <path d="M228.25781,131.08594a7.97081,7.97081,0,0,0-7.875-.89844,72.03888,72.03888,0,0,1-94.58594-94.57031,7.99837,7.99837,0,0,0-8.14062-11.10938A104.00405,104.00405,0,1,0,231.49219,138.32813,7.99431,7.99431,0,0,0,228.25781,131.08594Z" />
          </svg>
        );
      case 'sun':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 256 256"
            className={`fill-current ${className}`}
          >
            <rect width="256" height="256" fill="none" />
            <g>
              <circle cx="128" cy="128" r="68" />
              <path d="M128,44a8.00008,8.00008,0,0,0,8-8V16a8,8,0,0,0-16,0V36A8.00008,8.00008,0,0,0,128,44Z" />
              <path d="M57.28955,68.603A7.99984,7.99984,0,1,0,68.603,57.28955L54.46094,43.14746A7.99984,7.99984,0,1,0,43.14746,54.46094Z" />
              <path d="M44,128a8.00008,8.00008,0,0,0-8-8H16a8,8,0,0,0,0,16H36A8.00008,8.00008,0,0,0,44,128Z" />
              <path d="M57.28955,187.397,43.14746,201.53906a7.99984,7.99984,0,1,0,11.31348,11.31348L68.603,198.71045A7.99984,7.99984,0,1,0,57.28955,187.397Z" />
              <path d="M128,212a8.00008,8.00008,0,0,0-8,8v20a8,8,0,0,0,16,0V220A8.00008,8.00008,0,0,0,128,212Z" />
              <path d="M198.71045,187.397A7.99984,7.99984,0,1,0,187.397,198.71045l14.14209,14.14209a7.99984,7.99984,0,1,0,11.31348-11.31348Z" />
              <path d="M240,120H220a8,8,0,0,0,0,16h20a8,8,0,0,0,0-16Z" />
              <path d="M193.05371,70.94629a7.97507,7.97507,0,0,0,5.65674-2.34326l14.14209-14.14209a7.99984,7.99984,0,1,0-11.31348-11.31348L187.397,57.28955a7.99976,7.99976,0,0,0,5.65674,13.65674Z" />
            </g>
          </svg>
        );
      case 'code':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 256 256"
            className={className}
          >
            <rect width="256" height="256" fill="none" />
            <polyline
              points="64 88 16 128 64 168"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
            <polyline
              points="192 88 240 128 192 168"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
            <line
              x1="160"
              y1="40"
              x2="96"
              y2="216"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
          </svg>
        );
      case 'external-link':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 256 256"
            className={className}
          >
            <rect width="256" height="256" fill="none" />
            <line
              x1="94.05365"
              y1="161.93204"
              x2="161.9359"
              y2="94.04979"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
            <path
              d="M144.96326,178.9102,116.679,207.19447a48,48,0,0,1-67.88225-67.88225L77.081,111.028"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
            <path
              d="M178.90922,144.96424,207.19349,116.68a48,48,0,0,0-67.88225-67.88225L111.027,77.082"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
          </svg>
        );
      case 'menu':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
            className={className}
          >
            <rect width="256" height="256" fill="none" />
            <line
              x1="40"
              y1="128"
              x2="216"
              y2="128"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <line
              x1="40"
              y1="64"
              x2="216"
              y2="64"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <line
              x1="40"
              y1="192"
              x2="216"
              y2="192"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
        );
      case 'file':
        return (
          <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        );
      default:
        return `Something went wrong 😅`;
    }
  }
}
