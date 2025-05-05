

'use client';
import router from 'next/router';
import styles from './Register.module.css';
import { useState } from 'react';
import Link from 'next/link';

export default function CIFLoginRegister() {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggle = () => {
    setShowLogin(!showLogin);
    router.push('/Login'); 
  };

  return (
    <section className="section">
      <div className="container">
        {/* Heading */}
        <div className="heading-wraper mb-5">
          <div className="main-head">
            <h1>Central Instrumentation Facility - Login</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 d-none d-lg-block">
            <img src="https://www.lpu.in/lpu-assets/images/cif/login-left.png" alt="CIF" />
          </div>

    
            <div className="col-md-6 reg-div">
              <div className={styles.cifRegister}>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    If you already have an account, just{' '}
                    <Link href="/Login" className={styles.lpuBtn}>
                        Sign in 
                      </Link>
                    {/* <a className="login-link" onClick={handleToggle} style={{ cursor: 'pointer' }}>
                      <strong>sign in</strong>
                    </a> */}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter Email" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Name of Supervisor</label>
                    <input type="text" className="form-control" placeholder="Enter Name of Supervisor" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Mobile</label>
                    <input type="text" className="form-control" placeholder="Enter Mobile Number" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Organization</label>
                    <input type="text" className="form-control" placeholder="Enter Organization" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Department</label>
                    <input type="text" className="form-control" placeholder="Enter Department" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>ID Proof</label>
                    <select className="form-select">
                      <option value="">Select ID Proof</option>
                      <option value="Voter Card">Voter Card</option>
                      <option value="Driving License">Driving License</option>
                      <option value="Aadhar Card">Aadhar Card</option>
                      <option value="Institute ID Card">Institute ID Card</option>
                      <option value="PAN Card">PAN Card</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>ID Number</label>
                    <input type="text" className="form-control" placeholder="Enter ID Number" />
                  </div>

                  <div className="col-md-12 mb-3">
                    <label>Corresponding Address</label>
                    <textarea className="form-control" rows={4} placeholder="Enter Address"></textarea>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter Password" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" />
                  </div>
                </div>

                <div className="col-md-12 mb-4 text-center">
                  <button type="submit" className="lpu-btn border-0 px-5 mb-3">Submit</button>
                </div>
              </div>
            </div>
         
        </div>
      </div>
    </section>
  );
}


// import RegisterForm from './RegisterForm';

// export default function RegisterPage() {
//   return (
//     <section>
//       <div className="row w-100 mx-0 auth-page">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-md-6 pe-md-0">
//               <div
//                 className="auth-side-wrapper"
//                 style={{
//                   height: '40rem',
//                   backgroundImage: 'url(https://www.lpu.in/lpu-assets/images/cif/login-left.png)',
//                   backgroundSize: 'contain',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundPosition: 'center',
//                 }}
//               />
//             </div>
//             <div className="col-md-6 p-md-5">
//               <div className="auth-form-wrapper px-4 py-5">
//                 <h2 className="mb-4">Register New Account</h2>
//                 <RegisterForm />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// 'use client';
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './loginRegister.module.css'; // optional for custom styles
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { register } from 'module';
// import {
//   GetAuthoriseUserData,
//   saveUser,getUserDataApiCall,
//   getStudentById,
//   loginInternalUser,  
//   addToSession,
//   setAuthToken,
// } from '@/app/apiCalls/apiCall';
// import router from 'next/router';

// type FormData = {
//   Email: string;
//   password: string;
//   UserRoleS: string;
// };


// export default function LoginRegisterPage() {
//   const [isRegisterSubmitted, setIsRegisterSubmitted] = useState(false);
//   const [isLoginSubmitted, setIsLoginSubmitted] = useState(false);
//   const [registerTouched, setRegisterTouched] = useState<Record<string, boolean>>({});
//   const [loginTouched, setLoginTouched] = useState<Record<string, boolean>>({});
//   const [loginError, setLoginError] = useState('');

//   const [showRegister, setShowRegister] = useState(false);
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: '',
//     role: '',
//   });
//   const [registerData, setRegisterData] = useState({
//     email: '', name: '', supervisor: '', mobile: '', organization: '',
//     department: '', idProof: '', idNumber: '', address: '', password: '', confirmPassword: '',
//   });

