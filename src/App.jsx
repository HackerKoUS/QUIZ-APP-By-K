import Homepage from '../components/Homepage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Quiz from '../components/Quiz'
import './App.css'
import { Answer } from '../components/Answer'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/quiz' element={<Quiz/>}/>
        <Route exact path='/answer' element={<Answer/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App