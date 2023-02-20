import React, {useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import TaskInput from './TaskInput'
import axios from "axios"
import {getTaskRequest, getTaskSuccess, GetTaskFailure} from "../Redux/action"

const Task = () => {
    const dispatch=useDispatch()
    const isLoading=useSelector((state) => state.isLoading);

    const task=useSelector(state => state.task);

    // const {task, isLoading, isError} = useSelector((state) => {
    //     return {
    //         task: state.Task,
    //         isLoading:state.isLoading,
    //         isError:state.isError,
    //     }
    // }, shallowEqual)
    const getTask = () => {
        const getTaskReqActObj=getTaskRequest();
        dispatch(getTaskReqActObj);
        axios.get("http://localhost:8080/task")
        .then((r) => {
            dispatch(getTaskSuccess(r.data));
        })
        .catch((e) => {
            dispatch(getTaskRequest())
            console.log(e)
        })
    };

    useEffect(() => {
    getTask()
    }, [])
  return (
    <div>
      <h1>Task</h1>
      {
        isLoading ? <div>Loading...</div>: <TaskInput/>
      }
      {
        task.length> 0 && task.map((item) => {
            return (
                <div>
                    <h3> {item.title} </h3>
                </div>
            )
        })
      }
      
    </div>
  )
}

export default Task
