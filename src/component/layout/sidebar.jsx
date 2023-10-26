import {NavLink, useLocation } from "react-router-dom";
import styles from './css/sidebar.module.css';
import DashboardHeader from "./dashboardheader";  
import ActiveDashboard from '../../assets/svg/activedashboard.svg';
import ActiveCurrency from '../../assets/svg/activecurrency.svg';
import ActiveTransactions from '../../assets/svg/inactivetransactions.svg';
import InActiveDashboard from '../../assets/svg/inactivedashboard.svg';
import InActiveCurrency from '../../assets/svg/inactivecurrency.svg';
import InActiveSupport from '../../assets/svg/inactivesupport.svg';
import LogOut from '../../assets/svg/logout.svg';
import { useEffect } from "react";





const SideMenu = ({children}) => {
  const location = useLocation().pathname;


  useEffect(() => {
    window.scrollTo(0,0)
  },[])


    return ( 
      <div>
        <DashboardHeader/>
        <div style={{display:'flex'}}>
          <div className={styles.parent}>    
            <div>
              <NavLink to='/dashboard' className={styles.link}>  
                 <div className={styles.iconpagename} style={{background:location==='/dashboard' || location==='/dashboard/create-task' || location==="/dashboard/edit-task" ? "linear-gradient(#e1e9f5, #F6F6F6)" : ''}}>
                   {location === '/dashboard' || location==='/dashboard/create-task' || location==="/dashboard/edit-task" ? 
                    <img src={ActiveDashboard} className={styles.icon} alt="horse"/> : <img src={InActiveDashboard} className={styles.icon} alt="horse"/>
                   }
                   <div style={{color:location==='/dashboard'|| location==='/dashboard/create-task' || location==="/dashboard/edit-task" ? '#011B6D' : 'rgb(136, 136, 136)'}} className={styles.pageName}>Task</div>
                </div>
              </NavLink>

              <NavLink to='/user-management' className={styles.link}>  
                 <div className={styles.iconpagename} style={{background:location==='/user-management'  ? "linear-gradient(#e1e9f5, #F6F6F6)" : '', }}>
                   {location === '/user-management' ? 
                    <img src={ActiveCurrency} className={styles.icon} alt="horse"/> : <img src={InActiveCurrency} className={styles.icon} alt="horse"/>
                   }
                   <div style={{color:location==='/user-management' ?  '#011B6D' : 'rgb(136, 136, 136)'}} className={styles.pageName}>User Management</div>
                </div>
              </NavLink>
          

             
              <NavLink to='/security-settings' className={styles.link}>  
                 <div className={styles.iconpagename} style={{background:location==='/security-settings' ? "linear-gradient(#e1e9f5, #F6F6F6)" : ''}}>
                   {location === '/security-settings' || location==='/security-settings/all-admins' ? 
                    <img src={ActiveTransactions} className={styles.icon} alt="horse"/> : <img src={InActiveSupport} className={styles.icon} alt="horse"/>
                   }
                   <div style={{color:location==='/security-settings'  ? '#011B6D' : 'rgb(136, 136, 136)'}} className={styles.pageName}>Settings </div>
                </div>
              </NavLink>

              <NavLink to='/login' className={styles.link}> 
                 <div className={styles.iconpagename}>
                   <img src={LogOut} className={styles.icon} alt="horse"/>
                   <div style={{color:'rgb(136, 136, 136)'}} className={styles.pageName}>Log Out</div>
                 </div>   
              </NavLink>


            
         
            </div>
          </div>
          <main className={styles.main}>{children}</main>
        </div>
      </div>  
     );
}
 
export default SideMenu;