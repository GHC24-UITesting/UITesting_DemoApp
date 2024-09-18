import React, { useEffect, useState } from 'react';
import { Button, Caption1, Card, CardHeader, CardPreview, Checkbox, makeStyles, Text, Title1, tokens } from '@fluentui/react-components';
import image from '../assets/image.png';
import { useNavigate } from 'react-router';
import { landingStyles } from '../styles';

interface LandingProps {
  tasks: string[];
}

const Landing = ({tasks}: LandingProps) => {
  const styles = landingStyles();
  const items = tasks.map((task) => { return { name: task, description: "test_description", selected: false } });
  const [selectedTasks, setSelectedTasks] = useState(items);
  const [numSelected, setNumSelected] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    const numSelectedTasks = selectedTasks.filter((task) => task.selected);
    setNumSelected(numSelectedTasks.length);
  }, [selectedTasks])

  return (
      <div className={styles.main}>
        <Title1 as="h1">Task Manager</Title1>
        <Text>Please select the tags you would like to onboard to</Text>
        <div className={styles.onboardButton}>
          <Button 
            disabled={numSelected === 0}
            onClick={() => navigate('/taskpage')}
          >
            Onboard {numSelected > 0 ? `${numSelected} task${numSelected === 1 ? "" : "s"}` : ""}
          </Button>
        </div>
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
