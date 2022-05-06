import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./OldComponents/Background.css";
import { useState } from "react";
import { useContext } from "react";
import { StudentContext } from "./StudentContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [birthdate, setbirthdate] = useState("");
  const [grade, setgrade] = useState("");
  const [mentor, setmentor] = useState("");

  const navigate = useNavigate();

  const [students, setStudents] = useContext(StudentContext);

  const handleSubmit = (e) => {
    if (name ===''|| birthdate==='' || grade==='' || mentor==='') {
        return toast.warning("Please Fill All the Data");
    }else{
    e.preventDefault();
    setStudents([
      ...students,
      {
        name: name,
        birthdate: birthdate,
        grade: grade,
        mentor: mentor,
        id: (students.length + 1).toString(),
      },
    ]);
    // console.log("Add Student Button Clicked");
    // console.log(students);
    navigate("/students");
    return toast.success("Student added Sucessfully",);
  };}

  return (
    <div className="inputfleids">

      <Box className="flex2" component="form" sx={{ "& > :not(style)": { m: 2, width: "40ch" } }} noValidate autoComplete="off" >
        <TextField className="in1" id="outlined-basic" value={name} onChange={(e) => setName(e.target.value)} label="Name" variant="outlined"/>
        <TextField className="in2" id="outlined-basic" value={birthdate} onChange={(e) => setbirthdate(e.target.value)} label="Date of Birth" variant="outlined"/>
        <TextField className="in3" id="outlined-basic" value={grade} onChange={(e) => setgrade(e.target.value)} label="Grade" variant="outlined"/>
        <TextField className="in4" id="outlined-basic" value={mentor} onChange={(e) => setmentor(e.target.value)} label="Mentor" variant="outlined"/>
    </Box>

      <button className="close"><Link to="/students" style={{ textDecoration: "none", color: "black" }}> Close </Link> </button>
      <button className="update" onClick={handleSubmit}> Submit </button>
    </div>
  );
};

export default AddStudent;
