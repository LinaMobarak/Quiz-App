import './App.css'
import Home from './pages/home'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Result from './pages/Result'
function App() {
  

  return (
    <>

<BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/result" element={<Result />} />
          
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
