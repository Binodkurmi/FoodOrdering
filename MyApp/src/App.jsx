import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Delivery from './components/delivery';
import About from './components/About';
import Recipes from './components/Recipes';
import Team from './components/Team';
import Footer from './components/Footer';
import TopCollections from './components/TopCollection';
import Testimonial from './components/Testimonial';
import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet } from 'react-router-dom';
import Map from "./components/Map";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import { app } from './utils/firebase';


AOS.init();

function App() {
	const [user, setUser] = useState({})
	const auth = getAuth(app);
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({})
			}
		});
	},[auth])

  return (
    <>
		
      <Navbar user={user}/>			 
			<Outlet/>
			<Delivery/>
			<About/>
			<Recipes user={user}/>
			<Team/>
			<TopCollections/>
			<Testimonial/>
			<Map/>
			<Footer/>   

    </>
  )
}

export default App;
