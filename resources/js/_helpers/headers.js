export const getHeaders = () => {

    let user = JSON.parse(localStorage.getItem("currentUser"));
    let headers = {
        headers: {
            Authorization: "Bearer " + user.access_token,
            "Content-Type": "application/json"
        }
    };

    return headers;
}
export const getFormHeaders = () => {

    let user = JSON.parse(localStorage.getItem("currentUser"));
    let headers = {
        headers: {
            Authorization: "Bearer " + user.access_token,
            "Content-Type": "multipart/form-data"
        }
    };

    return headers;
}
