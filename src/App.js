
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
import Student from './test/Student';
import LoginForm from './erp/LoginForm';
import Main from './erp/Main';

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
      <Route path="/test/student" element={<Student/>}/>
      <Route path="/loginForm" element={<LoginForm/>}/>
      <Route path="/main" element={<Main/>}/>
    </Routes>
    </>

  
  );
}

export default App;
