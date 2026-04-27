//TODO change to envs if I ever get to building it in cloud env
const CLIENT_ID = "41nt0chpeek8aejotr397dtbpp";
const DOMAIN = "https://us-east-1n6oafyu38.auth.us-east-1.amazoncognito.com";
const REDIRECT_URI = "https://habit-frontend-env.eba-asjncbp3.us-east-1.elasticbeanstalk.com/callback";
const LOGOUT_URI = "https://habit-frontend-env.eba-asjncbp3.us-east-1.elasticbeanstalk.com";

export function login() {
    window.location.href =
        `${DOMAIN}/login?` +
        `client_id=${CLIENT_ID}` +
        `&response_type=code` +
        `&scope=email+openid+phone` +
        `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
}

export function logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");

    window.location.href =
        `${DOMAIN}/logout?client_id=${CLIENT_ID}` +
        `&logout_uri=${encodeURIComponent(LOGOUT_URI)}`;
}

export function getToken() {
    return localStorage.getItem("id_token");
}
