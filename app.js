///temperature
function Celcius(){
    var cel = document.getElementById("cel");
    var fah = document.getElementById("fah");
    var rom = document.getElementById("rom");
    var kel = document.getElementById("kel");
    fah.value = celTofah(cel.value).toFixed(2);
    rom.value = celTorom(cel.value).toFixed(2);
    kel.value = celTokel(cel.value).toFixed(2);
}

function celTofah(celcius){
    return (celcius * 9/5) + 32;
}

function celTorom(celcius){
    return (celcius *4/5);
}

function celTokel(celcius){
    return (celcius *1) + 273;
}

function Fahrenheit(){
    var cel = document.getElementById("cel");
    var fah = document.getElementById("fah");
    var rom = document.getElementById("rom");
    var kel = document.getElementById("kel");
    cel.value = fahTocel(fah.value).toFixed(2);
    rom.value = fahTorom(fah.value).toFixed(2);
    kel.value = fahTokel(fah.value).toFixed(2);
}

function fahTocel(fahrenheit){
    return (fahrenheit - 32)*5/9;
}

function fahTorom(fahrenheit){
    return (fahrenheit - 32)*4/9;
}

function fahTokel(fahrenheit){
    return ((fahrenheit - 32)*5/9)+273;
}

function Romer(){
    var cel = document.getElementById("cel");
    var fah = document.getElementById("fah");
    var rom = document.getElementById("rom");
    var kel = document.getElementById("kel");
    cel.value = romTocel(rom.value).toFixed(2);
    fah.value = romTofah(rom.value).toFixed(2);
    kel.value = romTokel(rom.value).toFixed(2);
}

function romTocel(romer){
    return (romer *5/4);
}

function romTofah(romer){
    return (romer *9/4)+32;
}

function romTokel(romer){
    return (romer *5/4)+273;
}

function Kelvin(){
    var cel = document.getElementById("cel");
    var fah = document.getElementById("fah");
    var rom = document.getElementById("rom");
    var kel = document.getElementById("kel");
    cel.value = kelTocel(kel.value).toFixed(2);
    fah.value = kelTofah(kel.value).toFixed(2);
    rom.value = kelTorom(kel.value).toFixed(2);
}

function kelTocel(kelvin){
    return (kelvin - 273);
}

function kelTofah(kelvin){
    return ((kelvin -273)*9/5)+32;
}

function kelTorom(kelvin){
    return (kelvin -273)*4/5;
}

function Newton(){
    var newt = document.getElementById("newt");
    var kilo = document.getElementById("kilo");
    var poun = document.getElementById("poun");
    kilo.value = newTokil(newt.value).toFixed(2);
    poun.value = newTopon(newt.value).toFixed(2);
}

function newTokil(newton){
    return (newton * 0.10197);
}

function newTopon(newton){
    return (newton * 0.22481);
}

///force
function Kilogram(){
    var newt = document.getElementById("newt");
    var kilo = document.getElementById("kilo");
    var poun = document.getElementById("poun");
    newt.value = kilTonew(kilo.value).toFixed(2);
    poun.value = kilTopou(kilo.value).toFixed(2);
}

function kilTonew(kilogram){
    return (kilogram * 9.81);
}

function kilTopou(kilogram){
    return (kilogram * 2.2046);
}

function Pound(){
    var newt = document.getElementById("newt");
    var kilo = document.getElementById("kilo");
    var poun = document.getElementById("poun");
    newt.value = pouTonew(poun.value).toFixed(2);
    kilo.value = pouTokil(poun.value).toFixed(2);
}

function pouTonew(pound){
    return (pound * 4.4482);
}

function pouTokil(pound){
    return (pound * 0.4535);
}

///length
function Kilometre(){
    var km = document.getElementById("km");
    var m = document.getElementById("m");
    var ft = document.getElementById("ft");
    var ic = document.getElementById("ic");
    var cm = document.getElementById("cm");
    var mm = document.getElementById("mm");
    m.value = kmTom(km.value).toFixed(2);
    ft.value = kmToft(km.value).toFixed(2);
    ic.value = kmToic(km.value).toFixed(2);
    cm.value = kmTocm(km.value).toFixed(2);
    mm.value = kmTomm(km.value).toFixed(2);
}

function kmTom(kilometre){
    return (kilometre *1000);
}

function kmToft(kilometre){
    return (kilometre *3280.84);
}

function kmToic(kilometre){
    return (kilometre *39370.1);
}