//   const [loginErrors, setLoginErrors] = useState<any>({});
//   const [registerErrors, setRegisterErrors] = useState<any>({});

//   const validateLoginForm = () => {
//     const errors: Partial<typeof loginData> = {};

//     if (!loginData.email.trim()) {
//       errors.email = 'Email is required';
//     }

//     if (!loginData.password) {
//       errors.password = 'Password is required';
//     }
//     if (!loginData.role) {
//       errors.role = 'Select Role';
//     }

//     setLoginErrors(errors);
//     return Object.keys(errors).length === 0;
//   };


//   const validateRegisterForm = () => {
//     const errors: Partial<typeof registerData> = {};

//     if (!registerData.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/^\S+@\S+\.\S+$/.test(registerData.email)) {
//       errors.email = 'Invalid email format';
//     }

//     if (!registerData.name.trim()) {
//       errors.name = 'Name is required';
//     }

//     if (!registerData.supervisor.trim()) {
//       errors.supervisor = 'Supervisor name is required';
//     }

//     if (!registerData.mobile.trim()) {
//       errors.mobile = 'Mobile number is required';
//     } else if (!/^\d{10}$/.test(registerData.mobile)) {
//       errors.mobile = 'Mobile number must be 10 digits';
//     }

//     if (!registerData.organization.trim()) {
//       errors.organization = 'Organization is required';
//     }

//     if (!registerData.department.trim()) {
//       errors.department = 'Department is required';
//     }

//     if (!registerData.idProof.trim()) {
//       errors.idProof = 'ID Proof is required';
//     }

//     if (!registerData.idNumber.trim()) {
//       errors.idNumber = 'ID Number is required';
//     }

//     if (!registerData.password) {
//       errors.password = 'Password is required';
//     } else if (registerData.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters';
//     }

//     if (!registerData.confirmPassword) {
//       errors.confirmPassword = 'Confirm Password is required';
//     } else if (registerData.confirmPassword !== registerData.password) {
//       errors.confirmPassword = 'Passwords do not match';
//     }

//     if (!registerData.address.trim()) {
//       errors.address = 'Address is required';
//     }

//     setRegisterErrors(errors);
//     return Object.keys(errors).length === 0;

//   };

//   const handleRegisterSubmit = () => {
//     setIsRegisterSubmitted(true);
//     if (validateRegisterForm()) {
//       console.log('Register:', registerData);
//     }
//   };

 

//   const handleLoginSubmit = async () => {
//     setIsLoginSubmitted(true);
//     if (validateLoginForm()) {
//     try {
//       const tokenData = await loginInternalUser(loginData.email, loginData.password);
//       if (!tokenData.success) {
//         setLoginError('Invalid credentials or token not returned.');
//         return;
//       }
//        setAuthToken(tokenData.data)
//       // saveUser(tokenData.data); // Save actual token/user data

//       let userData;
//       if (loginData.role === 'Staff') {
//         // userData = await getEmployeeDetails();
//         userData = await getUserDataApiCall();
//       } else if (loginData.role === 'Student') {
//         userData = await getStudentById(loginData.email);
//       }

//       if (userData) {
//         const user = Array.isArray(userData) ? userData[0] : userData;
//         setUserSession(user, loginData.role);
//         router.push('/dashboard'); // or wherever you want to redirect
//       } else {
//         setLoginError('User data not found.');
//       }
//     } catch (error) {
//       console.error(error);
//       setLoginError('Server error occurred.');
//     }
//   }
//   };

//   const setUserSession = (user: any, role: string) => {
//     const sessionData = {
//       CandidateName: user.candidateName,
//       UserId: user.emailId,
//       Department: user.department,
//       DepartmentName: user.departmentName,
//       Designation: user.department,
//       EmailId: user.emailId,
//       MobileNo: user.mobileNumber,
//       UserRole: role,
//       SupervisorName: user.supervisorName,
//       ProofNumber: btoa(user.idProofNumber || ''),
//       ProofName: user.idProofType || '',
//       PasswordText: btoa(user.passwordText || ''),
//     };

//     document.cookie = `authData=${JSON.stringify(sessionData)}; path=/;`;
//     addToSession('sessionData', user);
//   };




//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
//     form: 'login' | 'register'
//   ) => {
//     const { name, value } = e.target;

