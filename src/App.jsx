import { Route, Routes} from "react-router-dom";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import './App.css'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
