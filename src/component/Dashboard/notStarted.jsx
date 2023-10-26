import styles from '../Dashboard/css/notstarted.module.css'
import boxone from '../../assets/png/box1.png'
import boxtwo from '../../assets/png/box2.png'
import { RiDeleteBinLine } from 'react-icons/ri'
import { TbEdit } from 'react-icons/tb'
import { BiTimeFive } from 'react-icons/bi'
import userimg from '../../assets/svg/groupimg.svg'
import { useState } from 'react'
import {GrTask} from 'react-icons/gr'
import DeleteTask from './deleteTask'
import { useNavigate } from "react-router-dom";



const NotStarted = () => {
    const [showModalDeleteTask, setShowModalDeleteTask] = useState(false)
    // const { item } = props.location.state;
    let navigate = useNavigate();
    

    
    function handleModalDeleteTask () {
        setShowModalDeleteTask(!showModalDeleteTask)
    }

    function goToEditTask (data){
        console.log(data)
        navigate('/dashboard/edit-task', {data})
    }

    const [data] = useState([
        { id: 1, imgone: <img src={boxone} alt='boximg' className={styles.imgcard}/>, skills: 'Developer', position: 'Product Manager', description:"Work with the design team to fix the download button ", task: "Download Button", assigned: <img src={userimg} alt='user' />, moment: 'Yesterday' },
        { id: 2, imgone: <img src={boxtwo} alt='boximg' className={styles.imgcard}/>, skills: 'Designer', position: 'Website Designer', description:"fix the Design of the landing page the colors are not looking cool", task: "Design Sprint", assigned: <img src={userimg} alt='user' />, moment: 'Today' }
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
                            <div className={styles.icon}  onClick={() => goToEditTask(prod.task)}><TbEdit className={styles.icon}/></div>
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

export default NotStarted;