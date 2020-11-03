import React, {useState} from 'react';
import './App.css';
import Login from './components/Login'
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';

function App() {

  const [user, setUser]= useState(null);

  return (
    <div className="app">

      <div className="app_body">
      <Router>
        <Sidebar />
        <Switch>
           <Route path="/rooms/:roomId">
             < Chat />
          </Route>

          <Route path="/">
            <Chat />
          </Route>
        </Switch>
        
      </Router>
    </div>
  </div>
  );
  
}

export default App;
