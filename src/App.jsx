import Homepage from '../components/Homepage'
import {BrowserRouter, Routes, Route,HashRouter} from 'react-router-dom'
import Quiz from '../components/Quiz'
import './App.css'
import { Answer } from '../components/Answer'
function App() {

  return (
    <>
      <HashRouter>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/quiz' element={<Quiz/>}/>
        <Route exact path='/answer' element={<Answer/>}/>
      </Routes>
      </HashRouter>
    </>
  )
}

export default App