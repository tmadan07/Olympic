import axios from 'axios';


const base_url_auth = "http://localhost:8080";


const api = axios.create({
  baseURL: base_url_auth,
  timeout: 1000,
  
  headers: { 'content-type': 'application/json', 'accept': 'application/json' }
});

export const getAllAthletes = async () => {

    const response = await api.get('/api/v1/athletes')
      .then(res => {
        return res.data;
      })
      .catch(res => {
        return { "body": [] }
      })
    return response;
  }

  export const createAthletes = async (data) => {
    const response = await api.post('/api/v1/athletes', data)
      .then(res => {
        return res.data;
      })
      .catch(res => {
        console.log(res);
        return[]
      })
    return response;
  }

  export const getAllSports = async () => {

    const response = await api.get('/api/v1/sports')
      .then(res => {
        return res.data;
      })
      .catch(res => {
        return { "body": [] }
      })
    return response;
  }

  export const createSports = async (data) => {
    const response = await api.post('/api/v1/sports', data)
      .then(res => {
        return res.data;
      })
      .catch(res => {
        console.log(res);
        return[]
      })
    return response;
  }

  export const getAllUsers = async () => {
    const response = await api.get('/api/v1/register')
      .then(res => {
        return res.data;
      })
      .catch(res => {
        console.log(res);
        return []
      })
    return response;
  }

  export const createUsers = async (data) => {
    const response = await api.post('/api/v1/register', data)
      .then(res => {
        return res.data;
      })
      .catch(res => {
        console.log(res);
        return []
      })
  
    return response;
  }

  // export const login = async (username, password) => {

  //   var data = {
  //     "username": username,
  //     "password": password
  //   }
  
  //   const response = await api.post('/login', data)
  //     .then(res => {
  //       return res.data;
  //     })
  //     .catch(res => {
  //       alert(res);
  //       console.log(res);
  //     })
  //   return response;
  // }

