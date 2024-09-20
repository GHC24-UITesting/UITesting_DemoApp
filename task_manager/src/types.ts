export interface Task {
    name: string;
    description: string;
    image: string;
    type: "live-event" | "misc";
    selected: boolean;
    page: string;
}