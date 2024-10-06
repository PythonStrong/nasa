import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import List from "./pages/PlanetList/List"
import Cai from "./components/CreateImg/Cai"

function App() {
  return (
  <div>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cai" element={<Cai />}></Route>
      <Route path="/list" element={<List />}></Route>
    </Routes>
  </div>
  )
}

export default App
