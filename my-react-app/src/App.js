import "./App.css";
import About from "./Components/About";
import { Navbar } from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react'
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  function showAlert(message, type) {
    setAlert({
      msg: message,
      ty: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  function toggleMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#141d50'
      showAlert('Dark Mode enabled', 'success')
      document.title = 'TextUtils - DarkMode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = '#f8f9fa'
      showAlert('Light Mode enabled', 'success')
      document.title = 'TextUtils - LightMode'
    }
  }
  return (
    <>
      <Router>
        <Navbar title="NavBar" aboutText="About" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar /> */}

        <div className="container my-3" >
          <Alert alert={alert} />
        </div>

        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}  />
          <Route exact path="/" element={<TextForm heading="Enter the text" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
