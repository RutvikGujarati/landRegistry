import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import Front from "./Start/Front";
import User from "./Start/User"
import Window from "./Start/Window";
import LandInspector from "./Start/LandInspector"
import ContractOwner from "./Start/ContractOwner";
import LoginUser from "./Start/LoginUser";
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";

export default function Home() {
  return (
    
   <BrowserRouter>
  

   <Routes>
    <Route path="/User" element={<User />}/>
    <Route path="/" element={<Front />}/>
    <Route path="/Home" element={<Window />} />
    <Route path="/loginUser" element ={<LoginUser />}/>
    <Route path="/land-inspector" element={<LandInspector />}/>
    <Route path="/contract-owner" element={<ContractOwner />}/>
   </Routes>
   </BrowserRouter>
    );
}
