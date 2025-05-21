import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './ImportContent.css'


const ImportContent = () => {
  const [activeTab, setActiveTab] = useState("sharelink");
  const [showImportedFiles, setShowImportedFiles] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const importedFiles = [
    "Document 1",
    "Intelligence Presentation",
    "Guest Presentation",
    "Slide Deck",
  ];

  const filePreview = {
    title: "File Preview",
    abstract: `This paper presents a novel method for optimizing large language model (LLM) performance...`,
    introduction: `The rapid development of large language models (LLMs)...`,
    relatedWork: [
      "Prompt Engineering and few-shot learning (Brown et al., 2020)",
      "Reinforcement Learning with Human Feedback (Ouyang et al., 2022)",
      "Meta-learning for dynamic system adaptation (Finn et al., 2017)",
      "Prompt Engineering and few-shot learning (Brown et al., 2020)",
      "Reinforcement Learning with Human Feedback (Ouyang et al., 2022)",
      "Meta-learning for dynamic system adaptation (Finn et al., 2017)",
      "Prompt Engineering and few-shot learning (Brown et al., 2020)",
      "Reinforcement Learning with Human Feedback (Ouyang et al., 2022)",
      "Meta-learning for dynamic system adaptation (Finn et al., 2017)",
    ],
  };

  return (
    <div className="import-overlay">
    <div
      className="container-fluid bg-dark text-white p-4"
      style={{ borderRadius: "10px", backgroundColor: "#252632" }}
    >
      <div className="d-flex justify-content-between border-bottom border-secondary">
        <h4 className="mb-3">Import Content</h4>
        <button
          type="button"
          className="btn-close btn-close-white"
          style={{ top: "15px", right: "15px" }}
          onClick={() => navigate("/slide-generator")}
          aria-label="Close"
        ></button>
      </div>

      <div className="d-flex mt-3 gap-4">
        {/* Left Panel */}
        <div style={{ flex: 1 }}>
          <ul className="nav nav-pills mb-3" id="import-tabs">
            {["Sharelink", "Webpage Link", "Veeva Vault", "Datalake"].map((tab) => (
              <li className="nav-item" key={tab}>
                <button
                  className={`nav-link ${
                    activeTab === tab.toLowerCase().replace(/\s/g, "")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => setActiveTab(tab.toLowerCase().replace(/\s/g, ""))}
                  style={{
                    color:
                      activeTab === tab.toLowerCase().replace(/\s/g, "")
                        ? "white"
                        : "gray",
                  }}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>

          {activeTab === "sharelink" && (
            <>
              <Form.Group className="mb-3" controlId="sharepointLink">
                <Form.Label>Share Point Link</Form.Label>
                <Form.Control type="text" placeholder="Paste your link here" />
              </Form.Group>

              <div className="d-flex justify-content-center">
                <Button
                  className="mb-4"
                  style={{
                    backgroundColor: "#ECFFF7",
                    border: "#015A63",
                    color: "#015A63",
                    width: "135px",
                  }}
                  onClick={() => setShowImportedFiles(true)}
                >
                  Import Files
                </Button>
              </div>

              {showImportedFiles && (
                <>
                  <h6>Imported Files</h6>
                  <div className="mb-3">
                    {importedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="bg-secondary text-white px-3 py-2 mb-2 rounded"
                        style={{ cursor: "pointer" }}
                        onClick={() => setSelectedFile(file)}
                      >
                        {file}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* Right Panel */}
        {selectedFile && (
          <div
            className="bg-light text-dark p-4 rounded shadow-sm"
            style={{ flex: 1, maxHeight: "600px", overflowY: "auto" }}
          >
            <h6 className="fw-bold">{filePreview.title}</h6>
            <p>
              <strong>Abstract</strong>
            </p>
            <p>{filePreview.abstract}</p>

            <p>
              <strong>1. Introduction</strong>
            </p>
            <p>{filePreview.introduction}</p>

            <p>
              <strong>2. Related Work</strong>
            </p>
            <ul>
              {filePreview.relatedWork.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="d-flex justify-content-end mt-3">
        <Button
          variant="teal"
          style={{ backgroundColor: "#0C6C5F", width: "135px" }}
          onClick={() => navigate('/content-generation')}
        >
          Next
        </Button>
      </div>
    </div>
    </div>
  );
};

export default ImportContent;
