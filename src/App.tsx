import { useState } from "react";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        width:"50%",
        margin:"auto"
      }}
    >
      <h1>You Win</h1>
      <HangmanDrawing />
      <HangmanWord />
      <div style={{alignSelf:"stretch"}}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
