import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="topBar">
      <div className="leftComponent">
        <img
          src="https://moodle.tbcollege.com/moodle/pluginfile.php/1/core_admin/logocompact/0x200/1576789969/Loyalist_mini.png"
          alt=""
          height="100px"
          width="100px"
        />
        <div className="leftComponent_option">
          <h2>My Courses</h2>
          <h2>Students</h2>
          <h2>Faculty Staff</h2>
        </div>
      </div>
      <div className="rightComponent">
        <h1>Students</h1>
      </div>
    </div>
  );
}

export default Header;
