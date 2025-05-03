'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  GetAuthoriseUserData,
  saveUser,getUserDataApiCall,
  getStudentById,
  loginInternalUser,  
  addToSession,
  setAuthToken,
} from '@/app/apiCalls/apiCall';

type FormData = {
  Email: string;
  password: string;
  UserRoleS: string;
};

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const { Email, password, UserRoleS } = data;

    if (!Email || !password || !UserRoleS) {
      setLoginError('All fields are required.');
      return;
    }

    await handleLogin(Email, password, UserRoleS);
  };

  const handleLogin = async (email: string, password: string, role: string) => {
    try {
      const tokenData = await loginInternalUser(email, password);
      if (!tokenData.success) {
        setLoginError('Invalid credentials or token not returned.');
        return;
      }
       setAuthToken(tokenData.data)
      // saveUser(tokenData.data); // Save actual token/user data

      let userData;
      if (role === 'Staff') {
        // userData = await getEmployeeDetails();
        userData = await getUserDataApiCall();
      } else if (role === 'Student') {
        userData = await getStudentById(email);
      }

      if (userData) {
        const user = Array.isArray(userData) ? userData[0] : userData;
        setUserSession(user, role);
        router.push('/dashboard'); // or wherever you want to redirect
      } else {
        setLoginError('User data not found.');
      }
    } catch (error) {
      console.error(error);
      setLoginError('Server error occurred.');
    }
  };

  const setUserSession = (user: any, role: string) => {
    const sessionData = {
      CandidateName: user.candidateName,
      UserId: user.emailId,
      Department: user.department,
      DepartmentName: user.departmentName,
      Designation: user.department,
      EmailId: user.emailId,
      MobileNo: user.mobileNumber,
      UserRole: role,
      SupervisorName: user.supervisorName,
      ProofNumber: btoa(user.idProofNumber || ''),
      ProofName: user.idProofType || '',
      PasswordText: btoa(user.passwordText || ''),
    };

    document.cookie = `authData=${JSON.stringify(sessionData)}; path=/;`;
    addToSession('sessionData', user);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="forms-sample">
      {/* Email */}
      <div className="mb-4 cif-input-group">
        <label htmlFor="loginid" className="form-label">Login ID</label>
        <input
          id="loginid"
          type="text"
          className="form-control"
          placeholder="Enter Login ID/ Email"
          {...register('Email', { required: true })}
        />
        {errors.Email && <span className="text-danger">Email is required</span>}
      </div>

      {/* Password */}
      <div className="mb-4 cif-input-group">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          className="form-control"
          placeholder="Enter password"
          {...register('password', { required: true })}
        />
        <i
          className="input-eye input-eye-slash"
          onClick={() => setShowPassword(prev => !prev)}
          style={{ cursor: 'pointer' }}
        />
        {errors.password && <span className="text-danger">Password is required</span>}
      </div>

      {/* Role */}
      <div className="mb-4 cif-input-group">
        <label htmlFor="authCheck" className="form-label">Choose Role</label>
        <select
          id="authCheck"
          className="form-select"
          {...register('UserRoleS', { required: true })}
        >
          <option value="">Select Role</option>
          <option value="Student">Student</option>
          <option value="Staff">Staff</option>
        </select>
        {errors.UserRoleS && <span className="text-danger">Role is required</span>}
      </div>

      {/* Error Message */}
      {loginError && <div className="text-danger text-center">{loginError}</div>}

      {/* Submit */}
      <div className="mb-4 text-center">
        <button type="submit" className="lpu-btn border-0 px-5 mb-3">Submit</button>
        <div className="d-flex justify-content-between">
          <a href="/Login" className="link-btn" style={{ color: '#ef7d00' }}>External User Login</a>
          <a href="/RecoverAccount" className="link-btn" style={{ color: '#ef7d00' }}>Recover Account</a>
        </div>
      </div>
    </form>
  );
}

// 'use client';

// import { useForm } from 'react-hook-form';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { GetAuthoriseUserData, saveUser, getStudentById, loginInternalUser, getEmployeeDetails, addToSession } from '@/app/apiCalls/apiCall'


// type FormData = {
//   Email: string;
//   password: string;
//   UserRoleS: string;
// };
 

