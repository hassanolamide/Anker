import { useState } from "react";
import "../component/deal.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import img from "../component/img/pbb.jpg";
import img1 from "../component/img/PowerCoreIII10KWireless_300x.avif";
import img2 from "../component/img/A8163H11_300x.webp";
import img3 from "../component/img/22A8832H11_300x.webp";
import img4 from "../component/img/A2229H12_300x.webp";
import img5 from "../component/img/A1651111_300x.webp";
import img6 from "../component/img/A1245013_300x.webp";
import img7 from "../component/img/A8812021_TD01_300x.webp";
import img8 from "../component/img/MagGo5k_1_300x.avif";
import img9 from "../component/img/ssph.zone-1670580817-A9125111_TD01__original_300x.webp";
import img10 from "../component/img/A1256011_MainProdFrame_300x.webp";
import img11 from "../component/img/B2347121_A2347121_A26C4021_ND01_V1__original_1_300x.webp";
import img12 from "../component/img/MagGo10k_1_300x.avif";
import img13 from "../component/img/201_300x.webp";
import img14 from "../component/img/ssph.zone-1667477300-1_300x.webp";
import img15 from "../component/img/Anker322USB-CTOUSB-C3ftNylonBraidedCable_2_300x.avif";
import img16 from "../component/img/A1334H11_8_300x.webp";
import img17 from "../component/img/anker-20k-mah-new-6566ed1b1df58_300x.webp";
import img18 from "../component/img/8362c136631b99caa65777bf50ad55c2_300x.webp";
import img19 from "../component/img/ssph.zone-1670675478-A2147111_TD01_300x.webp";
import img20 from "../component/img/A1335011-AnkerPrime12_000mAhPowerBank_130W_B2C_300x.avif";
import img21 from "../component/img/A3361011_300x.webp";
import { Link } from "react-router-dom";

