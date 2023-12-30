
let x = "John";
let y = new String("John");
document.getElementById("2").innerHTML= (x==y);

let str = "Rabbit, Raxif";
document.getElementById("3").innerHTML = str.substr(-4)

function myfunction() {
    let text = document.getElementById("4").innerHTML;
    document.getElementById("4").innerHTML = 
    text.replace ("Rabbitmis", "Raxi");
}