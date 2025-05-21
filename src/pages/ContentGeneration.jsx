import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import './ContentGeneration.css';

const ContentGeneration = () => {
  const navigate = useNavigate();
  const [selectedHeaderIdx, setSelectedHeaderIdx] = useState(null);
  const [processedContent, setProcessedContent] = useState('');

  const headers = [
    {
      title: 'Header 1',
      subheadings: ['Sub Heading 1', 'Sub Heading 2', 'Sub Heading 3'],
    },
    {
      title: 'Header 2',
      subheadings: ['Sub Heading 1', 'Sub Heading 2', 'Sub Heading 3'],
    },
    {
      title: 'Header 3',
      subheadings: ['Sub Heading 1', 'Sub Heading 2', 'Sub Heading 3'],
    },
  ];

  const contentMap = [
    {
      title: 'Introduction to Cloud Computing',
      subheadings: [
        'Definition and Concept',
        'History and Evolution',
        'Importance in Modern IT',
      ],
    },
    {
      title: 'Types of Cloud Services',
      subheadings: [
        'Infrastructure as a Service (IaaS)',
        'Platform as a Service (PaaS)',
        'Software as a Service (SaaS)',
      ],
    },
    {
      title: 'Benefits and Challenges',
      subheadings: [
        'Scalability and Flexibility',
        'Cost-Effectiveness',
        'Security and Compliance Risks',
      ],
    },
  ];

  const toggleHeaderSelection = (index) => {
    setSelectedHeaderIdx(prev => prev === index ? null : index);
  };

  const processContent = () => {
    if (selectedHeaderIdx === null) return;

    const content = contentMap
      .map((section) => {
        const headerHtml = `<div class="generated-header header-${selectedHeaderIdx + 1}">${section.title}</div>`;
        const subheadersHtml = section.subheadings
          .map(
            (sub) =>
              `<div class="generated-subheading subheader-${selectedHeaderIdx + 1}">
                 <div class="subheading-content">${sub}</div>
               </div>`
          )
          .join('');
        return headerHtml + subheadersHtml;
      })
      .join('');

    setProcessedContent(content);
  };

  return (
    <div className="container-fluid text-white bg-dark py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center border-bottom border-secondary mb-4 px-3 pb-3">
        <Button
          className="btn-teal-outline"
          onClick={() => navigate("/import-content")}
        >
          Back
        </Button>
        <h5 className="m-0">New Document</h5>
        {/* <div style={{ width: '100px' }}></div> */}
        <div className="d-flex justify-content-end gap-2">
          {/* <Button className="btn-teal-outline">Download</Button> */}
          <Dropdown>
            <Dropdown.Toggle className="btn-teal-outline no-toggle-bg" style={{width:'130px'}}>
              Download
            </Dropdown.Toggle>
            <Dropdown.Menu className='dropdown-menu-content-generation'>
              <Dropdown.Item className='dropdown-menu-content-generation' onClick={() => alert("Download as .ppt")}>
                .ppt
              </Dropdown.Item>
              <Dropdown.Item className='dropdown-menu-content-generation' onClick={() => alert("Download as .docx")}>
                 .docx
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button
            style={{ backgroundColor: "#0C6C5F", borderColor: "#0C6C5F" }}
            onClick={() => navigate("/final-step")}
          >
            Save
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="d-flex px-3 gap-3">
        {/* Suggested Headers */}
        <div className="text-white  rounded" style={{ flex: 1 }}>
          <h5>Suggested Headers</h5>
          <ul className="list-unstyled">
            {headers.map((header, idx) => (
              <li key={header.title} className="mb-3">
                <input
                  type="radio"
                  name="header"
                  onChange={() => toggleHeaderSelection(idx)}
                  checked={selectedHeaderIdx === idx}
                />{" "}
                <span className={`sidebar-header header-${idx + 1}`}>
                  {header.title}
                </span>
                <ul className="ms-4 mt-2">
                  {header.subheadings.map((sub, subIdx) => (
                    <li
                      key={subIdx}
                      className={`sidebar-subheading subheader-${idx + 1}`}
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <Button
            className="btn-teal-outline mt-3"
            onClick={processContent}
            disabled={selectedHeaderIdx === null}
          >
            Process
          </Button>
        </div>

        {/* Content Editor */}
        <div className="text-white  rounded" style={{ flex: 2 }}>
          <h5>Content Generation</h5>
          <div
            className="content-box "
            style={{
              maxHeight: "550px",
              overflowY: "auto",
              minHeight: "550px",
            }}
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />
        </div>

        {/* Comments */}
        <div className="text-white  rounded" style={{ flex: 1 }}>
          <h5>Comments</h5>
          <textarea
            className="form-control"
            rows="10"
            placeholder="Add your comments here"
          ></textarea>
          <Button className="btn btn-secondary mt-2" disabled>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContentGeneration;
