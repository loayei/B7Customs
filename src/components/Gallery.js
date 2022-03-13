import React from 'react';
import styled from 'styled-components';
import SectionTitle from './titles/SectionTitle';
import AboutImg from '../assets/images/merc1.jpg';
import AboutImg1 from '../assets/images/merc2.jpg';
import AboutImg2 from '../assets/images/merc3.jpg';
import AboutImg3 from '../assets/images/merc4.jpg';
import AboutImg4 from '../assets/images/merc5.jpg';
import AboutImg5 from '../assets/images/merc6.jpg';

const AboutStyles = styled.div`
  padding: 10rem 0;
  .about__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about__title {
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
            <img src={AboutImg} alt="B7 Customs" className="stretchy" />
            <img src={AboutImg1} alt="B7 Customs" className="stretchy" />
            <img src={AboutImg2} alt="B7 Customs" className="stretchy" />
            <img src={AboutImg3} alt="B7 Customs" className="stretchy" />
            <img src={AboutImg4} alt="B7 Customs" className="stretchy" />
            <img src={AboutImg5} alt="B7 Customs" className="stretchy" />
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

export default Gallery;
