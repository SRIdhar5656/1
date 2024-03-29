import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import css from "./Addtask.css";
import { addTaskToList } from "../slices/taskslice";
import { useDispatch } from "react-redux";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaHome  } from 'react-icons/fa';
// import { GiSpinningBlades } from "react-icons/gi";
// import { GiAbstract086 } from "react-icons/gi";


const Addtask = () => {

    const dispatch = useDispatch()

     const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')


    const addTask = (e) => {
        e.preventDefault()
     console.log({title,description})
     dispatch(addTaskToList({title,description}))
     setTitle('')
     setDescription('')
     
     }
  return (
   
<section>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>ENTER PROJECT DETAILS </Form.Label>
      <Form.Control type="text" placeholder="Enter project details" value={title}onChange={(e) => setTitle(e.target.value)} />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>ENTER EQUIPMENT DETAILS</Form.Label>
      <Form.Control type="text" placeholder="enter equipment details"value={description}onChange={(e) => setDescription(e.target.value)} />
    </Form.Group>
    
    <Button variant="primary" type="submit" onClick={(e) =>addTask(e)}>
      Submit
    </Button>
  </Form>
  </section>


//    <Form className="container">
   
//    {/* <img src="dgg.jpg"></img> */}
//    <label >Enter Project Name: 	
//        <br></br> <GiSpinningBlades />
//  <input type="text" placeholder="Enter Project Name" value={title} onChange={(e) =>setTitle(e.target.value)} />
//       </label> <br></br> 
//       <br></br>  <label>Enter Equipment Name: 
//        <br></br>  <GiAbstract086 /> <input type="text" placeholder="Enter Equipment Name" value={description} onChange={(e) =>setDescription(e.target.value)}  />
//       </label>
//       <br></br>
//       {/* <br></br> <label>Enter Authored Name: 
//        <br></br>  
//        <GiAbstract086 /><input type="text" />
//       </label> <br></br>
//       <br></br>  */}
//      <br></br> <button className="one" type="submit" onClick={(e) =>addTask(e)}>submit </button>
//    </Form>
   
   
  );
};



export default Addtask;