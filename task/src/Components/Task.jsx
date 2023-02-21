import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import TaskInput from './TaskInput'
import axios from "axios";
import "./task.css"
import { getTaskRequest, getTaskSuccess, getTaskFailure, postTaskRequest, postTaskSuccess, postTaskFailure } from "../Redux/action"

const Task = () => {
    const dispatch = useDispatch()
    // const isLoading=useSelector((state) => state.isLoading);

    // const task=useSelector(state => state.task);

    const { task, isLoading, isError } = useSelector((state) => {
        return {
            task: state.task,
            isLoading: state.isLoading,
            isError: state.isError,
        }
    }, shallowEqual)
    const getTask = () => {
        const getTaskReqActObj = getTaskRequest();
        dispatch(getTaskReqActObj);
        return axios.get("http://localhost:8080/task")
            .then((r) => {
                dispatch(getTaskSuccess(r.data));
            })
            .catch((e) => {
                dispatch(getTaskFailure())
                console.log(e)
            })
    };

    const addTask = (title) => {
        if (title) {
            const payload = {
                title,
            }

            dispatch(postTaskRequest());
            return axios.post("http://localhost:8080/task", payload).then(r => {
                dispatch(postTaskSuccess(r.data))
            }).catch(e => {
                dispatch(postTaskFailure())
                console.log(e)
            })
        }

    }

    const handleAddTask = (text) => {
        addTask(text).then(() => getTask()).then(() => {
            console.log("data add successfully")
        });
    }



    useEffect(() => {
        getTask()
    }, [])
    return (
        <div className='task'>
            <h1 className='nav'>React js Frontend Task</h1>
            <div className='cont'>
                {
                    isLoading ? <div>Loading...</div> : <TaskInput handleAddTask={handleAddTask} />
                }
                {
                    task.length > 0 && task.map((item, id) => {
                        return (
                            <div className="box">
                                <tr key={id}>
                                    <td> {item.title} </td>
                                </tr>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Task
