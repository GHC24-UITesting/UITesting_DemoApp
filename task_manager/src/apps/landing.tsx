import React, { useCallback, useState } from 'react';
import { Body1, Button, Caption1, Card, CardFooter, CardHeader, CardPreview, Checkbox, Divider, makeStyles, SelectionItemId, Text, tokens } from '@fluentui/react-components';
import { List, ListItem } from '@fluentui/react-list-preview';
import image from '../assets/image.png';

interface LandingProps {
  tasks: string[];
}

const flex = {
  gap: "16px",
  display: "flex",
};

const useStyles = makeStyles({
  parent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    ...flex,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  row: {
    ...flex,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "60%"
  },

  card: {
    width: "200px",
    maxWidth: "100%",
    height: "fit-content",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  smallRadius: { borderRadius: tokens.borderRadiusSmall },

  grayBackground: {
    backgroundColor: tokens.colorNeutralBackground3,
  }
});

const Landing = ({tasks}: LandingProps) => {
  const styles = useStyles();
  const items = tasks.map((task) => { return { name: task, description: "test_description", selected: false } });
  const [selectedTasks, setSelectedTasks] = useState(items);

  return (
      <div className={styles.main}>
        <Divider>Please select the task you would like to onboard to</Divider>
        <div className={styles.row}>
        {
          tasks.map((task, idx) => {
            return (
                <Card
                  key={`${task}-${idx}`}
                  className={styles.card}
                  floatingAction={
                    <Checkbox 
                      onChange={() => {
                        const newSelectedTasks = [...selectedTasks];
                        newSelectedTasks[idx].selected = !newSelectedTasks[idx].selected;
                        setSelectedTasks(newSelectedTasks);
                      }} 
                      checked={selectedTasks.find((taskObj) => taskObj.name === task)?.selected ?? false} 
                    />
                  }
                  selected={selectedTasks.find((taskObj) => taskObj.name === task)?.selected ?? false}
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
                      src={image}
                      alt="Presentation Preview"
                    />
                  </CardPreview>

                  <CardHeader
                    header={<Text weight="semibold">{task}</Text>}
                    description={
                      <Caption1 className={styles.caption}>
                        {items.find((taskObj) => taskObj.name === task)?.description}
                      </Caption1>
                    }
                  />
                </Card>
            )
          })
        }
        </div>
      </div>
  )
}

export default Landing;
