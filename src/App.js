import { useState } from "react";
import Loading from "./Loading";
import Loaded from "./Loaded";
import "./App.css";

function App() {
  // const isLoaded = true;
  const [isLoaded, setIsLoaded] = useState(false);
  const [objectExample, setObjectExample] = useState({
    name: "name of object",
  });
  const [username, setUsername] = useState("");

  // const ternary = isLoaded ? "YES" : "NO";

  return (
    <div className="App">
      <h1>Username is:{username !== "" ? username : "Guest"}</h1>
      <h1>Username is:{username || "Guest"}</h1>
      <h1>
        {isLoaded && (
          <>
            this is really loaded
            <Loaded />
          </>
        )}
      </h1>

      <h1>{objectExample.name}</h1>
      <h1>{isLoaded ? "YES" : "NO"}</h1>

      {isLoaded ? <Loading /> : <Loaded />}
      <h1>isLoaded = {String(isLoaded)}</h1>
      <button
        onClick={() => {
          console.log("button clicked");
          setIsLoaded(!isLoaded);
        }}
      >
        Change Loaded
      </button>
    </div>
  );
}

export default App;