function kmTocm(kilometre){
    return (kilometre *100000);
}

function kmTomm(kilometre){
    return (kilometre *1000000);
}

function Metre(){
    var km = document.getElementById("km");
    var m = document.getElementById("m");
    var ft = document.getElementById("ft");
    var ic = document.getElementById("ic");
    var cm = document.getElementById("cm");
    var mm = document.getElementById("mm");
    km.value = mTokm(m.value).toFixed(3);
    ft.value = mToft(m.value).toFixed(3);
    ic.value = mToic(m.value).toFixed(3);
    cm.value = mTocm(m.value).toFixed(3);
    mm.value = mTomm(m.value).toFixed(3);
}

function mTokm(metre){
    return (metre /1000);
}

function mToft(metre){
    return (metre *3.28084);
}

function mToic(metre){
    return (metre *39.3701);
}

function mTocm(metre){
    return (metre *100);
}

function mTomm(metre){
    return (metre *1000);
}

function Foot(){
    var km = document.getElementById("km");
    var m = document.getElementById("m");
    var ft = document.getElementById("ft");
    var ic = document.getElementById("ic");
    var cm = document.getElementById("cm");
    var mm = document.getElementById("mm");
    km.value = ftTokm(ft.value).toFixed(4);
    m.value = ftTom(ft.value).toFixed(4);
    ic.value = ftToic(ft.value).toFixed(4);
    cm.value = ftTocm(ft.value).toFixed(4);
    mm.value = ftTomm(ft.value).toFixed(4);
}

function ftTokm(foot){
    return (foot *0.0003048);
}

function ftTom(foot){
    return (foot *0.3048);
}

function ftToic(foot){
    return (foot *12);
}

function ftTocm(foot){
    return (foot *30.48);
}

function ftTomm(foot){
    return (foot *304.8);
}

function Inch(){
    var km = document.getElementById("km");
    var m = document.getElementById("m");
    var ft = document.getElementById("ft");
    var ic = document.getElementById("ic");
    var cm = document.getElementById("cm");
    var mm = document.getElementById("mm");
    km.value = icTokm(ic.value).toFixed(5);
    m.value = icTom(ic.value).toFixed(5);
    ft.value = icToft(ic.value).toFixed(5);
    cm.value = icTocm(ic.value).toFixed(5);
    mm.value = icTomm(ic.value).toFixed(5);
}

function icTokm(inch){
    return (inch *0.0000254);
}

function icTom(inch){
    return (inch *0.0254);
}

function icToft(inch){
    return (inch *0.0833333);
}

function icTocm(inch){
    return (inch *2.54);
}

function icTomm(inch){
    return (inch *25.4);
}

function Centimetre(){
    var km = document.getElementById("km");
    var m = document.getElementById("m");
    var ft = document.getElementById("ft");
    var ic = document.getElementById("ic");
    var cm = document.getElementById("cm");
    var mm = document.getElementById("mm");
    km.value = cmTokm(cm.value).toFixed(5);
    m.value = cmTom(cm.value).toFixed(5);
    ft.value = cmToft(cm.value).toFixed(5);
    ic.value = cmToic(cm.value).toFixed(5);
    mm.value = cmTomm(cm.value).toFixed(5);
}

function cmTokm(centimetre){
    return (centimetre *0.00001);
}

function cmTom(centimetre){
    return (centimetre *0.01);
}

function cmToft(centimetre){
    return (centimetre *0.0328);
}

function cmToic(centimetre){
    return (centimetre *0.394);
}

function cmTomm(centimetre){
    return (centimetre *10);
}

function Millimetre(){
    var km = document.getElementById("km");
    var m = document.getElementById("m");
    var ft = document.getElementById("ft");
    var ic = document.getElementById("ic");
    var cm = document.getElementById("cm");
    var mm = document.getElementById("mm");
    km.value = mmTokm(mm.value).toFixed(6);
    m.value = mmTom(mm.value).toFixed(6);
    ft.value = mmToft(mm.value).toFixed(6);
    ic.value = mmToic(mm.value).toFixed(6);
    cm.value = mmTocm(mm.value).toFixed(6);
}

function mmTokm(millimetre){
    return (millimetre *0.00001);
}

function mmTom(millimetre){
    return (millimetre *0.01);
}

function mmToft(millimetre){
    return (millimetre *0.0328);
}

function mmToic(millimetre){
    return (millimetre *0.394);
}

function mmTocm(millimetre){
    return (millimetre *10);
}