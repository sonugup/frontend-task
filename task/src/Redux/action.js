import {GET_TAST_REQUEST,GET_TAST_SUCCESS, GET_TAST_FAILUIR, POST_TAST_REQUEST,POST_TAST_SUCCESS, POST_TAST_FAILUIR} from "./actionTypes";
const getTaskRequest=() => {
    return {
        type:GET_TAST_REQUEST,
    }
}

const getTaskSuccess=(payload) => {
    return {
        type:GET_TAST_SUCCESS,
        payload,
    }
}

const getTaskFailure=() => {
    return {
        type:GET_TAST_FAILUIR,
    }
}

const postTaskRequest=() => {
return {
    type:POST_TAST_REQUEST,
}
}

const postTaskSuccess=(payload) => {
    return {
        type:POST_TAST_SUCCESS,
        payload,
    }
}

const postTaskFailure=() => {
    return {
        type:POST_TAST_FAILUIR,
    }
}

export{
    getTaskRequest,
    getTaskSuccess,
    getTaskFailure,
    postTaskRequest,
    postTaskSuccess,
    postTaskFailure
}