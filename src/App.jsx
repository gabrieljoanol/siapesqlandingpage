import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Sobrenos from "./pages/Sobrenos"

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Sobrenos/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App;
