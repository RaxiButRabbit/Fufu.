document.getElementById("demo").innerHTML = "benim ilk ya";
document.getElementById("testing").innerHTML = "denemişim";
document.getElementById("count").innerHTML = 5 + 6;


let x, y, z;
x = 6;
y = 10;
z = x + y;
document.getElementById("numb").innerHTML ="değerimiz "+ z +" oluyor.";


let text= "hello";
text += "world";
document.getElementById("yazi").innerHTML = text;


let u, k, j, l, h;
j= 5;
k= 3;
l= j + k;
u= "hop" + (5 + 4);
h= u + l;
h+= " sa kanka"
document.getElementById("sayi").innerHTML = h;



function myFunction(p1, p2) {
     return p1 * p2;
 }
 document.getElementById("ftest").innerHTML = myFunction(3,5);


let g = myFunction(4, 5);
 document.getElementById("1").innerHTML = g;
function myFunction(a, b) {
    return a * b;
}



function toCelsius(f) {
    return (5/9) * (f-32);
}
document.getElementById("2").innerHTML = toCelsius(77);



document.getElementById("3").innerHTML = "Sıcaklık " + toCelsius(77) + " Derece"
function toCelsius(p4) {
    return (5/9) * (p4-32);
}



let title = document.title;
window.onblur = () =>
document.title = "Kod yaz lan!"
window.onfocus = () =>
document.title = title;