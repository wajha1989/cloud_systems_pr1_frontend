import { useEffect, useState } from "react";
import API from "../api/api";
import type { Log } from "../types/types";

export default function HabitDetails({ habitId }: { habitId: number }) {
    const [logs, setLogs] = useState<Log[]>([]);

    const fetchLogs = async () => {
        const res = await API.get("/logs", { params: { habitId } });
        setLogs(res.data);
    };

    const markDone = async () => {
        const today = new Date().toISOString().split("T")[0];

        await API.post("/logs", {
            habitId,
            date: today,
            completed: true,
        });

        fetchLogs();
    };

    useEffect(() => {
        let isMounted = true;

        const loadLogs = async () => {
            const res = await API.get("/logs", { params: { habitId } });
            if (isMounted) {
                setLogs(res.data);
            }
        };

        loadLogs();

        return () => {
            isMounted = false;
        };
    }, [habitId]);

    return (
        <div>
            <h3>Logs</h3>
        <button onClick={markDone}>Mark Today Done</button>

    {logs.map((log) => (
        <div key={log.id}>
            {log.date} - {log.completed ? "✅" : "❌"}
            </div>
    ))}
    </div>
);
}
