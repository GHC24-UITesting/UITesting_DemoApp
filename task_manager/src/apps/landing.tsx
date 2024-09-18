import React, { useState } from 'react';
import logo from './logo.svg';
import { DetailsList, IColumn, MarqueeSelection, Selection, Separator } from '@fluentui/react';
import { FluentProvider, MessageBar, MessageBarBody } from '@fluentui/react-components';

interface LandingProps {
  tasks: string[];
}
const Landing = ({tasks}: LandingProps) => {
  const [numSelectedItems, setNumSelectedItems] = useState<number>(0);
  const selection = new Selection({
    onSelectionChanged: (): void => setNumSelectedItems(selection.getSelectedCount())
  });
  const items = tasks.map((task, idx) => { return { key: idx, name: task, value: idx } });
  console.log(items)
  const columns: IColumn[] = [
    {
      key: 'column1',
      name: 'Task',
      fieldName: 'name',
      minWidth: 100,
      maxWidth: 200,
      isResizable: false
    }
  ]
  return (
    <div>
      <div className="Landing">
        <Separator>Task Manager</Separator>
        <div className='LandingTasks'>
          <div>
            <MarqueeSelection selection={selection}>
              <DetailsList
                items={items}
                columns={columns}
                selection={selection}
                setKey='set'
                selectionPreservedOnEmptyClick={true}
              />
            </MarqueeSelection>
          </div>
        </div>
        Onboard to {numSelectedItems} tasks
      </div>
    </div>
  );
}

export default Landing;
