import React, { useEffect, useState } from "react";
import axios from "axios";
import { filterEventsByTime, getVenueDetails } from "../utils";
import {
  Input,
  Text,
  Title1,
  Button,
  Dropdown,
  Option,
  Card,
  CardHeader,
  Link,
  Spinner,
  MessageBar,
} from "@fluentui/react-components";
import { useStylesForEvents } from "../styles";

interface EventsAppProps {
  parent: "page" | "card";
}

const EventsApp: React.FC<EventsAppProps> = (props: EventsAppProps) => {
  const styles = useStylesForEvents();
  const [selectedDate, setSelectedDate] = useState<string>("any");
  const [city, setCity] = useState<string>("");
  const [filteredEvents, setFilteredEvents] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [timeFilter, setTimeFilter] = useState<string>("all");

  useEffect(() => {
    if (!events.length) {
      return;
    }
    if (timeFilter === "all") {
      setFilteredEvents(events);
      return;
    }
    let filtered = filterEventsByTime(events, timeFilter);
    setFilteredEvents(filtered);
  }, [events, filteredEvents, timeFilter]);

  const fetchEvents = async (city: string, date: string) => {
    setIsLoading(true);

    const options = {
      method: "GET",
      url: "https://real-time-events-search.p.rapidapi.com/search-events",
      params: {
        query: `Events in ${city}`,
        date,
        is_virtual: "false",
        start: "0",
      },
      headers: {
        "x-rapidapi-host": "real-time-events-search.p.rapidapi.com",
        "x-rapidapi-key": "4c2f88d479msh930f7f92a466e7bp1f9582jsn7d7d1e623bc8", // Replace with your RapidAPI key
      },
    };

    try {
      const response = await axios.request(options);
      const data =
        props.parent === "card"
          ? response.data.data.slice(0, 3)
          : response.data.data;
      setEvents(data);
      setFilteredEvents(data);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching events:", error);
    }
    setIsLoading(false);
  };
  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSearchClick = () => {
    if (city) {
      fetchEvents(city, selectedDate);
    }
  };

  const maxWidth = props.parent === "page" ? "600px" : "400px";
  return (
    <div className={styles.container} style={{ maxWidth: maxWidth }}>
      {props.parent === "page" && <Title1>Events Happening in the City</Title1>}

      <Input
        placeholder="Enter city"
        value={city}
        onChange={handleCityChange}
        className={styles.input}
      />
      <Dropdown
        defaultValue={selectedDate}
        onOptionSelect={(event, data) =>
          setSelectedDate(data.optionValue as string)
        }
        className={styles.dropdown}
        multiselect={false}
      >
        <Option value="any">Any</Option>
        <Option value="today">Today</Option>
        <Option value="tomorrow">Tomorrow</Option>
        <Option value="week">This Week</Option>
        <Option value="weekend">This Weekend</Option>
        <Option value="next_week">Next Week</Option>
        <Option value="month">This Month</Option>
        <Option value="next_month">Next Month</Option>
      </Dropdown>
      <Button
        onClick={handleSearchClick}
        className={styles.button}
        appearance="primary"
      >
        Search
      </Button>
      <Dropdown
        placeholder="Select time"
        defaultValue={timeFilter}
        onOptionSelect={(event, data) =>
          setTimeFilter(data.optionValue as string)
        }
      >
        <Option key="all">All</Option>
        <Option key="morning">Morning</Option>
        <Option key="evening">Evening</Option>
      </Dropdown>

      {isLoading && <Spinner label="Loading events..." size="large" />}
      {!!error && <MessageBar intent="error">{error}</MessageBar>}
      <div>
        {filteredEvents?.length > 0 && (
          <div>
            {filteredEvents.map((event, index) => (
              <Card key={`${index}_${event.name}`} className={styles.event}>
                <CardHeader
                  header={<Text weight="semibold">{event.name}</Text>}
                  description={<Text>{event.description}</Text>}
                />
                <>
                  <Text>{event.name}</Text>
                  <Text>{event.start_time}</Text>
                  <Text>{event.end_time}</Text>
                  <Text>{getVenueDetails(event.venue)}</Text>
                  <Link href={event.link} target="_blank">
                    More Info
                  </Link>
                </>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsApp;
