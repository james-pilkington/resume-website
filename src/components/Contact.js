import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: var(--dark-bg);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormSection = styled.div`
  background-color: var(--dark-bg);
  color: var(--text-color);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const DetailsSection = styled.div`
  background-color: #2d2d2d;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: white;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
`;

const Input = styled.input`
  background-color: var(--dark-bg);
  width: 97%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: var(--text-color);
`;

const Textarea = styled.textarea`
  background-color: var(--dark-bg);
  width: 97%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: var(--text-color);
  resize: none;
  height: 100px;
`;

const Button = styled.button`
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: var(--button-hover-color);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container>
      <FormSection>
        <Form action="https://formspree.io/f/mkgnnlgd" method="POST">
          <FormGroup>
            <label htmlFor="name">Name</label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">Message</label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button type="submit">Send</Button>
        </Form>
      </FormSection>

      <DetailsSection>
        <h2>James Pilkington</h2>
        <p>Phone: 978-408-****</p>
        <p>Email: james.pilkington2@gmail.com</p>
      </DetailsSection>
    </Container>
  );
};

export default Contact;
