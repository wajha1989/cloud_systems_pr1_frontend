import {useEffect, useState} from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import HabitDetails from "./components/HabitDetails";
import { login, logout } from "./auth/Cognito";

export default function App() {
    useEffect(() => {
        const hash = window.location.hash;

        if (hash.includes("id_token")) {
            const params = new URLSearchParams(hash.substring(1));

            const token = params.get("id_token");

            if (token) {
                localStorage.setItem("id_token", token);
            }

            window.location.hash = "";
        }
    }, []);
    const [selectedHabitId, setSelectedHabitId] = useState<number | null>(null);
    const [refresh, setRefresh] = useState(0);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Habit Tracker</h1>

            <HabitForm onCreated={() => setRefresh(refresh + 1)} />

            <HabitList key={refresh} onSelect={setSelectedHabitId} />

            {selectedHabitId && (
                <HabitDetails habitId={selectedHabitId} />
            )}
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
