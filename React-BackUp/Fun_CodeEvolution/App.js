import React from "react";
import "./App.css";
import "../src/CodeEvolution/StylingReact/appStyles.css";
import styles from "./CodeEvolution/StylingReact/appStyles.module.css";
import UserGreeting from "./CodeEvolution/ConditionalRendering/UserGreeting";
import Greet from "./CodeEvolution/Greet";
import ClickHandler from "./CodeEvolution/Hooks/ClickHandler";
import NameList from "./CodeEvolution/ListRendering/NameList";
import ParentComp from "./CodeEvolution/ParentToChild/Parents";
import Main from "./CodeEvolution/Props/Main";
import Message from "./CodeEvolution/State/Message";
import Inline from "./CodeEvolution/StylingReact/Inline";
import Stylesheet from "./CodeEvolution/StylingReact/Stylesheet";
import Forms from "./CodeEvolution/Forms/Form";
import FormsClass from "./CodeEvolution/Forms/Form01cls";
import PostList from "./CodeEvolution/HTTP_GET_POST/PostList";
import PostForm from "./CodeEvolution/HTTP_GET_POST/PostForm";
import Transition from "./CodeEvolution/TransitionHook/Demo";
import SmallTransition from "./CodeEvolution/TransitionHook/SmallTransition";

function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <Main /> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComp /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet /> */}
      {/* <Inline /> */}
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <Forms /> */}
      {/* <FormsClass /> */}
      {/* <PostForm />
      <PostList /> */}
      {/* <Transition /> */}
      <SmallTransition />
    </div>
  );
}

export default App;
