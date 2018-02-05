let array = Array.from({ length: 10000000 }, (_, i) => i);

let brojKojiTrazimo = 5000, index = -1;

let start = Date.now();

for (let i = 0; i<array.length; i++) {
    if (array[i] == brojKojiTrazimo)
    {
        index = i;
    }
}

let end = Date.now();

console.log("Trazeni broj se nalazi na mjestu ", index);
console.log("Trajanje", end - start, "ms");


let s = 0;
let e = array.length;

index = -1;
start = Date.now();

while (s < e) {
    let m = Math.floor((s + e) / 2);
    
    if (brojKojiTrazimo < array[m])
    {
        e = m;
    }
    else if (brojKojiTrazimo > array[m])
    {
        s = m + 1;
    }
    else {
        index = m;
        break;
    }
}

end = Date.now();

console.log("Trazeni broj se nalazi na mjestu ", index);
console.log("Trajanje", end - start, "ms");

