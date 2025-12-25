import Navbar from './components/Login-page/Navbar'
import Login from './components/Login-page/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
       <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
