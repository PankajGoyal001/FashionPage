import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./Component/Common/Header";
import Footer from "./Component/Common/Footer";
import Home from "./Pages/Home";

export default function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}