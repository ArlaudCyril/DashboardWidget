import React, { useRef } from "react";
import CryptoList from "../CryptoList/CryptoList.jsx";
import NavBar from "../NavBar.js";
import Weather from "../Weather/Weather.js";
import SwitchExample from "./SwitchExample";
import { useState } from "react";
import AnalogClock from "../Clock/AnalogClock.js";
import "./Sidebar.css";
import Soundcloud from "../Soundcloud/Soundcloud.js";
import Standing from "../standing/Standing.js";
import Draggable from "react-draggable";
import Tiktok from "../tiktok/tiktok.js";

const Sidebar = () => {

  const [cryptoList, setCryptoList] = useState(false);
  const [weatherList, setWeatherList] = useState(false);
  const [soundcloudList, setSoundcloudList] = useState(false);
  const [footballList, setFootballList] = useState(false);
  const [clockList, setClockList] = useState(true)

  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">Dashboard</span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <a href="/" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-speedometer2"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">CRYPTOS</span>{" "}
                  </a>

                  <ul
                    className="ul_crypto"
                    id="submenu1"
                    data-bs-parent="#menu"
                  >
                    <li className="li_crypto">
                      <a href="/" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">
                          Widget
                        </span> 1{" "}
                      </a>
                      <div className="switch_crypto">
                        <SwitchExample
                          checked={cryptoList}
                          setChecked={setCryptoList}
                        />
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#submenu2"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-speedometer2"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">WEATHER</span>{" "}
                  </a>
                  <ul
                    className="collapse show nav flex-column ms-1"
                    id="submenu2"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100 d-flex ">
                      <a href="/" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">
                          Widget
                        </span> 2{" "}
                      </a>
                      <div className="switch_weather">
                        <SwitchExample
                          checked={weatherList}
                          setChecked={setWeatherList}
                        />
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#submenu3"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-speedometer2"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">SOUNDCLOUD</span>{" "}
                  </a>
                  <ul
                    className="collapse show nav flex-column ms-1"
                    id="submenu3"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100 d-flex ">
                      <a href="/" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">
                          Widget
                        </span> 1{" "}
                      </a>
                      <div className="switch_weather">
                      <SwitchExample
                        checked={soundcloudList}
                        setChecked={setSoundcloudList}
                      />
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#submenu4"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-speedometer2"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">FOOTBALL</span>{" "}
                  </a>
                  <ul
                    className="collapse show nav flex-column ms-1"
                    id="submenu4"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100 d-flex ">
                      <a href="/" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">
                          Widget
                        </span> 1{" "}
                      </a>
                      <div className="switch_weather">
                      <SwitchExample
                        checked={footballList}
                        setChecked={setFootballList}
                      />
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#submenu4"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-speedometer2"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">CLOCK</span>{" "}
                  </a>
                  <ul
                    className="collapse show nav flex-column ms-1"
                    id="submenu4"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100 d-flex ">
                      <a href="/" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">
                          Widget
                        </span> 1{" "}
                      </a>
                      <div className="switch_weather">
                      <SwitchExample
                        checked={clockList}
                        setChecked={setClockList}
                      />
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>

              <hr></hr>
              <div className="dropdown pb-4">
                <a
                  href="/"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width="30"
                    height="30"
                    className="rounded-circle"
                  ></img>
                  <span className="d-none d-sm-inline mx-1">loser</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li>
                    <a className="dropdown-item" href="/">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Draggable >
            <div className="col">{cryptoList && <CryptoList />}</div>
          </Draggable>
          <Draggable defaultPosition={{x: 10, y: 0}}>
            <div className="col">{weatherList && <Weather />}</div>
          </Draggable>
          <Draggable defaultPosition={{x: -280, y: 500}}>
            <div className="col">
              {clockList && <AnalogClock />}
            </div>
          </Draggable>
          <Draggable defaultPosition={{x: -180, y: 1}}>
            <div className="col">{soundcloudList && <Soundcloud />}</div>
          </Draggable>
          <Draggable defaultPosition={{x: -580, y: 360}}>
            <div className="col">{footballList && <Standing />}</div>
          </Draggable>
          <Draggable defaultPosition={{x: -550, y: 1}}>
          <div className="col"><Tiktok/></div>
          </Draggable>
        </div>
      </div>
      
      
    </div>
  );
};

export default Sidebar;
