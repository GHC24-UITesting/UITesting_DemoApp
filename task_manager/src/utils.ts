import { Venue } from "./types";

export function getTasks(): string[] {
  return [
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4",
    "Task 5",
    "Task 6",
    "Task 7",
    "Task 8",
    "Task 9",
    "Task 10",
  ];
}

export function getVenueDetails(venue: Venue): string {
  return `Phone: ${venue.phone_number}, Address: ${venue.full_address}`;
}
