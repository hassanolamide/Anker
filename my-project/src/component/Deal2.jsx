import { useState } from "react";
import "../component/deal.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import img from "../component/img/9b837bc6b9e9d9598797b2e43fe2e980_300x.avif";
import img1 from "../component/img/e0796e14c629496d8b947e21a2b9e8c4_tplv-o3syd03w52-origin-jpeg_300x.avif";
import img2 from "../component/img/A8432H21_1-2_300x.avif";
import img3 from "../component/img/A2671J11_300x.avif";
import img4 from "../component/img/Artboard1_300x.avif";
import img5 from "../component/img/9b837bc6b9e9d9598797b2e43fe2e980_300x.avif";
import img6 from "../component/img/A8552H32_300x.avif";
import img7 from "../component/img/B2557111_300x.avif";
import { Link } from "react-router-dom";

const Deal2 = () => {
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
    <div>
      <header>
        <h1>Deals</h1>
        <p>
          Unlock incredible savings with Anker Philippines Deals. Explore our
          exclusive offers on top-quality chargers, cables, power banks, and
          more. Don’t miss out on these limited-time discounts and enjoy the
          best in technology at unbeatable prices.
        </p>
      </header>
      <section className="sec">
        <div className="first hidden md:block">
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
            <div className="sort hidden md:block">
              <div>
                <p>
                  sort by <span>Best Selling</span>
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
                  <p>SAVE 6%</p>
                </div>
                <img
                  src={img}
                  className="imgs"
                  alt="#"
                  style={{ padding: "50px 0px" }}
                />
                <h1>Anker Iphone 15 Clear Magnetic Phone Case W/ Screen Protector</h1>
                <p>
                  ₱399.00 <span> ₱1,995.00</span>
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
                  src={img1}
                  className="imgs"
                  alt="#"
                  style={{ padding: "50px 0px" }}
                />
                <h1>Anker Iphone 15 Pro Clear Magnetic Phone Case W/ Screen Protector </h1>
                <p>
                  ₱399.00 <span> ₱1,995.00</span>
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
                <img
                  src={img2}
                  className="imgs"
                  style={{ padding: "50px 0px" }}
                  alt="#"
                />
                <h1 className="">
                  Powerline Select USB-C Cable with Lightning 3ft
                </h1>
                <p>
                  ₱841.75 <span> ₱1,295.00</span>
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
                  src={img3}
                  className="imgs"
                  alt="#"
                  style={{ padding: "50px 0px" }}
                />
                <h1>AAnker PowerPort 316 Charger (67W)</h1>
                <p>
                  ₱776.75 <span> ₱1,195.00</span>
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
                <img src={img4} className="imgs" style={{ padding: "50px 0px" }} alt="#" />
                <h1>Anker Iphone 15 Plus Tempered-Glass</h1>
                <p>
                  ₱199.00<span> ₱995.00</span>
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
                <img src={img5} className="imgs" style={{ padding: "50px 0px" }} alt="#" />
                <h1>Anker Iphone 15 Plus Clear Magnetic Phone Case W/ Screen Protector</h1>
                <p>
                  ₱399.00 <span> ₱1,995.00</span>
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
                <img src={img6} className="imgs" style={{ padding: "50px 0px" }} alt="#" />
                <h1>Anker USB-C to USB-C Cable (PowerLine III Flow, Type C to Type C, 3ft)
</h1>
                <p>
                  ₱446.25 <span> ₱595.00</span>
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
                <img src={img7} className="imgs" style={{ padding: "50px 0px" }} alt="#" />
                <h1>Anker 3-in-1 MagGo Wireless Charging Station</h1>
                <p>
                  ₱6,795.00
                </p>
                <p style={{ fontSize: "12px" }}>1 colors available</p>
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
              <Link to="/">
                <button>
                  <FaArrowLeft />
                </button>
              </Link>
              <Link to="/">
                <button>1</button>
              </Link>

              <button>2</button>
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
            I have read and agree to the <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deal2;
