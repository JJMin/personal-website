import React from 'react';

const BlobOne = props => (
  <svg fill="none" viewBox="0 0 600 600" {...props}>
    <g transform="translate(300,300)">
      <path
        d="M133.8,-100C179,-50,225,5.9,212.1,42.8C199.2,79.7,127.4,97.5,69.5,113.5C11.7,129.4,-32.1,143.6,-69,130.6C-105.9,117.7,-135.8,77.8,-158.7,23.1C-181.6,-31.5,-197.5,-100.9,-169.9,-146.8C-142.3,-192.8,-71.1,-215.4,-13.4,-204.7C44.3,-194,88.6,-150,133.8,-100Z"
        fill="#c9b6e4"
      />
    </g>
  </svg>
);

const BlobTwo = props => (
  <svg fill="none" viewBox="0 0 600 600" {...props}>
    <g transform="translate(300,300)">
      <path
        d="M184.1,-155.2C217.6,-104.8,209.2,-29.5,185.5,29.5C161.8,88.5,122.8,131.2,77.4,148.2C32.1,165.2,-19.5,156.5,-74.3,136.8C-129,117.1,-186.9,86.5,-196,45.1C-205.1,3.8,-165.5,-48.3,-124.7,-100.3C-83.9,-152.3,-42,-204.1,16.7,-217.4C75.3,-230.7,150.6,-205.5,184.1,-155.2Z"
        fill="#9f609c"
      />
    </g>
  </svg>
);

const BlobThree = props => (
  <svg fill="none" viewBox="0 0 600 600" {...props}>
    <g transform="translate(300,300)">
      <path
        d="M163.1,-120.1C190.8,-95.5,178.3,-28.8,163,36.9C147.8,102.7,129.9,167.6,92.6,181.2C55.4,194.9,-1.2,157.4,-59.6,127.7C-118.1,98.1,-178.5,76.3,-207.7,25.3C-236.9,-25.6,-234.9,-105.7,-195.1,-133.1C-155.3,-160.5,-77.7,-135.3,-5,-131.3C67.8,-127.4,135.5,-144.7,163.1,-120.1Z"
        fill="#ffcccc"
      />
    </g>
  </svg>
);

export { BlobOne, BlobTwo, BlobThree };
