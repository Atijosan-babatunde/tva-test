import styles from '../Dashboard/css/deletetask.module.css'
import useOnClickOutside from "../../shared/Hooks/useOnClickOutside"
import cancel from '../../assets/png/cancel.png'
import { useRef, useState } from 'react'
import deleteimg from '../../assets/svg/deleteimg.svg'
import PermernentlyDeletedModal from './permanentlydel'



const DeleteTask = ({handleModalDeleteTask}) => {
    const modalref = useRef()
    useOnClickOutside(modalref, handleModalDeleteTask)


     // MODAL STATE

     const [showModaldel, setShowModaldel] = useState(false)

     function handleModalShowDeletePermanently() {
         setShowModaldel(!showModaldel)
     }

    return ( 
        <div className={styles.parent}>
        <div className={styles.content} ref={modalref}>
            <div className={styles.closemodal} onClick={handleModalDeleteTask}>
                <img src={cancel} alt="close modal" />
            </div>
             <div className={styles.contentholder}>
                <img src={deleteimg} alt="" className={styles.contentholderimg}/>
                <h1 className={styles.contentholderh1}>Delete task</h1>
                <p className={styles.contentholderp}>
                    Are you sure you want to delete this task? 
                </p>
             </div>
             <div className={styles.btnholder}>
                <div className={styles.canbtn}>
                    <button className={styles.btnorange} onClick={handleModalDeleteTask}>Cancel</button>
                </div>
                <div className={styles.probtn}>
                    <button className={styles.btnblue} onClick={handleModalShowDeletePermanently}>Proceed</button>
                </div>
                {showModaldel && <PermernentlyDeletedModal {...{handleModalShowDeletePermanently}}/>}
             </div>
        </div>
    </div>
     );
}
 
export default DeleteTask;