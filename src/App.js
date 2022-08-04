import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SignIn } from "./components/signIn/signIn";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<SignIn/>}></Route>
            </Routes>
        </div>
    );
}

export default App;