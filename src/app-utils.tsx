
import React from 'react';

import { render } from '@testing-library/react';

import EventsApp from "./apps/events";

// for testing only
export const renderComponent = (componentName: string) => {

  switch (componentName) {

    case 'events':

      return render(<EventsApp parent={'page'} />);

    default:
      
      throw new Error(`Unknown component: ${componentName}`);
  }
};
