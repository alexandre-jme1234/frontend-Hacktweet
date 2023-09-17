import Dashboard from "./Dashboard";
import Home from "./Home";
import { useState } from "react";
import ReactDOM from 'react-dom';


function App() {
    const [currentForm, setCurrentForm] = useState('login');
  
    const toggleForm = (name) => {
      setCurrentForm(name);
    }
  
    return (
      <div className="App">
        {
          currentForm === 'login' ? <Home toggleForm={toggleForm} /> : <Dashboard toggleForm={toggleForm}/>
        }
      </div>
    );
  }
  
  export default App;