/**
 *
 * SignUp
 *
 */
import styles from '../Authentication/css/signupuser.module.css'
import logo from '../../assets/svg/logo.svg'
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const SignupUser = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [position, setPosition] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password")
    const [special, setSpecial] = useState(false);
    const [showErrorBox, setShowErrorBox] = useState(false)

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const toggleConfirmPassword = () => {
        if (confirmPasswordType === "password") {
            setConfirmPasswordType("text")
            return;
        }
        setConfirmPasswordType("password")
    }

    const handleChange2 = (event) => {
        const value = event.target.value;

        // Check for special characters
        const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        // Handle the conditions as needed
        if (hasSpecialCharacter) {
            setSpecial(true);
            console.log(hasSpecialCharacter)
        }
        setPassword(value)
    };

    const validatePassword = () => {
        setShowErrorBox(!showErrorBox)

        const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        // Handle the conditions as needed
        if (hasSpecialCharacter) {
            setSpecial(true);
        }
    }

    const validate = () => {
        return !firstName || !lastName || !email || !position || password !== confirmPassword

    }

    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.imgholder}>
                    <img src={logo} alt="" className={styles.imginside}/>
                </div>
                <h1 className={styles.signuph1}>Sign Up &#128075;</h1>
                <p className={styles.signupp}>Enter correctly your credentials to gain access</p>

                <div className={styles.formholder}>
                    <div className={styles.formholderone}>
                        <h2 className={styles.rowname}>First name</h2>
                        <input className={styles.calculatorinput} type="text" placeholder="Enter your first name" onChange={e => setFirstName(e.target.value)} />

                        <h2 className={styles.rowname}>Email address</h2>
                        <input className={styles.calculatorinput} type="email" placeholder="Enter your email address" onChange={e => setEmail(e.target.value)} />

                        <h2 className={styles.rowname}>Password</h2>
                        <div className={styles.group}>
                            <input className={styles.calculatorinputgroup}
                                type={passwordType}
                                placeholder="Enter password"
                                onChange={handleChange2}
                                onFocus={validatePassword}
                                value={password}
                                name="password"
                            />
                            <div className="input-group-btn">
                                <button className={styles.visibility} onClick={togglePassword}>
                                    {passwordType === "password" ? <MdOutlineVisibilityOff /> : < MdOutlineVisibility />}
                                </button>
                            </div>
                        </div>
                        <div className={styles.passwordhandler} style={{ display: showErrorBox ? "" : "none" }}>
                            <div style={{ display: password.length < 8 ? " " : "none" }}>8 characters minimum</div>
                            <div style={{ display: special ? "none" : "" }}>At least one number or symbol (like !@#$%^&*)</div>
                        </div>
                    </div>

                    <div className={styles.formholdertwo}>
                        <h2 className={styles.rowname}>Last name</h2>
                        <input className={styles.calculatorinput} type="text" placeholder="Enter your first name" onChange={e => setLastName(e.target.value)} />

                        <h2 className={styles.rowname}>Position</h2>
                        <input className={styles.calculatorinput} type="text" placeholder="Enter your position" onChange={e => setPosition(e.target.value)} />


                        <h2 className={styles.rowname}>Confirm password</h2>
                        <div className={styles.group}>
                            <input className={styles.calculatorinputgroup}
                                type={confirmPasswordType}
                                placeholder="Enter password"
                                value={confirmPassword}
                                name="password"
                                onChange={e => setConfirmPassword(e.target.value)}
                            />
                            <div className="input-group-btn">
                                <button className={styles.visibility} onClick={toggleConfirmPassword}>
                                    {confirmPasswordType === "password" ? <MdOutlineVisibilityOff /> : < MdOutlineVisibility />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.continuebutton}>
                    <div className={styles.requestbut}>
                        <button
                            className={styles.btnrequest}
                            // onClick={registerUserData}
                            disabled={validate()}
                            style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                        >
                            Sing Up
                        </button>

                    </div>
                    <p className={styles.donthave}>
                        Already have an account? <span className={styles.donthavespan}><Link to="/login">Log in </Link></span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignupUser;