
import React from 'react';

import { render } from '@testing-library/react';

import EventsApp from "./apps/events";


import { ArrowDown24Regular, ArrowLeft24Regular, ArrowRight24Regular, ArrowUp24Regular } from '@fluentui/react-icons';

// renders components for testing using render - Render into a container which is appended to document.body
export const renderComponent = (componentName: string) => {

  switch (componentName) {

    case 'events':

      return render(<EventsApp parent={'page'} />);

    default:
      
      throw new Error(`Unknown component: ${componentName}`);
  }
};

export const getWindDirectionIcon = (direction: string) => {
  switch (direction) {
    case "N":
      return <ArrowUp24Regular style={{ marginRight: "5px" }} />;
    case "S":
      return <ArrowDown24Regular style={{ marginRight: "5px" }} />;
    case "E":
      return <ArrowRight24Regular style={{ marginRight: "5px" }} />;
    case "W":
      return <ArrowLeft24Regular style={{ marginRight: "5px" }} />;
    case "NE":
      return (
        <ArrowUp24Regular
          style={{ marginRight: "5px", transform: "rotate(45deg)" }}
        />
      );
    case "SE":
      return (
        <ArrowDown24Regular
          style={{ marginRight: "5px", transform: "rotate(45deg)" }}
        />
      );
    case "SW":
      return (
        <ArrowDown24Regular
          style={{ marginRight: "5px", transform: "rotate(-45deg)" }}
        />
      );
    case "NW":
      return (
        <ArrowUp24Regular
          style={{ marginRight: "5px", transform: "rotate(-45deg)" }}
        />
      );
    default:
      return null;
  }
};