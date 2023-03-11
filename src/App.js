const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hellow {props.name}</p>
      <p>I am a sentient being of {props.age} age, existanceEW</p>
    </div>
  )
}

const App = () => { 
  const name = 'peietiez'
  const age = 143

  return (
    <di>
      <h1>Grettings</h1>
      <Hello name='George' age={54+13}/>
      <Hello name='dingle berry' age={5}/>
      <Hello name={name} age={age}/>

    </di>
  )
}

export default App;
