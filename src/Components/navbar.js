import React, { useState, useEffect, useCallback, useRef } from "react";
import { ReactComponent as ChevronDown } from "./chevron-down.svg";
import logo from "../Images/logo.png";
import "../css/Navbar.css";
import classNames from "classnames";
import CleanSolutionsHome from "../Pages/CleanSolutionsHome";
import CleanSolutionsVehicles from "../Pages/CleanSolutionsVehicles";
import CleanSolutionsWaste from "../Pages/CleanSolutionsWaste";

export default function Navbar(props) {
    const [dropdown, setDropdown] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const contentRef = useRef();
    const btnRef = useRef();
    const toggleDropdown = () => setDropdown(!dropdown);
    props.setDropdownRef.current = setDropdown;

    const toggle = useCallback(() => {
        // Prevents scrolling when sidebar is open
        if (sidebar) {
            window.onscroll = function () { };
        }
        setSidebar(!sidebar);
    }, [sidebar]);
    useEffect(() => {
        // Closes sidebar when escape key is pressed
        const keyPress = (e) => {
            if (e.key === "Escape" && sidebar) toggle();
        };
        document.addEventListener("keydown", keyPress, false);

        return () => {
            document.removeEventListener("keydown", keyPress, false);
        };
    }, [toggle, sidebar]);

    useEffect(() => {
        // Closes dropdown when clicking outside of it
        const closeDropdown = (e) => {
            if (e.target.classList.contains('dropdown-control')) return;
            if (
                e.target &&
                !e.target.contains(btnRef.current) &&
                e.target.className !== "dropdown-links"
            )
                setDropdown(false);
        };

        document.body.addEventListener("click", closeDropdown);
        
        return () => document.body.removeEventListener("click", closeDropdown);
    }, [dropdown]);
    return (
        <div className="navbarBody">
            <>
                <div className={classNames("sidebar", { active: sidebar })}>
                    <ul className="sidebar-links">
                        <li>
                            <a href="/about-us">About</a>
                        </li>
                        <li>
                            <hr />
                        </li>
                        <li>
                            <a href="/sources">Sources</a>
                        </li>
                    </ul>
                </div>
                <div
                    className={classNames("sidecover", {
                        "sidecover-active": sidebar,
                    })}
                />
                <div className="ghost" />
                <nav className="navBody">
                    <a
                        href="/"
                        className="logo-link"
                        aria-label="Logo"
                        style={{ marginRight: "1rem" }}
                    >
                        <img
                            className="logo"
                            src={logo}
                            alt=""
                            height="50"
                            width="50"
                            style={{ width: "70px", height: "70px" }}
                        />
                    </a>
                    <a href="/" className="name-of-company">
                        Green Guardians
                    </a>
                    <div className="nav-container">
                        <div className="nav-link-center">
                            <ul className="nav-links">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/tax-incentives">Incentives</a>
                                </li>
                                <li>
                                    <a href="/EnergyStar">Energy Star</a>
                                </li>
                                <li>
                                    <div className="dropdown">
                                        <a
                                            className="dropdown-btn"
                                            onClick={toggleDropdown}
                                            ref={btnRef}
                                        >
                                            Solutions <ChevronDown />
                                        </a>
                                        <div
                                            className={classNames(
                                                "dropdown-content",
                                                {
                                                    "dropdown-active": dropdown,
                                                }
                                            )}
                                            ref={contentRef}
                                            style={
                                                dropdown
                                                    ? {
                                                        height: contentRef.current
                                                            .scrollHeight,
                                                    }
                                                    : { height: 0 }
                                            }
                                        >
                                            <div className="padder">
                                                <ul className="big-header">
                                                    {/* <li>
                                                        <a
                                                            href="/clean-solutions-home"
                                                            element={
                                                                <CleanSolutionsHome />
                                                            }
                                                            className="dropdown-links"
                                                        >
                                                            Property
                                                        </a>
                                                    </li> */}
                                                    <li>
                                                        <a
                                                            href="/clean-solutions/vehicles"
                                                            element={
                                                                <CleanSolutionsVehicles />
                                                            }
                                                            className="dropdown-links"
                                                        >
                                                            Vehicle
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/clean-solutions/waste"
                                                            element={
                                                                <CleanSolutionsWaste />
                                                            }
                                                            className="dropdown-links"
                                                        >
                                                            Waste
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/clean-solutions/solar"
                                                            element={
                                                                <CleanSolutionsHome />
                                                            }
                                                            className="dropdown-links"
                                                        >
                                                            Solar
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/clean-solutions/wind"
                                                            element={
                                                                <CleanSolutionsHome />
                                                            }
                                                            className="dropdown-links"
                                                        >
                                                            Wind
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/clean-solutions/geothermal"
                                                            element={
                                                                <CleanSolutionsHome />
                                                            }
                                                            className="dropdown-links"
                                                        >
                                                            Geothermal
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/clean-solutions/LED"
                                                            element={
                                                                <CleanSolutionsHome />
                                                            }
                                                            className="dropdown-links"
                                                        >
                                                            LED Lights
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <button
                            className={classNames("burger", {
                                "active-burger": sidebar,
                            })}
                            onClick={toggle}
                            aria-label="Access sidebar"
                        >
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </button>
                    </div>
                </nav>
            </>
        </div>
    );
}
