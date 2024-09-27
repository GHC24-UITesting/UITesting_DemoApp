import weather from "./assets/weather.jpg";
import flight from "./assets/flight.jpg";
import news from "./assets/news.jpg";
import todo from "./assets/todo.jpg";
import events from "./assets/events.jpg";
import { getComponentForId, getServices, getVenueDetails } from "../utils";
import { Venue } from "types";
import { testVenue1, testVenue2 } from "./data/venue";

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