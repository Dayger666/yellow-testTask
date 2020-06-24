import {jogsAPI} from "../api/api";

const SET_IS_AUTH = 'SET-IS-AUTH';
const SET_JOGS = 'SET-JOGS';
const SET_FILTER_TOGGLE='SET-FILTER-TOGGLE';

let initialState = {
    isAuth: false,
    jogs: [],
    filterToggle:true,
};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.data,
            };
        case SET_JOGS:
            return {
                ...state,
                jogs: [...action.data],
            };
        case SET_FILTER_TOGGLE:
            return {
                ...state,
                filterToggle:!state.filterToggle,
            };
        default:
            return state;
    }

};

export let setIsAuth = (isAuth) => {
    return {
        type: SET_IS_AUTH,
        data: isAuth,
    }
};
export let setJogs = (jogs) => {
    return {
        type: SET_JOGS,
        data: jogs,
    }
};
export let setFilterToggle = () => {
    return {
        type: SET_FILTER_TOGGLE,
    }
};

export let beginningApp = () => {
    return (dispatch) => {
      return jogsAPI.getToken().then((res) => {
            dispatch(setIsAuth(true));
            localStorage.setItem("token", res.data.response.access_token);
        })
    }

};
export let getJogsThunkCreator = () => {
    return (dispatch) => {
        jogsAPI.getJogsList().then((res) => {
            dispatch(setJogs(res.jogs));
        })
    }
};
export default appReducer;