'use client';
import styles from '../Register/Register.module.css';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { GetAuthoriseUserData,saveUser, LoginJournalAccessTemp, addToCifSession ,addToSession} from '@/app/apiCalls/apiCall'
import Swal from 'sweetalert2';
import Link from 'next/link';


type FormData = {
  Email: string;
  password: string;
  UserRoleS: string;
};

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors }, setError } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const { Email: uid, password, UserRoleS } = data;

    if (!uid || !password || !UserRoleS) {
      setLoginError('All fields are required.');
      // Swal.fire({
      //   title: 'Provide all details',
      //   text: 'Login Process',
      //   icon: 'warning',
      // })
      // return;
    }

    const userRole = parseInt(UserRoleS);
    await AuthoriseUserNewWay(uid, password, userRole);
  };
  const AuthoriseUserNewWay = async (uid: string, password: string, role: any) => {
    try {
      const response = await GetAuthoriseUserData(uid, password, role);
      if (response && Array.isArray(response) && response.length > 0 && response[0]?.email) {
        const email = response[0].email;
        await CreateToken(email, response);
        setLoginError(''); // clear any previous error if login succeeds
      } else {
        Swal.fire({
          title: 'Invalid Login Details.',
          text: 'Login Process',
          icon: 'warning',
        })
        
        setTimeout(function(){
          window.location.reload();
       }, 5000);
        // setLoginError('Invalid Login Details. Please check your journal and credentials.');
        // window.location.reload(); // Reload on login failure
      }
    } catch (err) {
      console.error(err);
      
      Swal.fire({
        title: 'Server Error.',
        text: 'Login Process',
        icon: 'warning',
      })
      window.location.reload(); // Reload on login failure
    }
  };

  const CreateToken = async (email: any, response: any) => {
    try {
      const tokenData = await LoginJournalAccessTemp(email);
      if (tokenData.success) {
        saveUser(tokenData.data); // Save only actual user data
        SetUserData(response);    // Proceed with session setup
      } else {
        setLoginError('Invalid credentials or token not returned.');
        console.warn('Invalid Details ⚠️Login  failed', tokenData.message);
        alert('Invalid Details ⚠️Login  failed');
      }
    } catch (err: any) {
      console.error('❌ Token creation error:', err);
      setLoginError('Server Error.');
    }
  };
  const SetUserData = (response: any) => {
    const user = response[0];

    const userCookiesData = {
      CandidateName: user.candidateName,
      UserId: user.emailId,
      Department: user.department,
      DepartmentName: user.departmentName,
      Designation: user.department,
      EmailId: user.emailId,
      MobileNo: user.mobileNumber,
      UserRole: user.userRole,
      SupervisorName: user.supervisorName,
      ProofNumber: btoa(user.idProofNumber),
      ProofName: user.idProofType,
      PasswordText: btoa(user.passwordText),
    };

    document.cookie = `authData=${JSON.stringify(userCookiesData)}; path=/;`;

    alert('Login Successful');
    addToSession('sessionData',response[0]);
    alert('Success')
    
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
        <i className="input-eye input-eye-slash" onClick={() => setShowPassword(p => !p)} />
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
          <option value="400001">External Academia</option>
          <option value="400002">Industry User</option>
        </select>
        {errors.UserRoleS && <span className="text-danger">Role is required</span>}
      </div>

      {loginError && <div className="text-danger text-center">{loginError}</div>}

      {/* Submit */}
      <div className="mb-4 text-center">
        <button type="submit" className="lpu-btn border-0 px-5 mb-3">Submit</button>
        <div className="d-flex justify-content-between">
          <a href="/InternalLogin" className="link-btn" style={{ color: '#ef7d00' }}> LPU User Login</a>
          <a href="/RecoverAccount" className="link-btn" style={{ color: '#ef7d00' }}>Recover Account</a>
        </div>
      </div>
      <div className="col-md-12 mb-3">
        <span className='d-flex justify-content-start '>Don’t have an account?
        <a href="/Register" className=" ms-3 link-btn" style={{ color: '#ef7d00' }}> Register </a>
        {/* <Link href="/Register" className={' ms-4 ' + styles.lpuBtn}>
          Sign Up
        </Link> */}
        </span>
      </div>
      <div className="col-md-12 mb-3">
        <span className='d-flex justify-content-start '> 
        By Login you agree with terms and conditions and privacy policy
        </span>
      </div>
    </form>
  );
}
