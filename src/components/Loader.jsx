import React from "react";
import { useIntl } from "react-intl";

function Loader({ showText = false, height, width, style }) {
  const intl = useIntl();

  return (
    <div
      className={showText ? "loader center" : "loader"}
      style={{ ...style, height, width }}
    >
      <div className="spinner"></div>
      {showText && (
        <span className="loader-text">
          {intl.formatMessage({
            id: "app.text.loading",
            defaultMessage: "Loading...",
          })}
        </span>
      )}
    </div>
  );
}

export default Loader;
