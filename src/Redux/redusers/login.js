import {SET_USER_DATA} from "../actionTypes";

const initialState = {
    users: [
        {login: "developer21", password: "123456"},
    ],
    userData: null
}

export const login = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
            userData: action.payload
            }
        default:
            return state
    }
}
