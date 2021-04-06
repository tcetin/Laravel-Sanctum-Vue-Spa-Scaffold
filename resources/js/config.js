let apiUrl = `${process.env.MIX_APP_URL}/api`;
let url = `${process.env.MIX_APP_URL}`;

if (process.env.NODE_ENV === 'production') {
    apiUrl = `${process.env.MIX_PROD_URL}/api`;
    url = `${process.env.MIX_PROD_URL}`;
}


let config = {
    apiUrl,
    url
}

export default config;
