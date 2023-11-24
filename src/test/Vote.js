import React from 'react';
// 'react' 라는 이름의 모듈에서 수출하는 useState 라는 함수를
// 수입해서 변수 useState 에 저장하기
import {useState} from 'react';

// Vote 라는 이름의 컴포넌트 선언
// (리액트에서 사용하는 단위 프로그램이 컴포넌트이다.)
// return() 가 있으면, return(JSX 문법) 이 나오면 단순 익명함수가 아니라 컴포넌트이다.
const Vote = () => {
    const [voteCntJson, setVoteCnt] = useState({ age20: 0, age30: 0, age40: 0 });

    const updateVoteCnt = (age) => {
        setVoteCnt(ageVoteCnt => ({
            ...ageVoteCnt,
            [age]: ageVoteCnt[age] + 1
        }));
    }

    

    const init = () => {
        setVoteCnt({
            age20: 0,
            age30: 0,
            age40: 0
        });
    }
    return (
        <>
            <button onClick={() => { updateVoteCnt('age20') }}>+</button>&nbsp; 20대 : {voteCntJson.age20} 명 투표<br/>
            <button onClick={() => { updateVoteCnt('age30') }}>+</button>&nbsp; 30대 : {voteCntJson.age30} 명 투표<br/>
            <button onClick={() => { updateVoteCnt('age40') }}>+</button>&nbsp; 40대 : {voteCntJson.age40} 명 투표<br/>
            <input type="button" value="초기화" onClick={init} style={{cursor:"pointer"}}/>
        </>
    );


        // vote20Cnt 변수, setvote20Cnt 변수 선언하기. 
        // useState(0) 함수 호출하여 얻은 Array 객체 안에서
        // 1번째 데이터를 복사해서 vote20Cnt 변수에 저장하기
        // 2번째 데이터를 복사해서 setvote20Cnt 변수에 저장하기
        // vote20Cnt 변수에는 0이 초기화돼서 저장되고
        // setvote20Cnt 변수에는 vote20Cnt 변수 안의 데이터를 수정하는 익명함수가 저장됨.
        // 이후부터 setvote20Cnt(~) 라는 코딩이 호출되면
        // vote20Cnt 변수 안의 데이터가 갱신되고 함수 컴포너트가 재호출된다.
    // const [vote20Cnt,setvote20Cnt] = useState(0);
    // const [vote30Cnt,setvote30Cnt] = useState(0);
    // const [vote40Cnt,setvote40Cnt] = useState(0);

        // 변수 updateVote20Cnt 선언하고 익명함수 저장하기
    // const updateVote20Cnt = (cnt)=>{
    //     let new_20Cnt = vote20Cnt + cnt;
    //         setvote20Cnt(new_20Cnt);
    // }

        // 변수 updateVote30Cnt 선언하고 익명함수 저장하기
    // const updateVote30Cnt = (cnt)=>{
    //     let new_30Cnt = vote30Cnt + cnt;
    //         setvote30Cnt(new_30Cnt);
    // }
    
        // 변수 updateVote40Cnt 선언하고 익명함수 저장하기
    // const updateVote40Cnt = (cnt)=>{
    //     let new_40Cnt = vote40Cnt + cnt;
    //         setvote40Cnt(new_40Cnt);
    // }

        // 변수 init 선언하고 익명함수 저장하기
    // const init = ()=>{
    //     setvote20Cnt(0);
    //     setvote30Cnt(0);
    //     setvote40Cnt(0);
    // }

        // 리턴 구문 선언.
        // 함수 컴포넌트는 리턴 구문 안에 JSX 문법이 등장한다.
        // JSX 문법의 실행 결과가 웹화면에 출력된다고 보면 된다.
    // return (
    //     <>
            // 변수 updateVote20Cnt, 변수 updateVote20Cnt 안의 데이터를 표현하기
    //       <button onClick={()=>{updateVote20Cnt(+1)}}>+</button>&nbsp; 20대 : {vote20Cnt} 명 투표<br/>
            // 변수 updateVote30Cnt, 변수 updateVote30Cnt 안의 데이터를 표현하기
    //       <button onClick={()=>{updateVote30Cnt(+1)}}>+</button>&nbsp; 30대 : {vote30Cnt} 명 투표<br/>
            // 변수 updateVote40Cnt, 변수 updateVote40Cnt 안의 데이터를 표현하기
    //       <button onClick={()=>{updateVote40Cnt(+1)}}>+</button>&nbsp; 40대 : {vote40Cnt} 명 투표<br/>

            // 초기화를 클릭하면 변수 init 안의 익명함수 호출하기 
    //       <input type="button" value="초기화" onClick={init} style={{cursor:"pointer"}}/>
    //     </>
    // );
}
export default Vote;