import React from 'react';
// 'react' 라는 이름의 모듈에서 수출하는 useState 라는 함수를
// 수입해서 변수 useState 에 저장하기
import {useState} from 'react';

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


    // const [vote20Cnt,setvote20Cnt] = useState(0);
    // const [vote30Cnt,setvote30Cnt] = useState(0);
    // const [vote40Cnt,setvote40Cnt] = useState(0);
    // const updateVote20Cnt = (cnt)=>{
    //     let new_20Cnt = vote20Cnt + cnt;
    //         setvote20Cnt(new_20Cnt);
    // }
    // const updateVote30Cnt = (cnt)=>{
    //     let new_30Cnt = vote30Cnt + cnt;
    //         setvote30Cnt(new_30Cnt);
    // }
    // const updateVote40Cnt = (cnt)=>{
    //     let new_40Cnt = vote40Cnt + cnt;
    //         setvote40Cnt(new_40Cnt);
    // }

    // const init = ()=>{
    //     setvote20Cnt(0);
    //     setvote30Cnt(0);
    //     setvote40Cnt(0);
    // }
    // return (
    //     <>
    //       <button onClick={()=>{updateVote20Cnt(+1)}}>+</button>&nbsp; 20대 : {vote20Cnt} 명 투표<br/>
    //       <button onClick={()=>{updateVote30Cnt(+1)}}>+</button>&nbsp; 30대 : {vote30Cnt} 명 투표<br/>
    //       <button onClick={()=>{updateVote40Cnt(+1)}}>+</button>&nbsp; 40대 : {vote40Cnt} 명 투표<br/>

    //       <input type="button" value="초기화" onClick={init} style={{cursor:"pointer"}}/>
    //     </>
    // );
}
export default Vote;