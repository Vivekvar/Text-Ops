import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("light");
  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "black";
    }
    else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
    }
}
  return (
    <>
      <Navbar title="TextOps" theme={theme} handleThemeChange={handleThemeChange}/>
      <Form heading="Enter text to be operated: " theme={theme} handleThemeChange={handleThemeChange}/>
    </>
  );
}

export default App;
