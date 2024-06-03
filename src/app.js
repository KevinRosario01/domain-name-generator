/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let exts = [".com", ".net", ".org"];
  let domains = [];

  for (const p of pronouns) {
    for (const a of adjs) {
      for (const n of nouns) {
        for (const e of exts) {
          const d = p + a + n + e;
          domains.push(d);
        }
      }
    }
  }
  let formattedDomains = domains.join("<br>");

  console.log(formattedDomains);

  document.querySelector("#domain").innerHTML = formattedDomains;
};
