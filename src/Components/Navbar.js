import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../Assets/logo.png";
import AboutDropdown from "./AboutDropdown";
import DiverOps from "./DiverOps";

function useWindow() {
  const [size, setsize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleresize = () => {
      setsize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleresize);
  }, []);
  return size;
}

const Navbar = () => {
  const [aboutmodal, setaboutmodal] = useState(false);
  const [divermodal, setdivermodal] = useState(false);
  const [wdth, ht] = useWindow();
  const [width, setwidth] = useState();
  const [mobile, setmobile] = useState(false);
  const changewidth = () => {
    console.log(window.innerWidth);
    setwidth(window.innerWidth);
  };
  window.addEventListener("resize", changewidth);

  return (
    <div
      className="Navbar"
      onMouseEnter={() => {
        setaboutmodal(false);
        setdivermodal(false);
      }}>
      <div className="navHead">
        {" "}
        <img className="CompanyLogo" src={logo} alt="qweqwe" />
      </div>

      {wdth < 1100 ? (
        <i
          onClick={() => {
            setmobile(!mobile);
          }}
          className="fas fa-bars fa-3x"
        />
      ) : null}

      {wdth < 1100 ? (
        <ul
          className="navLink2"
          style={{ display: `${mobile ? "flex" : "none"}` }}>
          <li className="navitems2">Home</li>
          <li className="navitems2">About DUDA</li>
          <li className="navitems2">Our Values</li>
          <li className="navitems2">Diversified Operations</li>
          <li className="navitems2">Contact Us</li>
        </ul>
      ) : (
        <ul className="navLink">
          <li className="navitems">Home</li>
          <li
            id="aboutNav"
            className="navitems"
            onMouseEnter={() => {
              setaboutmodal(true);
              setdivermodal(false);
            }}>
            About DUDA <i className="fas fa-caret-down"></i>{" "}
            {aboutmodal && <AboutDropdown setaboutmodal={setaboutmodal} />}
          </li>
          <li className="navitems">Our Values</li>
          <li
            onMouseEnter={() => {
              setdivermodal(true);
              setaboutmodal(false);
            }}
            className="navitems"
            id="diver">
            Diversified Operations <i className="fas fa-caret-down"></i>
            {divermodal && <DiverOps setdivermodal={setdivermodal} />}{" "}
          </li>
          <li className="navitems">Contact Us</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
