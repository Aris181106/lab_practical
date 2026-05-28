import { useState } from "react";
function SimpleVariables (){
    const ten = "Nguyen Viet Tien";
    const tuoi = 19;
    const nganh = "CNTT";
    const laSinhVien = true;
    const monHoc = ["HTML", "CSS", "JS", "React"];
    const height = 1.70;
    const weight = 68;
    const BMI = weight / (height * height);
    const time = new Date();
    return (
        <div style={{padding : "20px"}}>
            <h1>Xin chao {ten}</h1>
            <p>Tuoi: {tuoi}</p>
            <p>Nganh: {nganh}</p>
            <p>Sinh vien: {laSinhVien ? "Co" : "Khong"}</p>
            <h2>Mon hoc yeu thich: </h2><p style={{padding : "10px", margin : "10px"}}>{monHoc.join("  - ")}</p>
            <p>BMI : {BMI} </p>
            <p>{time.toLocaleTimeString()}</p>
            {time.getHours() < 12 ? "Chao buoi sang " : time.getHours() < 18 ? "Chao buoi chieu" : "Chao buoi toi"}
        </div>
    );
}
export default SimpleVariables;