import styles from '../Dashboard/css/dashboard.module.css'
import CompletedTask from './completedTask';
import NotStarted from './notStarted';
import Started from './started';
import { AiOutlinePlus } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";




const Dashboard = () => {
    let navigate = useNavigate();

    const goToCreateTask = () => {
        navigate('/dashboard/create-task')
    }

    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.taskcontent}>
                    <div className={styles.taskh1}>Task</div>
                    <div className={styles.requestbtn}>
                        <div
                            className={styles.btnrequest}
                            onClick={goToCreateTask}>
                            <AiOutlinePlus className={styles.createicon}
                            />
                            Create Task
                        </div>
                    </div>
                </div>

                <div className={styles.cardholder}>
                    <div className={styles.cardcontent}>
                        <div className={styles.notstarted}>
                            <h2 className={styles.notstartedh2}>Not Started</h2>
                        </div>
                        <NotStarted />
                    </div>



                    <div className={styles.cardcontent}>
                        <div className={styles.started}>
                            <h2 className={styles.startedh2}>Started</h2>
                        </div>
                        <Started />
                    </div>

                    <div className={styles.cardcontent}>
                        <div className={styles.completed}>
                            <h2 className={styles.completedh2}>Completed</h2>
                        </div>
                        <CompletedTask />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;