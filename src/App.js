import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupUser from "./component/Authentication/signupUser";
import LoginUser from "./component/Authentication/loginUser";
import SideBarRoute from "./component/layout/sidebarRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignupUser />} />
          <Route path="/login" element={<LoginUser/>}/>
          <Route  path='/*' element={<SideBarRoute/>}/>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
