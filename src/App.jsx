import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Proyects from "./components/Proyects";
import { AutotypeProvider } from "./components/Autotype";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AutotypeProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Proyects" element={< Proyects/>} />
          </Routes>
          <Footer />
        </AutotypeProvider>
      </BrowserRouter>
    </div>
  )
}