//     if (form === 'login') {
//       setLoginData({ ...loginData, [name]: value });
//       setLoginErrors((prev: any) => ({ ...prev, [name]: '' }));
//       validateLoginForm(); // optional for live validation

//     } else {
//       setRegisterData({ ...registerData, [name]: value });
//       setRegisterErrors((prev: any) => ({ ...prev, [name]: '' }));

//       // 👇 Force validation for register fields
//       const newErrors: any = { ...registerErrors };
//       delete newErrors[name];
//       setRegisterErrors(newErrors);

//       validateRegisterForm(); // run live validation
//     }
//   };
//   const handleBlur = (
//     e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
//     form: 'login' | 'register'
//   ) => {
//     const { name } = e.target;

//     if (form === 'login') {
//       setLoginTouched(prev => ({ ...prev, [name]: true }));
//       validateLoginForm(); // validate all
//     } else {
//       setRegisterTouched(prev => ({ ...prev, [name]: true }));
//       validateRegisterForm(); // validate all
//     }
//   };
//   const isLoginValid =
//     loginData.email.trim() &&
//     loginData.password &&
//     loginData.role &&
//     Object.keys(loginErrors).length === 0;

//   const isRegisterValid =
//     registerData.email.trim() &&
//     registerData.name.trim() &&
//     registerData.supervisor.trim() &&
//     registerData.mobile.trim() &&
//     registerData.organization.trim() &&
//     registerData.department.trim() &&
//     registerData.idProof.trim() &&
//     registerData.idNumber.trim() &&
//     registerData.password &&
//     registerData.confirmPassword &&
//     registerData.address.trim() &&
//     Object.keys(registerErrors).length === 0;


//   return (
//     <section className="section py-5">
//       <div className="container">
//         <div className="heading-wraper mb-4">
//           <h1 className="text-center mb-4">Central Instrumentation Facility - Login</h1>
//         </div>
//         <div className="row">
//           <div className="col-md-6 d-none d-lg-block">
//             <img
//               src="https://www.lpu.in/lpu-assets/images/cif/login-left.png"
//               alt="Login visual"
//               className="img-fluid"
//             />
//           </div>
//           <div className="col-md-6">
//             {!showRegister ? (
//               <div className="cif-login">
//                 <h2 className="mb-4 text-center"><span>LPU</span> User Login</h2>
//                 <form onSubmit={handleLoginSubmit}>
//                   <div className="mb-3">
//                     <label className="form-label">Login ID</label>
//                     <input
//                       type="text"
//                       name="email"
//                       value={loginData.email}
//                       placeholder="Enter Login ID/ Email"
//                       onChange={(e) => handleInputChange(e, 'login')}
//                       onBlur={(e) => handleBlur(e, 'login')}
//                       className={`form-control ${loginErrors.email && (loginTouched.email || isLoginSubmitted) ? 'is-invalid' : ''}`}
//                     />
//                     {loginErrors.email && (loginTouched.email || isLoginSubmitted) && (
//                       <div className="invalid-feedback">{loginErrors.email}</div>
//                     )}
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Password</label>
//                     <input type="password" name="password"
//                       value={loginData.password}
//                       placeholder="Enter password"
//                       onChange={(e) => handleInputChange(e, 'login')}
//                       onBlur={(e) => handleBlur(e, 'login')}
//                       className={`form-control ${loginErrors.password && (loginTouched.password || isLoginSubmitted) ? 'is-invalid' : ''}`}
//                     />
//                     {loginErrors.password && (loginTouched.password || isLoginSubmitted) && (
//                       <div className="invalid-feedback">{loginErrors.password}</div>
//                     )}

//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Choose Role</label>
//                     <select
//                       name="role"
//                       value={loginData.role}
//                       onChange={(e) => handleInputChange(e, 'login')}
//                       onBlur={(e) => handleBlur(e, 'login')}
//                       className={`form-select ${loginErrors.role && (loginTouched.role || isLoginSubmitted) ? 'is-invalid' : ''}`}
//                     >

