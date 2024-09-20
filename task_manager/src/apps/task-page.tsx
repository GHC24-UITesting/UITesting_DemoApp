import { useLocation } from "react-router-dom";
import { Task } from "../types";

const TaskPage = () => {
    const location = useLocation();
    const { selectedTasks } = location.state;
    const onboardedTasks = (selectedTasks as Task[]).filter((task) => task.selected);
    return (
        <div>
            Task Page!!!
        </div>
    )
}

export default TaskPage;