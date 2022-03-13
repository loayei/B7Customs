import React from 'react';
import styled from 'styled-components';
import SectionTitle from './titles/SectionTitle';
import AboutImg from '../assets/images/tesla_01.jpeg';
import AboutImg1 from '../assets/images/tesla_02.jpeg';
import AboutImg2 from '../assets/images/tesla_03.jpeg';

const AboutStyles = styled.div`
  padding: 10rem 0;
  .about__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about__title {
    margin-left: 4rem;
    margin-bottom: 7rem;
    text-align: center;
  }
  .about__img {
    width: 100%;
  }
  .stretchy {
    width: 33%;
    border: 3px solid #3f4555;
    border-radius: 2px;
    padding: 0.4rem;
  }
  @media only screen and (max-width: 768px) {
    .about__wrapper {
      flex-direction: column;
    }
  }
`;

function Gallery() {
  return (
    <AboutStyles id="about">
      <div className="container">
        <div className="about__info">
          <SectionTitle className="about__title">
            Showcase of our Work
          </SectionTitle>
        </div>
        <div className="about__wrapper">
          <div className="about__img">
            <img src={AboutImg} alt="Artistic" className="stretchy" />
            <img src={AboutImg1} alt="Artistic" className="stretchy" />
            <img src={AboutImg2} alt="Artistic" className="stretchy" />
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

export default Gallery;
