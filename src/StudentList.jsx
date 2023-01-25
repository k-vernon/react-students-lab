import Student from "./Student";


function StudentList(props) {


  return (
    <>
      <div className="student-container">
      {props.students.map((student, idx) => <Student key={idx} student={student} />)}
      
      </div>
    </>
  );
}

export default StudentList;