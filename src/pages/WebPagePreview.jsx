import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './WebPageGenerator.css';

const WebPageGenerator = () => {
  const [title, setTitle] = useState('Sample Webpage');
  const [content, setContent] = useState(`<h2>Summary</h2>
<p>This study is the first systematic literature review (SLR) and meta-analysis comparing the impact of booster vaccination with primary course vaccination specifically for Omicron infections, providing insights on the importance of seasonal vaccination against new variants.</p>
<p>Most studies included showed low to medium risk of bias, and sensitivity analyses generally supported the statistical significance of relative risk values, except in booster versus unvaccinated comparisons.</p>
<p>However, there are several limitations: only English-language studies were included, the heterogeneity estimate (I²) should be interpreted cautiously due to few studies, and infection prevention effects were not explored since all participants were infected with symptomatic SARS-CoV-2.</p>
<p>Subgroup analyses were limited due to insufficient data on sex, vaccine type, comorbidities, or infection severity. Definitions of long COVID varied significantly across studies, complicating comparisons.</p>
<p>Follow-up periods ranged from 4 weeks to 6 months. Vaccination status definitions differed, with some “unvaccinated” groups including people vaccinated over 12 months prior, which may not be comparable to never-vaccinated individuals.</p>
<p>A major limitation is the lack of randomized studies; although adjustments for confounders were made, methods varied. Therefore, observed risk reductions in vaccinated or boosted groups may be influenced by baseline differences.</p>`);

  return (
    <Container fluid className="webpage-generator p-4">
      <Row className="align-items-center mb-3">
        <Col>
          <h5 className="d-flex align-items-center">
            <FontAwesomeIcon icon={faArrowLeft} className="me-2 cursor-pointer" />
            Webpage Generator
          </h5>
        </Col>
        <Col className="text-end">
          <Button variant="outline-secondary" className="me-2">Save</Button>
          <Button style={{ backgroundColor: '#015A63', border: 'none' }}>Publish</Button>
        </Col>
      </Row>

      <Row>
        {/* Left Side */}
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label><strong>Title</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter webpage title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label><strong>Webpage Content</strong></Form.Label>
              <Form.Control
                as="textarea"
                rows={15}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>

            <Button variant="outline-primary">Back to edit</Button>
          </Form>
        </Col>

        {/* Right Side */}
        <Col md={6}>
          <Card className="p-4 webpage-preview-card ">
            <h5 className="text-muted mb-3">Webpage Preview</h5>
            <h5 className="text-center text-success mb-4">{title}</h5>

            <Card className="p-4 preview-content" style={{maxHeight:'500px',overflow:'auto'}}>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WebPageGenerator;
