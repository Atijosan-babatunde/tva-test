import styles from '../../Dashboard/editTask/css/edittask.module.css'
import arrowback from '../../../assets/png/arrowback.png'
import { useNavigate, useParams } from "react-router-dom";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { useRef, useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md'
import documentKYCIcon from '../../../assets/svg/documentKYC.svg'

const EditTask = () => {
    // eslint-disable-next-line
    const [formData, setFormData] = useState({});
    const [filesName, setFilesName] = useState("");
    // eslint-disable-next-line
    const [calendar, setCalendar] = useState('')
    // eslint-disable-next-line
    const [calendarDue, setCalendarDue] = useState('')
    // eslint-disable-next-line
    const [project, setProject] = useState('')
    const [description, setDescription] = useState('')
    const [position, setPosition] = useState(false)
    const [assignee, setAssignee] = useState(false)
    const [assignTo, setAssignTo] = useState(false)
    const [dropDownValuePosition, setDropDownValuePosition] = useState('Select')
    const [dropDownValue, setDropDownValue] = useState('Select')
    const [dropDownValueAssign, setDropDownValueAssign] = useState('Select')
    const {data} = useParams()
    let navigate = useNavigate();
    

    console.log("datass",data)
    

    const handleChangeDoc = async (event, name) => {
        const fileUploaded = event.target.files[0];
        setFilesName(fileUploaded.name);
        getBase64(fileUploaded, async (result) => {
            setFormData((curr) => {
                return { ...curr, [name]: result };
            });
        });
    };

    const getBase64 = (file, cb) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result);
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
    };

    const handleClickDoc = () => {
        documentdoc.current.click();
    };

    const documentdoc = useRef(null);

    const [skilled] = useState([
        { id: 1, skills: 'Developer' },
        { id: 2, skills: 'UI/UX Designer' },
        { id: 3, skills: 'Product Designer' },
    ])

    const [workersnames] = useState([
        { id: 1, nameassign: 'Babatunde' },
        { id: 2, nameassign: 'Uche' },
        { id: 3, nameassign: 'Maureen' },
        { id: 4, nameassign: 'Tito' },
        { id: 5, nameassign: 'Maverick' },
        { id: 6, nameassign: 'Princess' },
    ])

    const [names] = useState([
        { id: 1, name: 'Lanre' },
        { id: 2, name: 'Olatunji' },
        { id: 3, name: 'Maureen' },
        { id: 4, name: 'Otheniel' },
    ])

    const changeValue = async (e) => {
        setDropDownValue(e.name)
    }

    const changeValueAssign = async (e) => {
        setDropDownValueAssign(e.nameassign)
    }

    const changeValuePosition = async (e) => {
        setDropDownValuePosition(e.skills)
    }

    const goToDashboard = () => {
        navigate('/dashboard')
    }



    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.contentbtn}>
                    <div className={styles.contenth2}>Download Button Task</div>
                    <img src={arrowback} alt="" className={styles.imgbtn} onClick={goToDashboard} />
                </div>
                <hr />

                {/* <div className={styles.innercontent}>
                <div className={styles.innercontenth1}>Task Name</div>
                <button className={styles.savebtn}>Save</button>
            </div> */}


                <div className={styles.formhold}>
                    <div className={styles.discone}>
                        <h2 className={styles.rowname} style={{ marginTop: '3em' }}>Assignee</h2>
                        <Dropdown isOpen={assignee} toggle={() => setAssignee(!assignee)} style={{ cursor: 'pointer' }} >
                            <DropdownToggle tag="a" className={styles.dropdownToggle} >
                                <div className={styles.dropDownValue}>{dropDownValue}</div>
                                <div className={styles.dropDownrow}>
                                    <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                                </div>
                            </DropdownToggle>
                            <DropdownMenu className={styles.dropBox}>
                                {names.map((name, index) =>
                                    <DropdownItem className={styles.value} key={index} onClick={() => changeValue(name)}>{name.name} </DropdownItem>
                                )}
                            </DropdownMenu>
                        </Dropdown>


                        <h2 className={styles.rowname} style={{ marginTop: '3em' }}>Start Date</h2>
                        <input
                            className={styles.calculatorinput}
                            type="date"
                            onChange={(e) => setCalendar(e.target.value)}
                        />

                        <h2 className={styles.rowname} style={{ marginTop: '3em' }}>Project</h2>
                        <input
                            className={styles.calculatorinput}
                            type="text"
                            onChange={(e) => setProject(e.target.value)}
                        />
                    </div>

                    <div className={styles.discone}>
                        <h2 className={styles.rowname} style={{ marginTop: '3em' }}>Assign To</h2>
                        <Dropdown isOpen={assignTo} toggle={() => setAssignTo(!assignTo)} style={{ cursor: 'pointer' }} >
                            <DropdownToggle tag="a" className={styles.dropdownToggle} >
                                <div className={styles.dropDownValue}>{dropDownValueAssign}</div>
                                <div className={styles.dropDownrow}>
                                    <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                                </div>
                            </DropdownToggle>
                            <DropdownMenu className={styles.dropBox}>
                                {workersnames.map((nameassign, second) =>
                                    <DropdownItem className={styles.value} key={second} onClick={() => changeValueAssign(nameassign)}>{nameassign.nameassign} </DropdownItem>
                                )}
                            </DropdownMenu>
                        </Dropdown>

                        <h2 className={styles.rowname} style={{ marginTop: '3em' }}>Due Date</h2>
                        <input
                            className={styles.calculatorinput}
                            type="date"
                            onChange={(e) => setCalendarDue(e.target.value)}
                        />

                        <h2 className={styles.rowname} style={{ marginTop: '3em' }}>Priority</h2>
                        <Dropdown isOpen={position} toggle={() => setPosition(!position)} style={{ cursor: 'pointer' }} >
                            <DropdownToggle tag="a" className={styles.dropdownToggle} >
                                <div className={styles.dropDownValue}>{dropDownValuePosition}</div>
                                <div className={styles.dropDownrow}>
                                    <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                                </div>
                            </DropdownToggle>
                            <DropdownMenu className={styles.dropBox}>
                                {skilled.map((skills, index) =>
                                    <DropdownItem className={styles.value} key={index} onClick={() => changeValuePosition(skills)}>{skills.skills} </DropdownItem>
                                )}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <div className={styles.textdiv}>
                    <h2 className={styles.rowname} style={{ marginTop: '3em' }}>Description</h2>
                    <textarea
                        className={styles.calculatorinputtextarea}
                        type="text"
                        placeholder="Add your description"
                        cols="30"
                        maxLength={1000}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <p className={styles.green}>{description.length}/1000</p>

                    <div className={styles.driverdoc}>
                        <input
                            type="file"
                            accept=".png,.jpeg,.jpg,.doc,.docx,.pdf"
                            ref={documentdoc}
                            onChange={(e) => handleChangeDoc(e)}
                            style={{ display: "none" }}
                        />
                        <img src={documentKYCIcon} alt="" />
                        {filesName ? (
                            <p onClick={handleClickDoc}>{filesName}</p>
                        ) : (
                            <p onClick={handleClickDoc} className={styles.driverdocp}>
                                Tap to upload picture/document.
                            </p>
                        )}
                    </div>

                    <div className={styles.requestbtn}>
                        <div
                            className={styles.btnrequest}
                            // style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                            // disabled={validate()}
                            // onClick={}
                        >
                            Update Task
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditTask;