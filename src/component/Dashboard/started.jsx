import styles from '../Dashboard/css/started.module.css'
import boxone from '../../assets/png/box1.png'
import boxthree from '../../assets/png/box3.png'
import { RiDeleteBinLine } from 'react-icons/ri'
import { TbEdit } from 'react-icons/tb'
import { BiTimeFive } from 'react-icons/bi'
import userimg from '../../assets/svg/groupimg.svg'
import { useState } from 'react'
import {GrTask} from 'react-icons/gr'
import DeleteTask from './deleteTask'
import { useNavigate } from "react-router-dom";



const Started = () => {
    const [showModalDeleteTask, setShowModalDeleteTask] = useState(false)
    let navigate = useNavigate();

    function handleModalDeleteTask () {
        setShowModalDeleteTask(!showModalDeleteTask)
    }

    function goToEditTask (){
        navigate('/dashboard/edit-task')
    }

    const [data] = useState([
        { id: 1, imgone: <img src={boxthree} alt='boximg' className={styles.imgcard} />, skills: 'UI/UX Designer', position: 'Product Manager', description:"Design the wireframe for the dashboard", task: "Wireframe", assigned: <img src={userimg} alt='user' />, moment: 'Today' },
        { id: 2, imgone: <img src={boxone} alt='boximg' className={styles.imgcard} />, skills: 'Developer', position: 'Backend Developer', description:"Build the API for customer service when done forward it to the frontend developer", task: "Develop", assigned: <img src={userimg} alt='user' />, moment: 'Today' }
    ])

    return (
        <div className={styles.parent}>
            {data.map((prod, index) =>
                <div className={styles.content} key={index}>
                    <div>{prod.imgone}</div>
                    <hr />
                    <div className={styles.infoholder}>
                        <div className={styles.buttonholder}>
                            <div className={styles.redbut}>{prod.skills}</div>
                            <div className={styles.bluebut}>{prod.position}</div>
                        </div>

                        <div className={styles.delinfo}>
                            <div className={styles.icon} onClick={goToEditTask}><TbEdit className={styles.icon}/></div>
                            <div className={styles.icon} onClick={handleModalDeleteTask}><RiDeleteBinLine className={styles.icon}/></div>
                        </div>
                    </div>
                    <div className={styles.assigned}>
                        Assigned: <span  className={styles.assignedimg}>{prod.assigned}</span>
                    </div>

                    <div className={styles.download}>
                        <h2 className={styles.cardh2}>{prod.task}</h2>
                        <p className={styles.cardp}><span className={styles.cardspan}><BiTimeFive /></span>{prod.moment}</p>
                    </div>
                    <p className={styles.description}><GrTask className={styles.ico}/>  {prod.description}</p>
                </div>
            )}
             {showModalDeleteTask && <DeleteTask {...{handleModalDeleteTask}}/>}
        </div>
    );
}

export default Started;