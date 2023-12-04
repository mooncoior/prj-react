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

    // 기존 입력 양식 태그들에 입력/선택된 데이터를 저장한 Object 객체를 복사한
    // 새로운 Object 객체에 새롭게 입력/선택된 데이터를 덮어씌우고
    // 새로운 Object 객체를 리턴하기
    // 매개변수 e 는 입력 양식 태그에 발생한 이벤트를 관리하는 객체
    // values 는 이벤트 발생 전에 입력 입력 양식 태그들에 입력/선택된 데이터를 저장한 Object 객체
export const getNewValues = (e, values) => {
    // 이벤트가 발생한 입력 양식 태그의 출력물 관리 객체에서
    // 각 객체의 속성변수 안의 데이터를 이름이 일치하는 지역변수에 저장하기
    let { name, value, type, checked } = e.target;
    let new_values;

    // 만약에 변수 type 값이 "checkbox" 면,
    // 즉, 이벤트가 발생한 입력양식이 "checkbox" 면
    if (type === "checkbox") {
        if (checked) {
            new_values = {
                ...values,
                skill: [...values.skill, value],
            };
        }
        else {
            new_values = {
                ...values,
                skill: values.skill.filter((skill) => skill !== value),
            };
        }
    } 
    // 변수 type 값이 "checkbox" 가 아니면 
    else {
        new_values = {
            ...values,
            [name]: value,
        };
    }
    // 변수 new_values 안의 값 리턴하기
    return new_values;
    
};