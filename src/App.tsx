import React from 'react';
import logo from './assets/tm.jpg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h2 >React App with JWT Authentication with Sqllite3 and play chess & blackjack & show U tube favorites with Todos</h2> 
               </p>
       </header>
    </div>
  );
}

export default App;
