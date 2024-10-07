import { Stack } from "@fluentui/react";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
  Input,
  InputOnChangeData,
  SelectionItemId,
  Text,
  Title1,
  useId,
} from "@fluentui/react-components";
import {
  AddFilled,
  CheckmarkUnderlineCircleFilled,
} from "@fluentui/react-icons";
import { List, ListItem } from "@fluentui/react-list-preview";
import React from "react";

type TaskItem = {
  name: string;
  id: string;
};

interface TodoListProps {
  parent: "card" | "page";
}

const items: TaskItem[] = [].map((name) => ({
  name,
  id: name,
}));

const TodoList = (props: TodoListProps) => {
  const inputId = useId("input");
  const [selectedItems, setSelectedItems] = React.useState<SelectionItemId[]>(
    []
  );
  const [newTask, setNewTask] = React.useState<string>("");

  return (
    <Card>
      {props.parent === "page" && (
        <CardHeader header={<Title1 as="h1">To-do List</Title1>} />
      )}
      <CardPreview>
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
        <Stack horizontal tokens={{ childrenGap: 10 }}>
          <Input
            value={newTask}
            id={inputId}
            onChange={(_, data: InputOnChangeData) => {
              setNewTask(data.value);
            }}
            style={{ marginLeft: "10px" }} // Adjust the value as needed
          />
          <Button
            icon={<AddFilled />}
            onClick={() => {
              items.push({ name: newTask, id: newTask });
              setNewTask("");
            }}
            disabled={newTask.trim() === ""}
          >
            Add
          </Button>
        </Stack>
      </CardPreview>
      <CardFooter>
        <Stack horizontal>
          <CheckmarkUnderlineCircleFilled style={{ paddingTop: "5px" }} />
          <Text>
            {selectedItems.length}
            {" / "}
            {items.length} completed tasks
          </Text>
        </Stack>
      </CardFooter>
    </Card>
  );
};

export default TodoList;
