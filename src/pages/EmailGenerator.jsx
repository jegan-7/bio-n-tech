import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Dropdown } from 'react-bootstrap';
import './EmailGenerator.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import emailImage from '../assets/undraw_email-campaign_2z6t 1.png'
import { useNavigate } from "react-router-dom";

const EmailGenerator = () => {
  const [audience, setAudience] = useState('Select audience');
  const [language, setLanguage] = useState('Select language');
   const navigate = useNavigate();

  return (
    <Container fluid className="email-generator p-4">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="email-title d-flex align-items-center">
          <FontAwesomeIcon icon={faArrowLeft} className="me-3" 
           onClick={() => navigate("/marketing-message-hub")}/>
          Email Generator
        </h5>
        <Button className="generate-btn" onClick={()=>navigate('/email-generator-preview')}>Generate Content</Button>
      </div>

      <hr className="divider" />

      <Row>
        <Col md={8}>
          <Form>
            {/* Audience Dropdown */}
            <Form.Group className="mb-4">
              <Form.Label className="form-label-custom">Audience</Form.Label>
              <Dropdown onSelect={(eventKey) => setAudience(eventKey)}>
                <Dropdown.Toggle
                  variant="secondary"
                  className="custom-dropdown-toggle-email-generator w-100 input-dark text-start"
                >
                  {audience}
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100 custom-dropdown-menu-email-generator">
                  <Dropdown.Item eventKey="HCP">HCP</Dropdown.Item>
                  <Dropdown.Item eventKey="Patients">Patients</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>

            {/* Language Dropdown */}
            <Form.Group className="mb-4">
              <Form.Label className="form-label-custom">Language</Form.Label>
              <Dropdown onSelect={(eventKey) => setLanguage(eventKey)}>
                <Dropdown.Toggle
                  variant="secondary"
                  className="custom-dropdown-toggle-email-generator w-100 input-dark text-start"
                >
                  {language}
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100 custom-dropdown-menu-email-generator">
                  <Dropdown.Item eventKey="English">English</Dropdown.Item>
                  <Dropdown.Item eventKey="German">German</Dropdown.Item>
                  <Dropdown.Item eventKey="Tamil">Tamil</Dropdown.Item>
                  <Dropdown.Item eventKey="French">French</Dropdown.Item>
                  <Dropdown.Item eventKey="Japanese">Japanese</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>

            {/* Topic */}
            <Form.Group className="mb-4">
              <Form.Label className="form-label-custom">Topic</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Topic"
                className="input-dark-email-generator"
              />
            </Form.Group>
          </Form>
        </Col>

        <Col
          md={4}
          className="text-center d-flex flex-column justify-content-center align-items-center banner-section"
        >
          <h5 className="text-white mb-3 ">AI Powered Email Creation</h5>
          <img
            src={emailImage}
            alt="Email Visual"
            className="img-fluid custom-banner-img"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default EmailGenerator;
