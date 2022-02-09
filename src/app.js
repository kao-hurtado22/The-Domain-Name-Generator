window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dominio = [".com"];

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
