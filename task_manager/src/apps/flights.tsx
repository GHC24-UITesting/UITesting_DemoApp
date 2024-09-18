import { useMemo, useState } from 'react';
import { Stack, TextField, Dropdown, PrimaryButton, DetailsList, IColumn, MessageBar, MessageBarType, DetailsListLayoutMode, ShimmeredDetailsList } from '@fluentui/react';

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
  const [iataCode, setIataCode] = useState('');
  const [type, setType] = useState('departure');
  const [flights, setFlights] = useState<Flight[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  
  const handleSearch = async () => {
    setIsLoading(true)
    const response = await fetch(`http://api.aviationstack.com/v1/timetable?access_key=0a70fde59aaabb2edaeef255d1fca0e3&type=${type}&iataCode=${iataCode}`);
    const data = await response.json();
    setFlights(data.data);
    setIsLoading(false);
  };

  const columns: IColumn[] = [
    { key: 'departureAirport', name: 'Departure Airport', fieldName: 'departureAirport', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'departureTime', name: 'Departure Time', fieldName: 'departureTime', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'arrivalAirport', name: 'Arrival Airport', fieldName: 'arrivalAirport', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'arrivalTime', name: 'Arrival Time', fieldName: 'arrivalTime', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'status', name: 'Flight Status', fieldName: 'status', minWidth: 100, maxWidth: 200, isResizable: true },
  ];

  const mappedFlights = useMemo(()=> {
    return flights.map(flight => ({
      departureAirport: flight.departure.iataCode,
      departureTime: flight.departure.scheduledTime,
      arrivalAirport: flight.arrival.iataCode,
      arrivalTime: flight.arrival.scheduledTime,
      status: flight.status,
    }));
  },[flights]);

  return (
    <Stack tokens={{ childrenGap: 20, padding: 20 }}>
      <TextField
        label="Airport IATA Code"
        value={iataCode}
        onChange={(e, newValue) => setIataCode(newValue || '')}
        placeholder="Enter IATA code (e.g., JFK)"
      />
      <Dropdown
        label="Type"
        selectedKey={type}
        options={[
          { key: 'departure', text: 'Departure' },
          { key: 'arrival', text: 'Arrival' },
        ]}
        onChange={(e, option) => setType(option?.key as string)}
      />
      <PrimaryButton text="Search" onClick={handleSearch} styles={{ root: { width: '100px', height: '40px' } }} />
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
        <MessageBar messageBarType={MessageBarType.info}>No flights found</MessageBar>
      )}
    </Stack>
  );
};

export default FlightsApp;