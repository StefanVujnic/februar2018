let array = Array.from({ length: 100000 }, () => Math.random());

let start = Date.now();

array.sort();

let end = Date.now();

console.log('Sortiranje je trajalo', end - start, 'ms');

// Jako sporo
// start = Date.now();

// for (let i = 0; i<array.length; i++)
// for (let j = i + 1; j < array.length; j++) {
//     if (array[i] > array[j]) {
//         let v = array[i];
//         array[i] = array[j];
//         array[j] = v;
//     }
// }

// end = Date.now();

// console.log('Sortiranje je trajalo', end - start, 'ms');

//QuickSort

array = Array.from({ length: 100000 }, () => Math.random());

start = Date.now();

function quickSort(niz, s, e) {
    let m = Math.floor((s + e) / 2);
    let p = niz[m];

    let l = s, r = e - 1;

    while (l < r) {
        if (niz[l] < p)
            l++;
        else if (niz[r] >= p)
            r--;
        else {
            let tmp = niz[l];
            niz[l] = niz[r];
            niz[r] = tmp;
        }
    }

    if (s < r)
        quickSort(niz, s, r);

    if (l < e)
        quickSort(niz, l+1, e);
}

quickSort(array, 0, array.length);

end = Date.now();

//console.log(array);

console.log('Sortiranje je trajalo', end - start, 'ms');
