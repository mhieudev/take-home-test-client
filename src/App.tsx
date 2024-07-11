import './App.css'
import { Toaster } from 'react-hot-toast'
import { Game } from './component/game'

function App() {
  return (
      <div className='wrapper'>
        <Game />
        <Toaster />
      </div>
  )
}

export default App
