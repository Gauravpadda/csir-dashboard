import { BrowserRouter, Routes ,Route} from "react-router-dom"
import Home from "./pages/home"
import Gassensor from "./pages/gasSensor"
import Rgbsensor from "./pages/rgbSensor"
import SpectralSensor from "./pages/spectral"
import Visualise from "./pages/visulization"
import Calendar from "./components/calendar"

function App() {


  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/gassensor" element={<Gassensor/>}></Route>
        <Route path="/rgbsensor" element={<Rgbsensor/>}></Route>
        <Route path="/spectralsensor" element={<SpectralSensor/>}></Route>
        <Route path="/visualise" element={<Visualise/>}></Route>
        <Route path="/calendar" element={<Calendar/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
