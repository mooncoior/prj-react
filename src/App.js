
import { Route,Routes } from "react-router-dom" 
import DeveloperRegForm from './erp/DeveloperRegForm';
import LoginForm from './erp/LoginForm';
import Main from './erp/Main';

function App() {
  return (
    <>
    <Routes>
      <Route path="/devRegForm" element={<DeveloperRegForm/>}/>
      <Route path="/loginForm" element={<LoginForm/>}/>
      <Route path="/main" element={<Main/>}/>
    </Routes>
    </>

  
  );
}

export default App;
