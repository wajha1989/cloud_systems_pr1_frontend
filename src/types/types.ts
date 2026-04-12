export interface Habit {
    id?: number;
    name: string;
    description: string;
}

export interface Log {
    id?: number;
    habitId: number;
    date: string;
    completed: boolean;
}
