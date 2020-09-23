import React from "react";

function Header(props) {
  return (
    <div>
      <div className="row">
        <div
          className="col-sm-12"
          style={{ background: "rgb(46 35 130)", fontSize: "24px", color: "#fff" }}
        >
          {props.title}
        </div>
      </div>
    </div>
  );
}

export default Header;
