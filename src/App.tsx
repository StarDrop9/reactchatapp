import React from 'react';
import logo from './assets/tm.jpg';
import './App.css';
import Toolbar from './toolbar'
const App: React.FC = () => {
  return (
    
    

    <div className="App">
      <header className="App-header">
      <Toolbar />
      <img src={logo} className="App-logo" alt="logo" />
      <h2 >React Chat App with JWT Authentication with Sqllite3 and play chess & blackjack & show U tube favorites with Todos</h2> 
      </header>
    </div>
  );
}

export default App;
