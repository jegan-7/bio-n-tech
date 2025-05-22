import React, { useState } from 'react';
import './MarketingMessageHub.css';
import { FaClock, FaFileAlt, FaRegFileAlt } from 'react-icons/fa';
import sampleImage1 from '../assets/f91b16e07223a39388dc896c8d79fd05b966a458.png';
import sampleImage2 from '../assets/90c0ad0408c4194982840a42e37d492f0251afd9.png';
import sampleImage3 from '../assets/2020908d5c3f02843fb82c7c7d48b07b08e8e7e8.png';
import sampleImage4 from '../assets/cedf684f969d0231426f39d0da2785ce55090e57.png';
import { Modal, Button } from 'react-bootstrap';
import DynamicBannerForm from './DynamicBannerForm';
import { useNavigate } from 'react-router-dom';

const presentations = [
  {
    title: "Intelligence Presentation",
    date: "24th October 2024, 6:50pm",
    image: sampleImage1
  },
  {
    title: "lorem ipsum",
    date: "24th October 2024, 6:50pm",
    image: sampleImage2
  },
  {
    title: "Powerpoint presentation",
    date: "24th October 2024, 6:50pm",
    image: sampleImage3
  },
  {
    title: "Guest lecture",
    date: "24th October 2024, 6:50pm",
    image: sampleImage4
  },
];

const projectTypes = [
  { label: 'Dynamic Banner', bg: '#3F74B8' },
  { label: 'Email', bg: '#3F74B8' },
  { label: 'Brochure', bg: '#86479D' },
  { label: 'Webpage', bg: '#31837D' },
  { label: 'lorem', bg: '#6354B0' },
  { label: 'lorem', bg: '#96573F' }
];

const MarketingMessageHub = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();


  return (
    <div className="container-fluid p-4 text-white">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 style={{ color: "black" }}>Marketing Message Hub</h5>
        <button
          className="btn btn-success"
          style={{
            width: "165px",
            backgroundColor: "#015A63",
            border: "transparent",
          }}
          onClick={() => setShowModal(true)}
        >
          Create New Project
        </button>
      </div>

      {/* Tabs */}
      <ul className="nav nav-pills mb-3" id="pills-tab">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            All
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ color: "gray" }}>
            Promotions
          </a>
        </li>
      </ul>

      {/* Cards */}
      <div className="row">
        {presentations.map((item, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card bg-dark text-white h-100">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <div className="card-title mb-2" style={{ fontSize: "15px" }}>
                  <FaFileAlt className="me-2 text-success" />
                  {item.title}
                </div>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  <FaClock className="me-2 text-success" />
                  {item.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Type Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton style={{ borderBottom: "1px solid #dee2e6" }}>
          <Modal.Title style={{ fontSize: "20px" }}>
            Create New Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {projectTypes.map((proj, idx) => (
              <div className="col-md-4 mb-3" key={idx}>
                <div
                  className="d-flex align-items-center justify-content-start p-3 rounded text-white"
                  style={{
                    backgroundColor: proj.bg,
                    cursor: "pointer",
                    height: "100px",
                  }}
                  onClick={() => {
                    if (proj.label === "Dynamic Banner") {
                      setSelectedProject(proj.label);
                      setShowModal(false);
                    } else if (proj.label === "Email") {
                      setShowModal(false);
                      navigate("/email-generator");
                    } else if (proj.label === "Webpage") {
                      setShowModal(false);
                      navigate("/web-page-generator");
                    }
                  }}
                >
                  <FaRegFileAlt className="me-3" size={24} />
                  <div>{proj.label}</div>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>

      {/* Dynamic Banner Form Modal */}
      {selectedProject === "Dynamic Banner" && (
        <Modal
          show={true}
          onHide={() => setSelectedProject(null)}
          centered
          size="lg"
        >
          <Modal.Header
            closeButton
            className="bg-dark text-white"
            style={{ borderBottom: "1px solid #707070" }}
            closeVariant="white"
          >
            <Modal.Title>Create {selectedProject}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark text-white">
            <DynamicBannerForm onClose={() => setSelectedProject(null)} />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default MarketingMessageHub;
