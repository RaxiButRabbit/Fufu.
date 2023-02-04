const ilkDiv = document.getElementById("ilk-div");
const dışDiv = document.getElementById("dış-div");

// setInterval(() => {
//   dışDiv.appendChild();
// }, 100);

const contents = [
  "1",
  "2",
  "3",
  "4",
  "5",
];

const numbers = contents.map(content => {
  return Number(content);
});

contents.forEach((content) => {
  const divToAdd = ilkDiv.cloneNode();
  divToAdd.textContent = content;
  dışDiv.appendChild(divToAdd);
});