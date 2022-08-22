import axios from "axios";

let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json"
}

/**
 * @constant Axios
 * @description this constant inherits from object Axios, 
 * it is used to configure the main route to which we will be 
 * requesting all our API rest requests.
 */

const Axios = axios.create({
    timeout: 5000,
    baseURL: 'https://api.coinstats.app/public/v1/',
    headers: headersList
});

export { Axios };