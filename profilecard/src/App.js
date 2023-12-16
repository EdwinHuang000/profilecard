import "./App.css"

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
]

function App() {
  const skillDatas = skills
  const numSkills = skills.length

  function SkillList() {
    return (
      <div className="skill-list">
        {skillDatas.map(skillData => (
          <Skill skill={skillData.skill} color={skillData.color} level={skillData.level} />
        ))}
      </div>
    )
  }
  function Skill({ skill, color, level }) {
    return (
      <div className="skill" style={{ backgroundColor: color }}>
        <span>{skill}</span>
        <span>
          {" "}
          {level === "beginner" && "👶"}
          {level === "intermediate" && "👍"}
          {level === "advanced" && "💪"}
        </span>
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
