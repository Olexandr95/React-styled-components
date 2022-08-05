import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { SignIn } from "./components/signIn/signIn";
import { SignUp } from "./components/signUp/signUp";


function App() {
 return (
  <div className="App">
   <HashRouter>
    <Routes>
      <Route path="/" exact element={<SignIn/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
    </Routes>
   </HashRouter>
  </div>
 );
}

export default App;