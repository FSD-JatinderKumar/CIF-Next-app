import axios from './axiosObj'; // use the instance, not raw axios
const USER_KEY = 'auth-user';

export const getAllUsers = async () => {
  const response = await axios.get('/users');
  return response.data;
};

export const getUserById = async (id: number) => {
  const response = await axios.get(`/users/${id}`);
  return response.data;
};

export const createUser = async (userData: any) => {
  const response = await axios.post('/users', userData);
  return response.data;
};


export const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
  return;
}

export const setAuthToken = (token: any) => {
  // console.warn('tokene received'+token.token)
  sessionStorage.setItem('token', token.token);
  return;
}

export const getAuthToken = () => {
  // return sessionStorage.getItem('token');
  console.log("token to be get "+sessionStorage.getItem('token'))
  const token: any = sessionStorage.getItem('token');
  return token;
}
export const getUser = () => {
  const token: any = sessionStorage.getItem(USER_KEY);
  return token;
}

export const saveUser = (user: any) => {
  localStorage.setItem(USER_KEY, user)
  window.sessionStorage.removeItem(USER_KEY);
  window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
}

 

//  28-4-25
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJMb2dpbk5hbWUiOiIyNTg5OSIsIkRlcGFydG1lbnROYW1lIjoiTi9BIiwiUm9sbElkIjoiNTAiLCJlbWFpbElkIjoiamF0aW4uMjU4OTlAbHB1LmNvLmluIiwiTkFNRSI6IkphdGluIFNhcnBhbCIsImlzQWN0aXZlIjoiVHJ1ZSIsIlVuaXF1ZWlkIjoiYmRmYWU4MWQtMDUxNy00M2ZjLWFjMzctZjM0ZDExODRmZjY3IiwiSXNQYXJlbnQiOiJGYWxzZSIsIlVzZXJUeXBlIjoiTi9BIiwiU3BlY2lhbEJsb2NrIjoiTi9BIiwibmJmIjoxNzIxODgxODU1LCJleHAiOjE3NTM0MTc4NTUsImlhdCI6MTcyMTg4MTg1NSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzEyNS8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MTI1LyJ9.K8Pswv0q8MtTJ_QHOyX2TSksR6x888AdYVCqd5f1tTI';
export const GetAllInstrumentsData = async () => {
  try {     
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/LpuCIF/GetAllInstruments`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    // console.log(JSON.stringify(response))
    return response.data.item1 || [];
  } catch (error) {
    console.error('Error fetching Books data:', error);
    throw error;
  }
}
 
// 23-April-25


export const addToSession = (key: any, userData: any) => {
  sessionStorage.setItem(key, JSON.stringify(userData));
};

 
export const  addToCifSession = (item: any) => {
  const existingData = sessionStorage.getItem('sessionData');
  const sessionData = existingData ? JSON.parse(existingData) : [];
  sessionData.push(item);
  sessionStorage.setItem('sessionData', JSON.stringify(sessionData));
}

 
export const getFromSession = (key: any) => {
  if (typeof window === 'undefined') return null; // Ensure it's client-side
  const value = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};



export const GetAuthoriseUserData = async (UserEmail: any, secreatKeys: any, userRole: any)=>{
  try {     
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/LpuCIF/GetUserDataIdWise?Email=${UserEmail}&PasswordText=${secreatKeys}&UserRole=${userRole}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return response.data.item1 || [];
  } catch (error) {
    console.error('Error fetching Books data:', error);
    throw error;
  }
}

// export const LoginJournalAccessTemp = async (formData: { userName: string}) => {
 

  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  export const LoginJournalAccessTemp = async (username: string) => {
    try {
      const response = await axios.post(
        `${BASE_URL}security/createCifPortalToken`,
        { username },  
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.data) {
        return {
          success: true,
          token: response.data,
          data: response.data,
        };
      } else {
        return {
          success: false,
          message: 'Token not returned',
        };
      }
    } catch (error: any) {
      console.error('❌ Error during token creation:', error);
      return {
        success: false,
        message: error?.response?.data?.message || 'Request failed',
      };
    }
  };
  
  export const loginInternalUser = async (username: string, password: string) => {
    try {
      const response = await axios.post(
        `${BASE_URL}security/createToken`,
        { username , password }, 
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.data) {
        return {
          success: true,
          token: response.data,
          data: response.data,
        };
      } else {
        return {
          success: false,
          message: 'Token not returned',
        };
      }
    } catch (error: any) {
      console.error('❌ Error during token creation:', error);
      return {
        success: false,
        message: error?.response?.data?.message || 'Request failed',
      };
    }
  };
  
 
export const getEmployeeDetails = async () => {
  try {
    const token = getAuthToken();
    console.warn(JSON.stringify(token))
    if (!token) logout();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/Mou/GetEmployeeDetails`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    alert(JSON.stringify(response))
    console.log(JSON.stringify(response))
    if (!response) throw new Error('Failed to fetch employee details');

    const empData = await response.json();
    const emp = empData[0];
    if (!emp) throw new Error('No employee data found');
    return emp;
  } catch (error) {
    console.error('Error fetching user data:', error);
    logout();
  }
};
 


export const getStudentById = async (regNo:any) => {
  try {
    const token = getAuthToken();
    if (!token) logout();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/LpuCIF/GetStudentById?RegNo=${regNo}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error('Failed to fetch Student details');

    const stuData = await response.json();
    const stu= stuData.item1?.[0];
    if (!stu) throw new Error('No Student data found');
    return stu;
  } catch (error) {
    console.error('Error fetching user data:', error);
    logout();
  }
};