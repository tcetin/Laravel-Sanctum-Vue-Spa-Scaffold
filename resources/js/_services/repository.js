import config from '../config';
import {handleResponse, requestOptions} from "../_helpers";


export const repository = {
    getItem,
    list,
    pagedList,
    create,
    update,
    remove
};

function list(url) {
    return fetch(url, requestOptions.get())
        .then(handleResponse)
        .then(data => data);
}

function pagedList(url) {
    return fetch(url, requestOptions.get())
        .then(handleResponse)
        .then(data => data);
}

function create(url, formData, fileDataExist = false) {
    if (fileDataExist) {
        return fetch(url, requestOptions.uploadPost(formData))
            .then(handleResponse)
            .then(data => data);
    }
    return fetch(url, requestOptions.post(formData))
        .then(handleResponse)
        .then(data => data);
}

function getItem(url) {
    return fetch(url, requestOptions.get())
        .then(handleResponse)
        .then(data => data);
}

function update(url, data) {
    return fetch(url, requestOptions.put(data))
        .then(handleResponse)
        .then(data => data);
}

function remove(url) {
    return fetch(url, requestOptions.delete())
        .then(handleResponse)
        .then(data => data);
}
