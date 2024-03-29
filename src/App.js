import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Addtask from './components/Addtask';
import Taskslist from './components/Tasklist';
import Container from './../node_modules/react-bootstrap/esm/Container';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


function App() {
  return ( 
    
<Container>
<Navbar />
<Addtask />
<br></br>

 <Taskslist /> 
</Container>

    
  );
}

export default App;
