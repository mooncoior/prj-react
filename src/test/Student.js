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
  // useState 는 화면에 반영할 때 주로 쓴다. 저장용이면 useRef
  const [inputText, setInputText] = useState('')
  const nextId = useRef(students.length+1);
  const nameRef = useRef(null);

  const onChange = (e)=> {
    let {value} = e.target;
    setInputText(value);
  }
  const onClick = () => {
    let inputVal = inputText;
    if (inputVal === undefined || inputVal === null) {
      inputVal = "";
    }
    var regExp = new RegExp(/^[가-힣]{2,}$/);
    if (regExp.test(inputVal) === false) {
      alert("학생 이름은 한글 2자 이상이어야합니다.");
      setInputText("");
      return;
    }
    setStudents([
      ...students,
      { id: nextId.current, text: inputText }
    ]);
    nextId.current++;
    setInputText("");
  };
  

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

    let new_students = students.filter(student=>student.id!=stuId);
    setStudents(new_students);
  };

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
    return (
      <>
        <center>
          <table>
            <tr><td>
          <input type='text' ref={nameRef} value={inputText} onChange={onChange}/>&nbsp;
          <button onClick={onClick} >추가</button>
            {/* Array 객체 메위주만 적으면 자동으로 .join 이 붙어서 출력된다. */}
            {studentList}
            </td></tr>
            </table>
          </center>
      </>
    )
  }
  
  export default Student;