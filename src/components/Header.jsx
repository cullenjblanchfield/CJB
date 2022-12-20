import React, { useState, useEffect, useContext } from "react";
import { Context } from "../App";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "../styles/header.css";
import { List } from "phosphor-react";
import { Outlet, Link } from "react-router-dom";

function Header(props) {
  const { isBlack } = props;
  const { setShowNav } = useContext(Context);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log(isBlack);
  }, [isBlack]);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div className={!isBlack ? "header-container" : "header-container-black"}>
      <div className="inner-header">
        <Logo />
        {width <= 500 ? (
          <List
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowNav(true);
            }}
            color="white"
            height={40}
            width={40}
          />
        ) : (
          <nav>
            <Link className="link" to={"/motion"}>
              Motion
            </Link>
            <Link className="link" to={"/motion"}>
              Stills
            </Link>
            <Link className="link" to={"/motion"}>
              Prints
            </Link>
            <Link className="link" to={"/motion"}>
              About
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Header;
