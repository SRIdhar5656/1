import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {

const {tasklist} = useSelector((state)=>state.tasks)

  return (
    <>
      <h1 className="text-center my-4 text-primary">ESSEL SYNERG TECH</h1>
      <p className="text-center lead text-primary" >{`Currently ${tasklist.length} task(s) pending`}</p>
    </>
  );
};

export default Navbar;