let getal1 = parseFloat(prompt("geef u 1ste gebroke getal in:"));
let getal2 = parseFloat(prompt("geef u 2de gebroke getal in:"));
let Vermenig;
let Deling;
let Optellen;
let Aftrekken;
Vermenig = getal1 * getal2;
Deling = getal1 / getal2;
Optellen = getal1 + getal2;
Aftrekken = getal1 - getal2;
document.getElementById('vermenigvuldiging').innerText = "De uitkomst van de vermenigvuldiging is: " + Vermenig;
document.getElementById('deling').innerText = "De uitkomst van de deling is: " + Deling;
document.getElementById('optellen').innerText = "De uitkomst van de optelling is: " + Optellen;
document.getElementById('aftrekken').innerText = "De uitkomst van de aftrekking is: " + Aftrekken;
