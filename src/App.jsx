import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'

export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path="/projects" element={<Projects />}/>
        </Routes>
        </BrowserRouter>
        </div>
      
  )
}
