import React,{useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form  from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { updateTaskInList } from "../slices/taskslice";

const MyVerticallyCenteredModal  = (props) => {

  const {selectedtask} = useSelector((state)=> state.tasks)
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [id,setId] = useState(0)
    const dispatch = useDispatch()

    const updateTask = (e) => {
        props.onHide();
        dispatch(updateTaskInList({id,title,description}))
    };
     useEffect (() => {
      if(Object.keys(selectedtask).length !==0){

      
      setTitle(selectedtask.title);
      setDescription(selectedtask.description);
      setId(selectedtask.id);
    }
     },[selectedtask]);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Update TAsk
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>ENTER PROJECT DETAILS </Form.Label>
      <Form.Control type="text" placeholder="Enter project details" value={title}onChange={(e) => setTitle(e.target.value)} />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>ENTER EQUIPMENT DETAILS</Form.Label>
      <Form.Control type="text" placeholder="enter equipment details"value={description}onChange={(e) => setDescription(e.target.value)} />
    </Form.Group>
    
   
  </Form>
      </Modal.Body>
      <Modal.Footer>
        
        <div>
        <Button variant="primary" type="submit" onClick={(e) =>updateTask(e)}>
      update Task
    </Button>
    </div>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;