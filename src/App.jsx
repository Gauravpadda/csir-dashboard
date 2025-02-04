import { BrowserRouter, Routes ,Route} from "react-router-dom"
import Home from "./pages/home"
import Gassensor from "./pages/gasSensor"

function App() {


  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/gassensor" element={<Gassensor/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
