import { useEffect } from "react";
import { exchangeCodeForToken } from "./../auth/tokenService.ts";

export default function Callback() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");

        if (code) {
            exchangeCodeForToken(code);
        }
    }, []);

    return <div>Logging you in...</div>;
}
