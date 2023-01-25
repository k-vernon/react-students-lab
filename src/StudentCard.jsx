import { useState } from "react";
import { studentList } from "./data";
import StudentList from "./StudentList";

function StudentCard() {

  const [studentData] = useState(studentList)

  return (
    <>
      <div >
        <div><StudentList  students={studentData}/></div>
      </div>
    </>
  );
}

export default StudentCard;