// import React,{useState} from "react";
// import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
// import css from'./Tasklist.css';
// import { FaEdit } from "react-icons/fa";
// import { MdDeleteForever } from "react-icons/md";
import Button from 'react-bootstrap/Button';
//import Modal from "react-bootstrap/Modal";
import MyVerticallyCenteredModal from "./Updatetask";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTask,removeTaskFromList, getTaskfromserver } from "../slices/taskslice";


// import MyVerticallyCenteredModal from './components/UpdateTask';
const Taskslist = () => {

  const {tasklist} = useSelector((state)=>state.tasks)
  const dispatch = useDispatch()


const updateTask = (task) => {
  console.log("update the task")
  setModalShow(true)
  dispatch(setSelectedTask(task))
}
useEffect(() =>{
  dispatch(getTaskfromserver())
},[dispatch])


const Deletetask = (task) => {
  console.log("Delete the task")
  dispatch(removeTaskFromList(task))
}
const[modalShow,setModalShow] = useState('')
    return (
       <>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Project Name</th>
          <th>Equipment Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
{
  tasklist && tasklist.map ((task,index) => {
    return (
      <tr key={task.id}>
      <td>{index + 1}</td>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>  <Button variant="primary" onClick={()=>updateTask(task)}><i className="bi bi-pencil-square"></i> </Button> <span></span>
          <Button variant="danger" onClick={()=>Deletetask(task)} ><i className="bi bi-trash-fill"></i></Button>
      </td>
    </tr>
    )
  })
}


       
        {/* <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td><Button variant="primary" onClick={()=>updateTask()}><i className="bi bi-pencil-square"></i> </Button> <span></span>
              <Button variant="danger" onClick={()=>Deletetask()}><i className="bi bi-trash-fill"></i></Button></td>
        </tr>
         */}
      </tbody>
    </Table>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
      );
    }


  

 export default Taskslist;