import {BehaviorSubject} from "rxjs";

import config from "../config";
import {handleResponse, requestOptions} from "../_helpers";


export const authenticationService = {
    login,
    logout,
    changePassword,
    currentUser,
};

function login(email, password) {
    return fetch(`${config.apiUrl}/login`, requestOptions.post({email, password}))
        .then(handleResponse)

}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");

}

function changePassword(data) {
    let _url = `${config.apiUrl}/change-password`;
    return fetch(_url, requestOptions.post(data))
        .then(handleResponse)
        .then(data => data);
}

function currentUser(){
    return JSON.parse(localStorage.getItem("currentUser"));
}
