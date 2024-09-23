export interface Task {
    name: string;
    id: string;
    description: string;
    image: string;
    type: "live-event" | "misc";
    selected: boolean;
    page: string;
}

export interface Venue {
  city: string;
  country: string;
  full_address: string;
  google_id: string;
  google_mid: string;
  latitude: number;
  longitude: number;
  name: string;
  phone_number: string;
  rating: number;
  review_count: number;
  state: string;
  street: string;
  street_number: string;
  subtype: string;
  subtypes: string[];
  timezone: string;
  website: string;
}
