import React from "react";
import "./index.css";
import standingBoy from '../../sprites/standingBoy.png'


export default function Upload() {
    return (
        <div id="body">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet" />

            <div id='uploadPart'>
                <div>
                    <p>Электронды кітапты жүктеп, аудиокітапты алу үшін, мына батырманы басыңыз</p>
                </div>

                <div id='imageAndButton'>
                    <img src={standingBoy} alt='standing boy illustration' />
                    <label for="actual-btn">Кітапты <br /> жүктеу</label>
                    <input type="file" id="actual-btn" hidden />
                </div>
            </div>
        </div>
    );
}

// REFERENCES
// <a target="_blank" href="https://icons8.com/icon/Z16Po6ItkoaO/menu">Menu</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
