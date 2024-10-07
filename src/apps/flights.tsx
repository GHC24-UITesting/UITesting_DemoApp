import { useMemo, useState } from "react";
import {
  Stack,
  IColumn,
  DetailsListLayoutMode,
  ShimmeredDetailsList,
} from "@fluentui/react";
import {
  Button,
  Dropdown,
  Input,
  MessageBar,
  Option,
} from "@fluentui/react-components";
import React from "react";

interface Flight {
  departure: {
    iataCode: string;
    scheduledTime: string;
  };
  arrival: {
    iataCode: string;
    scheduledTime: string;
  };
  status: string;
}

const FlightsApp = () => {
  const [iataCode, setIataCode] = useState("");
  const [type, setType] = useState("departure");
  const [flights, setFlights] = useState<Flight[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    const response = await fetch(
      `http://api.aviationstack.com/v1/timetable?access_key=0a70fde59aaabb2edaeef255d1fca0e3&type=${type}&iataCode=${iataCode}`
    );
    const data = await response.json();
    setFlights(data.data);
    setIsLoading(false);
  };

  const columns: IColumn[] = [
    {
      key: "departureAirport",
      name: "Departure Airport",
      fieldName: "departureAirport",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "departureTime",
      name: "Departure Time",
      fieldName: "departureTime",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "arrivalAirport",
      name: "Arrival Airport",
      fieldName: "arrivalAirport",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "arrivalTime",
      name: "Arrival Time",
      fieldName: "arrivalTime",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "status",
      name: "Flight Status",
      fieldName: "status",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
  ];

  const mappedFlights = useMemo(() => {
    return flights.map((flight) => ({
      departureAirport: flight.departure.iataCode,
      departureTime: flight.departure.scheduledTime,
      arrivalAirport: flight.arrival.iataCode,
      arrivalTime: flight.arrival.scheduledTime,
      status: flight.status,
    }));
  }, [flights]);

  return (
    <Stack tokens={{ childrenGap: 20, padding: 20 }}>
      <Stack.Item>
        <label style={{ marginRight: "10px" }}>Airport IATA Code</label>
        <Input
          appearance="outline"
          onChange={(e, { value }) => setIataCode(value || "")}
        />
      </Stack.Item>

      <Stack.Item>
        <label style={{ marginRight: "10px" }}>Type</label>
        <Dropdown
          selectedOptions={[type]}
          onOptionSelect={(e, data) => setType(data.optionText as string)}
        >
          <Option key="departure">Departure</Option>
          <Option key="arrival">Arrival</Option>
        </Dropdown>
      </Stack.Item>

      <Button appearance="primary" onClick={handleSearch}>
        Search
      </Button>
      {flights.length > 0 ? (
        <ShimmeredDetailsList
          items={mappedFlights}
          columns={columns}
          setKey="set"
          layoutMode={DetailsListLayoutMode.justified}
          selectionPreservedOnEmptyClick
          ariaLabelForSelectionColumn="Toggle selection"
          checkButtonAriaLabel="select row"
          enableShimmer={isLoading}
        />
      ) : (
        <MessageBar intent="info">No flights found</MessageBar>
      )}
    </Stack>
  );
};

export default FlightsApp;