//                       <option value="">Select Role</option>
//                       <option value="Student">Student</option>
//                       <option value="Staff">Staff</option>
//                     </select>
//                     {loginErrors.role && (loginTouched.role || isLoginSubmitted) && (
//                       <div className="invalid-feedback">{loginErrors.role}</div>
//                     )}
//                   </div>
//                   <button type="submit" className="btn btn-primary px-4" disabled={!isLoginValid}>  Login</button>
//                   {/* <div className="mb-4 mt-4 text-center">
//                     <button type="submit" className="btn btn-primary px-4">Login</button>
//                   </div> */}
//                 </form>
//                 <div className="text-center mt-3">
//                   Don’t have an account?{' '}
//                   <a className="reg-link" onClick={() => setShowRegister(true)} style={{ cursor: 'pointer' }}>
//                     <strong>Register</strong>
//                   </a>
//                 </div>
//               </div>
//             ) : (
//               <div className="cif-register">
//                 <h2 className="mb-4 text-center"><span>LPU</span> User Registration</h2>
//                 <form onSubmit={handleRegisterSubmit}>
//                   <div className="row">
//                     {/* Email */}
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Email</label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={registerData.email}
//                         onChange={(e) => handleInputChange(e, 'register')}
//                         onBlur={(e) => handleBlur(e, 'register')}
//                         className={`form-control ${registerErrors.email && (registerTouched.email || isRegisterSubmitted) ? 'is-invalid' : ''}`}
//                       />
//                       {registerErrors.email && (registerTouched.email || isRegisterSubmitted) && (
//                         <div className="invalid-feedback">{registerErrors.email}</div>
//                       )}

//                     </div>

//                     {/* Name */}
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Name</label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={registerData.name}
//                         onChange={(e) => handleInputChange(e, 'register')}
//                         onBlur={(e) => handleBlur(e, 'register')}
//                         className={`form-control ${registerErrors.name && (registerTouched.name || isRegisterSubmitted) ? 'is-invalid' : ''}`}
//                       />
//                       {registerErrors.name && (registerTouched.name || isRegisterSubmitted) && (
//                         <div className="invalid-feedback">{registerErrors.name}</div>
//                       )}

//                     </div>

//                     {/* Supervisor Name */}
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Supervisor Name</label>
//                       <input
//                         type="text"
//                         name="supervisor"
//                         value={registerData.supervisor}
//                         onChange={(e) => handleInputChange(e, 'register')}
//                         onBlur={(e) => handleBlur(e, 'register')}
//                         className={`form-control ${registerErrors.supervisor && (registerTouched.supervisor || isRegisterSubmitted) ? 'is-invalid' : ''}`}
//                       />
//                       {registerErrors.supervisor && (registerTouched.supervisor || isRegisterSubmitted) && (
//                         <div className="invalid-feedback">{registerErrors.supervisor}</div>
//                       )}
//                     </div>

//                     {/* Mobile */}
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Mobile</label>
//                       <input
//                         type="text"
//                         name="mobile"
//                         value={registerData.mobile}
//                         onChange={(e) => handleInputChange(e, 'register')}
//                         onBlur={(e) => handleBlur(e, 'register')}
//                         className={`form-control ${registerErrors.mobile && (registerTouched.mobile || isRegisterSubmitted) ? 'is-invalid' : ''}`}
//                       />
//                       {registerErrors.mobile && (registerTouched.mobile || isRegisterSubmitted) && (
//                         <div className="invalid-feedback">{registerErrors.mobile}</div>
//                       )}
//                     </div>

//                     {/* Organization */}
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Organization</label>
//                       <input
//                         type="text"
//                         name="organization"
//                         value={registerData.organization}
//                         onChange={(e) => handleInputChange(e, 'register')}
//                         onBlur={(e) => handleBlur(e, 'register')}
//                         className={`form-control ${registerErrors.organization && (registerTouched.organization || isRegisterSubmitted) ? 'is-invalid' : ''}`}
//                       />
//                       {registerErrors.organization && (registerTouched.organization || isRegisterSubmitted) && (
//                         <div className="invalid-feedback">{registerErrors.organization}</div>
//                       )}
//                     </div>

//                     {/* Department */}
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Department</label>
//                       <input
//                         type="text"
//                         name="department"
//                         value={registerData.department}
//                         onChange={(e) => handleInputChange(e, 'register')}
//                         onBlur={(e) => handleBlur(e, 'register')}
//                         className={`form-control ${registerErrors.department && (registerTouched.department || isRegisterSubmitted) ? 'is-invalid' : ''}`}
//                       />
//                       {registerErrors.department && (registerTouched.department || isRegisterSubmitted) && (
//                         <div className="invalid-feedback">{registerErrors.department}</div>
//                       )}
//                     </div>

