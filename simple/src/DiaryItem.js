import { useState } from "react";
import App from "./App";


const DiaryItem = ({onDelete,author,content,created_date,emotion, id}) => {
    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);
    const [localContent, setLocalContent] = useState("");


    return <div className="DiaryItem">
        <div className="info">
            <span>작성자 : {author} | 감정점수 : {emotion}</span>
            <br />
            <span className="date">{new Date(created_date).toLocaleString()}</span>

        </div>
        <div className="content">
            {isEdit ? <>
            <textarea value={localContent}
             onChange={(e) => setLocalContent(e.target.value)}/></>
             : <>{content}</>}
        </div>
        <button onClick={()=> {
            
            if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
                onDelete(id);
            }
        }}>삭제하기</button>
        <button onClick={toggleIsEdit}>수정하기</button>
    </div>
}

export default DiaryItem;