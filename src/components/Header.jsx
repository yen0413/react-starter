//impt
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header-Track">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

//defaultProps為預設值，若元素沒有回傳任何props的話會自動讀取defaultProps
Header.defaultProps = {
  title: "Task Tracker",
};

//propTypes可以定義props的型別、必須與否，若型別錯誤的話會出現error，可以避免不必要的錯誤***(非必要)***
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;