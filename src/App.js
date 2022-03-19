import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Alert from './components/Alert';

function App() {
  const [theme, setTheme] = useState("light");
  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "black";
      handleAlert("Dark Mode has been enabled", "success");
    }
    else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
      handleAlert("Light Mode has been enabled", "success");
    }
  }

  const [alert, setAlert] = useState(null);
  const handleAlert = (message, type) => {
    setAlert({
      message,
      type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  
  return (
    <>
      <Navbar title="TextOps" theme={theme} handleThemeChange={handleThemeChange}/>
      <Alert alert={alert}/>
      <Form heading="Enter text to be operated: " theme={theme} handleThemeChange={handleThemeChange} handleAlert={handleAlert}/>
      {/* <About theme={theme}/> */}
      <Footer theme={theme}/>
    </>
  );
}

export default App;
