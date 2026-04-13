const CLIENT_ID = "YOUR_CLIENT_ID";
const DOMAIN = "https://your-domain.auth.us-east-1.amazoncognito.com";
const REDIRECT_URI = "http://localhost:5173";

export function login() {
    window.location.href =
        `${DOMAIN}/login?client_id=${CLIENT_ID}` +
        `&response_type=token&scope=email+openid` +
        `&redirect_uri=${REDIRECT_URI}`;
}

export function logout() {
    window.location.href =
        `${DOMAIN}/logout?client_id=${CLIENT_ID}` +
        `&logout_uri=${REDIRECT_URI}`;
}

export function getToken() {
    return localStorage.getItem("id_token");
}
