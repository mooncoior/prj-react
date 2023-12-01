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

export const getNewValues = (e, values) => {
    let { name, value, type, checked } = e.target;
    let new_values;

    if (type === "checkbox") {
        if (checked) {
            new_values = {
                ...values,
                skill: [...values.skill, value],
            };
        } else {
            new_values = {
                ...values,
                skill: values.skill.filter((skill) => skill !== value),
            };
        }
    } else {
        new_values = {
            ...values,
            [name]: value,
        };
    }
    return new_values;
    
};