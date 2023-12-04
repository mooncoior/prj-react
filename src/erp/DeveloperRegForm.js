import { useState } from 'react';
import * as cm from "../common/common";

const DeveloperRegForm = () => {
    const [values, setValues] = useState({
        dev_name: "",
        jumin_num: "",
        // 값이 중복될 가능성을 배제시키는 코드
        // 방법 2.
        // skill 을 아예 삭제시킨다.
        skill: []
    });

    const onChange = (e) => {
        setValues(  cm.getNewValues(e,values)  );
    }

    // const onChange = (e) => {
    //     let { name, value, type, checked } = e.target;
    //     let new_values;
    
    //     if (type == "checkbox") {
            //--------------------------------------------
            // 방법 2. 
            // let arr;
            // if(values[name]==undefined || values[name]==null){
                // arr = [];
            // }
            //else{
                // arr = values[name].filter(function(v,i){
                    // return v!=value
                // })
            // }
            //--------------------------------------------
        
    //         if (checked) {
            //--------------------------------------------
                    // 방법 2.
                    // arr.push(value)
                // }
                // setValues({...value,[name]:arr})
                //}
            //--------------------------------------------

    //             new_values = {
    //                 ...values,
    //                 skill: [...values.skill, value]
    //             };
    //         } else {
    //             new_values = {
    //                 ...values,
    //                 skill: values.skill.filter(skill => skill != value)
    //             };
    //         }
    //     } 
    //     else {
    //         new_values = {
    //             ...values,
    //             [name]: value
    //         };
    //     }
    //     setValues(new_values);
    // }
    

    return (
        <>
            <center>
                <table>
                    <tr>
                        <th>개발자명 :&nbsp;</th>
                        <td><input type='text' name="dev_name" onChange={onChange} /></td>
                    </tr>
                    <tr>
                        <th>주민번호 :&nbsp;</th>
                        <td><input type='text' name="jumin_num" onChange={onChange} /></td>
                    </tr>
                    <tr>
                        <th>스킬 : </th>
                        <td>
                            <input type='checkbox' name="skill" value="JSP" onChange={onChange} />JSP&nbsp;
                            <input type='checkbox' name="skill" value="ASP" onChange={onChange} />ASP&nbsp;
                            <input type='checkbox' name="skill" value="PHP" onChange={onChange} />PHP
                        </td>
                    </tr>
                </table>
            </center>
        </>
    );
};

export default DeveloperRegForm;