import  axios from 'axios'

const baseUrl = "https://checklist-reminder.onrender.com"

const getAllCheckList =(setCheckList) => {

axios.get(baseUrl)
  .then(({data}) => {
    console.log('data--->', data);
    setCheckList(data)
  })
}


const addCheckList = (text, setText, setCheckList) => {
  axios.post(`${baseUrl}/save`, {text})
  .then((data) => {
    console.log(data);
    setText("")
    getAllCheckList(setCheckList)
  })
  .catch((err) => console.log(err))
}

const updateCheckList = (checkListId, text, setCheckList, setText, setIsUpdating) => {
  axios.post(`${baseUrl}/update`, {_id: checkListId, text})
  .then((data) => {
    setText("")
    setIsUpdating(false)
    getAllCheckList(setCheckList)
  })
  .catch((err) => console.log(err))
}


const deleteCheckList = (_id, setCheckList) => {
  axios.post(`${baseUrl}/delete`, {_id})
  .then((data) => {
    console.log(data)
    getAllCheckList(setCheckList)
  })
  .catch((err) => console.log(err))
}


export {getAllCheckList, addCheckList, updateCheckList, deleteCheckList}