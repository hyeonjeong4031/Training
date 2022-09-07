import React, { useState, useEffect  } from "react";
import CertiCard from "./CertiCard";
import CertiEditForm from "./CertiEditForm"
import * as Api from "../../api"

function Certi({portfolioOwnerId, isEditable}){
    const [isEditing, setIsEditing] = useState(false);
    const [certi, setCerti] = useState(null);
    const [user, setUser] = useState(null);
    // user State가 필요한건지 아닌지 모르겠음 ㅜㅜㅡㅠㅜㅡㅜㅡ
    //portfolioOwnerId가 user_id임 다시 생각해보자
console.log("🐣Certi,", isEditable)
    useEffect(()=>{
        console.log(1);
        Api.get("/certificate/certificatelist").then((res)=>
        setCerti(res.data));
        // console.log(res.data);
        console.log(1);
    },[portfolioOwnerId])



    return (
        <>
        {isEditing ? (
            console.log("hello??"),
            
            <CertiEditForm
            Certi = {certi}
            setIsEditing = {setIsEditing}
            setCerti = {setCerti}
            />
            //수정할 카드에 해당하는 user가 위의 user겠지? 아닌가
        ):(
            console.log("123portfolioOwnerId!!!!!!:",portfolioOwnerId),
            console.log("🐰user:,", certi),

            <CertiCard
            user={user}
            certi = {certi}//이게 뭔지 모르겠음.......
            setIsEditing={setIsEditing}
            isEditable={isEditable}/>
        )}
        </>
    )
}

export default Certi;