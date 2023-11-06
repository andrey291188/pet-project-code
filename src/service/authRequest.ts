import axios from 'axios';
import { BASE_URL } from './baseValues';

axios.defaults.baseURL = BASE_URL;

type RegisterUser = {
   name: string,
   phone: number,
   email: string,
   password: string,
 }

 type LogoutUser = {
    token: null
 }

 type AdminAccess = {
   password: "string"
}

 type RepeatVerify = Pick<RegisterUser, "email">

 type LoginUser = Pick<RegisterUser, "email" | "password">

//     Request

export const setAuthHeader = (token: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

//  For Admin

export async function getAllUsers() {
    const { data } = await axios.get('api/users');
    return data;
};

export async function deleteUser(id: string) {
    return await axios.delete(`api/users/${id}`);
}

//  For User

  export async function registerUser(body: RegisterUser) {
    const response = await axios.post('api/users/register', body);
    return response.data;
  }

  export async function repeatSendVerify(body: RepeatVerify) {
    return  await axios.post('api/users/verify', body);
  }

  export async function loginUser(body: LoginUser) {
    const response = await axios.post('api/users/login', body);
    setAuthHeader(response.data.token)
    return response.data;
  }

  export async function currentUser() {
    const { data } = await axios.get('api/users/current');
    return data;
  }

  export async function logOutUser(body: LogoutUser) {
    await axios.post('api/users/logout', body);
 }

 export async function adminAccess(body: AdminAccess) {
  await axios.patch('api/users/admin', body);
}

export async function avatarsReplace(body: FormData) {
  const {data} = await axios.patch('api/users/avatars', body);
  return data
}