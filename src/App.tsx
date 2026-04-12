import { useState } from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import HabitDetails from "./components/HabitDetails";

export default function App() {
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
        </div>
    );
}
