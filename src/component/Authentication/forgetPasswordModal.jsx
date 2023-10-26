/**
 *
 * ForgetPassword Modal
 *
 */
import { useRef, useState } from 'react'
import styles from '../Authentication/css/forgetpasswordmodal.module.css'
import { Link } from "react-router-dom"
import useOnClickOutside from "../../shared/Hooks/useOnClickOutside"
import cancel from '../../assets/png/cancel.png'
import modalimg from '../../assets/png/modalimg.png'




const ForgetPasswordModal = ({ handleForgetPasswordModal }) => {
    const [email, setEmail] = useState('')
    const modalref = useRef()
    useOnClickOutside(modalref, handleForgetPasswordModal)

    const validate = () => {
        return !email
    }

    return (
        <div className={styles.parent}>
            <div className={styles.content} ref={modalref}>
                <div>
                    <div className={styles.closemodal} onClick={handleForgetPasswordModal}>
                        <img src={cancel} alt="close modal" />
                    </div>
                    <div className={styles.contentholder}>
                        <img src={modalimg} alt="" className={styles.contentimg}/>
                        <h2 className={styles.modalhead}>Forgot password?</h2>
                        <p className={styles.modalpara}>Recover your password by providing correctly the details below.</p>
                        <h2 className={styles.rowname}>Email address</h2>
                        <input className={styles.calculatorinput} type="email" placeholder="Enter your email address" onChange={e => setEmail(e.target.value)} />
                        <div className={styles.requestbut}>
                            <button
                                className={styles.btnrequest}
                                disabled={validate()}
                                style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
                <p className={styles.donthave}>
                    Don’t have an account? <span className={styles.donthavespan}><Link to="/">Register here</Link></span>
                </p>
            </div>
        </div >
    );
}

export default ForgetPasswordModal;