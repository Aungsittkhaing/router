import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Admin from "./pages/Admin"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Error from "./pages/Error"
import Nest from "./pages/Nest"
import One from "./pages/Nest/One"
import Two from "./pages/Nest/Two"
import Three from "./pages/Nest/Three"
const App = () => {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact/:name" element={<Contact/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/nest" element={<Nest/>}>
            <Route index element={<One/>}></Route>
            <Route path="two" element={<Two/>}></Route>
            <Route path="Three" element={<Three/>}></Route>
          </Route>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App