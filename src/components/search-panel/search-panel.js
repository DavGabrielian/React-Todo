import React from "react";
import "./search-panel.css";

const SearchPanel = () => {
  const searchText = "type here";
  const searchStyle = {
    width: '500px',
    height: '70px',
    flex: 'auto'
  };
  return <input style={searchStyle} placeholder={searchText} />;
};

export default SearchPanel;
