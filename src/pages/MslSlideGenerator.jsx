import React from 'react';
import './MslSlideGenerator.css';
import { FaClock, FaFileAlt } from 'react-icons/fa';
import sampleImage1 from '../assets/2800f06cc34cc51e31be2f618f3692c8587abec1.png'
import sampleImage2 from '../assets/6bdbde18773e4203dd08d957a8fefdeeb754857a.png'
import sampleImage3 from '../assets/f7e9275873ab7540e53db7d3419ae2eff35babfb.png'
import sampleImage4 from '../assets/f7eaac5e43d3a84aaf02f28795e13747c94db416.png'
import {useNavigate} from 'react-router-dom'


const presentations = [
  {
    title: "Social Media Campaign",
    date: "24th October 2024, 6:50pm",
    image: sampleImage1
  },
  {
    title: "Linkedln Feed",
    date: "24th October 2024, 6:50pm",
    image: sampleImage2
  },
  {
    title: "New Jersey Event",
    date: "24th October 2024, 6:50pm",
    image: sampleImage3
  },
  {
    title: "Product Launch",
    date: "24th October 2024, 6:50pm",
    image: sampleImage4
  },
];

const MslSlideGenerator = () => {

  const navigate = useNavigate();

  return (
    <div className="container-fluid p-4 text-white">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 style={{color:'black'}}>Content Generation</h5>
        <div>
          <button className="btn btn-outline-light me-2 btn-teal-outline" style={{width:'135px'}} onClick={() => navigate('/import-content')}>Import</button>
          <button className="btn btn-success" style={{width:'135px',backgroundColor:'#015A63',border:'transparent'}}>New Content</button>
        </div>
      </div>

      <ul className="nav nav-pills mb-3" id="pills-tab">
        <li className="nav-item">
          <a className="nav-link active" href="#">All</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:'gray'}}>Report</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:'gray'}}>Research</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:'gray'}}>Marketing</a>
        </li>
      </ul>

      <div className="mt-4 mb-3" style={{color:'gray',fontSize:'20px'}}>Recent</div>

      <div className="row">
        {presentations.map((item, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card bg-dark text-white h-100">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <div className="card-title mb-2 " style={{ fontSize: '15px' }}>
                  <FaFileAlt className="me-2 text-success" />
                  {item.title}
                </div>
                <p className="card-text" style={{ fontSize: '15px' }}>
                  <FaClock className="me-2 text-success" />
                  {item.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MslSlideGenerator;




// import React, { useState } from 'react';
// import './Dashboard.css';
// import { FaClock, FaFileAlt } from 'react-icons/fa';
// import { Modal, Button, Form } from 'react-bootstrap';
// import sampleImage1 from '../assets/2800f06cc34cc51e31be2f618f3692c8587abec1.png';
// import sampleImage2 from '../assets/6bdbde18773e4203dd08d957a8fefdeeb754857a.png';
// import sampleImage3 from '../assets/f7e9275873ab7540e53db7d3419ae2eff35babfb.png';
// import sampleImage4 from '../assets/f7eaac5e43d3a84aaf02f28795e13747c94db416.png';

// const presentations = [
//   {
//     title: "Intelligence Presentation",
//     date: "24th October 2024, 6:50pm",
//     image: sampleImage1
//   },
//   {
//     title: "lorem ipsum",
//     date: "24th October 2024, 6:50pm",
//     image: sampleImage2
//   },
//   {
//     title: "Powerpoint presentation",
//     date: "24th October 2024, 6:50pm",
//     image: sampleImage3
//   },
//   {
//     title: "Guest lecture",
//     date: "24th October 2024, 6:50pm",
//     image: sampleImage4
//   },
// ];

// const Dashboard = () => {
//   const [showImportModal, setShowImportModal] = useState(false);

//   const handleImport = (e) => {
//     e.preventDefault();
//     alert("Content imported successfully!");
//     setShowImportModal(false);
//   };

//   return (
//     <div className="container-fluid p-4 text-white" style={{ backgroundColor: '#252632', minHeight: '100vh' }}>
//       {/* Header */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h5>Content Generation</h5>
//         <div>
//           <button
//             className="btn btn-outline-light me-2"
//             style={{ width: '135px' }}
//             onClick={() => setShowImportModal(true)}
//           >
//             Import
//           </button>
//           <button className="btn btn-success" style={{ width: '135px' }}>
//             New Content
//           </button>
//         </div>
//       </div>

//       {/* Tabs */}
//       <ul className="nav nav-pills mb-3" id="pills-tab">
//         <li className="nav-item">
//           <a className="nav-link active" href="#">All</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#" style={{ color: 'gray' }}>Report</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#" style={{ color: 'gray' }}>Research</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#" style={{ color: 'gray' }}>Marketing</a>
//         </li>
//       </ul>

//       <div className="mt-4 mb-3" style={{ color: 'gray', fontSize: '20px' }}>Recent</div>

//       {/* Cards */}
//       <div className="row">
//         {presentations.map((item, index) => (
//           <div className="col-md-3 mb-4" key={index}>
//             <div className="card bg-dark text-white h-100">
//               <img src={item.image} className="card-img-top" alt={item.title} />
//               <div className="card-body">
//                 <div className="card-title mb-2" style={{ fontSize: '15px' }}>
//                   <FaFileAlt className="me-2 text-success" />
//                   {item.title}
//                 </div>
//                 <p className="card-text" style={{ fontSize: '15px' }}>
//                   <FaClock className="me-2 text-success" />
//                   {item.date}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Import Modal */}
//       <Modal show={showImportModal} onHide={() => setShowImportModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Import Content</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleImport}>
//             <Form.Group className="mb-3" controlId="formFile">
//               <Form.Label>Select File</Form.Label>
//               <Form.Control type="file" required />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formContentType">
//               <Form.Label>Content Type</Form.Label>
//               <Form.Select required>
//                 <option value="">Select Type</option>
//                 <option value="report">Report</option>
//                 <option value="research">Research</option>
//                 <option value="marketing">Marketing</option>
//               </Form.Select>
//             </Form.Group>

//             <div className="text-end">
//               <Button variant="secondary" onClick={() => setShowImportModal(false)} className="me-2">
//                 Cancel
//               </Button>
//               <Button variant="success" type="submit">
//                 Import
//               </Button>
//             </div>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default Dashboard;

