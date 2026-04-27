const CLIENT_ID = "your_app_client_id";
const DOMAIN = "https://your-domain.auth.us-east-1.amazoncognito.com";
const REDIRECT_URI = "http://localhost:5173/callback";

export async function exchangeCodeForToken(code: string) {
    const body = new URLSearchParams({
        grant_type: "authorization_code",
        client_id: CLIENT_ID,
        code,
        redirect_uri: REDIRECT_URI,
    });

    const response = await fetch(`${DOMAIN}/oauth2/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
    });

    const data = await response.json();

    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("id_token", data.id_token);

    window.location.href = "/";
}
