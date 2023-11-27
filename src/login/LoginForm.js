import React from 'react';
import '../common/style.css';
import {useState} from 'react';
// 함수 하나만 수입할 때의 코딩
// import {checkVal} from "../common/common"
// 파일 안의 모든 함수를 수입할 때의 코딩 (수입해서 cm 이란 변수 안에 저장)
import * as cm from "../common/common"

// LoginForm 함수 컴포넌트 선언하기
const LoginForm = () => {
  const[values, setValues] = useState({mid:"",pwd:""});
  
  
  const onChange = (e) => {
    // e.target?는 이벤트가 발생한 태그를 관리하는 객체
    let{name,value}=e.target
    setValues(values => ({
      ...values,
      [name]: value
    }));
  };

  const check = () => {
    let {mid,pwd} = values;
    if(cm.checkVal(
      mid,/^[^ ]+$/,"아이디를 입력해주세요."
    )){
      setValues({
        ...values,
        mid: ""
      })
      return;
    }
    if(cm.checkVal(
      pwd,/^[^ ]+$/,"비밀번호를 입력해주세요."
    )){
      setValues({
        ...values,
        pwd: ""
      })
      return;
    }

    // 공용 함수 안쓰는 방법
    // let regExp = new RegExp(/^.+$/);
    // if(regExp.test(mid)==false){
    //     alert("아이디를 입력해주세요.")
    //     return;
    // }
    // if(regExp.test(pwd)==false){
    //   alert("비밀번호를 입력해주세요.")
    //   return;
    // }
    // DB 연동 코드

    };
  
  


    // 리턴 구문 선언
    return (
      <div class="main">
      <form name="loginForm">
        <table>
          <div class="title">서비스 이용을 위해<br/>로그인을 해주세요.</div>
          <tr>
            <td>
              <input type="text" name="mid" placeholder="아이디" class="mid" value={values.mid} onChange={onChange}/>
            </td> 
          </tr> 
          <tr>
            <td>
              <input type="password" name="pwd" class="pwd" placeholder="비밀번호" value={values.pwd} onChange={onChange}/>
            </td> 
          </tr> 
        </table>
        <div class="auto_box">
          <input type="checkbox" name="autoLogin" value="yes" class="autoLogin"/>
          <span class="autoTxt">자동 로그인</span>
        </div>
        <div class="button_box">
          <input type="button" value="Login" class="loginBtn" onClick={check}/>
        </div>
      </form>
    </div>
    );
  }
  
  export default LoginForm;