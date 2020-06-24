import * as axios from "axios";


let instance = axios.create({
    baseURL: 'https://jogtracker.herokuapp.com/api/v1/',
    withCredentials: true,
    headers: {
        'Authorization': "Bearer " + localStorage.getItem('token'),
    }

});

export let jogsAPI = {
    getToken: () => {
        return instance.post('auth/uuidLogin', {uuid: 'hello'})
    },
    getJogsList: () => {
        return instance.get(`data/sync`).then((res) => {
            return res.data.response;
    })
    },
    login: (email, password, rememberMe, captcha) => {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logOut: () => {
        return instance.delete(`auth/login`);
    }

};

