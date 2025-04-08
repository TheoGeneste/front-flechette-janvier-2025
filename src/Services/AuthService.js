import axios from 'axios';
import { API_URL } from '../Config/url';
import { jwtDecode } from 'jwt-decode';

const login = (user) => {
    return axios.post(API_URL + 'auth/login', user)
}

const register = (user) => {
    return axios.post(API_URL + 'auth/register', user)
}

const tokenValid = () => {
    const token = localStorage.getItem('token')
    if (token) {
        const decodedToken = jwtDecode(token)
        const currentTime = Date.now() / 1000
        if (decodedToken.exp < currentTime) {
            logout();
            return false
        } else {
            setAxiosToken();
            return true
        }
    }else{
        logout()
        return false;
    }

}

const logout = () => {
    localStorage.removeItem('token')
    delete axios.defaults.headers['Authorization']
}

const setAxiosToken = () => {
    const token = localStorage.getItem('token')
    if (token) {
        axios.defaults.headers['Authorization'] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers['Authorization']
    }
}

const getUser = () => {
    const token = localStorage.getItem('token')
    if (token) {
        const decodedToken = jwtDecode(token)
        return decodedToken.user
    } else {    
        return null
    }
}

export default {
    login,
    register,
    tokenValid,
    logout,
    setAxiosToken,
    getUser
}
