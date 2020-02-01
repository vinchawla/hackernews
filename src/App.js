import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let user = {
	first: 'Vinay',
	last: 'Chawla',
    };
    var helloWorld = 'Welcome to the road to learn React!';
    return (
	    <div className="App">
	    <h2>{helloWorld} {user.first} {user.last}!!!</h2>
	    </div>
    );
}

export default App;
