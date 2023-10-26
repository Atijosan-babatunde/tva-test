import styles from '../Dashboard/css/permanentlydel.module.css'
import useOnClickOutside from "../../shared/Hooks/useOnClickOutside"
import cancel from '../../assets/png/cancel.png'
import deleteimg from '../../assets/svg/deleteimg.svg'
import { useRef } from 'react'
import { useNavigate } from "react-router-dom";




const PermernentlyDeletedModal = ({handleModalShowDeletePermanently}) => {
    const modalref = useRef()
    useOnClickOutside(modalref, handleModalShowDeletePermanently)

    let navigate = useNavigate();

    const goToDashboard = () => {
        navigate("/")
    }

    return ( 
        <div className={styles.parent}>
            <div className={styles.content} ref={modalref}>
                <div className={styles.closemodal} onClick={handleModalShowDeletePermanently}>
                    <img src={cancel} alt="close modal" />
                </div>
                <div className={styles.contentholder}>
                    <img src={deleteimg} alt="" className={styles.contentholderimg}/>
                    <h1 className={styles.contentholderh1}>Task deleted successfully</h1>
                    <p className={styles.contentholderp}>
                        Wireframe task has been deleted.
                    </p>
                    <div className={styles.requestbut}>
                        <button
                            className={styles.btnrequest}
                            onClick={goToDashboard}
                        >
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PermernentlyDeletedModal;