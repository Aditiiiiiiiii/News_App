import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { Route,Routes } from 'react-router-dom';

function App() {
  const[ alert, setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      typ : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }

  const[ darkmode, setdarkmode] = useState('primary');
  const toggle = () =>{
    if(darkmode === 'primary'){
      setdarkmode('secondary');
      document.body.style.backgroundColor = '#dee2e6';
      showAlert('Color switch enabled','success')
    }
    else{
      setdarkmode('primary');
      document.body.style.backgroundColor = 'white';
      showAlert('Color switch disabled','success')
    }
  }
  return (
    <>
  
    <Navbar title = "TextUtils" mode={darkmode} toggle={toggle}/>
    <Alert alert={alert}></Alert>

    <Routes>
    <Route path='/' element={<div className="container my-3" ><TextForm mode={darkmode} showAlert={showAlert}/></div>}></Route>
    <Route path='/about' element={<About/>}></Route>
    </Routes>
   
    
    </>
  );
}
export default App;
