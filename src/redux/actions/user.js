import * as type from "../types";

export function getUser(user) {
    return {
        type: type.GET_USER_LOGIN,
        payload: user,
    };
}
