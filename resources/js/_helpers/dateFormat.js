import moment from "moment";


export const formatDateForInput = function (date) {
     return moment(date).format("YYYY-MM-DDTkk:mm")
}

export const formatDateForTableField = function (value) {
    let dt = new Date(value);
    return `${dt.toLocaleDateString()} ${dt.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`;
}
