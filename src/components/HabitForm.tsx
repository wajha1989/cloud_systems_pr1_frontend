import { useState } from "react";
import API from "../api/api";

export default function HabitForm({ onCreated }: { onCreated: () => void }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await API.post("/habits", { name, description });

        setName("");
        setDescription("");
        onCreated();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Create Habit</h3>
            <input
                placeholder="Habit name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}
