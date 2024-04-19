import { useContext } from "react";
import AppContext from "../provider/appContext";

function Header() {
  const { app, dispatchApp } = useContext(AppContext);
  const activeStyle = { background: "#1a1a1a", color: "#fff" };

  return (
    <div className="top-header">
      <h2 className="heading">Today</h2>
      <div className="switch-group">
        <div className="switch">
          <span
            style={
              app.unit === "C"
                ? activeStyle
                : app.isDark
                ? { color: "#000" }
                : null
            }
            onClick={() => {
              dispatchApp({ type: "UNIT", payload: "C" });
            }}
          >
            °C
          </span>
          <span
            onClick={() => {
              dispatchApp({ type: "UNIT", payload: "F" });
            }}
            style={
              app.unit === "F"
                ? activeStyle
                : app.isDark
                ? { color: "#000" }
                : null
            }
          >
            °F
          </span>
        </div>
        <div className="switch">
          <span
            style={
              app.lang === "en"
                ? activeStyle
                : app.isDark
                ? { color: "#000" }
                : null
            }
            onClick={() => {
              dispatchApp({ type: "LANG", payload: "en" });
            }}
            title="English"
          >
            EN
          </span>
          <span
            onClick={() => {
              dispatchApp({ type: "LANG", payload: "sw" });
            }}
            style={
              app.lang === "sw"
                ? activeStyle
                : app.isDark
                ? { color: "#000" }
                : null
            }
            title="Swahili"
          >
            SW
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
