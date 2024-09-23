import React from "react";
import { Task } from "./types";
import weather from "./assets/weather.jpg";
import flight from "./assets/flight.jpg";
import news from "./assets/news.jpg";
import todo from "./assets/todo.jpg";
import WeatherApp from "./apps/weather";
import FlightsApp from "./apps/flights";
import NewsApp from "./apps/news";

export function getServices(): Task[] {
    return [
        {
            name: "Weather",
            id: "weather",
            description: "Check the weather in your area",
            selected: false,
            image: weather,
            type: "live-event",
            page: "/weather",
        },
        {
            name: "Flights",
            id: "flights",
            description: "Track flights of your interest",
            selected: false,
            image: flight,
            type: "live-event",
            page: "/flights"
        }, 
        {
            name: "News",
            id: "news",
            description: "View current trending news",
            selected: false,
            image: news,
            type: "live-event",
            page :"/news"
        },
        {
            name: "To-do list",
            id: "todo",
            description: "Manage your daily tasks",
            selected: false,
            image: todo,
            type: "misc",
            page: "/todo"
        }
    ];
}

export function getComponentForId(id: string) {
    switch(id) {
        case "weather":
            return WeatherApp({parent: "card"});
        case "flights":
            return FlightsApp();
        case "news":
            return NewsApp({ parent: "card" });
    }
}