/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = ["A", "The"];
const subject = [
  "My jogger",
  "My uncle",
  "My dog",
  "A driver",
  "A stranger",
  "A neighbour"
];
const action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
const possetion = ["homework ", "food", "car", "shoe", "Secret place"];
const where = [
  "on the street",
  "in my house",
  "in my driveway",
  "in my dreams"
];

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#escusas").innerHTML = Escusas(subject);
    document.querySelector("#escusas2").innerHTML = Escusas(action);
    document.querySelector("#escusas3").innerHTML = Escusas(possetion);
    document.querySelector("#escusas4").innerHTML = Escusas(where);
  });
  document.querySelector("#btn1").addEventListener("click", () => {
    document.querySelector("#escusas2").innerHTML = Escusas(action);
    document.querySelector("#escusas3").innerHTML = Escusas(possetion);
    document.querySelector("#escusas4").innerHTML = Escusas(where);
  });
  document.querySelector("#btn2").addEventListener("click", () => {
    document.querySelector("#escusas").innerHTML = Escusas(subject);

    document.querySelector("#escusas3").innerHTML = Escusas(possetion);
    document.querySelector("#escusas4").innerHTML = Escusas(where);
  });
  document.querySelector("#btn3").addEventListener("click", () => {
    document.querySelector("#escusas").innerHTML = Escusas(subject);
    document.querySelector("#escusas2").innerHTML = Escusas(action);

    document.querySelector("#escusas4").innerHTML = Escusas(where);
  });
  document.querySelector("#btn4").addEventListener("click", () => {
    document.querySelector("#escusas").innerHTML = Escusas(subject);
    document.querySelector("#escusas2").innerHTML = Escusas(action);
    document.querySelector("#escusas3").innerHTML = Escusas(possetion);
  });

  document.querySelector("#escusas").innerHTML = Escusas(subject);
  document.querySelector("#escusas2").innerHTML = Escusas(action);
  document.querySelector("#escusas3").innerHTML = Escusas(possetion);
  document.querySelector("#escusas4").innerHTML = Escusas(where);
  function Escusas(str) {
    const long = Math.floor(Math.random() * str.length);
    return str[long];
  }
};