const Deal = () => {
  const [dropdownState, setDropdownState] = useState({
    color1: false,
    color2: false,
    color3: false,
    color4: false,
    color5: false,
    color6: false,
    color7: false,
    color8: false,
    color9: false,
    color10: false,
    color11: false,
    color12: false,
    color13: false,
    color14: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <div className="w-full overall">
      <header>
        <div className="header">
          <h1>Deals</h1>
          <p>
            Unlock incredible savings with Anker Philippines Deals. Explore our
            exclusive offers on top-quality chargers, cables, power banks, and
            more. Don’t miss out on these limited-time discounts and enjoy the
            best in technology at unbeatable prices.
          </p>
        </div>
      </header>
      <section className="sec">
        <div className="first hidden md:block sm:bg-blue">
          <p>Filters</p>
          <div className="bod"></div>
          <div>
            <div className="color">
              <h2>Color</h2>
              <div className="dropdown">
                <button
                  onClick={() => toggleDropdown("color1")}
                  className="dropdown-toggle"
                >
                  {dropdownState.color1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
                {dropdownState.color1 && (
                  <div
                    className={`dropdown-menu ${
                      dropdownState.color1 ? "show" : ""
                    }`}
                  >
                    <a href="#item1" className="dropdown-item">
                      <input type="checkbox" /> Black (6)
                    </a>
                    <a href="#item2" className="dropdown-item">
                      <input type="checkbox" /> Blue(1)
                    </a>
                    <a href="#item3" className="dropdown-item">
                      <input type="checkbox" /> White(5)
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="color">
            <h2>Device</h2>
            <div className="dropdown">
              <button
                onClick={() => toggleDropdown("color2")}
                className="dropdown-toggle"
              >
                {dropdownState.color2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {dropdownState.color2 && (
                <div
                  className={`dropdown-menu ${
                    dropdownState.color2 ? "show" : ""
                  }`}
                >
                  <a href="#item1" className="dropdown-item">
                    <input type="checkbox" /> For Laptops (11)
                  </a>
                  <a href="#item2" className="dropdown-item">
                    <input type="checkbox" /> For Multi-Device (1)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> For Phones (21)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> For Tablets (18)
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="color">
            <h2>Series</h2>
            <div className="dropdown">
              <button
                onClick={() => toggleDropdown("color3")}
                className="dropdown-toggle"
              >
                {dropdownState.color3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {dropdownState.color3 && (
                <div
                  className={`dropdown-menu ${
                    dropdownState.color3 ? "show" : ""
                  }`}
                >
                  <a href="#item1" className="dropdown-item">
                    <input type="checkbox" /> Gan (2)
                  </a>
                  <a href="#item2" className="dropdown-item">
                    <input type="checkbox" /> MagGo (1)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> Prime (4)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> Series 3 (3)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> Series 5 (1)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> Series 7 (2)
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="color">
            <h2>Cable Type</h2>
            <div className="dropdown">
              <button
                onClick={() => toggleDropdown("color4")}
                className="dropdown-toggle"
              >
                {dropdownState.color4 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {dropdownState.color4 && (
                <div
                  className={`dropdown-menu ${
                    dropdownState.color4 ? "show" : ""
                  }`}
                >
                  <a href="#item1" className="dropdown-item">
                    <input type="checkbox" /> USB-A to USB-C (1)
                  </a>
                  <a href="#item2" className="dropdown-item">
                    <input type="checkbox" /> USB-C to Lightning (3)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> USB-C to USB-C (1)
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="color">
            <h2>Charger Type</h2>
            <div className="dropdown">
              <button
                onClick={() => toggleDropdown("color5")}
                className="dropdown-toggle"
              >
                {dropdownState.color5 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {dropdownState.color5 && (
                <div
                  className={`dropdown-menu ${
                    dropdownState.color5 ? "show" : ""
                  }`}
                >
                  <a href="#item1" className="dropdown-item">
                    <input type="checkbox" />
                    Desktop Charger (2)
                  </a>
                  <a href="#item2" className="dropdown-item">
                    <input type="checkbox" /> Earbuds Charger (1)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> Magnetic Charger (2)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> MagSafe and Magnetic (1)
                  </a>

                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" />
                    Wall Charger (7)
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="color">
            <h2>Charging Speed</h2>
            <div className="dropdown">
              <button
                onClick={() => toggleDropdown("color6")}
                className="dropdown-toggle"
              >
                {dropdownState.color6 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {dropdownState.color6 && (
                <div
                  className={`dropdown-menu ${
                    dropdownState.color6 ? "show" : ""
                  }`}
                >
                  <a href="#item1" className="dropdown-item">
                    <input type="checkbox" />
                    100w (1)
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="color">
            <h2>Charging Type</h2>
            <div className="dropdown">
              <button
                onClick={() => toggleDropdown("color7")}
                className="dropdown-toggle"
              >
                {dropdownState.color7 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {dropdownState.color7 && (
                <div
                  className={`dropdown-menu ${
                    dropdownState.color7 ? "show" : ""
                  }`}
                >
                  <a href="#item1" className="dropdown-item">
                    <input type="checkbox" /> Built-In Battery (4)
                  </a>
                  <a href="#item2" className="dropdown-item">
                    <input type="checkbox" /> Built-In Battery Magnetic (1)
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="color">
            <h2>Hub Product Type</h2>
            <div className="dropdown">
              <button
                onClick={() => toggleDropdown("color8")}
                className="dropdown-toggle"
              >
                {dropdownState.color8 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {dropdownState.color8 && (
                <div
                  className={`dropdown-menu ${
                    dropdownState.color8 ? "show" : ""
                  }`}
                >
                  <a href="#item1" className="dropdown-item">
                    <input type="checkbox" /> Docking Stations (1)
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="color">
            <h2>Length</h2>
            <div className="dropdown">
              <button
                onClick={() => toggleDropdown("color9")}
                className="dropdown-toggle"
              >
                {dropdownState.color9 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {dropdownState.color9 && (
                <div
                  className={`dropdown-menu ${
                    dropdownState.color9 ? "show" : ""
                  }`}
                >
                  <a href="#item1" className="dropdown-item">
                    <input type="checkbox" /> 3ft (1)
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="color">
            <h2>Number of Ports</h2>
            <div className="dropdown">
              <button
                onClick={() => toggleDropdown("color10")}
                className="dropdown-toggle"
              >
                {dropdownState.color10 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {dropdownState.color10 && (
                <div
                  className={`dropdown-menu ${
                    dropdownState.color10 ? "show" : ""
                  }`}
                >
                  <a href="#item1" className="dropdown-item">
                    <input type="checkbox" /> 1 Port (2)
                  </a>
                  <a href="#item2" className="dropdown-item">
                    <input type="checkbox" /> 2 Ports (7)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> 3 Ports (5)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> 3 ports (1)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> More Than 3 Ports (1)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> More Than 3 Ports 6-8 Ports (1)
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="color">
            <h2>Port Type</h2>
            <div className="dropdown">
              <button
                onClick={() => toggleDropdown("color11")}
                className="dropdown-toggle"
              >
                {dropdownState.color11 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {dropdownState.color11 && (
                <div
                  className={`dropdown-menu ${
                    dropdownState.color11 ? "show" : ""
                  }`}
                >
                  <a href="#item1" className="dropdown-item">
                    <input type="checkbox" /> USB-A (7)
                  </a>
                  <a href="#item2" className="dropdown-item">
                    <input type="checkbox" /> USB-A & USB-C (1)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> USB-A and USB-C (1)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> USB-C (13)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> USB-C and USB-A (9)
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="color">
            <h2>Usage</h2>
            <div className="dropdown">
              <button
                onClick={() => toggleDropdown("color12")}
                className="dropdown-toggle"
              >
                {dropdownState.color12 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {dropdownState.color12 && (
                <div
                  className={`dropdown-menu ${
                    dropdownState.color12 ? "show" : ""
                  }`}
                >
                  <a href="#item1" className="dropdown-item">
                    <input type="checkbox" /> Card Reader (1)
                  </a>
                  <a href="#item2" className="dropdown-item">
                    <input type="checkbox" /> Charging (19)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> Data Transfer (3)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> Ethernet (1)
                  </a>
                  <a href="#item3" className="dropdown-item">
                    <input type="checkbox" /> Video Display (1)
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="color">
            <h2>Wireless Charger Type</h2>
            <div className="dropdown">
              <button
                onClick={() => toggleDropdown("color13")}
                className="dropdown-toggle"
              >
                {dropdownState.color13 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {dropdownState.color13 && (
                <div
                  className={`dropdown-menu ${
                    dropdownState.color13 ? "show" : ""
                  }`}
                >
                  <a href="#item1" className="dropdown-item">
                    <input type="checkbox" /> MagSafe and Magnetic(1)
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="second">
          <div className="pro">
            <p>32 Products</p>
            <div className="sort hidden md:block" style={{ display: "flex" }}>
              <div>
                <p>
                  sort by <strong>Best Selling</strong>
                </p>
              </div>
              <div className="dropdowns">
                <button
                  onClick={() => toggleDropdown("color14")}
                  className="dropdowns-toggle"
                >
                  {dropdownState.color14 ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </button>
                {dropdownState.color14 && (
                  <div className="dropdowns-menu">
                    <a href="#item1" className="dropdowns-item">
                      Featured
                    </a>
                    <a href="#item1" className="dropdowns-item">
                      Best selling
                    </a>
                    <a href="#item1" className="dropdowns-item">
                      Alphabetically, A-Z
                    </a>
                    <a href="#item1" className="dropdowns-item">
                      Alphabetically, Z-A
                    </a>
                    <a href="#item1" className="dropdowns-item">
                      Price, low to high
                    </a>
                    <a href="#item1" className="dropdowns-item">
                      Price, high to low
                    </a>
                    <a href="#item1" className="dropdowns-item">
                      Date, old to new
                    </a>
                    <a href="#item1" className="dropdowns-item">
                      Date, new to old
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="card-body">
              <div className="card">
                <div className="cards">
                  <p>SAVE 5%</p>
                </div>
                <img src={img} className="imgs" alt="#" />
                <h1 className="flex flex-col">
                  Anker PowerCore Metro Essential (20,000mAh) PD
                  <span className="rating flex ">
                    ★★★★★ <div className="text-black pl-[5px]">(5)</div>
                  </span>
                </h1>
                <p>
                  ₱3,755.25 <span> ₱3,795.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>
                      <Link to="/dealinner"
                        className="text-yellow-500 hover:text-yellow-500"
                      >
                        Learn more
                      </Link>
                    </button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="cards">
                  <p>SAVE 6%</p>
                </div>
                <img
                  src={img1}
                  className="imgs"
                  alt="#"
                  style={{ padding: "50px 0px" }}
                />
                <h1>Anker PowerCore ||| sense (10,000mAh) Wireless </h1>
                <p>
                  ₱3,473.25 <span> ₱3,795.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card">
                <div className="cards">
                  <p>SAVE 8%</p>
                </div>
                <img src={img2} className="imgs" alt="#" />
                <h1>Anker PowerLine 3ft (USB-C to USB 3.0 Cable)</h1>
                <p>
                  ₱501.40 <span> ₱545.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="cards">
                  <p>SAVE 8%</p>
                </div>
                <img src={img3} className="imgs" alt="#" />
                <h1>Anker PowerLine III 3ft (USB-C to Lightning 2.0 Cable) </h1>
                <p>
                  ₱915.40 <span> ₱995.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card">
                <div className="cards">
                  <p>SAVE 8%</p>
                </div>
                <img src={img4} className="imgs" alt="#" />
                <h1>Anker PowerDrive Speed+ 2 Car Charger in Blue</h1>
                <p>
                  ₱1,927.40<span> ₱2,095.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="cards">
                  <p>SAVE 5%</p>
                </div>
                <img src={img5} className="imgs" alt="#" />
                <h1>Anker 733 Power Bank (65W, GaNPrime PowerCore)</h1>
                <p>
                  ₱6,341.25 <span> ₱6,675.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card">
                <div className="cards">
                  <p>SAVE 8%</p>
                </div>
                <img src={img6} className="imgs" alt="#" />
                <h1>Anker PowerCore 523 10K PD Powerbank</h1>
                <p>
                  ₱1,927.40 <span> ₱2,095.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="cards">
                  <p>SAVE 8%</p>
                </div>
                <img src={img7} className="imgs" alt="#" />
                <h1>Anker PowerLine III 3ft Lightning Cable </h1>
                <p>
                  ₱915.40 <span> ₱995.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
                <p style={{ fontSize: "12px" }}>2 colors available</p>
              </div>
            </div>
            <div className="card-body">
              <div className="card">
                <div className="cards">
                  <p>SAVE 5%</p>
                </div>
                <img
                  src={img8}
                  className="imgs"
                  alt="#"
                  style={{ padding: "40px 0px" }}
                />
                <h1>Anker 321 MagGo Battery (PowerCore Magnetic 5K)</h1>
                <p>
                  ₱1,895.25 <span> ₱1,995.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
                <p style={{ fontSize: "12px" }}>2 colors available</p>
              </div>
              <div className="card">
                <div className="cards">
                  <p>SAVE 6%</p>
                </div>
                <img src={img9} className="imgs" alt="#" />
                <h1>Anker 615 USB Power Strip (65W) GaNPrime</h1>
                <p>
                  ₱4,270.25 <span> ₱34,495.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card">
                <div className="cards">
                  <p>SAVE 5%</p>
                </div>
                <img src={img10} className="imgs" alt="#" />
                <h1>Anker 533 Power Bank</h1>
                <p>
                  ₱2,997.25 <span> ₱3,155.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="cards">
                  <p>SAVE 6%</p>
                </div>
                <img
                  src={img11}
                  className="imgs"
                  alt="#"
                  style={{ padding: "10px 0px" }}
                />
                <h1>Anker USB-C Wall Charger (20W)</h1>
                <p>
                  ₱295.00 <span> ₱495.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card">
                <div className="cards">
                  <p>SAVE 5%</p>
                </div>
                <img
                  src={img12}
                  className="imgs"
                  alt="#"
                  style={{ padding: "50px 0px" }}
                />
                <h1>Anker 334 Magnetic Battery (PowerCore 10K)</h1>
                <p>
                  ₱2,655.25 <span> ₱2,795.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="cards"
                  style={{ backgroundColor: "rgb(169,169,169)" }}
                >
                  <p>SOLD OUT</p>
                </div>
                <img src={img13} className="imgs" alt="#" />
                <h1>Anker PowerPort III 20W Cube with Foldable Plug</h1>
                <p>
                  ₱755.25 <span> ₱795.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card">
                <div className="cards">
                  <p>SAVE 5%</p>
                </div>
                <img
                  src={img14}
                  className="imgs"
                  alt="#"
                  style={{ padding: "50px 0px" }}
                />
                <h1>Anker PowerCore III Sense 10K</h1>
                <p>
                  ₱2,465.25 <span> ₱2,595.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="cards" style={{ display: "none" }}>
                  <p>SAVE 5%</p>
                </div>
                <img
                  src={img15}
                  className="imgs"
                  alt="#"
                  style={{ padding: "50px 0px" }}
                />
                <h1>Anker 322 3ft Nylon Braided Cable</h1>
                <p>₱250.00</p>
                <p style={{ fontSize: "12px" }}>2 colors available</p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card">
                <div className="cards">
                  <p>SAVE 5%</p>
                </div>
                <img src={img16} className="imgs" alt="#" />
                <h1>Anker 323 Power Bank</h1>
                <p>
                  ₱1,515.25 <span> ₱1,595.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="cards">
                  <p>SAVE 5%</p>
                </div>
                <img src={img17} className="imgs" alt="#" />
                <h1>
                  Anker Power Bank (20,000mAh, 22.5W, Built-In USB-C Cable)
                </h1>
                <p>
                  ₱3,415.25 <span> ₱3,595.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card">
                <div className="cards">
                  <p>SAVE 5%</p>
                </div>
                <img src={img18} className="imgs" alt="#" />
                <h1>Anker 511 Charger (Nano 3, 30W)</h1>
                <p>
                  ₱1,211.25 <span> ₱1,275.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="cards">
                  <p>SAVE 5%</p>
                </div>
                <img src={img19} className="imgs" alt="#" />
                <h1>Anker PowerCore ||| sense (10,000mAh) Wireless </h1>
                <p>
                  ₱3,473.25 <span> ₱3,795.00</span>
                  <p style={{ fontSize: "12px" }}>2 colors available</p>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card">
                <div className="cards">
                  <p>SAVE 5%</p>
                </div>
                <img
                  src={img20}
                  className="imgs"
                  alt="#"
                  style={{ padding: "50px 0px" }}
                />
                <h1>Anker Prime 12,000mAh Power Bank (130W)</h1>
                <p>
                  ₱6,645.25 <span> ₱6,995.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="cards">
                  <p>SAVE 5%</p>
                </div>
                <img src={img21} className="imgs" alt="#" />
                <h1>Anker Powercam C300 Black</h1>
                <p>
                  ₱7,595.25<span> ₱7,995.00</span>
                </p>
                <div className="hov">
                  <div className="learn">
                    <button>Learn more</button>
                    <button
                      className="cart"
                      style={{ color: "white", backgroundColor: "#daa800" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="but">
              <button>1</button>
              <Link to="/Deal2">
                <button>2</button>
              </Link>
              <Link to="/Deal2">
                {" "}
                <button>
                  <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="get">
        <h2>Join Our Community for Exclusive Savings!</h2>
        <h1>Get an Exclusive 10% Off Your First Purchase</h1>
        <div className="inp">
          <input
            type="email"
            name=""
            placeholder="Enter your email to get a gift"
            id=""
          />
          <button>Subscribe Now</button>
        </div>
        <div className="check">
          <input type="checkbox" name="" />
          <p>
            I agree to the <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deal;
