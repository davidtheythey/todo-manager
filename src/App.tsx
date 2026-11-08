import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? <Login /> : <Register />}
      <button onClick={() => setShowLogin(!showLogin)}
        className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg">
        Switch to {showLogin ? "Register" : "Login"}
      </button>
    </>
  );
}