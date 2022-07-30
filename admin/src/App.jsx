import { Route, Routes } from "react-router-dom";
import "./App.css";
import Ads from "./Components/Ads/Ads";
import Contents from "./Components/Contents/Contents";
import MyDrawer from "./Components/Drawer/MyDrawer";
import Visiters from "./Components/Visiters/Visiters";
import axios from 'axios'
import { createContext, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";


const client = axios.create({
   baseURL:'https://saurav-backend.herokuapp.com/api/',
   headers:{
    'content-Type': 'application/json'
   }
})



export const ApiContext = createContext()

function App() {
  const [open, setOpen] = useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return(
    <ApiContext.Provider value={client}>
    <div className="App">
      <NavBar handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
      <div className="drawer-container">
      <MyDrawer open={open} handleDrawerClose={handleDrawerClose} />
      </div>
      <div className="main-content">
      <Routes>
        <Route path="/" element={<Contents/>}/>
        <Route path="/visiters" element={<Visiters/>}/>
        <Route path="/ads" element={<Ads/>}/>
      </Routes>
      </div>
      
    </div>
    </ApiContext.Provider>
  )
}

export default App;
