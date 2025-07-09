import "./index.css";
import MainLayout from "./Layouts/MainLayout";
import { Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(true);
  };

  const toggleLight = () => {
    setIsDark(false);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout
              isDark={isDark}
              toggleDark={toggleDark}
              toggleLight={toggleLight}
            />
          }
        >
          <Route index element={<HomePage isDark={isDark} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
