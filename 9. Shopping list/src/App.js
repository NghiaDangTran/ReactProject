import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};
function App() {
  const [text, setText] = useState("")
  const [display, setDisplay] = useState(getLocalStorage())
  const [alert, setAlert] = useState(false)
  const [alertMess, setAlertMess] = useState("")
  const [alertClass, setAlertClass] = useState("")
  const [edit, setEdit] = useState(false)
  const [editAt, setEditAt] = useState(-1)
  const HandelSubmit = (e) => {
    e.preventDefault()
    if (text.length === 0) {
      setAlert(true)
      setAlertMess("Please enter value")
      setAlertClass("alert alert-danger")
      setText("")
      return
    }

    else if (text.length > 0 && !edit) {
      setDisplay([...display, text])
      setAlert(true)
      setAlertMess("Value added to the list")
      setAlertClass("alert alert-success")
      setText("")

    }
    else if (edit) {

      display.forEach((i, index) => {
        if (index === editAt)
          display[index] = text

      })



      setDisplay(display)
      setAlert(true)
      setAlertMess("Value Edit to the list")
      setAlertClass("alert alert-success")
      setText("")
      setEdit(false)
      setEditAt(-1)
      setText("")

    }
    // setText("")

  }
  const deleteList = (at) => {
    let newDisplay = display.filter((i, index) => index !== at)
    setDisplay(newDisplay)
    setAlert(true)
    setAlertMess("Delete From the")
    setAlertClass("alert alert-danger")

  }
  const EditAt = (at) => {

    setEdit(true)
    setEditAt(at)
    setText(display[at])

  }
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(display));
  }, [display]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
      setAlertMess("")
      setAlertClass("")
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])
  return <>
    <section className="section-center">
      <form action="" className="grocery-form" onSubmit={HandelSubmit}>
        {alert && <Alert alertMess={alertMess} alertClass={alertClass}  ></Alert>}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" value={text} placeholder='e.g. eggs' onChange={(e) => {
            setText(e.target.value);
          }} />
          <button className='submit-btn'>{edit ? "edit" : "submit"}</button>
        </div>
      </form>
      <div className="grocery-container">
        <div className="grocery-list">
          {display.map((data1, index) => {
            return <List key={index} data1={data1} index={index} deleteAt={deleteList} edit={setEdit} editAt={EditAt}></List>

          })}

        </div>

      </div>
      {display.length > 0 && <button className='clear-btn' onClick={() => {
        setDisplay([]);
        setAlert(true)
        setAlertMess("Delete All the list")
        setAlertClass("alert alert-danger")
      }}>clear items</button>}

    </section>
  </>

}

export default App
