import { useLocation, useNavigate } from "react-router-dom";
import { Task } from "../types";
import { taskPageStyles } from "../styles";
import { Card, Title1 } from "@fluentui/react-components";

const TaskPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const styles = taskPageStyles();
    const { selectedTasks } = location.state;
    const onboardedTasks = (selectedTasks as Task[]).filter((task) => task.selected);
    return (
        <div className={styles.parent}>
            <Title1 as="h1">Dashboard</Title1>
            <div className={styles.container}>
                {/* live event section */}
                <div className={styles.main}>
                    <div className={styles.col}>
                        {
                            onboardedTasks.filter((task) => task.type === "live-event")?.map((task) => {
                                return (
                                    <Card
                                        onClick={() => navigate(task.page)}
                                    >
                                        {task.name}
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
                {/* miscellaneous section */}
                <div className={styles.main}>
                    <div className={styles.col}>
                            {
                                onboardedTasks.filter((task) => task.type === "misc")?.map((task) => {
                                    return (
                                        <Card
                                            onClick={() => navigate(task.page)}
                                        >
                                            {task.name}
                                        </Card>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskPage;