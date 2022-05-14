let pronoun = ["the", "our"];
let adj = ["great", "big", "awesome"];
let noun = ["jogger", "racoon", "bear"];
let dominio = [".com", ".cl", ".net"];
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < dominio.length; l++)
        console.log(pronoun[i] + adj[j] + noun[k] + dominio[l]);
    }
  }
}

/* window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dominio = [".com", ".cl", ".net"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let dominioIndex = Math.floor(Math.random() * dominio.length);

  return (
    pronoun[pronounIndex] +
    "" +
    adj[adjIndex] +
    "" +
    noun[nounIndex] +
    "" +
    dominio[dominioIndex]
  );
};
 */
