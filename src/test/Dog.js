import React from 'react';
import {useState} from 'react';

const Dog = () => {
    //----------------------------------------------------
    // dog 변수, setDog 변수 선언하기
    //  useState(0) 함수 호출하여 얻은 Array 객체에서
    // 1번째 데이터를 dog 변수에 저장하기
    // 2번째 데이터를 setDog 변수에 저장하기
    // dog   변수에는 0 이 초기화 해서 저장되고
    // setDog 변수에는 dog   변수안의 데이터를 수정하는 익명함수가 저장됨
    // 이후 부터 setDog(~) 라는 코딩이 호출되면
    // dog   변수안의 데이터가 갱신되고 함수 컴포넌트가 재 호출된다.
    //----------------------------------------------------
    const [dogCnt,setDogCnt] = useState(0);
    const add = ()=>{
        //alert("강아지 마리수 증가")
        let new_dogCnt = dogCnt+1;
        if( new_dogCnt<=5 ){
            setDogCnt(new_dogCnt);
        }else{
            alert("강아지 마리수는 5 마리 이상 될수는 없습니다.")
        }
    }
    const minus = ()=>{
        //alert("강아지 마리수 감소")
        let new_dogCnt = dogCnt-1;
        if( new_dogCnt>0 ){
            setDogCnt(new_dogCnt);
        }else{
            alert("강아지 마리수는 0 미만이 될수는 없습니다.")
        }
    }
    //alert("배고팡")
    return (
        <>
            강아지 마리 수 : {dogCnt}<br/>
            <input type="button" value="+" onClick={add}/>&nbsp;
            <input type="button" value="-" onClick={minus}/>
        </>
    );
}
export default Dog;