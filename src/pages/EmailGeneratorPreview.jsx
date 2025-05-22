import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Modal, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import './EmailGeneratorPreview.css';

const EmailGeneratorPreview = () => {
  const navigate = useNavigate();

  // State for form fields
  const [to, setTo] = useState("");
  const [cc, setCc] = useState("");
  const [subject, setSubject] = useState("");
  const [emailBody, setEmailBody] = useState(`Hi Team,

I hope this message finds you well. I just wanted to extend a warm welcome and introduce myself as we kick off this phase of the project.

Looking forward to working with you all and ensuring a smooth and successful testing process. Please feel free to reach out if you have any questions or need any support.`);

  // State for schedule modal
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [scheduleDateTime, setScheduleDateTime] = useState("");

  const formatDateTime = (dateTimeStr) => {
    const date = new Date(dateTimeStr);
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
  
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'p.m' : 'a.m';
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
  
    return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
  };
  


  const handleScheduleSubmit = () => {
    const formattedDate = formatDateTime(scheduleDateTime);
    alert(`Email scheduled at: ${formattedDate}`);
    setShowScheduleModal(false);
  };
  

  return (
    <Container fluid className="email-generator-preview p-3">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="email-title d-flex align-items-center">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="me-3"
            onClick={() => navigate("/marketing-message-hub")}
          />
          Email Generator
        </h5>
        <div className="d-flex gap-2">
          <Button className="btn-save-draft">Save Draft</Button>
          <Dropdown>
            <Dropdown.Toggle className="btn-send-email" style={{ width: '180px' }}>
              Send Email
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => alert("Send Now clicked")}>
                Send Now
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setShowScheduleModal(true)}>
                Schedule Email
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <hr className="divider" />

      <Row>
        {/* Left - Edit Email Draft */}
        <Col md={6}>
          <h6 className="section-heading mb-3">Edit Email Draft</h6>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>To</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter recipient"
                className="input-dark"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>cc</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter CC"
                className="input-dark"
                value={cc}
                onChange={(e) => setCc(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject"
                className="input-dark"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Draft</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                className="input-dark"
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
              />
            </Form.Group>

            <Button variant="outline-light" className="back-btn ">
              Back to edit
            </Button>
          </Form>
        </Col>

        {/* Right - Email Preview */}
        <Col md={6}>
          <Card className="email-preview-wrapper p-4">
            <h6 className="preview-title mb-4">Email Preview</h6>
            <Card className="email-preview-card p-4">
              <div className="subject-placeholder mb-3">{subject || "Subject goes here"}</div>

            

              <div className="thin-gray-border mb-3">
                <strong>To:</strong>{" "}
                <span className="email-address">{to || "example@domain.com"}</span>
              </div>

              {cc && (
                <div className="thin-gray-border mb-3">
                  <strong>CC:</strong>{" "}
                  <span className="email-address">{cc}</span>
                </div>
              )}
              <p className="email-text" style={{ whiteSpace: "pre-line" }}>
                {emailBody}
                <br /><br />
                Best regards,<br /><br />
                Email Creator<br />
                Biontech Marketing Team<br />
                Germany/United States
              </p>
            </Card>
          </Card>
        </Col>
      </Row>

      {/* Schedule Email Modal */}
      <Modal
        show={showScheduleModal}
        onHide={() => setShowScheduleModal(false)}
        centered
        contentClassName="schedule-modal"
      >
        <Modal.Body className="schedule-modal-body p-4 d-flex flex-column align-items-start">
          <h6 className="text-white mb-3" style={{ alignSelf: "flex-start" }}>
            Schedule Date and Time
          </h6>
          <Form.Control
            type="datetime-local"
            className="input-dark text-center mb-4"
            value={scheduleDateTime}
            onChange={(e) => setScheduleDateTime(e.target.value)}
          />
          <Button
            className="w-100"
            style={{
              backgroundColor: "#015A63",
              color: "white",
              border: "none",
              fontWeight: 500,
              fontSize: "18px",
              padding: "10px"
            }}
            onClick={handleScheduleSubmit}
          >
            Submit
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default EmailGeneratorPreview;
