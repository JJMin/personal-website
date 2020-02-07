import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import { GithubIcon, LinkedIn, Gmail } from '../icons';
import { BlobOne, BlobTwo, BlobThree } from '../svg/Blobs.svg.react';
import { WaveOne } from '../svg/Waves.svg.react';
import { device } from '../media';

const Container = styled.section`
  ${tw`flex justify-center items-start flex-col min-h-screen mx-auto`}
  padding: 70px 50px;

  @media ${device.laptopL} {
    padding: 120px 120px;
  }
  @media ${device.desktop} {
    padding: 120px 67px;
  }
`;

const WaveAnimation = styled.span`
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const HeaderHello = styled.h2`
  font-size: 1.4rem;

  @media ${device.tablet} {
    font-size: 1.8rem;
  }

  @media ${device.laptop} {
    font-size: 2.48rem;
  }
`;

const HeaderIntro = styled.h1`
  font-size: 1.4rem;
  margin: 40px 0;

  @media ${device.tablet} {
    max-width: 600px;
    font-size: 1.8rem;
  }

  @media ${device.laptop} {
    max-width: 700px;
    font-size: 2.48rem;
    margin: 40px 0;
  }
`;

const HeaderSelf = styled.h3`
  ${tw`flex`}
  font-size: 1.22rem;

  @media ${device.tablet} {
    font-size: 1.23rem;
  }

  @media ${device.laptop} {
    font-size: 1.25rem;
  }
`;

const Logos = styled.div`
  ${tw`flex items-center justify-around`}
  svg,
  img {
    width: 34px;
  }
  a {
    margin: -4px 7px 0;
  }
`;

const TextBold = styled.span`
  font-family: 'Manrope-ExtraBold', sans-serif;
  font-weight: 800;
  color: #35385d;
`;

const BlobContainer = styled.div`
  z-index: -1;
  svg:nth-child(1) {
    position: absolute;
    top: 120px;
    right: 80px;
    width: 900px;
    animation: move 10s ease-in-out infinite;
    transform-origin: 50% 50%;
  }
  svg:nth-child(2) {
    position: absolute;
    top: 0;
    left: 130px;
    width: 390px;
    animation: move 10s ease-in-out infinite;
    transform-origin: 50% 50%;
  }
  svg:nth-child(3) {
    position: absolute;
    top: 270px;
    left: 100px;
    width: 400px;
    animation: move 10s ease-in-out infinite;
    transform-origin: 50% 50%;
  }
  @media ${device.mobileL} {
    svg:nth-child(1) {
      top: 135px;
      right: auto;
      left: 0;
      width: 665px;
    }
    svg:nth-child(2) {
      top: 100px;
      left: auto;
      right: 3px;
      width: 290px;
    }
    svg:nth-child(3) {
      top: 500px;
      left: auto;
      right: 225px;
      width: 215px;
    }
  }
  @media ${device.tablet} {
    svg:nth-child(1) {
      top: 160px;
      left: auto;
      right: 0px;
      width: 575px;
    }
    svg:nth-child(2) {
      top: 130px;
      left: auto;
      right: 57px;
      width: 290px;
    }
    svg:nth-child(3) {
      top: 465px;
      left: auto;
      right: 300px;
      width: 215px;
    }
  }
  @media ${device.laptopL} {
    svg:nth-child(1) {
      top: 160px;
      left: auto;
      right: 0px;
      width: 635px;
    }
    svg:nth-child(2) {
      top: 150px;
      left: auto;
      right: 77px;
      width: 300px;
    }
    svg:nth-child(3) {
      top: 445px;
      left: auto;
      right: 330px;
      width: 260px;
    }
  }
  @media ${device.desktop} {
    svg:nth-child(1) {
      top: 193px;
      left: auto;
      right: 155px;
      width: 700px;
    }
    svg:nth-child(2) {
      top: 175px;
      right: 175px;
      width: 410px;
    }
    svg:nth-child(3) {
      top: 485px;
      left: auto;
      right: 475px;
      width: 410px;
    }
  }
`;

const WaveContainer = styled.div`
  @media ${device.mobileM} {
    margin-top: -200px;
  }
  @media ${device.laptopL} {
    svg {
      margin-left: calc(-50vw + 50% + 9px);
      width: calc(100vw - 17px);
      stroke: #000;
      stroke-width: 0.01;
      margin-top: -222px;
    }
  }
  @media ${device.desktop} {
    svg {
      margin-top: -273px;
    }
  }
`;

const LandingSection = () => (
  <div>
    <Container>
      <HeaderHello>
        Hi there! <WaveAnimation>👋</WaveAnimation>
      </HeaderHello>
      <HeaderIntro>
        I'm <TextBold>Eric Jae-Min Joo</TextBold>, <br />a front-end developer passionate about
        building beautiful UI {'&'} UX as well as learning new web technologies.
      </HeaderIntro>
      <HeaderSelf>
        Get in touch:
        <Logos>
          <a href="https://github.com/jjmin" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/ericjaeminjoo"
            target="_blank"
            rel="noopener noreferrer">
            <LinkedIn />
          </a>
          <a href="mailto:ericjaeminjoo@gmail.com" target="_blank" rel="noopener noreferrer">
            <Gmail />
          </a>
        </Logos>
      </HeaderSelf>
      <BlobContainer>
        <BlobOne />
        <BlobTwo />
        <BlobThree />
      </BlobContainer>
    </Container>
    <WaveContainer>
      <WaveOne />
    </WaveContainer>
  </div>
);

export default LandingSection;
