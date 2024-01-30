import { useEffect, useState } from "react";
import CheckList from "./component/CheckList";
import { addCheckList, getAllCheckList, updateCheckList, deleteCheckList } from "./utils/HandleApi";

function App() {

  const [checkList, setCheckList] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [checkListId, setCheckListId] = useState("")

  useEffect(() => {
    getAllCheckList(setCheckList)
  }, [])

  const updateMode = (_id, text) =>{
    setIsUpdating(true)
    setText(text)
    setCheckListId(_id)
  }

  return (
    <div className="App">

        <div className="container">
          <h1>CheckList Reminder</h1>
      
            <div className="top">
              <input type="text" placeholder="Add CheckList" value={text} onChange={(e) => setText(e.target.value)}/>

              <div className="add" onClick={isUpdating ? 
              () => updateCheckList(checkListId, text, setCheckList, setText, setIsUpdating) 
                : () => addCheckList(text, setText, setCheckList)}>
                {isUpdating? "Update" : "Add"}
                </div>
            </div>
              <div className="list">


                {checkList.map((item) => <CheckList 
                key = {item._id} 
                text={item.text}
                updateMode={() => updateMode(item._id, item.text)}
                deleteChecklist={() => deleteCheckList(item._id, setCheckList)}/> )}
              </div>
         </div>

    </div>
  ); 
}

export default App;
