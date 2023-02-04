import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Border from './components/Border';
import CustomCursor from './components/CustomCursor';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Art from './pages/Art';
import MySkills from './pages/MySkills';
import Projects from './pages/Projects';


function App() {

  const [open,setOpen] = useState(false);
  const toggle = () => {
	setOpen(!open);
	console.log(open);
  }

  return (
    <div className=''>
		<Border/>
      	<CustomCursor/>
	    <Menu open={open} toggle={toggle}/>
      	<NavBar open={open} toggle={toggle}/>
      	
		<Routes>
			<Route exact path='/' element={<Home/>}/>
			<Route exact path='/about' element={<About/>}/>
			<Route exact path='/art' element={<Art/>}/>
			<Route exact path='/myskills' element={<MySkills/>}/>
			<Route exact path='/projects' element={<Projects/>}/>
		</Routes>
    </div>
  );
}

export default App;
