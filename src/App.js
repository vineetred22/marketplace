import "./App.scss";
import HomePageComponents from "./pages/homepage/HomePageComponents";
import { LoginPage } from "./pages/loginpage/LoginPage";
import { RegisterationPage } from "./pages/registerationpage/RegisterationPage";
import Emailtemplete1 from "./components/emailtemplete/Emailtemplet1/Emailtemplete1"
import Emailtemplete2 from "./components/emailtemplete/Emailtemplete2/Emailtemplete2"


import {
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom";
import { ResetPassword } from "./pages/loginpage/resetpassword/ResetPassword";
import { NewCredential } from "./pages/loginpage/newcredentials/NewCredential";
import Header from "./components/layout/header/Header";


function App() {
  return (
   
   



     <Router>
            
       <Header/>
       {/* <Emailtemplete1/> */}
            {/* <Emailtemplete2/> */}
        {/* <HomePageComponents /> */}
     {/* <RegisterationPage /> */}
      {/* <LoginPage /> */}
    <Routes>
      <Route  exact path="/" element={<HomePageComponents />}/>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterationPage />}/>
        <Route exact path="/reset" element={<ResetPassword/> }/>
        <Route exact path="/credential" element={<NewCredential/> }/>
        <Route exact path="/email-template1" element={<Emailtemplete1/>}/>
        <Route exact path="/email-template2" element={<Emailtemplete2/> }/>
   
        
        
          
      
    </Routes>


  </Router>
 
  );
}

export default App;
