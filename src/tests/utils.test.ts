import weather from "./assets/weather.jpg";
import flight from "./assets/flight.jpg";
import news from "./assets/news.jpg";
import todo from "./assets/todo.jpg";
import events from "./assets/events.jpg";
import { filterEventsByTime, getComponentForId, getServices, getVenueDetails } from "../utils";
import { testVenue1, testVenue2 } from "./data/venue";
import { testEvents } from "./data/events";

jest.mock('../apps/weather', () => jest.fn(() => 'WeatherApp'));
jest.mock('../apps/flights', () => jest.fn(() => 'FlightsApp'));
jest.mock('../apps/news', () => jest.fn(() => 'NewsApp'));
jest.mock('../apps/todo', () => jest.fn(() => 'TodoList'));
jest.mock('../apps/events', () => jest.fn(() => 'EventsApp'));

describe("getServices", () => {
    it("should return a list of services", () => {
        expect(getServices()).toEqual([
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
                name: "Events",
                id: "events",
                description: "View ongoing events in your area",
                selected: false,
                image: events,
                type: "live-event",
                page :"/events"
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
        ]);
    });
});

describe("getComponentForID()", () => {
    it("should return the correct component for the given ID", () => {
        expect(getComponentForId("weather")).toEqual('WeatherApp');
        expect(getComponentForId("flights")).toEqual('FlightsApp');
        expect(getComponentForId("news")).toEqual('NewsApp');
        expect(getComponentForId("todo")).toEqual('TodoList');
        expect(getComponentForId("events")).toEqual('EventsApp');
    });

    it("should return null if the ID is not recognized", () => {
        expect(getComponentForId("invalid")).toBeNull();
    });
});

describe("getVenueDetails()", () => {
    it("should return the correct venue details", () => {

        expect(getVenueDetails(testVenue1)).toEqual("Phone: +1 212-768-1560, Address: Times Square, New York, NY, USA");
        expect(getVenueDetails(testVenue2)).toEqual("Phone: +1 212-736-3100, Address: Empire State Building, New York, NY, USA");
    });
});

describe("filterEventsByTime()", () => {
    it("only returns morning events", () => {
        const filteredEvents = filterEventsByTime(testEvents, "Morning");
        expect(filteredEvents.length).toBe(2);
        const filteredEventsNames = filteredEvents.map((event) => event.name);
        expect(filteredEventsNames).toEqual(["Arts & Crafts at the park", "Yoga in the park"]);
    });

    it("only returns evening events", () => {
        const filteredEvents = filterEventsByTime(testEvents, "Evening");
        expect(filteredEvents.length).toBe(1);
        const filteredEventsNames = filteredEvents.map((event) => event.name);
        expect(filteredEventsNames).toEqual(["Music in the park"]);
    });

    it("returns empty for empty initial array of events", () => {
        const filteredEventsMorning = filterEventsByTime([], "Morning");
        expect(filteredEventsMorning.length).toBe(0);
        expect(filteredEventsMorning).toEqual([]);

        const filteredEventsEvening = filterEventsByTime([], "Evening");
        expect(filteredEventsEvening.length).toBe(0);
        expect(filteredEventsEvening).toEqual([]);
    });

    it("returns original events for non existent filters", () => {
        const filteredEvents = filterEventsByTime(testEvents, "random-filter");
        expect(filteredEvents.length).toBe(3);
        const filteredEventsNames = filteredEvents.map((event) => event.name);
        expect(filteredEventsNames).toEqual(["Arts & Crafts at the park", "Yoga in the park", "Music in the park"]);
    });
});