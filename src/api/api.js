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
    addJog: (date, time, distance) => {
        return instance.post(`data/jog`, {date, time, distance})
    },

};
export let testsAPI = {
    get: (url, options = {}) => instance.get(`test/echo`, {...options}),
    post: (url, data, options = {}) => instance.post(`test/echo`, data, {...options}),
    put: (url, data, options = {}) => instance.put(`test/echo`, data, {...options}),
    delete: (url, options = {}) => instance.delete(`test/echo`, {...options}),
};

