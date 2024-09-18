import React, { useState } from 'react';
import { Body1, Button, Caption1, Card, CardFooter, CardHeader, CardPreview, Divider, makeStyles, SelectionItemId, Text } from '@fluentui/react-components';
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
  card: {
    margin: "auto",
    width: "720px",
    maxWidth: "100%",
  }
});

const Landing = ({tasks}: LandingProps) => {
  const styles = useStyles();
  const [selectedItems, setSelectedItems] = useState<SelectionItemId[]>([]);
  const [allSelected, setAllSelected] = useState<boolean>(false);
  const items = tasks.map((task, idx) => { return { id: task, name: task } });
  

  return (
    <div>
      <Divider>Task Manager</Divider>
      <Card className={styles.card}>
        <CardHeader
          header={
            <Body1>
              Available tasks
            </Body1>
          }
          description={<Caption1>Select the tasks you would like to onboard to</Caption1>}
        />

        <CardPreview>
          <div className={styles.buttonControls}>
            <Button onClick={(_) => {
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
        </CardPreview>

        <CardFooter>
          <div>
            <Button disabled={selectedItems.length === 0}>Onboard</Button>
            {selectedItems.length > 0 && (<Text>&nbsp;Onboarding to {selectedItems.length} task{selectedItems.length == 1 ? "" : "s"}.</Text>)}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Landing;
