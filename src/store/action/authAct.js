import { loginUser } from '../api';
import { LOGIN } from '../typeStore';

export const requestAuth = (payload) => (dispatch) => {
    console.log(payload)
    loginUser(payload).then(({ data }) => {
        // dispatch(respAuth(data))
        console.log(data);
    }).catch((error) => {
        // dispatch(respAuth(error));
        console.log(error);
    })
}
const respAuth = (data) => {
    return { type: LOGIN, data }
}