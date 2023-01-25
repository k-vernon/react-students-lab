function Score(props) {
  console.log("Score Component", props)
  return (
    
    <div>
      <p className="score-date">{props.score.date}</p>
      <p>{props.score.score}</p>
    </div>
    
  );
}

export default Score;