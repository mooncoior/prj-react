import React from 'react';
// 'react' 라는 이름의 모듈에서 수출하는 useState 라는 함수를
// 수입해서 변수 useState 에 저장하기
import {useState} from 'react';

const Dog = () => {
    //----------------------------------------------------
    // dog 변수, setDog 변수 선언하기
    //  useState(0) 함수 호출하여 얻은 Array 객체에서
    // 1번째 데이터를 dog 변수에 저장하기
    // 2번째 데이터를 setDog 변수에 저장하기
    // dogCnt 변수에는 0 이 초기화 해서 저장되고
    // setDog 변수에는 dogCnt 변수안의 데이터를 수정하는 익명함수가 저장됨
    // 이후 부터 setDog(~) 라는 코딩이 호출되면
    // dogCnt 변수안의 데이터가 갱신되고 함수 컴포넌트가 재호출된다.
    // 함수 컴포넌트가 재호출될 때 useState 함수 호출하여 얻은 데이터를
    // 저장하는 변수 dogCnt, setDogcnt 는 이전 데이터를 유지한다.
    //----------------------------------------------------
    const [dogCnt,setDogCnt] = useState(0);

    // 변수 add 선언하고 익명함수 저장하기
    const add = ()=>{
        // new_dogCnt 변수 선언하고 dogCnt+1 의 데이터를 저장하기
        let new_dogCnt = dogCnt+1;
        if( new_dogCnt<=5 ){
            // setDogCnt 함수 호출하여 new_dogCnt 에 있는 데이터를 dogCnt에 저장하기
            // setDogCnt 함수 호출 후 함수 컴포넌트는 재호출이 된다.
            setDogCnt(new_dogCnt);
        }else{
            alert("강아지 마리수는 5 마리 이상 될수는 없습니다.")
        }
    }
    // 변수 minus 선언하고 익명함수 저장하기
    const minus = ()=>{
        // new_dogCnt 변수 선언하고 dogCnt-1 의 데이터를 저장하기
        let new_dogCnt = dogCnt-1;
        if( new_dogCnt>=0 ){
            // setDogCnt 함수 호출하여 new_dogCnt 에 있는 데이터를 dogCnt에 저장하기
            // setDogCnt 함수 호출 후 함수 컴포넌트는 재호출이 된다.
            setDogCnt(new_dogCnt);
        }else{
            alert("강아지 마리수는 0 미만이 될수는 없습니다.")
        }
    }
    const init = ()=>{
        // setDogCnt 함수 호출하여 dogCnt에 0 저장하기
        // setDogCnt 함수 호출 후 함수 컴포넌트는 재호출이 된다.
        setDogCnt(0);
    }

    const updateDogCnt = (cnt)=>{
        let new_dogCnt = dogCnt + cnt;
        if( new_dogCnt>=0 ){
            // setDogCnt 함수 호출하여 new_dogCnt 에 있는 데이터를 dogCnt에 저장하기
            // setDogCnt 함수 호출 후 함수 컴포넌트는 재호출이 된다.
            setDogCnt(new_dogCnt);
        }else{
            alert("강아지 마리수는 0 미만이 될수는 없습니다.")
        }
    }

    // 리턴 구문 선언.
    // 함수 컴포넌트는 리턴 구문 안에 JSX 라는 문법이 등장한다. 
    // JSX 문법의 실행 결과가 웹 화면에 출력된다.
    return (
        <>
            {/* 변수 dogCnt 안의 데이터를 표현하기 */}
            {/* class 속성값을 주고 싶을 때는 className 을 써야한다. class 는 리액트에서 다른 키워드로 쓰고있다. */}
            <div className="dogCnt">강아지 마리 수 : {dogCnt}<br/></div>
            {/* 버튼 태그 선언하고 이 버튼을 클릭하면 onClick 안의 익명함수 호출하기 */}
            {/* 이런 식으로 onClick 안에 익명함수를 바로 넣을 수도 있다. */}
            {/* <input type="button" value="+" onClick={{add}}/>&nbsp; */}
            {/* <input type="button" value="+" onClick={()=>{if(dogCnt>=5){alert("안돼!")} else{setDogCnt(dogCnt+1);}}}/>&nbsp; */}
            <input type="button" value="+" onClick={()=>{updateDogCnt(+1)}}/>&nbsp;
            {/* 버튼 태그 선언하고 이 버튼을 클릭하면 minus 변수 안의 익명함수 호출하기 */}
            {/* <input type="button" value="-" onClick={{minus}}/>&nbsp; */}
            <input type="button" value="-" onClick={()=>{updateDogCnt(-1)}}/>&nbsp;
            {/* 버튼 태그 선언하고 이 버튼을 클릭하면 init 변수 안의 익명함수 호출하기 */}
            {/* style 속성값은 Object 객체 형태로 주어야한다. style={{CSS속성명:'설정문자',CSS속성명:'설정문자',~}} */}
            <input type="button" value="초기화" onClick={init} style={{cursor:"pointer"}}/>
        </>
    );
}
// Dog 컴포넌트를 기본적으로 수출하기
// <참고> 함수 컴포넌트의 이름은 관용적으로 대문자이다.
// <참고> 모든 프로그램의 단위 프로그램은 관용적으로 대문자이다.
export default Dog;