import React from "react";
import "./index.css";
import logo from "../../sprites/logo.png";
import searchIcon from "../../sprites/searchIcon.svg";
import burgerMenuIcon from "../../sprites/burgerMenuIcon.svg";
import userIcon from "../../sprites/userIcon.svg"

export default function Header() {
    return (
        <div id="header">
            <div class="HeaderComponent" id="burgerMenuIcon">
                <img class="Icons" src={burgerMenuIcon} alt="burger menu icon" />
            </div>

            <div class="HeaderComponent">
                <img id="logo" src={logo} alt="logo" />
            </div>

            <div class="HeaderComponent" id="searchIcon">
                <img class="Icons" src={searchIcon} alt="search icon" />
                <img class="Icons" src={userIcon} alt="user icon" />
            </div>
        </div>
    );
}

// REFERENCES
// <a target="_blank" href="https://icons8.com/icon/Z16Po6ItkoaO/menu">Menu</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
