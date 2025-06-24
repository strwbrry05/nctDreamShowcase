import Navigation from "./components/Navigation";
import "./index.css";
import { WiDaySunny } from "react-icons/wi";
import { MdOutlineNightlight } from "react-icons/md";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleViewMode = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <Navigation isDark={isDark} />
      <div>
        <WiDaySunny className="text-5xl" onClick={toggleViewMode} />
        <MdOutlineNightlight className="text-5xl" onClick={toggleViewMode} />
      </div>
    </>
  );
}

export default App;
