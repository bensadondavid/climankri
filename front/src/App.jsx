import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Plomberie from "./Pages/Plomberie"
import Chauffage from "./Pages/Chauffage"
import Climatisation from "./Pages/Climatisation"
import Panneaux from "./Pages/Panneaux"
import Sav from "./Pages/Sav"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plomberie" element={<Plomberie />} />
          <Route path="/chauffage" element={<Chauffage />} />
          <Route path="/climatisation" element={<Climatisation />} />
          <Route path="/panneaux" element={<Panneaux />} />
          <Route path="/sav" element={<Sav />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
