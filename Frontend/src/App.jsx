import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Navibar from './components/Navibar'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navibar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='SignUp' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
