// components/InstrumentChargesModal.tsx

import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

interface ChargesModalProps {
  show: boolean;
  onClose: () => void;
}

const InstrumentChargesModal: React.FC<ChargesModalProps> = ({ show, onClose }) => {
  // Sample data for charges, replace with actual data or API calls
  const chargesData = [
    { category: 'External User', analysisName: 'Spectral Analysis', charges: '₹500' },
    { category: 'LPU User', analysisName: 'Chemical Analysis', charges: '₹300' },
    { category: 'Industry User', analysisName: 'Structure Determination', charges: '₹700' },
  ];

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Instrument Charges</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table">
          <thead>
            <tr>
              <th>User Category</th>
              <th>Analysis Name</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            {chargesData.map((data, index) => (
              <tr key={index}>
                <td>{data.category}</td>
                <td>{data.analysisName}</td>
                <td>{data.charges}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button variant="primary" onClick={onClose}>Close</Button>
      </Modal.Body>
    </Modal>
  );
};

export default InstrumentChargesModal;

// import { Modal, Button } from 'react-bootstrap';

// interface InstrumentModalProps {
//   show: boolean;
//   onHide: () => void;
//   instrumentDetails: Array<{
//     userCategory: string;
//     analysisName: string;
//     charges: string;
//   }>;
// }

// const InstrumentModal: React.FC<InstrumentModalProps> = ({ show, onHide, instrumentDetails }) => {
//   return (
//     <Modal show={show} onHide={onHide} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Instrument Charges</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>User Category</th>
//               <th>Analysis Name</th>
//               <th>Charges</th>
//             </tr>
//           </thead>
//           <tbody>
//             {instrumentDetails.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.userCategory}</td>
//                 <td>{item.analysisName}</td>
//                 <td>{item.charges}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <Button variant="primary" onClick={() => alert('Redirecting to booking...')}>
//           Book Test
//         </Button>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default InstrumentModal;
