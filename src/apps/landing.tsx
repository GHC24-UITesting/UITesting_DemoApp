import { useEffect, useState } from "react";
import {
  Button,
  Caption1,
  Card,
  CardHeader,
  CardPreview,
  Checkbox,
  Text,
  Title1,
} from "@fluentui/react-components";
import { useNavigate } from "react-router";
import { landingStyles } from "../styles";
import { Task } from "../types";
import React from "react";

interface LandingProps {
  tasks: Task[];
}

const Landing = ({ tasks }: LandingProps) => {
  const styles = landingStyles();
  const [selectedTasks, setSelectedTasks] = useState(tasks);
  const [numSelected, setNumSelected] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const numSelectedTasks = selectedTasks.filter((task) => task.selected);
    setNumSelected(numSelectedTasks.length);
  }, [selectedTasks]);

  return (
      <div className={styles.main}>
        <Title1 as="h1">Dashboard Manager</Title1>
        <Text>Please select the services you would like to onboard to</Text>
        <div className={styles.onboardButton}>
          <Button 
            disabled={numSelected === 0}
            onClick={() => navigate('/taskpage', { state: { selectedTasks } })}
          >
            Onboard {numSelected > 0 ? `${numSelected} service${numSelected === 1 ? "" : "s"}` : ""}
          </Button>
        </div>
        <div className={styles.row}>
        {
          tasks?.map((task, idx) => {
            return (
                <Card
                  key={`${task.name}-${idx}`}
                  className={styles.card}
                  floatingAction={
                    <Checkbox 
                      onChange={() => {
                        const newSelectedTasks = [...selectedTasks];
                        newSelectedTasks[idx].selected = !newSelectedTasks[idx].selected;
                        setSelectedTasks(newSelectedTasks);
                      }} 
                      checked={selectedTasks.find((taskObj) => taskObj.name === task.name)?.selected ?? false} 
                    />
                  }
                  selected={selectedTasks.find((taskObj) => taskObj.name === task.name)?.selected ?? false}
                  onSelectionChange={() => {
                    const newSelectedTasks = [...selectedTasks];
                        newSelectedTasks[idx].selected = !newSelectedTasks[idx].selected;
                        setSelectedTasks(newSelectedTasks);
                  }}
                  size='small'
                >
                  <CardPreview
                    className={styles.grayBackground}
                  >
                    <img
                      className={styles.smallRadius}
                      src={tasks.find((taskObj) => taskObj.name === task.name)?.image}
                      alt="Presentation Preview"
                    />
                  </CardPreview>

                  <CardHeader
                    header={<Text weight="semibold">{task.name}</Text>}
                    description={
                      <Caption1 className={styles.caption}>
                        {tasks.find((taskObj) => taskObj.name === task.name)?.description}
                      </Caption1>
                    }
                  />
                </Card>
            )
          })
        }
        </div>
      </div>
  );
};

export default Landing;
