import './App.css';
import Navar from './componets/navavr/navar.js'
import Accordeon from './componets/cuerpo/cuerpo.js'
import Boton from './componets/botones/botones.js'
import Carrucel from './componets/carrucel/carrucel.js'
/* const Header =({course}) => <h1>{course.name}</h1>


const Content =({parts}) => 
    <>
      {parts.map((notes) => 
          <div key={notes.name+notes.exercises}>
            <h2>{notes.name}</h2>
            <h3>{notes.exercises}</h3>
          </div>
        )
      }
    </>

const Total =({parts})=>
  {
    console.log(parts)
    var acumulado = 0
    parts.map((suma) => 
      acumulado += suma.exercises
    )
    return(
      <>
        <h1>el acumulado es {acumulado}</h1>
      </>
    )
  } */

const App =()=> {
  
  /* const course ={
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  ) */
  
  const name = [
    "carlos",
    "estefani",
    "javier",
    "judio",
    "fernanfloo",
    "cachimbo",
    "josue",
    "angie"
  ]
  const acordeon = [
    {
      titulo:"hola",
      descrip:"asta luego",
    },
    {
      titulo:"sabes cuanto es 4 + 4",
      descrip:" es 8",
    },
    {
      titulo:"quien ganara las elecciones",
      descrip:"no lo se ",
    },
    {
      titulo:"como se llama tu mascota",
      descrip:"bob",
    },
    {
      titulo:"xddddd",
      descrip:"ejemplo nuevo",
    },
    {
      titulo:"calmados hermanos",
      descrip:"el nuevo color de los pokemones es marron es muy sad aveces no quiero ni asjdbasoudasbo",
    }
  ]
  const botoncitos =[
    "javier",
    "sofia",
    "estefani",
    "jems",
    "maricrus",
    "rem",
    "emilia",
    "kasuma",
    "aqua",
    "el nuevo nombre"
  ]
  return (
    <div className="App">
      <Navar/>
      <Accordeon acordeon={acordeon}/>
      <Boton name={name}/>
      <Carrucel value={botoncitos}/>
      
    </div>
  );
}

export default App;
