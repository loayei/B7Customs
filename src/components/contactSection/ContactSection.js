import React from 'react';
import styled from 'styled-components';
import PrimaryButton from '../buttons/PrimaryButton';
import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import FormField from './FormField';

const ContactSectionStyles = styled.div`
  padding: 10rem 0;
  .contact__wrapper {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  .contact__info {
    margin-bottom: 4rem;
  }
  .contact__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 3rem;
    .contact__field--fullWidth {
      grid-column: span 2;
    }
    .contact__submit {
      width: max-content;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 768px) {
    .contact__form {
      grid-template-columns: 1fr;
      row-gap: 2rem;
      .contact__field--fullWidth {
        grid-column: span 1;
      }
    }
  }
`;

function ContactSection() {
  // const [status, setStatus] = useState('Submit');
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus('Sending...');
  //   const { name, email, message } = e.target.elements;
  //   const details = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  //   const response = await fetch('http://localhost:3000/contact', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify(details),
  //   });
  //   setStatus('Submit');
  //   const result = await response.json();
  //   alert(result.status);
  // };
  return (
    <ContactSectionStyles id="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__info">
            <SectionTitle>Contact Qoute Form</SectionTitle>
            <ParagraphText>
              Please include the details of the requested service.
            </ParagraphText>
          </div>
          <form className="contact__form" name="contact" method="post">
            <input type="hidden" name="contact" value="contact" />
            <FormField
              className="contact__field--fullWidth"
              type="text"
              label="Name"
              name="name"
              id="name"
              required
            />
            <FormField
              className="contact__field--fullWidth"
              type="email"
              label="Email"
              name="email"
              id="email"
              required
            />
            <FormField
              className="contact__field--fullWidth"
              label="Message"
              name="message"
              id="message"
              rows="6"
            />
            <PrimaryButton
              type="submit"
              buttonType="button"
              className="contact__submit"
            >
              Send Message
            </PrimaryButton>
          </form>
        </div>
      </div>
    </ContactSectionStyles>
  );
}

export default ContactSection;
