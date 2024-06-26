<<<<<<< HEAD
// React
import { createContext, useState } from "react";

// Library
import { Routes, Route, NavLink } from "react-router-dom";
import ReactSwitch from "react-switch";

// My files  ///////////////////////////////////

// Components
import { Dog } from "./components/PropsPassing";
import ReactVideoPlayerLibrary from "./components/ReactVideoPlayerLibrary";
import Counter from "./components/Counter";
import UsingImages from "./components/UsingImages";
import DataComponent from "./components/Data";
import Form from "./components/Form";
import FeedbackForm from "./components/FeedbackForm";
import DataFetch from "./components/DataFetch";

// SVG
import ThemeIconDark from "./svg/ThemeIconDark";
import ThemeIconLight from "./svg/ThemeIconLight";

//  Context
export const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {},
});

////////////////////////////

export default function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <div className="nav-and-switch">
          <div className="theme-switch-container">
            {theme === "dark" ? <ThemeIconDark /> : <ThemeIconLight />}

            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === "dark"}
              offColor="#7f7f7f"
              onColor="#dd8d3e"
              onHandleColor="#213257"
              offHandleColor="#D7E4EA"
              checkedIcon={false}
              uncheckedIcon={false}
              handleDiameter={22}
              activeBoxShadow="0 0 0 5px #ffffff"
            />
          </div>
          <nav>
            <ul className="nav-list">
              <NavLink
                to="/dog"
                tabIndex={0 as number}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="nav-item" id={theme}>
                  Dog
                </li>
              </NavLink>

              <NavLink
                to="/counter"
                tabIndex={0 as number}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="nav-item" id={theme}>
                  Counter
                </li>
              </NavLink>

              <NavLink
                to="/cat"
                tabIndex={0 as number}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="nav-item" id={theme}>
                  My Cat
                </li>
              </NavLink>

              <NavLink
                to="/cool-song"
                tabIndex={0 as number}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="nav-item" id={theme}>
                  Cool Song
                </li>
              </NavLink>

              <NavLink
                to="/data"
                tabIndex={0 as number}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="nav-item" id={theme}>
                  Data
                </li>
              </NavLink>

              <NavLink
                to="/form"
                tabIndex={0 as number}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="nav-item" id={theme}>
                  Form
                </li>
              </NavLink>

              <NavLink
                to="/feedback"
                tabIndex={0 as number}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="nav-item" id={theme}>
                  Feedback
                </li>
              </NavLink>

              <NavLink
                to="/data-fetch"
                tabIndex={0 as number}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="nav-item" id={theme}>
                  Data Fetch
                </li>
              </NavLink>
            </ul>
            {/* Link Tags replace Anchor or <a href> tags in React */}
            {/* These links add components to the page.*/}
          </nav>
        </div>

        {/* React routing is managed by third party libraries. The one I am using here
        is called react-router-dom */}
        {/* npm install react-router-dom */}
        {/* Check the BrowserRouter tag in the "main.tsx" file */}
        <Routes>
          <Route path="/dog" element={<Dog />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/cat" element={<UsingImages />} />
          <Route path="/cool-song" element={<ReactVideoPlayerLibrary />} />
          <Route path="/data" element={<DataComponent />} />
          <Route path="/form" element={<Form />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/data-fetch" element={<DataFetch />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}
=======
// React
import { createContext, useState } from "react";

// Library
import { Routes, Route, NavLink } from "react-router-dom";
import ReactSwitch from "react-switch";

// My files  ///////////////////////////////////

// Components
import { Dog } from "./components/PropsPassing";
import ReactVideoPlayerLibrary from "./components/ReactVideoPlayerLibrary";
import Counter from "./components/Counter";
import UsingImages from "./components/UsingImages";
import DataComponent from "./components/Data";
import Form from "./components/Form";
import FeedbackForm from "./components/FeedbackForm";
import DataFetch from "./components/DataFetch";

// SVG
import ThemeIconDark from "./svg/ThemeIconDark";
import ThemeIconLight from "./svg/ThemeIconLight";

//  Context
export const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {},
});

////////////////////////////

export default function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <div className="nav-and-switch">
          <div className="theme-switch-container">
            {theme === "dark" ? <ThemeIconDark /> : <ThemeIconLight />}

            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === "dark"}
              offColor="#7f7f7f"
              onColor="#dd8d3e"
              onHandleColor="#213257"
              offHandleColor="#D7E4EA"
              checkedIcon={false}
              uncheckedIcon={false}
              handleDiameter={22}
              activeBoxShadow="0 0 0 5px #ffffff"
            />
          </div>
          <nav>
            <ul className="nav-list">
              <NavLink
                to="/dog"
                tabIndex={0 as number}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="nav-item" id={theme}>
                  Dog
                </li>
              </NavLink>

              <NavLink
                to="/counter"
                tabIndex={0 as number}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="nav-item" id={theme}>
                  Counter
                </li>
              </NavLink>

              <NavLink
                to="/cat"
                tabIndex={0 as number}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="nav-item" id={theme}>
                  My Cat
                </li>
              </NavLink>

              <NavLink
                to="/cool-song"
                tabIndex={0 as number}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="nav-item" id={theme}>
                  Cool Song
                </li>
              </NavLink>

              <NavLink
                to="/data"
                tabIndex={0 as number}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="nav-item" id={theme}>
                  Data
                </li>
              </NavLink>

              <NavLink
                to="/form"
                tabIndex={0 as number}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="nav-item" id={theme}>
                  Form
                </li>
              </NavLink>

              <NavLink
                to="/feedback"
                tabIndex={0 as number}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="nav-item" id={theme}>
                  Feedback
                </li>
              </NavLink>

              <NavLink
                to="/data-fetch"
                tabIndex={0 as number}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="nav-item" id={theme}>
                  Data Fetch
                </li>
              </NavLink>
            </ul>
            {/* Link Tags replace Anchor or <a href> tags in React */}
            {/* These links add components to the page.*/}
          </nav>
        </div>

        {/* React routing is managed by third party libraries. The one I am using here
        is called react-router-dom */}

        {/* npm install react-router-dom */}
        {/* Check the BrowserRouter tag in the "main.tsx" file */}
        <Routes>
          <Route path="/dog" element={<Dog />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/cat" element={<UsingImages />} />
          <Route path="/cool-song" element={<ReactVideoPlayerLibrary />} />
          <Route path="/data" element={<DataComponent />} />
          <Route path="/form" element={<Form />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/data-fetch" element={<DataFetch />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}
>>>>>>> 0f295e0b1daf0bf639fb7c5a09d7c222a75262dc
