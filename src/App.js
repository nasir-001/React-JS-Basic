import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom"  
import CounterExample from './components/CounterExample'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Views/Home'
import About from './components/Views/About'

function App() {
  return (
    <div>      
      <Router>

		<Header />

		<div className="p-3">
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
			</Switch>
		</div>

		<Footer />

	  </Router>

    </div>
  );
}

export default App;
