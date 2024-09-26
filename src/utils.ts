import { Task, Venue } from "./types";
import weather from "./assets/weather.jpg";
import flight from "./assets/flight.jpg";
import news from "./assets/news.jpg";
import todo from "./assets/todo.jpg";
import events from "./assets/events.jpg";
import WeatherApp from "./apps/weather";
import FlightsApp from "./apps/flights";
import NewsApp from "./apps/news";
import TodoList from "./apps/todo";
import EventsApp from "./apps/events";

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
      page: "/flights",
    },
    {
      name: "News",
      id: "news",
      description: "View current trending news",
      selected: false,
      image: news,
      type: "live-event",
      page: "/news",
    },
    {
      name: "Events",
      id: "events",
      description: "View ongoing events in your area",
      selected: false,
      image: events,
      type: "live-event",
      page: "/events",
    },
    {
      name: "To-do list",
      id: "todo",
      description: "Manage your daily tasks",
      selected: false,
      image: todo,
      type: "misc",
      page: "/todo",
    },
  ];
}

export function getComponentForId(id: string) {
  switch (id) {
    case "weather":
      return WeatherApp({ parent: "card" });
    case "flights":
      return FlightsApp();
    case "news":
      return NewsApp({ parent: "card" });
    case "todo":
      return TodoList({ parent: "card" });
    case "events":
      return EventsApp({ parent: "card" });
    default:
      return null; // or throw an error, or return a default component
  }
}

export function getVenueDetails(venue: Venue): string {
  return `Phone: ${venue.phone_number}, Address: ${venue.full_address}`;
}


export const filterEventsByTime = (events: any[], timeFilter: string) => {
    if (timeFilter === "Morning") {
      return events.filter((event: any) => {
        const eventTime = new Date(event.start_time).getHours();
        return eventTime >= 6 && eventTime < 12;
      });
    } else if (timeFilter === "Evening") {
      return events.filter((event: any) => {
        const eventTime = new Date(event.start_time).getHours();
        return eventTime >= 18 && eventTime < 24;
      });
    }
    return events; // Return original events if no filter is applied
};
