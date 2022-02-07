import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from './Components/Signup';
import Login from './Components/Login';
import  './App.css'




function App() {
    return (
        <>
          <Router>
                 <Switch>
					<Route path="/" exact>
						<Signup/>
					</Route>
                    <Route path="/login">
						<Login/>
					</Route>
				</Switch>
          </Router>
        </>
    )
}

export default App
