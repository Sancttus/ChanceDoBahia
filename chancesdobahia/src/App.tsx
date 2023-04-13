import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'

function App() {
  const [showElenco, setShowElenco] = useState(false)

  return (

    <div className="App">
      <div className='header'>
        <Menu/>
        <h4>Chances do Bahia</h4>
      </div>
      <div className='body'>
      <div className='sub-header'>
      <button onClick={() => setShowElenco((!showElenco) )}>
          Elenco
      </button> 
      <button onClick={() => setShowElenco((!showElenco) )}>
          Conquistas
      </button> 
      <button onClick={() => setShowElenco((!showElenco) )}>
          Tabela de jogos
      </button> 
       
      </div>

      <div className="card">
        Container para exibição de informações
        
      

      </div>
      
      </div>

    </div>
  )
}

export default App
