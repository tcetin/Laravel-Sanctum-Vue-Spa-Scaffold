import {authenticationService} from "../_services";

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                authenticationService.logout();
            }

            console.log(JSON.stringify(data));

            const error = (data && data.message) || data ;
            return Promise.reject(error);
        }

        return data;
    });
}
