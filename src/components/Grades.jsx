const Grades = ({category, score, icon}) => {
  return (
    <article /* className={`grade-elements ${color}`}*/>
      <div>
        <img src={icon}/>
        <h3>{category}</h3>
      </div>
      <p><strong>{score}</strong>/100</p>
    </article>
  )
}

export default Grades