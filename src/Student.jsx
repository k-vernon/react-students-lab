import Score from "./Score";

function Student(props) {
  console.log(props)
  return (
    <>
     
      <div className="student-card">
        <h1>{props.student.name}</h1>
        <p>{props.student.bio}</p>
        <div className="scores">
        {props.student.scores.map((score, idx) => <Score key={idx} score={score} />)}
        </div>
      </div>
   
    </>
  );
}


export default Student;