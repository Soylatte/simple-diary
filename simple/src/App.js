import { useState, useRef } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList.js';




// const dummyList = [
//   {
//     id:1,
//     author: "김소연",
//     content: "하이 1",
//     emotion: 5,
//     created_date:new Date(),
//   },
//   {
//     id:2,
//     author: "홍길동",
//     content: "하이 2",
//     emotion: 4,
//     created_date:new Date().getTime(),
//   },
//   {
//     id:3,
//     author: "아무개",
//     content: "하이 3",
//     emotion: 1,
//     created_date:new Date().getTime(),
//   }
// ];

function App (){
  const [data,setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author,content,emotion) =>{
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current,
    };
    dataId.current += 1;
    setData([newItem,...data]);
  };

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it)=> it.id !== targetId);
    console.log(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) => 
      it.id === targetId ? {...it, content: newContent} : it
      )
    );
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onEdit={onEdit} onDelete={onDelete} diaryList={data}/>
    </div>
  );
};

 
  

export default App;
