import {Routes, Route} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
        path="/home"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />

      </Routes>
    
    </div>
  );
}

export default App;
