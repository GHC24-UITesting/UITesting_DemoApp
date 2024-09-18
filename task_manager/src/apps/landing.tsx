import React, { useState } from 'react';
import { Button, Divider, makeStyles, SelectionItemId, Text } from '@fluentui/react-components';
import { List, ListItem } from '@fluentui/react-list-preview';

interface LandingProps {
  tasks: string[];
}

const useStyles = makeStyles({
  buttonControls: {
    display: "flex",
    columnGap: "8px",
    marginBottom: "16px",
  },
});

const Landing = ({tasks}: LandingProps) => {
  const classes = useStyles();
  const [selectedItems, setSelectedItems] = useState<SelectionItemId[]>([]);
  const [allSelected, setAllSelected] = useState<boolean>(false);
  const items = tasks.map((task, idx) => { return { id: task, name: task } });

  

  return (
    <div>
      <Divider>Task Manager</Divider>
      <div className={classes.buttonControls}>
        <Button onClick={(e) => {
            if (allSelected) {
              setSelectedItems([])
            } else {
              setSelectedItems(items.map(({ id }) => id))
            }
            setAllSelected((allSelected) => !allSelected)
          }
        }>
          {allSelected ? "Deselect All" : "Select All"}
        </Button>
      </div>
      <List
        selectionMode="multiselect"
        selectedItems={selectedItems}
        onSelectionChange={(_, data) => setSelectedItems(data.selectedItems)}
      >
        {items.map(({ name }) => (
          <ListItem key={name} value={name} aria-label={name}>
            <Text>{name}</Text>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Landing;
