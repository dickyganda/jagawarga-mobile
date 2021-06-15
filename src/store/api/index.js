import axios from 'axios';
import { BASE_URL, LOGIN} from '../typeStore';

// User services
export const loginUser = (payload) => axios.post(`${BASE_URL}${LOGIN}`, payload);