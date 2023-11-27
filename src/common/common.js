export function checkVal(
    val // 검사할 문자열
    ,regExp // RegExp 객체
    ,alertMsg   // 경고 문자
){
    if(val==undefined||val==null){
        val="";
    }
    if(regExp.test(val)==false){
        alert(alertMsg);
        return true;
    }
    return false;
}