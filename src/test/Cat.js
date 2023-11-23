import React from 'react';
import {useState} from 'react';


const Cat = () => {
    //----------------------------------------------------
    // catCnt 변수, setCatCnt 변수 선언하기
    // useState({mCatCnt:0,wCatCnt:0}) 함수 호출하여 얻은 Array 객체에서
    // 1번째 데이터를 catCnt 변수에 저장하기
    // 2번째 데이터를 setCatCnt 변수에 저장하기
    // catCnt   변수에는 {mCatCnt:0,wCatCnt:0} 이 초기화 해서 저장되고
    // setCatCnt 변수에는 catCnt 변수안의 데이터를 수정하는 익명함수가 저장됨
    // 이후 부터 setCatCnt(~) 라는 코딩이 호출되면
    // catCnt   변수안의 데이터가 갱신되고 함수 컴포넌트가 재 호출된다.
    //----------------------------------------------------
    const [catCnt,setCatCnt] = useState({mCatCnt:0,wCatCnt:0});



    const setCat = (w_or_m,cnt)=>{
        if(w_or_m=="m"){
            let new_mCatCnt = catCnt.mCatCnt+cnt;
            setCatCnt({
                ...catCnt
                ,mCatCnt:new_mCatCnt
            });
        }
        else{
            let new_wCatCnt = catCnt.wCatCnt+cnt;
            setCatCnt({
                ...catCnt
                ,wCatCnt:new_wCatCnt
            });
        }
    }
    return (
        <>
            암 고양이 마리 수 : {catCnt.wCatCnt}
            <input type="button" value="+" onClick={()=>{setCat("w",1);}}/>&nbsp;
            <input type="button" value="-" onClick={()=>{setCat("w",-1);}}/><br/>
            숫 고양이 마리 수 : {catCnt.mCatCnt}
            <input type="button" value="+" onClick={()=>{setCat("m",1);}}/>&nbsp;
            <input type="button" value="-" onClick={()=>{setCat("m",-1);}}/><br/>
        </>
    );
}
export default Cat;



/*
const Cat = () => {
    const [wCatCnt,setWCatCnt] = useState(0);
    const [mCatCnt,setMCatCnt] = useState(0);

    const wadd = ()=>{
        let new_wCatCnt = wCatCnt + 1;
        setWCatCnt(new_wCatCnt);
    }
    const wminus = ()=>{
        let new_wCatCnt = wCatCnt - 1;
        setWCatCnt(new_wCatCnt);
    }
    const madd = ()=>{
        let new_mCatCnt = mCatCnt + 1;
        setMCatCnt(new_mCatCnt);
    }
    const mminus = ()=>{
        let new_mCatCnt = mCatCnt - 1;
        setMCatCnt(new_mCatCnt);
    }
    return (
        <>
            암 고양이 마리 수 : {wCatCnt}
            <input type="button" value="+" onClick={wadd}/>&nbsp;
            <input type="button" value="-" onClick={wminus}/><br/>
            숫 고양이 마리 수 : {mCatCnt}
            <input type="button" value="+" onClick={madd}/>&nbsp;
            <input type="button" value="-" onClick={mminus}/><br/>
        </>
    );
}
*/