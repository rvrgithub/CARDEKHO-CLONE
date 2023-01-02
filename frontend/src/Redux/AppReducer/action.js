import * as types from "./action.type";
import axios from "axios";


export const getCarData = (payload) => (dispatch) => {
    dispatch({ type: types.GET_DATA_REQUEST });
    return axios
        .get(`http://localhost:8080/${payload}`)
        .then((res) => dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data },
            console.log("data", res.data))
        ).catch((err) => dispatch({ type: types.GET_DATA_FAILURE, payload: console.log("data", err) }))

}