//                     {/* ID Proof (Dropdown) */}
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">ID Proof</label>
//                       <select
//                         name="idProof"
//                         value={registerData.idProof}
//                         onChange={(e) => handleInputChange(e, 'register')}
//                         onBlur={(e) => handleBlur(e, 'register')}
//                         className={`form-select ${registerErrors.idProof && (registerTouched.idProof || isRegisterSubmitted) ? 'is-invalid' : ''}`}
//                       >
//                         <option value="">Select</option>
//                         <option value="Voter Card">Voter Card</option>
//                         <option value="Driving License">Driving License</option>
//                         <option value="Aadhar Card">Aadhar Card</option>
//                         <option value="Institute ID Card">Institute ID Card</option>
//                         <option value="PAN Card">PAN Card</option>
//                       </select>
//                       {registerErrors.idProof && (registerTouched.idProof || isRegisterSubmitted) && (
//                         <div className="invalid-feedback">{registerErrors.idProof}</div>
//                       )}
//                     </div>

//                     {/* ID Number */}
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">ID Number</label>
//                       <input
//                         type="text"
//                         name="idNumber"
//                         value={registerData.idNumber}
//                         onChange={(e) => handleInputChange(e, 'register')}
//                         onBlur={(e) => handleBlur(e, 'register')}
//                         className={`form-control ${registerErrors.idNumber && (registerTouched.idNumber || isRegisterSubmitted) ? 'is-invalid' : ''}`}
//                       />
//                       {registerErrors.idNumber && (registerTouched.idNumber || isRegisterSubmitted) && (
//                         <div className="invalid-feedback">{registerErrors.idNumber}</div>
//                       )}
//                     </div>

//                     {/* Password */}
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Password</label>
//                       <input
//                         type="password"                        
//                         name="password"
//                         value={registerData.password}
//                         onChange={(e) => handleInputChange(e, 'register')}
//                         onBlur={(e) => handleBlur(e, 'register')}
//                         className={`form-control ${registerErrors.password && (registerTouched.password || isRegisterSubmitted) ? 'is-invalid' : ''}`}
//                       />
//                       {registerErrors.password && (registerTouched.password || isRegisterSubmitted) && (
//                         <div className="invalid-feedback">{registerErrors.password}</div>
//                       )}
                     
//                     </div>

//                     {/* Confirm Password */}
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Confirm Password</label>
//                       <input
//                         type="password"
//                         name="confirmPassword"
//                         value={registerData.confirmPassword}
//                         onChange={(e) => handleInputChange(e, 'register')}
//                         onBlur={(e) => handleBlur(e, 'register')}
//                         className={`form-control ${registerErrors.confirmPassword && (registerTouched.confirmPassword || isRegisterSubmitted) ? 'is-invalid' : ''}`}
//                       />
//                       {registerErrors.confirmPassword && (registerTouched.confirmPassword || isRegisterSubmitted) && (
//                         <div className="invalid-feedback">{registerErrors.confirmPassword}</div>
//                       )}
//                       {/* {registerErrors.confirmPassword && <span className="text-danger">{registerErrors.confirmPassword}</span>} */}
//                     </div>

//                     {/* Address */}
//                     <div className="col-md-12 mb-3">
//                       <label className="form-label">Corresponding Address</label>
//                       <textarea
//                         className="form-control"
//                         name="address"
//                         rows={3}
//                         value={registerData.address}
//                         onChange={(e) => handleInputChange(e, 'register')}
//                       />
//                       {registerErrors.address && <span className="text-danger">{registerErrors.address}</span>}
//                     </div>
//                   </div>

//                   <div className="text-center mt-3">
//                     <button type="submit" className="btn btn-success px-4" disabled={!isRegisterValid}>Submit</button>
//                     <div className="mt-3">
//                       Already have an account?{' '}
//                       <a className="login-link" onClick={() => setShowRegister(false)} style={{ cursor: 'pointer' }}>
//                         <strong>Sign In</strong>
//                       </a>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
