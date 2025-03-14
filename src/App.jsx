import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './components/SignUp'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
