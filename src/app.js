/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#escusas").innerHTML = Escusas();
  });
  document.querySelector("#escusas").innerHTML = Escusas();
  function Escusas() {
    let pronoun = ["A", "The"];
    let subject = [
      "jogger",
      "uncle",
      "dog",
      "driver",
      "a stranger",
      "neighbour"
    ];
    let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
    let possetion = ["homework ", "food", "car", "shoe", "Secret place"];
    let where = [
      "on the street",
      "in my house",
      "in my driveway",
      "in my dreams"
    ];

    let pronounramdon = Math.floor(Math.random() * pronoun.length);
    let subjectramdon = Math.floor(Math.random() * subject.length);
    let actionramdon = Math.floor(Math.random() * action.length);
    let possetionramdon = Math.floor(Math.random() * possetion.length);
    let whereramdon = Math.floor(Math.random() * where.length);

    return (
      pronoun[pronounramdon] +
      " " +
      subject[subjectramdon] +
      " " +
      action[actionramdon] +
      " " +
      possetion[possetionramdon] +
      " " +
      where[whereramdon]
    );
  }
};
