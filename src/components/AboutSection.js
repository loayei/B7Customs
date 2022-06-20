import React from 'react';
import styled from 'styled-components';
import ParagraphText from './paragraphTexts/ParagraphText';
import SectionTitle from './titles/SectionTitle';
import AboutImg from '../assets/images/about_50.png';

const AboutStyles = styled.div`
  padding: 10rem 0;
  .about__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about__subtitle {
    margin-left: 4rem;
    margin-bottom: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--mediumSlateBlue);
  }
  .about__title {
    margin-left: 4rem;
    margin-bottom: 2rem;
    max-width: 350px;
  }
  .about__desc {
    margin-left: 4rem;
    margin-bottom: 2rem;
    max-width: 300px;
  }
  @media only screen and (max-width: 768px) {
    .about__wrapper {
      flex-direction: column;
    }
    .about__img {
      max-width: 400px;
    }
  }
`;

function AboutSection() {
  return (
    <AboutStyles id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__img">
            <img src={AboutImg} alt="Artistic" />
          </div>
          <div className="about__info">
            <ParagraphText className="about__subtitle">
              Who are we
            </ParagraphText>
            <SectionTitle className="about__title">
              “B7 Customs” is a studio of some passionate automotive
            </SectionTitle>
            <ParagraphText className="about__desc">
              Our goal is to provide quality customer service. We specialize in
              Vinyl wraps, Paint Protection films, Car Tints, Car Modifications,
              Brake Caliper Painting, and Exhaust Systems.
            </ParagraphText>
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

export default AboutSection;
