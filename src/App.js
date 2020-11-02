import React from 'react';
import './App.css';
import Login from './components/Login'
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {
  return (
    <div className="app">
      <div className="app_body">
        < Sidebar />
        < Chat />
      </div>
    </div>
  );
}

export default App;
