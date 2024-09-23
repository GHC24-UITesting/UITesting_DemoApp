export interface Task {
    name: string;
    id: string;
    description: string;
    image: string;
    type: "live-event" | "misc";
    selected: boolean;
    page: string;
}