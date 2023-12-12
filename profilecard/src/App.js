import "./App.css"

function App() {
  function SkillList() {
    return (
      <div className="skill-list">
        <Skill skill="React" emoji="💪" color="blue" />
        <Skill skill="HTML+CSS" emoji="💪" color="orange" />
        <Skill skill="JavaScript" emoji="💪" color="yellow" />
        <Skill skill="Svelte" emoji="👶" color="orangered" />
      </div>
    )
  }
  function Skill(props) {
    return (
      <div className="skill" style={{ backgroundColor: props.color }}>
        <span>{props.skill}</span>
        <span>{props.emoji}</span>
      </div>
    )
  }
  function Avatar() {
    return <img className="avatar" src="https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg" alt="" />
  }
  function Intro(props) {
    return (
      <div>
        <h1>{props.name}</h1>
        <p>{props.profile}</p>
      </div>
    )
  }
  return (
    <div className="App">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro
            name="Huang Ziyang"
            profile=" Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach."
          />
          <SkillList />
        </div>
      </div>
    </div>
  )
}

export default App
