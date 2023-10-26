import styles from './css/dashboardHeader.module.css'
import Logo from "../../assets/svg/logo.svg"
import Passport from "../../assets/png/passport.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import usericon from '../../assets/svg/usericon.svg'
import settingsimg from '../../assets/svg/settingsimg.svg'
import logoutuser from '../../assets/svg/logoutuser.svg'
import { FiSearch } from 'react-icons/fi'
import { Modal, ModalBody } from "reactstrap";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const DashboardHeader = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
        setShowMenu(!showMenu);
    };

    return (
        <div className={styles.parent}>
            <div className={styles.logoDiv}>
                <img src={Logo} className={styles.logo} alt="logo" />
            </div>

            <div className={styles.row}>
                <div className={styles.search}>
                    <input type="text" placeholder="Search" className={styles.searchinput} />
                    <span className={styles.inputspan}><FiSearch /></span>
                </div>


                <div className={styles.hold}>
                    <div style={{ display: "flex", alignItems: "center", }}>
                        <div className={styles.passportDiv}>
                            <img src={Passport} alt="img" className={styles.passport} />
                        </div>
                        {/* <div className={styles.name}>Timothy Godswill</div>
                <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div> */}

                        <div className={styles.dropdown}>

                            <div className={styles.name}>Babatunde <span className={styles.spanname}><IoMdArrowDropdown /></span></div>

                            <div className={styles.dropdownContent}>
                                <div className={styles.dropDownRow}>
                                    <div className={styles.logoDrodownDiv}>
                                        <img
                                            src={usericon}
                                            className={styles.dropIcon}
                                            alt="horse"
                                        />
                                    </div>
                                    <div className={styles.logoTitleDiv}>
                                        <div className={styles.dropDowntitle}>
                                            Profile
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.dropDownRow}>

                                    <div className={styles.logoDrodownDiv}>
                                        <img
                                            src={settingsimg}
                                            className={styles.dropIcon}
                                            alt="horse"
                                        />
                                    </div>
                                    <div className={styles.logoTitleDiv}>
                                        <div className={styles.dropDowntitle}>
                                            Settings
                                        </div>
                                    </div>

                                </div>
                                <div className={styles.dropDownRow}>

                                    <div className={styles.logoDrodownDiv}>
                                        <img
                                            src={logoutuser}
                                            className={styles.dropIcon}
                                            alt="horse"
                                        />
                                    </div>
                                    <div className={styles.logoTitleDiv}>
                                        <div className={styles.dropDowntitle}>
                                            Log out
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={toggle} className={styles.menuDiv}>
                <AiOutlineMenu className={styles.menu} />
            </div>

            <Modal isOpen={modal} toggle={toggle} fullscreen style={{width: "60%"}}>
                <ModalBody className={styles.modalParent}>
                    <div onClick={toggle} className={styles.modalClose}> <AiOutlineClose className={styles.menu} /></div>
                    <div className={styles.modalMenu}>
                        <div className={styles.modalMenufirst}>
                            <Link
                                onClick={toggle}
                                className={styles.titleModal}
                                to="/dashboard"
                            >
                                Task
                            </Link>
                            <Link
                                onClick={toggle}
                                className={styles.titleModal}
                                to="/dashboard"
                            >
                               User Management
                            </Link>
                            <Link
                                onClick={toggle}
                                className={styles.titleModal}
                                to="/dashboard"
                            >
                                Settings
                            </Link>
                            <Link
                                onClick={toggle}
                                className={styles.titleModal}
                                to="/login"
                            >
                                Log out
                            </Link>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default DashboardHeader;