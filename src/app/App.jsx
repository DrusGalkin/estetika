import './App.css'
import {Route, Routes} from "react-router-dom";
import Header from "../widgets/header/header.jsx";
import MiddlePage from "../pages/middle.jsx";
import {useEffect} from "react";


function App() {


  return (
    <>
        <Routes>
            <Route path="*" element={
                <div className="w-full flex flex-col items-center justify-center">
                    <Header/>

                    <div className='w-full max-w-[1440px] '>
                        <MiddlePage/>
                    </div>

                </div>
            } />
        </Routes>
    </>
  )
}

export default App
