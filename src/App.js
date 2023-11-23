import './App.css';
import { Route,Routes } from "react-router-dom" 
// 현재 ./test 폴더 안에 Welcome.js 파일에서 default 를 붙여 수출하는 코딩을 수입해서 Welcome  이라는 변수에 저장해달라.
// 현재 변수 Welcome 에 들어있는 것은 Welcome 이라는 함수 컴포넌트이다.
import Welcome from './test/Welcome';
// 현재 ./test 폴더 안에 Dog.js 파일에서 default 를 붙여 수출하는 코딩을 수입해서 Dog  이라는 변수에 저장해달라.
// 현재 변수 Dog 에 들어있는 것은 Dog 이라는 함수 컴포넌트이다.
import Dog   from './test/Dog' ;
// 현재 ./test 폴더 안에 Cat.js 파일에서 default 를 붙여 수출하는 코딩을 수입해서 Cat  이라는 변수에 저장해달라.
// 현재 변수 Cat 에 들어있는 것은 Cat 이라는 함수 컴포넌트이다.
import Cat   from './test/Cat' ;
import Vote from './test/Vote';

function App() {
  return (
    <>
    <Routes>
      {/* /test/welcome 라는 URL 주소로 접속하면 Welcome 이라는 컴포넌트를 호출하라는 뜻 
      /test/dog 라는 URL 주소로 접속하면 Dog 이라는 컴포넌트를 호출하라는 뜻
      /test/cat 라는 URL 주소로 접속하면 Cat 이라는 컴포넌트를 호출하라는 뜻 */}
      <Route path="/test/welcome" element={<Welcome/>}/>
      <Route path="/test/dog" element={<Dog/>}/>
      <Route path="/test/cat" element={<Cat/>}/>
      <Route path="/test/vote" element={<Vote/>}/>
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
