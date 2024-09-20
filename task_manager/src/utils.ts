import { Task } from "./types";
import weather from "./assets/weather.jpg";
import flight from "./assets/flight.jpg";
import news from "./assets/news.jpg";
import todo from "./assets/todo.jpg";

export function getServices(): Task[] {
    return [
        {
            name: "Weather",
            description: "Check the weather in your area",
            selected: false,
            image: weather,
            type: "live-event"
        },
        {
            name: "Flights",
            description: "Track flghts of your interest",
            selected: false,
            image: flight,
            type: "live-event"
        }, 
        {
            name: "News",
            description: "View current trending news",
            selected: false,
            image: news,
            type: "live-event"
        },
        {
            name: "To-do list",
            description: "Manage your daily tasks",
            selected: false,
            image: todo,
            type: "misc"
        }
    ];
}