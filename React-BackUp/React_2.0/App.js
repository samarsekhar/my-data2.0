import React from 'react';
import './App.css';
import ChildrenProps from './React_2.0/React_Children_Props';
import ReactComponents from './React_2.0/React_Components';
import Context from './React_2.0/React_Context';
import ContextApp from './React_2.0/React_Context2';
// import Conditionals from './React_2.0/React_Conditionals';
import Elements from './React_2.0/React_elements';
import ElementAttributes from './React_2.0/React_Ele_Attributes';
import ElementStyles from './React_2.0/React_Ele_Style';
import MyComponent from './React_2.0/React_Fragments';
import Callback from './React_2.0/React_useCallback';
import Demo from './React_2.0/React_useContext';
//import Post from './React_2.0/React_useMemo';
//import Header from './React_2.0/React_useRef';
//import UsingFetch from './React_2.0/React_useEffect';
import Counter from './React_2.0/React_useState';
//import SoccerPlayers from './React_2.0/React_Lists';

function App() {
  return (
    <div>
      <Elements/>
      <ElementAttributes/>
      <ElementStyles/>
      <MyComponent/>
      <ReactComponents/>
      <ChildrenProps/>
      {/* <Conditionals/> */}
      {/* <SoccerPlayers/> */}
      <Context/>
      <ContextApp/>
      <Counter/>
      {/* <UsingFetch/> */}
      {/* <Header/> */}
      <Demo/>
      <Callback/>
      {/* <Post/> */}
    </div>
  );
}

export default App;