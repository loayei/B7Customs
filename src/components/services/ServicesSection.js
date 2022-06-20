import React from "react";
import styled from "styled-components";
import {
  RiSunFill,
  RiCarFill,
  RiPaintFill,
  RiSettings5Fill,
} from "react-icons/ri";
import SectionTitle from "../titles/SectionTitle";
import ServiceItem from "./ServiceItem";

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .services__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

function ServicesSection() {
  return (
    <ServicesSectionStyles id="services">
      <div className="container">
        <SectionTitle className="services__title">Our Services</SectionTitle>
        <div className="services__items">
          <ServiceItem
            icon={<RiCarFill />}
            title="Professional Vinyl Wraps & PPF Services & Ceramic Coating"
            desc="We offer professional Vinyl wrapping using the best quality vinyl and PPF."
          />
          <ServiceItem
            icon={<RiPaintFill />}
            title="Powder Coating & Caliper Painting"
            desc="We offer state of the art powder coating and caliper painting services."
          />
          <ServiceItem
            icon={<RiSettings5Fill />}
            title="Performance Tuning & Parts Installation"
            desc="We install all types of parts and exhausts for your vehicle."
          />
          <ServiceItem
            icon={<RiSunFill />}
            title="Window Tinting"
            desc="We offer both ceramic and non-ceramic tinting."
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}

export default ServicesSection;
