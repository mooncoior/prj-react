import React from 'react';
// CSS 파일 수입하기
// <주의> CSS 파일 수입할 때는 from 이 나오지 않는다, 확장자명 .css 까지 써야한다.
import '../common/style.css';
// 'react' 라는 이름의 모듈에서 수출하는 useState, useCallback, useRef, useEffect 함수를
// 수입해서 변수 useState, useCallback, useRef, useEffect 에 저장하기
import {useState,useCallback,useRef,useEffect} from 'react';

// 파일에서 공용 함수 n개 수입할 때의 코딩
// 호출은 공용함수명() 으로 한다.
// import {공용함수명,공용함수명,~} from "파일경로"

// 파일 안의 모든 함수를 수입할 때의 코딩 
// (common.js 파일 안의 모든 공용 함수를 수입해서 변수 cm 에 저장)
// (이후부터 cm.공용함수명(~)으로 호출이 가능하다.)
import * as cm from "../common/common"

// 'axios' 라는 모듈에서 디폴트로 수출하는 객체 수입하여 변수 axios 에 저장하기
import axios from 'axios';

// LoginForm 함수 컴포넌트 선언하기
// 함수 안 마지막 return (JSX 문법 코딩)이 나오기 때문에 함수 컴포넌트이다.
const LoginForm = () => {
  // values, setValues 변수 선언하기
  // useState({mid:"",pwd:""}) 호출하여 얻은 Array 객체 안에서
  // 1번째 데이터를 복사해서 values 변수에 저장하기
  // 2번째 데이터를 복사해서 setValues 변수에 저장하기
  // values 변수에는 {mid:"",pwd:""} 가 초기화
  // setValues 변수에는 values 변수 안의 데이터를 수정하는 익명함수가 저장된다.
  // 이후부터 setValues(~) 라는 코딩이 호출되면
  // values 변수 안의 데이터가 갱신되고 함수 컴포넌트가 재호출된다.
  // 함수 컴포넌트가 재호출될 때 useState 함수 호출하여 얻은 데이터를 저장하는 
  // 변수 values, setValues 는 이전 데이터를 유지한다.
  const[values, setValues] = useState({mid:"",pwd:""});

  const midRef = useRef(null);

  // 변수 onChange 선언하고
  // 아이디 또는 암호 입력할 때 마다 실행하는 익명함수 저장하기
  // 익명함수의 매개변수로 [이벤트를 관리하는 객체] 가 전달된다.
  const onChange = 

    // useCallback을 통해 재호출될 때 익명 함수를 계속 만드는 것이 아니라 
    // 익명 함수를 최초로 만든 다음 메모리 공간에 저장시킨 후 재호출마다 꺼내쓴다.
    // const 변수명 = useCallback((~)=>{실행구문}); 에서 useCallback 함수는?
    //    -> 만약에 함수 컴포넌트를 처음 호출하면
    //       (~)=>{실행구문}을 새롭게 만들어 변수명에 저장하고
    //       함수 컴포넌트를 재호출 할 때는 이전에 만들었던 (~)=>{실행구문} 를 재저장한다.
    //       결국 useCallback 은 필수 요소가 아니라 효율성을 위한 요소이다.
    //       사용하지 않으면 함수 컴포넌트를 재호출 할 때마다 계속 익명함수를 
    //       새롭게 다시 만드는 작업을 계속 반복하기 때문에 비효율적이다.
    useCallback(
      (e) => {
      // 지역변수 name 과 value 선언하기
      // 이벤트가 발생한 태그를 관리하는 객체에서
      // 속성변수 name 안의 데이터를 지역변수 name 에 저장하고
      // 속성변수 value 안의 데이터를 지역변수 value 에 저장하기
      // 속성변수 valuew 안에는 웹화면에서 입력한 아이디 또는 암호가 저장되어 있다.
      // 속성변수 name 안에는 태그의 name 속성값이 저장되어 있다.
      // e.target -> 변수 e 에는 이벤트를 관리하는 객체가 저장됨.
      //             target 에는 이벤트가 발생한 태그를 관리하는 객체가 저장됨.
      // 결국 지역변수 name 에는 'mid' 나 'pwd' 가 들어있다.
      // 지역변수 value 에는 유저가 입력한 아이디 또는 암호가 들어있다.
      let{name,value} = e.target

      // 변수 new_values 선언하고 새로운 Object 객체 저장하기
      // 새로운 Object 객체에는 기존 values 변수 안에 저장된
      // Object 객체의 속성변수와 데이터가 저장되어 있고,
      // 여기에 [name]:value 가 덮어씌워진다.
      let new_values = {
          ...values,
          [name]: value
      };
      // setValues 에 저장된 익명함수를 호출해 values 변수 값을 갱신하기
      setValues(new_values);

      // setValues(values => ({
      //   ...values,
      //   [name]: value
      // }));
      }
    )

  // 변수 check 선언하고
  // 로그인 버튼 클릭하면 실행하는 익명 함수 저장하기
  const check = async () => {
    // 지역변수 mid, pwd 선언하기
    // 지역변수 mid , values 안의 Object 객체에 입력한 아이디를 복사해서 저장하기
    // 지역변수 pwd , values 안의 Object 객체에 입력한 암호를 복사해서 저장하기
    let {mid,pwd} = values;
    // checkVal 이라는 공용함수 호출하여 이이디의 유효성 체크하기
    // if 문이 true 면 문제가 발생했다는 뜻이다.
    if(cm.checkVal(
      mid,/^[^ ]+$/,"아이디를 입력해주세요."
    )){
      // setValues 안의 익명함수를 호출하여 vlalues 안에 들어있는 Object 객체 안의 아이디를 비우기
      setValues({
        ...values,
        mid: ""
      })
      return;
    }
    // checkVal 이라는 공용함수 호출하여 암호의 유효성 체크하기
    // if 문이 true 면 문제가 발생했다는 뜻이다.
    if(cm.checkVal(
      pwd,/^[^ ]+$/,"비밀번호를 입력해주세요."
    )){
      setValues({
      // setValues 안의 익명함수를 호출하여 vlalues 안에 들어있는 Object 객체 안의 암호를 비우기
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

    // 타 WAS 에 접속해서 아이디와 암호의 존재 개수 얻기
    // axios 안에 저장된 객체 안의 post 메소드를 호출해서
    // 타 WAS 에 접속하고 데이터 얻기
    await axios.post( 
      '/loginProc.do'
      ,null
      ,{params:values}
    )
    // 타 WAS 가 응답을 성공적으로 보냈을 때 호출되는 익명함수 선언하기
    // 이 익명함수의 매개변수로 들어오는 객체의 data 라는 속성변수에
    // 타 WAS 가 보낸 데이터가 들어있다.
    .then(function(response){
      if(response.data==1){
        alert("로그인 성공")
      }
      else{
        alert("아이디 또는 암호가 틀립니다.")
      }
    })
    // 타 WAS 와 통신이 실패했을 때 호출되는 익명함수 선언
    .catch(function(error){
      alert("웹서버 접속에 실패했습니다. 잠시 후 시도해주세요.");
    })
    };
    
    // 함수 컴포넌트가 처음 호출되어 아래 return 구문까지 모두 실행된 이후에 실행할 구문 설정
    // <주의> 함수 컴포넌트 재호출시에는 실행안됨.
    useEffect(
      ()=>{
        // 처음 함수 컴포넌트가 호출되어 종료된 후 실행할 구문
        // name="mid" 를 가진 태그에 커서를 들여놓기
        // midRef.current 에는 name="mid" 를 가진 태그를 관리하는 객체가 저장되어있다.
        // name="mid" 를 가진 태그를 가려낼 수 있는 이유는 name="mid" 를 가진 태그 안에 ref={midRef} 라는 코딩을 했기때문이다.
        midRef.current.focus()
      }
      ,[]
    );


    // 리턴 구문 선언
    return (
      <div class="main">
      <form name="loginForm">
        <table>
          <div class="title">서비스 이용을 위해<br/>로그인을 해주세요.</div>
          <tr>
            <td>
              <input type="text" name="mid" ref={midRef} placeholder="아이디" class="mid" value={values.mid} onChange={onChange}/>
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