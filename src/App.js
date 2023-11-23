import './App.css';
import Welcome from './test/Welcome';
import { Route,Routes } from "react-router-dom" 


function App() {
  return (
    <>
    <Routes>
      <Route path="/test/welcome" element={<Welcome/>}/>
      {/* <div class="main">
		<form name="loginForm">
			<table>
        <div class="title">서비스 이용을 위해<br/>로그인을 해주세요.</div>
				<tr>
					<td>
						<input type="text" name="mid" placeholder="아이디" class="mid"/>
					</td> 
				</tr> 
				<tr>
					<td>
						<input type="password" name="pwd" class="pwd" placeholder="비밀번호"/>
					</td> 
				</tr> 
			</table>
      <div class="auto_box">
        <input type="checkbox" name="autoLogin" value="yes" class="autoLogin"/>
        <span class="autoTxt">자동 로그인</span>
      </div>
      <div class="button_box">
        <input type="button" value="Login" class="loginBtn" onClick="checkLoginForm()"/>
      
      </div>
		</form>
  </div> */}
    </Routes>
    </>
    
  
  );
}

export default App;
