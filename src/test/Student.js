import React from 'react';
import {useState,useRef,useEffect} from 'react';

const Student = () => {
  // 지역변수 students, setStudents 선언하기
  // useState(~) 라는 내장함수를 호출하여 얻은 Array 객체 안에서
  // 1번째 데이터를 복사해서 students 변수에 저장하기
  // 2번째 데이터를 복사해서 setStudents 변수에 저장하기
  // students 변수에는 {id:1,text:'사오정'},~ 이 초기화 되어 저장된다.
  // setStudents 변수에는 students 변수 안의 데이터를 수정하는 익명함수가 저장됨
  // 이후부터 setStudents (~) 라는 코딩이 호출되면
  // students 변수 안의 데이터가 갱신되고 함수 컴포넌트가 재호출된다.
  // 함수 컴포넌트가 재호출될 때 uesState 함수 호출하여 얻은 데이터를
  // 변수 students, setStudents 는 이전 데이터를 유지한다.
  const[students, setStudents] = useState([
    { id: 1, text: '사오정' },
    { id: 2, text: '저팔계' },
    { id: 3, text: '손오공' },
    { id: 4, text: '삼장법사' },
  ]);

  // 지역변수 inputText, setInputText 선언하기.
	// useState(~) 라는 내장함수 호출하여 얻은 Array 객체 안에서
  // 1번째 데이터를 복사해서 inputText    변수에 저장하기.
  // 2번째 데이터를 복사해서 setInputText 변수에 저장하기
  // inputText 변수에는 [{ id: 1, text :'사오정'},~] 이 초기화 해서 저장되고
  // setInputText 변수에는 inputText 변수안의 데이터를 수정하는 익명함수가 저장됨
  // 이후 부터 setInputText(~) 라는 코딩이 호출되면.
  // inputText   변수안의 데이터가 갱신되고 함수 컴포넌트가 재 호출된다.
  // 함수 컴포넌트가 재 호출될 때 useState 함수 호출하여 얻은 데이터
  // 저장하는 변수 inputText, setInputText 이전 데이터를 유지한다.
  // useState 는 화면에 반영할 때 주로 쓴다. 저장용이면 useRef
  const [inputText, setInputText] = useState('')
  // 변수 new_id 선언하고 useRef 함수를 호출해서 리턴되는 객체를 저장하기
	// 이 객체의 속성변수 current 에는   students.length+1  의 결과값을 저장하기
  // 이후 부터  new_id.current = 데이터;   라는 코딩이 실행되어 갱신이 가능하다.
  // <주의>갱신될때 함수 컴포넌트가 재 호출되지는 않는다.
  // 함수 컴포넌트가 재 호출될 때 new_id   변수 안의 데이터는 이전 데이터를 유지한다.
  const nextId = useRef(students.length+1);
  const nameRef = useRef(null);

  // 변수 new_id 선언하고 useRef 함수를 호출해서 리턴되는 객체를 저장하기
	// 이 객체의 속성변수 current 에는   students.length+1  의 결과값을 저장하기
  // 이후 부터  new_id.current = 데이터;   라는 코딩이 실행되어 갱신이 가능하다.
  // <주의>갱신될때 함수 컴포넌트가 재 호출되지는 않는다.
  // 함수 컴포넌트가 재 호출될 때 new_id   변수 안의 데이터는 이전 데이터를 유지한다.
  const onChange = (e)=> {
    //-----------------------------------------
		// 지역 변수 value 선언하고 
		// 이벤트가 발생한 태그의 입력값을 캐치해서 저장하기.
		//-----------------------------------------
		// 즉 결국 웹상에 입력한 데이터를 지역변수 value 에 저장하기
		//-----------------------------------------
    let {value} = e.target;
    	//-----------------------------------------------
			// 위 코드는 오른쪽과 동일하다. let value = e.target.value;
			// e 에는 이벤트를 관리하는 Event 객체가 들어있다.
			// target 에는 이벤트가 발생한 태그를 관리하는 객체가 들어 있다.
			// 이벤트가 발생한 태그를 관리하는 
			//         객체의 속성변수 value 에는 웹상에서 입력한 데이터가 들어 있다.
			//-----------------------------------------------
		//-----------------------------------------
		// setInputText 변수안의 익명함수 호출하면서 
		// 매개변수로 value 안의 값을 넘겨준다.
		// 이 익명함수가 호출되면 inputText  변수 안의 데이터가 갱싱되고
		// 함수 컴포넌트가 재 호출된다.
		//-----------------------------------------
    setInputText(value);
  }
  // 변수 onClick 선언하고 익명함수 저장하기
	// 이 익명함수는 추가 버튼 클릭할 때 마다 호출된다.
  const onClick = () => {
    // 지역변수 inputVal 선언하고 
		// inputText 변수 안의 데이터를 복사해서 저장하기
    let inputVal = inputText;
    // 지역변수 inputVal 안의 데이터가 undefined 또는 null 이면
		// "" 로 대체하기
    if (inputVal === undefined || inputVal === null) {
      inputVal = "";
    }
    // 지역변수 regExp 선언하고 
		// RegExp 객체 생성하고 객체 메위주를 변수 regExp 에 저장하기
		// 이 때 RegExp 객체는 한글 2자 이상을 검사하는 기준을 가지고 있다.
    var regExp = new RegExp(/^[가-힣]{2,}$/);
    // 만약에 변수 inputVal 안의 데이터가 한글 2자 이상이 아니면
		// 경고 문자 띄우고, inputText 변수 안의 데이터를 ""로 갱신하고
		// 함수 중단하기
    if (regExp.test(inputVal) === false) {
      alert("학생 이름은 한글 2자 이상이어야합니다.");
      setInputText("");
      return;
    }
    // setStudents 변수안의 익명 호출하여
		// 변수 students 안의 데이터를 갱신하기.
    setStudents([
      ...students,
      { id: nextId.current, text: inputText }
    ]);
    // new_id.current 변수안의 데이터를 1 업데이트 하기
		// 추후에 사용할 학생번호 를 만들기
    nextId.current++;
    // setInputText 변수안의 익명 호출하여
		// inputText 변수안의 데이터를 "" 로 갱신하기
    setInputText("");
  };
  
	// 변수 remove 선언하고 익명함수 저장하기
	// 이 익명함수는 출력된 학생이름을 더블클릭하면 호출되는 함수이다.
	// 이 익명함수의 매개변수 stuid 로는 삭제할 학생의 고유번호가 들어온다.
  const remove = (stuId)=>{
    // 기본적인 제거 코딩
    // let new_students = [...students];
    // for(let i=0;i<new_students.length;i++){
    //   let obj = new_students[i];
    //   let id = obj.id;
    //   if(id===stuId){
    //     new_students.splice(i,1);
    //     break;
    //   }
    // }
    // setStudents(new_students);
    
    // 지역변수 new_students 선언하고
		// filter 메소드를 호출하여 얻은 새로운 Array 객체 저장하기.
		// 새로운 Array 객체에는 삭제 대상 학생이 없다.
		// 즉 students 안의 Object 객체 복사해서 새로운 Array 객체 안에 저장한다.
		// 단 매개변수 stuid로 들어온 학생은 복사하지 않는다.
    let new_students = students.filter(student=>student.id!=stuId);
    // setInputText 변수안의 익명 호출하여
		// inputText 변수안의 데이터를 new_students 변수 안의 데이터로 갱신하기
    setStudents(new_students);
  };

  // 변수 studentList 선언하고 
	// map 메소드의 실행 결과 값인 새로운 Array 객체 저장하기.
	// 새로운 Array 객체 안에는 아래 <li ~> ~.~</li> 들이 들어 있다.
	// 리액트는 리턴값으로 HTML 태그를 사용할 수 있다.
	// map 메소드 기능은 교재 참조하기
  const studentList = students.map(
    student => (
      <li style={{cursor:'pointer'}} onDoubleClick={()=>{remove(student.id);}}>
        {student.id}. {student.text}
      </li>
    )
  );
  useEffect(
    ()=>{
      nameRef.current.focus()
    }
    ,[]
  );
  // return 구문 선언하기
	// 함수 컴포넌트에서 return 구문 안에는 JSX 문법이 등장한다.
	// JSX 문법의 실행 결과가 웹 화면에 출력된다고 생각하면된다.
    return (
      <>
        <center>
          <table>
            <tr><td>
          {/*---------------------------------------------*/}
					{/* 학생이름 입력 태그 선언하기*/}
					{/* 위쪽 자스에 있는  변수 inputText 안의 데이터를 value 값으로 넣기*/}
					{/* change 이벤트가 발생하면 onChange 변수 안의 함수 호출하기*/}
					{/*---------------------------------------------*/}
          <input type='text' ref={nameRef} value={inputText} onChange={onChange}/>&nbsp;
          {/*---------------------------------------------*/}
					{/* 버튼 태그 선언하고 이 버튼 태그를 클릭하면*/}
					{/* onClick 변수 안의 익명함수를 호출하기 */}
					{/*---------------------------------------------*/}
          <button onClick={onClick} >추가</button>
          {/*---------------------------------------------*/}
					{/* 변수 studentList 안의 들어 있는 Array 객체안의*/}
					{/* 모든 데이터를 붙여 표현하기*/}
					{/*---------------------------------------------*/}
            {/* Array 객체 메위주만 적으면 자동으로 .join 이 붙어서 출력된다. */}
            {studentList}
            </td></tr>
            </table>
          </center>
      </>
    )
  }
  
  export default Student;