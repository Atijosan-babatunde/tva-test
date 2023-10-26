
import {
    Route,
    Routes,
  } from "react-router-dom";

import SideMenu from "./sidebar";
import { useEffect } from "react";
// import ProtectedRoutes from "./protectedRoutes";
import Dashboard from "../Dashboard/dashboard";
import CreateTask from "../Dashboard/createTask/createTask";
import Settings from "../Dashboard/settings";
import EditTask from "../Dashboard/editTask/editTask";



  
  const SideBarRoute=()=>{
    useEffect(() => {
      window.scrollTo(0,0)
    },[])
    return (
      <div >
        <SideMenu>
        <Routes>   
          <Route> 
            <Route  path='/dashboard' element={<Dashboard/>}/> 
            <Route path='/dashboard/create-task' element={<CreateTask/>}/>
            <Route path='/dashboard/edit-task' element={<EditTask/>}/>
            <Route path='/user-management' element={<Settings />}/>
            <Route  path='/*' element={<Dashboard/>}/> 
          </Route> 
          </Routes>  
        </SideMenu>
      </div>
    );
  }
  
  export default SideBarRoute;
  