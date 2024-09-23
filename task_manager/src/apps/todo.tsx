import { Stack } from "@fluentui/react";
import { Button, Input, InputOnChangeData, Persona, SelectionItemId, Text, useId } from "@fluentui/react-components";
import { AddFilled } from "@fluentui/react-icons";
import { List, ListItem } from "@fluentui/react-list-preview";

import * as React from "react";

type TaskItem = {
  name: string;
  id: string;
};

const items: TaskItem[] = [].map((name) => ({
  name,
  id: name,
}));

const TodoList = () => {
    const inputId = useId("input");
  const [selectedItems, setSelectedItems] = React.useState<SelectionItemId[]>([]);
  const [newTask, setNewTask] = React.useState<string>("");

  return (
    <div>
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
        <Stack horizontal>
            <Input value={newTask} id={inputId} onChange={(_, data: InputOnChangeData) => { setNewTask(data.value)}}/>
            <Button 
                icon={<AddFilled/>} 
                onClick={() => { 
                    items.push({name: newTask, id: newTask});
                    setNewTask("");
                }}
            >Add</Button>
        </Stack>
    </div>
  );
};

export default TodoList;
