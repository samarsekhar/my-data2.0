import React from 'react';
import Counter from './01_State/CounterClass';
import State from './01_State/StateClass';
import StateFun from './01_State/StateFun';
import StateProps from './01_State/State_Props';
import './App.css';

function App() {
  return (
    <div>
      <h1>Details</h1>
      <State/>
      <Counter/>
      <StateFun/>
      <StateProps/>
    </div>
  );
}

export default App;
