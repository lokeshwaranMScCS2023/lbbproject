import React,  { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter,
  Routes, 
  Route
} from "react-router-dom";
import { UserContext } from "./components/context";
import NavBar from "./components/navbar";
import Home from "./components/home";
import CreateAccount from "./components/createaccount";
import Login from "./components/login";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
import AllData from "./components/alldata";
import './App.css';


function UserProvider({children}) {
  let [users, setUsers] = useState([
    { name: "lokesh(admin)", email: "lokesh@gmail.com", password: "lokesh1234", balance: 100},
  ]);
  let [activeUser, setActiveUser] = useState(null);
  let context = {users, setUsers, activeUser, setActiveUser};
  // console.log(children);
  return <UserContext.Provider value={context}>{children}</UserContext.Provider>
}
function App() {

  return (
    <HashRouter>
      <UserProvider> 
        <NavBar/>
        <Routes>
        <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/CreateAccount/" element={<CreateAccount />} />
          <Route path="/login/" element={<Login />}/>
          <Route path="/deposit/" element={<Deposit />}/>
          <Route path="/withdraw/" element={<Withdraw />}/>
          {/* <Route path="/balance/" element={<Balance />}/> */}
          <Route path="/AllData/" element={<AllData />} />
        </Routes>
      </UserProvider>
    </HashRouter>
);
}

export default App;
