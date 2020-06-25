import {jogsAPI} from "../api/api";

const SET_IS_AUTH = 'SET-IS-AUTH';
const SET_JOGS = 'SET-JOGS';
const SET_FILTER_TOGGLE='SET-FILTER-TOGGLE';
const TOGGLE_IS_FETCHING='TOGGLE-IS-FETCHING';

let initialState = {
    isAuth: false,
    jogs: [],
    filterToggle:true,
    isFetching:false,
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
        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching:action.isFetching,
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
export let setIsFetching=(value)=>{
    return {
        type:TOGGLE_IS_FETCHING,
        isFetching:value,
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
        dispatch(setIsFetching(true));
        jogsAPI.getJogsList().then((res) => {
            dispatch(setJogs(res.jogs));
            dispatch(setIsFetching(false))
        })
    }
};
export let addJogThunkCreator = (date, time, distance) => {
    return (dispatch) => {
        jogsAPI.addJog(date, time, distance).then((res) => {
            console.log(res);
        })
    }
};
export default appReducer;