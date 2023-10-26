/**
 *
 * LoginUser
 *
 */
import styles from '../Authentication/css/loginuser.module.css'
import logo from '../../assets/svg/logo.svg'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md'
import { useState } from 'react'
import ForgetPasswordModal from './forgetPasswordModal'



const LoginUser = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passwordType, setPasswordType] = useState("password")
    const [showModal, setShowModal] = useState(false)

    function handleForgetPasswordModal() {
        setShowModal(!showModal)
    }

    const validate = () => {
        return !email || !password
    }

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    let navigate = useNavigate();
    const gotoHome = () => {
        navigate("/");
    };

    const goToDashboard = () => {
        navigate("/dashboard")
    }

    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.imgholder} onClick={gotoHome}>
                    <img src={logo} alt="" className={styles.imginside} />
                </div>
                <h1 className={styles.signuph1}>Hello there! &#128075;</h1>
                <p className={styles.signupp}>Enter correctly your login credentials to gain access</p>

                <div className={styles.inputted}>
                    <h2 className={styles.rowname}>Email address</h2>
                    <input className={styles.calculatorinput}
                        type="email"
                        placeholder="Enter your email address"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />

                    <h2 className={styles.rowname}>Password</h2>
                    <div className={styles.group}>
                        <input className={styles.calculatorinputgroup}
                            type={passwordType}
                            placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            name="password"
                        />
                        <div className="input-group-btn">
                            <button className={styles.visibility} onClick={togglePassword}>
                                {passwordType === "password" ? <MdOutlineVisibilityOff /> : < MdOutlineVisibility />}
                            </button>
                        </div>
                    </div>

                    <p className={styles.forget} onClick={handleForgetPasswordModal}>Forgot Password?</p>
                    <div className={styles.requestbut}>
                        <button
                            className={styles.btnrequest}
                            disabled={validate()}
                            style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                            onClick={goToDashboard}
                        >
                            Log In
                        </button>
                    </div>
                </div>
                {showModal && <ForgetPasswordModal {...{ handleForgetPasswordModal }} />}
                <p className={styles.donthave}>
                    Don’t have an account? <span className={styles.donthavespan}><Link to="/">Sign Up</Link></span>
                </p>
            </div>
        </div>
    );
}

export default LoginUser;