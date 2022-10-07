import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { makeid } from "@/utils";
import { FakeObjectType } from "@/types";

function App() {
  useEffect(() => {
    console.log({ fakeId: makeid(5) });
    const fakeObject: FakeObjectType = {
      name: "hello World",
      age: 25,
    };
    console.log({fakeObject})
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
