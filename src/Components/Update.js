import { useState, useContext, useEffect } from "react";
import { StudentContext } from "./StudentContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./OldComponents/Background.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
function Update() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [students, setStudents] = useContext(StudentContext);

  const [stu, setStu] = useState({ name: "", birthdate: "", mentor: "", grade: "" });

  const handelInput = (e) => {
    setStu({ ...stu, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  //! Importing the Existing Student Data From Context...

  useEffect(() => {
    students.forEach((student) => {
      if (student.id === id) {
        console.log("Id Matched :", student.id, "=", id);

        setStu({
          name: student.name,
          birthdate: student.birthdate,
          mentor: student.mentor,
          grade: student.grade,
        });
      }
    });
  }, [id, students]);

  const handleSubmit = () => {
    // console.log("Update Clicked");
    if (stu.name ===''|| stu.birthdate==='' || stu.grade==='' || stu.mentor==='') {
    return toast.warning("Please Fill All the Data");
      
    }else{
    setStudents((student)=>
    students.map((value, index)=>
      value.id===id ? {
              id: id,
              name: stu.name,
              birthdate: stu.birthdate,
              grade: stu.grade,
              mentor: stu.mentor,
            }
          : value
    ))
    // console.log("Condition is Satisfied");
    navigate("/students");
    // console.log(students);
    return toast.success("Student Details Updated Sucessfully");
    }
  };

  return (
    <div className="inputfleids">

      <Box className="flex2" component="form" sx={{ "& > :not(style)": { m: 2, width: "40ch" } }} noValidate autoComplete="off" >
        <TextField className="in1" id="outlined-basic" name="name" value={stu.name} onChange={handelInput} label="Name" variant="outlined"/>
        <TextField className="in2" id="outlined-basic" name="birthdate" value={stu.birthdate} onChange={handelInput} label="Birth Date" variant="outlined" />
        <TextField className="in3" id="outlined-basic" name="grade" value={stu.grade} onChange={handelInput} label="Grade" variant="outlined"/>
        <TextField  className="in4"  id="outlined-basic" name="mentor" value={stu.mentor} onChange={handelInput} label="Mentor" variant="outlined"/>
      </Box>

      <button className="close"> <Link to="/students" style={{ textDecoration: "none", color: "black" }}> Close </Link> </button>
      <button className="update" onClick={handleSubmit}> Update </button>
    </div>
  );
}

export default Update;
