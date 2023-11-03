import Axios from 'axios';
import { getServerId } from './localStorage';
export async function getProducts({skip=0,limit=12,title="",tags="הכל"}) {
    const response = await Axios.post(getServerId() + "/get-products",{ skip:skip, limit:limit,title:title,tags:tags});
    return response.data;
}
