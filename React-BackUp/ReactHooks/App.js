import React from "react";
import DeclareState from "./useState/DeclareState";
import UpdateState from "./useState/UpdateState";
import MultipleState from "./useState/MultipleState";
import ObjectState from "./useState/UseObjectState";
import InitializeState from "./useState/InitializeState";
import FunctionalState from "./useState/FunctionalSetState";
import SideEffect from "./useEffect/BasicSideeffect";
import CleanUp from "./useEffect/EffectWithCleanup";
import MultipleEffect from "./useEffect/MultipleEffects";
import SkippingEffect from "./useEffect/SkippingEffects";
import Empty from "./useEffect/SkippingEffectsEmpty";

function App() {
  return (
    <div>
      <DeclareState />
      <UpdateState />
      <MultipleState />
      <ObjectState />
      <InitializeState />
      <FunctionalState />
      <SideEffect />
      <CleanUp />
      <MultipleEffect />
      <SkippingEffect />
      <Empty />
    </div>
  );
}

export default App;
