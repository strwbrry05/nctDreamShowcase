import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import "./index.css";
import { WiDaySunny } from "react-icons/wi";
import { MdOutlineNightlight } from "react-icons/md";
import { useState } from "react";
import QA from "./components/QA";

function App() {
  const [isDark, setIsDark] = useState(false);

  // const toggleViewMode = () => {
  //   setIsDark(!isDark);
  // };

  const toggleDark = () => {
    setIsDark(true);
  };

  const toggleLight = () => {
    setIsDark(false);
  };

  return (
    <>
      <div className="sticky top-0 w-full z-5">
        <Navigation isDark={isDark} />
      </div>

      <div className="m-5 flex justify-center">
        <div
          className="bg-(--color-dark-gray) flex items-center justify-center w-[100px] h-[40px]
        rounded-[3rem] "
        >
          <WiDaySunny
            className={`text-[2rem] h-[30px] stroke-[0.5px] text-(--color-black)
              ${
                isDark
                  ? "text-(--color-gray) ml-[0.25em]"
                  : "bg-(--color-yellow) rounded-[30px] w-[45px] mr-[0.25em]"
              }`}
            onClick={toggleLight}
          />
          <MdOutlineNightlight
            className={`text-[1.75rem] h-[30px] text-(--color-white) ${
              isDark
                ? "bg-(--color-dark-blue) rounded-[15px] w-[45px] ml-[0.25em] "
                : "text-(--color-gray) mr-[0.25em]"
            }`}
            onClick={toggleDark}
          />
        </div>
      </div>

      <div className={`bg-(--color-red)`}>
        <QA isDark={isDark} />
      </div>

      <Footer />
    </>
  );
}

export default App;
