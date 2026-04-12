import { useEffect, useState } from "react";
import API from "../api/api";
import type {Habit} from "../types/types";

export default function HabitList({ onSelect }: { onSelect: (id: number) => void }) {
    const [habits, setHabits] = useState<Habit[]>([]);

    useEffect(() => {
        let isMounted = true;
        const loadHabits = async () => {
            const res = await API.get("/habits");
            if (isMounted) setHabits(res.data);
        };

        loadHabits();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div>
            <h2>Your Habits</h2>
            {habits.map((h) => (
                <div key={h.id}>
                    <strong>{h.name}</strong>
                    <button onClick={() => onSelect(h.id!)}>View</button>
                </div>
            ))}
        </div>
    );
}
