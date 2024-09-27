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

export interface Event {
  event_id: string;
  event_mid: string;
  name: string;
  link: string;
  description: string;
  start_time: string;
  start_time_utc: string;
  start_time_precision_sec: number;
  end_time: string;
  end_time_utc: string;
  end_time_precision_sec: number;
  is_virtual: boolean; 
  publisher: string;
  publisher_favicon: string;
  publisher_domain: string;
  info_links: Link[];
  venue: Venue;
  tags: string[];
  language: string;
}

interface Link {
  source: string;
  link: string;
}