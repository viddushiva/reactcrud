import React, { createContext, useState } from "react";

//! This Component Contatins Student Data

export const StudentContext = createContext();

export const StudentProvider = (props) => {
  const [users, setUsers] = useState([
    {
      name: "Natasha",
      email:"natasha@gmail.com",
      password:"natasha123",
      birthdate: "9 - 27 - 1990",
      grade: "A",
      mentor: "Pooja",
      id: "ST001",
    },
    {
      name: "Nimisha",
      email:"nimisha@gmail.com",
      password:"nimisha123",
      birthdate: "8 - 20 - 1990",
      grade: "A",
      mentor: "Pooja",
      id: "ST002",
    },
    {
      name: "Nisha",
      email:"nisha@gmail.com",
      password:"nisha123",
      birthdate: "9 - 21 - 1990",
      grade: "A",
      mentor: "Lavanya",
      id: "ST003",
    },
    {
      name: "Saira",
      email:"saira@gmail.com",
      password:"saira123",
      birthdate: "7 - 03 - 1990",
      grade: "A",
      mentor: "Lavanya",
      id: "ST004",
    },
    {
      name: "Mala",
      email:"mala@gmail.com",
      password:"mla123",
      birthdate: "9 - 05 - 1990",
      grade: "B",
      mentor: "Pooja",
      id: "ST005",
    },
    {
      name: "Mimi",
      email:"a@gmail.com",
      password:"a123",
      birthdate: "9 - 27 - 1990",
      grade: "B",
      mentor: "Pooja",
      id: "ST006",
    },
    {
      name: "Kaira",
      email:"123@gmail.com",
      password:"mla123",
      birthdate: "10 - 02 - 1990",
      grade: "B",
      mentor: "Priya",
      id: "ST007",
    },
  ]);

  return (
    <StudentContext.Provider value={[users, setUsers]}>
      {props.children}
    </StudentContext.Provider>
  );
};
