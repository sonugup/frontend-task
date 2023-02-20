import React, {useState} from 'react'

const TaskInput = ({handleAddTask}) => {
  const [text, setText] = useState("")

  const handlClick = () => {
    if(text){
      handleAddTask(text);
      setText("")
    }
  }
  return (
    <div>
      <input type="text" name="task" onChange={(e) => setText(e.target.value)} id="inp" placeholder='Enter the Task '/>
      <button className='btn' onClick={handlClick}>Add</button>
    </div>
  )
}

export default TaskInput
