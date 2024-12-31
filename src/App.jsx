import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { Feed } from "./pages/feed"
import { Register } from "./pages/register"
import { Forgot } from "./pages/forgot"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/feed" element={<Feed/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgot" element={<Forgot/>} />
      </Routes>
    </Router>
  )
}

export default App
