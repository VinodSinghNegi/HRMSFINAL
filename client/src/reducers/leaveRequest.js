import { LEAVE_REQUEST, UPDATE_KRA, EMPTY_KRA } from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case LEAVE_REQUEST:
            return {
                ...state,
                leaveRequests: action.payload
            };
        // case UPDATE_KRA:
        //     return { ...state, updateKraField: action.payload };
        // case EMPTY_KRA:
        //     return null
        default:
            return state;
    }
}