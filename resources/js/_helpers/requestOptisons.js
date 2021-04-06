import {authenticationService} from "../_services";
import {getFormHeaders, getHeaders} from "./headers";



export const requestOptions = {
    get() {
        return {
            method: "GET",
            ...getHeaders()
        };
    },
    post(body) {
        return {
            method: "POST",
            ...getHeaders(),
            body: JSON.stringify(body)
        };
    },
    uploadPost(body) {
        return {
            method: "POST",
           ...getFormHeaders(),
            body: JSON.stringify(body)
        };
    },
    patch(body) {
        return {
            method: "PATCH",
            ...getHeaders(),
            body: JSON.stringify(body)
        };
    },
    put(body) {
        return {
            method: "PUT",
            ...getHeaders(),
            body: JSON.stringify(body)
        };
    },
    delete() {
        return {
            method: "DELETE",
            ...getHeaders(),
        };
    }
};

