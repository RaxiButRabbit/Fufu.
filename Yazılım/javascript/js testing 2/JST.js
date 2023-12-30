let title = document.title;
window.onblur = () =>
document.title = "Kod yazcan?"
window.onfocus = () => 
document.title = title;

var x = myFunction(4, 3);
document.getElementById("1").innerHTML = x;
function myFunction(a, b) {
  return a * b;
}

function tocelsius(F) {
    return (5/9) * (F-32);
}
document.getElementById("2").innerHTML = tocelsius(77);


function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
document.getElementById("3").innerHTML = "Sıcaklık " + tocelsius(77) + " derece.";


const car = {
  type:"Fiat", 
  model:"500", 
  color:"white"
};
document.getElementById("4").innerHTML = "The car type is " + car.type ;

const person = {
  FN:"RaRaxi", 
  LN:"Rabbit", 
  age:18
};
document.getElementById("5").innerHTML = person.FN + " is " + person.age + " years old";

const cat = {
    firstName:"Raxi",
    lastName:"Rabbit",
    id: 5566,
    fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
document.getElementById("6").innerHTML = cat.fullName();

let answer1 = "Evet canim."
document.getElementById("7").innerHTML = answer1;

let text= "SKDGMNDKLŞFNDFHLŞ"
document.getElementById("8").innerHTML = text.length;

let text1= "Banana, apple, music, rabbit end."
let part= text1.slice(0,10)
document.getElementById("9").innerHTML = part;

