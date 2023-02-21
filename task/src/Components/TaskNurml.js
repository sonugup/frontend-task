import React, { useState, useEffect } from "react";
import "./TaskNurml.css";
const TaskNurml = () => {
  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");
  // const [addtitle, setAddtitle]=useState("")
  const [taskId, setTaskId] = useState(null);

  const getTask = () => {
    fetch("http://localhost:8080/task").then((result) => {
      result.json().then((res) => {
        setTasks(res);
      });
    });
  };

  const seveUser = () => {
    console.log(title);
    const data = { title };
    fetch("http://localhost:8080/task", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((res) => {
        console.log(res);

        setTitle("");
        getTask();
      });
    });
  };

  const updateUser = () => {
    console.log(title);
    const data = { title, taskId };
    fetch(`http://localhost:8080/task/${taskId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((res) => {
        console.log(res);
        getTask();
        setTitle("");
      });
    });
  };
  const deleteUser = (id) => {
    fetch(`http://localhost:8080/task/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.log(res);
        getTask();
      });
    });
  };

  const selectUser = (id) => {
    const item = tasks[id - 1];
    setTitle(item.title);
    setTaskId(item.id);
  };
  useEffect(() => {
    getTask();
  }, []);
  return (
    <div className="task">
      <div>
        <h1>Post API</h1>
        <input
          type="text"
          className="inp"
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Enter The Task"
        />
        <button className="btn" onClick={seveUser}>
          Add
        </button>
      </div>
      <div>
        <input
          type="text"
          className="inp"
          value={title}
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Update The Task"
        />
        <button className="btn" onClick={updateUser}>
          Update
        </button>
      </div>

      <table className="cont">
        <tbody>
          <tr className="box">
            <td>ID</td>
            <td>Title</td>
            <td>Remove</td>
            <td>Patch</td>
          </tr>

          {tasks.map((item, index) => {
            return (
              <tr key={index} className="box">
                <td> {item.id} </td>
                <td> {item.title} </td>
                <td>
                  {" "}
                  <button className="btn1" onClick={() => deleteUser(item.id)}>
                    Delete
                  </button>{" "}
                </td>
                <td>
                  {" "}
                  <button className="btn2" onClick={() => selectUser(item.id)}>
                    Update
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TaskNurml;
