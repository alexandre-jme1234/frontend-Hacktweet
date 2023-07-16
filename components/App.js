import Dashboard from "./Dashboard";
import Home from "./Home";
import { useState } from "react";


function App() {
    const [currentForm, setCurrentForm] = useState('login');
  
    const toggleForm = (name) => {
      setCurrentForm(name);
    }
  
    return (
      <div className="App">
        {
          currentForm === 'login' ? <Home toggleForm={toggleForm} /> : <Dashboard />
        }
      </div>
    );
  }
  
  export default App;