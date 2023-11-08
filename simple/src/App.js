import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList.js';


const dummyList = [
  {
    id:1,
    author: "김소연",
    content: "하이 1",
    emotion: 5,
    created_date:new Date(),
  },
  {
    id:2,
    author: "홍길동",
    content: "하이 2",
    emotion: 4,
    created_date:new Date().getTime(),
  },
  {
    id:3,
    author: "아무개",
    content: "하이 3",
    emotion: 1,
    created_date:new Date().getTime(),
  }
];
const App = () => {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList = {dummyList}/>
    </div>
  );
}
  

export default App;
