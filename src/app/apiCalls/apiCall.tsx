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
  sessionStorage.setItem('token', token);
  return;
}

export const getAuthToken = () => {
  const token: any = sessionStorage.getItem('token');
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
 