// export default function LoginForm() {
//   const { register, handleSubmit, formState: { errors }, setError } = useForm<FormData>();
//   const [userDataDetails, setUserDataDetails] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [loginError, setLoginError] = useState('');
//   const router = useRouter();


//   const onSubmit = async (data: FormData) => {
//     const { Email: uid, password, UserRoleS } = data;

//     if (!uid || !password || !UserRoleS) {
//       setLoginError('All fields are required.');
//       return;
//     }

//     const userRole = parseInt(UserRoleS);
//     await getToken(uid, password, userRole);
//   };

  
//   const getToken = async (email: any, password: any, Role: any) => {
//     if (Role === 'Staff') {
//       try {
//         const tokenData = await loginInternalUser(email, password);
//         if (tokenData.success) {
//           saveUser(tokenData.data); // Save only actual user data
//           const data= getEmployeeDetails()
//           SetUserData(data, Role);
//         } else {
//           setLoginError('Invalid credentials or token not returned.');
//         }
//       } catch (err: any) {
//         setLoginError('Token creation failed.');
//       }
//     }
//     else if (Role === 'Student') {
//       try {
//         const tokenData = await loginInternalUser(email, password);
//         if (tokenData.success) {
//           saveUser(tokenData.data); // Save only actual user data
//           const data=  getStudentById(email)
//           SetUserData(data, Role);
//         } else {
//           setLoginError('Inertnal Server Error');
//         }
//       } catch (err: any) {
//         setLoginError('Server Error.');
//       }
//     }
//   };


 
//   const SetUserData = (response: any, Role: any) => {
//     const user = response[0];

//     const userCookiesData = {
//       CandidateName: user.candidateName,
//       UserId: user.emailId,
//       Department: user.department,
//       DepartmentName: user.departmentName,
//       Designation: user.department,
//       EmailId: user.emailId,
//       MobileNo: user.mobileNumber,
//       UserRole: Role,
//       SupervisorName: user.supervisorName,
//       ProofNumber: btoa(user.idProofNumber),
//       ProofName: user.idProofType,
//       PasswordText: btoa(user.passwordText),
//     };

//     document.cookie = `authData=${JSON.stringify(userCookiesData)}; path=/;`;

//     alert('Login Successful');
//     addToSession('sessionData', response[0]);
//     alert('Success')

//   };



//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="forms-sample">
//       {/* Email */}
//       <div className="mb-4 cif-input-group">
//         <label htmlFor="loginid" className="form-label">Login ID</label>
//         <input
//           id="loginid"
//           type="text"
//           className="form-control"
//           placeholder="Enter Login ID/ Email"
//           {...register('Email', { required: true })}
//         />
//         {errors.Email && <span className="text-danger">Email is required</span>}
//       </div>

//       {/* Password */}
//       <div className="mb-4 cif-input-group">
//         <label htmlFor="password" className="form-label">Password</label>
//         <input
//           id="password"
//           type={showPassword ? 'text' : 'password'}
//           className="form-control"
//           placeholder="Enter password"
//           {...register('password', { required: true })}
//         />
//         <i className="input-eye input-eye-slash" onClick={() => setShowPassword(p => !p)} />
//         {errors.password && <span className="text-danger">Password is required</span>}
//       </div>

//       {/* Role */}
//       <div className="mb-4 cif-input-group">
//         <label htmlFor="authCheck" className="form-label">Choose Role</label>
//         <select
//           id="authCheck"
//           className="form-select"
//           {...register('UserRoleS', { required: true })}
//         >
//           <option value="">Select Role</option>
//           <option value="Student">Student</option>
//           <option value="Staff">Staff</option>
//         </select>
//         {errors.UserRoleS && <span className="text-danger">Role is required</span>}
//       </div>

//       {loginError && <div className="text-danger text-center">{loginError}</div>}

//       {/* Submit */}
//       <div className="mb-4 text-center">
//         <button type="submit" className="lpu-btn border-0 px-5 mb-3">Submit</button>
//         <div className="d-flex justify-content-between">
//           <a href="/LpuLogin" className="link-btn">LPU User Login</a>
//           <a href="/recoverAccount" className="link-btn" style={{ color: '#ef7d00' }}>Recover Account</a>
//         </div>
//       </div>
//     </form>
//   );
// }
