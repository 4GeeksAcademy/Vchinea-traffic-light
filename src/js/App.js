// src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import TrafficLight from './TrafficLight';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <TrafficLight />
        </div>
    );
}

export default App;

// Render the component into the DOM
ReactDOM.render(<App />, document.getElementById('app'));


