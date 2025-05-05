'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Instruments.module.css';
import InstrumentChargesModal from './ChargesModal';
import { GetAllInstrumentsData, FetchSpecifications } from '../apiCalls/apiCall';

interface Specification {
  id: number;
  categoryId: number;
  keyName: string;
  keyValue: string;
}

interface Instrument {
  id: number;
  instrumentName: string;
  categoryId: number;
  isActive: boolean;
  description: string;
  imageUrl: string;
}

export default function OurInstrumentsPage() {
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [specifications, setSpecifications] = useState<Specification[]>([]);
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument | null>(null);
  const [showChargesModal, setShowChargesModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [instrumentData, specData] = await Promise.all([
          GetAllInstrumentsData(),
          FetchSpecifications()
        ]);
        setInstruments(instrumentData || []);
        setSpecifications(specData || []);

        // Get instrument ID from query param
        const params = new URLSearchParams(window.location.search);
        const selectedId = params.get('id');

        if (selectedId) {
          const selected = instrumentData.find(
            (inst: any) => inst.id.toString() === selectedId
          );
          if (selected) {
            setSelectedInstrument(selected);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInstrumentClick = (instrument: Instrument) => {
    setSelectedInstrument(instrument);
  };

  const handleOpenChargesModal = () => setShowChargesModal(true);
  const handleCloseChargesModal = () => setShowChargesModal(false);

  return (
    <>
      <section className={styles.section}>
        <div className={`${styles.container} container`}>
          <div className={`${styles.headingWraper} mb-4`}>
            <div className={styles.mainHead}>
              <h1>About the Instruments</h1>
            </div>
          </div>
          <p>
            CIF of Lovely Professional University is equipped with sophisticated instruments to carry out spectral
            measurements, structure determination and chemical analysis. Click on the instrument name in the following
            table to view their description.
          </p>

          <div className={styles.instrumentGrid} id="instrumentGrid">
            {instruments.map((instrument) => (
              <div
                key={instrument.id}
                className={`${styles.instrumentBlock} g-col-lg-3 g-col-6 d-grid ${
                  selectedInstrument?.id === instrument.id ? styles.selectedInstrument : ''
                }`}
              >
                <button
                  className={`${styles.instrumentLink} btn`}
                  onClick={() => handleInstrumentClick(instrument)}
                  data-is-active={instrument.isActive ? 'true' : 'false'}
                >
                  {instrument.instrumentName}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedInstrument && (
        <section
          className={`${styles.section} ${
            selectedInstrument.isActive ? 'bg-white' : 'd-none'
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className={`${styles.headingWraper} mb-4`}>
                  <div className={`${styles.mainHead} align-items-start`}>
                    <h2>{selectedInstrument.instrumentName}</h2>
                    <div className={`${styles.callAction} gap-3`}>
                      <button
                        className={`${styles.lpuBtn} m-2`}
                        onClick={handleOpenChargesModal}
                      >
                        Charges
                      </button>
                      <Link href="/Login" className={styles.lpuBtn}>
                        Login/Register
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <img
                    src={
                      selectedInstrument.imageUrl ||
                      '/images/instrument-placeholder.jpg'
                    }
                    alt="Instrument"
                    style={{ maxHeight: '200px', objectFit: 'contain' }}
                  />
                </div>

                <p
                  dangerouslySetInnerHTML={{
                    __html: selectedInstrument.description
                  }}
                ></p>
              </div>

              <div className="col-lg-3">
                <div className="section-light-red p-3">
                  <h4 className="font-primary white mb-3">Specifications:</h4>
                  <ul className={styles.specifications + ' text-white '}>
                    {specifications.filter(
                      (spec) =>
                        spec.categoryId === selectedInstrument.categoryId
                    ).length > 0 ? (
                      specifications
                        .filter(
                          (spec) =>
                            spec.categoryId === selectedInstrument.categoryId
                        )
                        .map((spec, index) => (
                          <li key={index}>
                            <strong className="d-block">{spec.keyName}:</strong>{' '}
                            {spec.keyValue}
                          </li>
                        ))
                    ) : (
                      <li>No specifications available.</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <InstrumentChargesModal
        show={showChargesModal}
        onClose={handleCloseChargesModal}
      />
    </>
  );
}

// 'use client';

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import styles from './Instruments.module.css';
// import InstrumentChargesModal from './ChargesModal';
// import { GetAllInstrumentsData, FetchSpecifications } from '../apiCalls/apiCall';
// import { useSearchParams } from 'next/navigation';

// interface Specification {
//   id: number;
//   categoryId: number;
//   keyName: string;
//   keyValue: string;
// }

// interface Instrument {
//   id: number;
//   instrumentName: string;
//   categoryId: number;
//   isActive: boolean;
//   description: string;
//   imageUrl: string;
// }

// export default function OurInstrumentsPage() {
//   const [instruments, setInstruments] = useState<Instrument[]>([]);
//   const [specifications, setSpecifications] = useState<Specification[]>([]);
//   const [selectedInstrument, setSelectedInstrument] = useState<Instrument | null>(null);
//   const [showChargesModal, setShowChargesModal] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [instrumentData, specData] = await Promise.all([
//           GetAllInstrumentsData(),
//           FetchSpecifications()
//         ]);
//         setInstruments(instrumentData || []);
//         setSpecifications(specData || []);

        
//       const params = new URLSearchParams(window.location.search);
//       const selectedId = params.get('id');
      
//       if (selectedId && instrumentData) {
//         const selected = instrumentData.find(
//           (inst: any) => inst.id.toString() === selectedId
//         );
//         if (selected) {
//           setSelectedInstrument(selected);
//         }
//       }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleInstrumentClick = (instrument: Instrument) => {
//     setSelectedInstrument(instrument);
//   };

//   const handleOpenChargesModal = () => setShowChargesModal(true);
//   const handleCloseChargesModal = () => setShowChargesModal(false);

//   return (
//     <>
//       <section className={styles.section}>
//         <div className={`${styles.container} container`}>
//           <div className={`${styles.headingWraper} mb-4`}>
//             <div className={styles.mainHead}>
//               <h1>About the Instruments</h1>
//             </div>
//           </div>
//           <p>
//             CIF of Lovely Professional University is equipped with sophisticated instruments to carry out spectral
//             measurements, structure determination and chemical analysis. Click on the instrument name in the following
//             table to view their description.
//           </p>

//           <div className={styles.instrumentGrid} id="instrumentGrid">
//              {instruments.map((instrument) => (
//                <div
//                  key={instrument.id}
//                  className={styles.instrumentBlock + ` g-col-lg-3 g-col-6 d-grid ${selectedInstrument?.id === instrument.id ? 'selected-instrument' : ''
//                    }`}
//                >
//                  <button className={styles.instrumentLink + " btn "} onClick={() => handleInstrumentClick(instrument)} data-is-active={instrument.isActive ? 'true' : 'false'} >
//                    {instrument.instrumentName}
//                  </button>
//                </div>
//              ))}
//            </div>

//            </div>
//       </section>

//       {selectedInstrument && (
//         <section className={`${styles.section} ${selectedInstrument.isActive ? 'bg-white' : 'd-none'}`}>
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-9">
//                 <div className={`${styles.headingWraper} mb-4`}>
//                   <div className={`${styles.mainHead} align-items-start`}>
//                     <h2>{selectedInstrument.instrumentName}</h2>
//                     <div className={`${styles.callAction} gap-3`}>
//                       <button className={`${styles.lpuBtn} m-2`} onClick={handleOpenChargesModal}>
//                         Charges
//                       </button>
//                       <Link href="/Login" className={styles.lpuBtn}>
//                         Login/Register
//                       </Link>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-5">
//                   <img
//                     src={selectedInstrument.imageUrl || '/images/instrument-placeholder.jpg'}
//                     alt="Instrument"
//                     style={{ maxHeight: '200px', objectFit: 'contain' }}
//                   />
//                 </div>

//                 <p dangerouslySetInnerHTML={{ __html: selectedInstrument.description }}></p>
//               </div>

//               <div className="col-lg-3">
//                 <div className="section-light-red p-3">
//                   <h4 className="font-primary white mb-3">Specifications:</h4>
//                   <ul className={styles.specifications + " text-white "}>
//                     {specifications.filter(spec => spec.categoryId === selectedInstrument.categoryId).length > 0 ? (
//                       specifications
//                         .filter(spec => spec.categoryId === selectedInstrument.categoryId)
//                         .map((spec, index) => (
//                           <li key={index}>
//                             <strong className="d-block">{spec.keyName}:</strong> {spec.keyValue}
//                           </li>
//                         ))
//                     ) : (
//                       <li>No specifications available.</li>
//                     )}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       <InstrumentChargesModal show={showChargesModal} onClose={handleCloseChargesModal} />
//     </>
//   );
// }


// 'use client';

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import styles from './Instruments.module.css';
// import InstrumentChargesModal from './ChargesModal';
// import { GetAllInstrumentsData, FetchSpecifications } from '../apiCalls/apiCall';

// interface Instrument {
//   id: number;
//   instrumentName: string;
//   categoryId: number;
//   isActive: boolean;
//   description: string;
//   imageUrl: string;
//   specifications: { keyName: string; keyValue: string }[];
// }

// export default function OurInstrumentsPage() {
//   const [instruments, setInstruments] = useState<Instrument[]>([]);
//   const [specifications, setspecifications] = useState<Instrument[]>([]);
//   const [selectedInstrument, setSelectedInstrument] = useState<any>(null);
//   const [showChargesModal, setShowChargesModal] = useState(false);

//   useEffect(() => {
//     const fetchInstruments = async () => {
//       try {
//         const data = await GetAllInstrumentsData();
//         setInstruments(data || []);
//       } catch (error) {
//         console.error('Error fetching instruments:', error);
//       }
//     };
//     const getSpecifications = async () => {
//       try {
//         const data = await FetchSpecifications();
//         console.log("Specification " + JSON.stringify(data))
//         setspecifications(data || []);
//       } catch (error) {
//         console.error('Error fetching Specifications:', error);
//       }
//     };

//     fetchInstruments();
//     getSpecifications();
//   }, []);

//   const fetchSpecifications = (id: number) => {
//     const instrument = specifications.find((inst) => inst.id == id);
//     console.log('Specificatoin ' + JSON.stringify(instrument))
//     if (instrument) {
//       setSelectedInstrument(specifications);
//     }
//   };

//   const handleOpenChargesModal = () => setShowChargesModal(true);
//   const handleCloseChargesModal = () => setShowChargesModal(false);

//   return (
//     <>
//       <section className={styles.section}>
//         <div className={styles.container + ' container '}>
//           <div className={styles.headingWraper + ' mb-4'}>
//             <div className={styles.mainHead}>
//               <h1>About the Instruments</h1>
//             </div>
//           </div>
//           <p>
//             CIF of Lovely Professional University is equipped with sophisticated instruments to carry out spectral
//             measurements, structure determination and chemical analysis. Click on the instrument name in the following
//             table to view their description.
//           </p>

//           <div className={styles.instrumentGrid} id="instrumentGrid">
//             {instruments.map((instrument) => (
//               <div
//                 key={instrument.id}
//                 className={styles.instrumentBlock + ` g-col-lg-3 g-col-6 d-grid ${selectedInstrument?.id === instrument.id ? 'selected-instrument' : ''
//                   }`}
//               >
//                 <button className={styles.instrumentLink + " btn "} onClick={() => fetchSpecifications(instrument.id)} data-is-active={instrument.isActive ? 'true' : 'false'} >
//                   {instrument.instrumentName}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {selectedInstrument && (
//         <section className={styles.section + ` ${selectedInstrument.isActive ? 'bg-dark-yellow' : 'd-none'}`}>
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-9">
//                 <div className={styles.headingWraper + " mb-4"}>
//                   <div className={styles.mainHead + " align-items-start"}>
//                     <h2>{selectedInstrument.instrumentName}</h2>
//                     <div className={styles.callAction + " gap-3"}>
//                       <button className={styles.lpuBtn + " m-2"} onClick={handleOpenChargesModal}>
//                         Charges
//                       </button>
//                       <Link href="/Login" className={styles.lpuBtn}>
//                         Login/Register
//                       </Link>
//                     </div>
//                   </div>
//                 </div>

//                 {/* <div className={`alert ${selectedInstrument.isActive ? 'alert-success' : 'alert-danger'}`}>
//                   <strong>{selectedInstrument.isActive ? 'Instrument is Active' : 'Instrument is Inactive'}</strong>
//                 </div> */}

//                 <div className="mb-5">
//                   <img
//                     src={selectedInstrument.imageUrl || '/images/instrument-placeholder.jpg'}
//                     alt="Instrument Image"
//                     style={{ maxHeight: '300px', objectFit: 'contain' }}
//                   />
//                 </div>

//                 <p dangerouslySetInnerHTML={{ __html: selectedInstrument.description }}></p>
//               </div>

//               <div className="col-lg-3">
//                 <div className="section-light-red p-3">
//                   <h4 className="font-primary white mb-3">Specifications:</h4>
//                   <ul className={styles.specifications}>
//                     {specifications?
//                     (specifications.map((spec: any, index) => (
//                       <li  >
//                         <strong className="d-block">{spec.keyName}:</strong> {spec.keyValue}
//                       </li>
//                     ))
//                     ) : (
//                       <li>No specifications available.</li>
//                     )}
//                   </ul>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       <InstrumentChargesModal show={showChargesModal} onClose={handleCloseChargesModal} />
//     </>
//   );
// }

// // pages/ourInstruments.tsx

// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import styles from './ourInstruments.module.css'; // Or use Tailwind/Bootstrap
// import InstrumentChargesModal from './ChargesModal'; // Import modal component
// import { GetAllInstrumentsData } from '../apiCalls/apiCall';

// // Mock Data (Replace with actual API data or props)
// const instrumentsMock = [
//   { id: 1, instrumentName: 'Spectrometer', categoryId: 101, isActive: true },
//   { id: 2, instrumentName: 'Microscope', categoryId: 102, isActive: false },
// ];

// const specificationsMock = [
//   { keyName: 'Resolution', keyValue: '0.01nm' },
//   { keyName: 'Voltage', keyValue: '220V' },
// ];

// export default function OurInstrumentsPage() {
//   const [selectedid, setSelectedid] = useState<number | null>(null);
//   const [instrumentName, setInstrumentName] = useState('');
//   const [imageUrl, setImageUrl] = useState('');
//   const [description, setDescription] = useState('');
//   const [specifications, setSpecifications] = useState(specificationsMock);
//   const [isInstrumentActive, setIsInstrumentActive] = useState(false);
//   const [showChargesModal, setShowChargesModal] = useState(false); // State for showing modal

//   const fetchSpecifications = (categoryId: number, id: number) => {
//     const instrument = instrumentsMock.find((inst) => inst.id === id);
//     if (instrument) {
//       setSelectedid(id);
//       setInstrumentName(instrument.instrumentName);
//       setImageUrl('/images/instrument-placeholder.jpg'); // Replace with actual image path
//       setDescription('Instrument description goes here...');
//       setIsInstrumentActive(instrument.isActive);
//       setSpecifications(specificationsMock); // Replace with API call if needed
//     }
//   };

//   const handleOpenChargesModal = () => {
//     setShowChargesModal(true); // Open the modal
//   };

//   const handleCloseChargesModal = () => {
//     setShowChargesModal(false); // Close the modal
//   };

//   return (
//     <>
//       <section className="section">
//         <div className="container">
//           <div className="heading-wraper mb-4">
//             <div className="main-head">
//               <h1>About the Instruments</h1>
//               <div className="call-action"></div>
//             </div>
//           </div>
//           <p>
//             CIF of Lovely Professional University is equipped with sophisticated instruments to carry out spectral
//             measurements, structure determination and chemical analysis. Click on the instrument name in the
//             following table to view their description.
//           </p>

//           <div className="instrument-grid" id="instrumentGrid">
//             {instrumentsMock.map((instrument) => (
//               <div
//                 key={instrument.id}
//                 className={`instrument-block g-col-lg-3 g-col-6 d-grid ${instrument.id === selectedid ? 'selected-instrument' : ''}`}
//               >
//                 <button
//                   className="instrument-link btn"
//                   onClick={() => fetchSpecifications(instrument.categoryId, instrument.id)}
//                   data-is-active={instrument.isActive ? 'true' : 'false'}
//                 >
//                   {instrument.instrumentName}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {selectedid && (
//         <section className={`section ${isInstrumentActive ? 'bg-dark-yellow' : 'd-none'}`}>
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-9">
//                 <div className="heading-wraper mb-4">
//                   <div className="main-head align-items-start">
//                     <h2 id="InstrumentName">{instrumentName}</h2>
//                     <div className="call-action gap-3">
//                       <button className="lpu-btn mr-2" onClick={handleOpenChargesModal}>
//                         Charges
//                       </button>
//                       <Link href="/Login" className="lpu-btn">
//                         Login/Register
//                       </Link>
//                     </div>
//                   </div>
//                 </div>

//                 <div
//                   className={`alert ${isInstrumentActive ? 'alert-success' : 'alert-danger'}`}
//                   id="InstrumentStatus"
//                 >
//                   <strong>{isInstrumentActive ? 'Instrument is Active' : 'Instrument is Inactive'}</strong>
//                 </div>

//                 <div className="mb-5">
//                   <img src={imageUrl} alt="Instrument Image" />
//                 </div>

//                 <p dangerouslySetInnerHTML={{ __html: description }}></p>
//               </div>

//               <div className="col-lg-3">
//                 <div className="section-light-red p-3">
//                   <h4 className="font-primary white mb-3">Specifications:</h4>
//                   <ul className="specifications" id="specificationsList">
//                     {specifications.map((spec, index) => (
//                       <li key={index}>
//                         <strong className="d-block">{spec.keyName}:</strong> {spec.keyValue}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Charges Modal */}
//       <InstrumentChargesModal show={showChargesModal} onClose={handleCloseChargesModal} />
//     </>
//   );
// }
