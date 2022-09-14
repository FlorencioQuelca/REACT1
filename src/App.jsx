import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from './components/Card'
import CardProps from './components/CardProps'
import './styles/app.css'


function App() { //componentes empeizan en mayusculas
  const [count, setCount] = useState(0)
  const array = [
    {
      title: 'Hobiies',
      list: ['Musica', 'programar', 'dormir', 'comer'],
      color: 'red'
    },
    {
      title: 'Mi Comida favorita',
      list: ['Pique', 'Tomatada', 'Ensalada', 'Pizza'],
      color: 'orange'
    },
    {
      title: 'Mi Stack tech',
      list: ['HTML', 'CSS', 'JavaScript', 'C++'],
      color: 'green'
    }
  ]
  return ( //return jsx = 
    <div className="App">
      <Card />
      <CardProps props={array[0]} />
      <CardProps props={array[1]} />
      <CardProps props={array[2]} />
    </div>
  )
}
export default App

