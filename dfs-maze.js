let fs = require('fs');

let maze = fs.readFileSync('maze.txt', 'utf8');

let lines = maze.split('\n').map(s => {
    let niz = [];
    for (let i = 0; i < s.length; i++)
        niz.push(s[i]);
    return niz;
});

let ulaz = null, izlaz = null;

for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        if (lines[i][j] == 'E') {
            ulaz = {
                i,
                j
            }
        }

        if (lines[i][j] == 'X') {
            izlaz = {
                i,
                j
            }
        }
    }
}

lines[izlaz.i][izlaz.j] = ' ';


console.log("Ulaz", ulaz);
console.log("Izlaz", izlaz);


function dfs(i, j, xi, xj) {   
    lines[i][j] = 'V';

    if (xi == i && xj == j) {
        console.log('GOAL');
        lines.forEach(line => console.log(line.join('')));
    }
    else {

        if (lines[i][j+1] == ' ') {
            dfs(i, j+1, xi, xj);
        }

        if (i+1 < lines.length && lines[i+1][j] == ' ') {
            dfs(i+1, j, xi, xj);
        }

        if (lines[i][j-1] == ' ') {
            dfs(i, j-1, xi, xj);
        }

        if (i > 0 && lines[i-1][j] == ' ') {
            dfs(i-1, j, xi, xj);
        }
    }

    lines[i][j] = ' ';
}

dfs(ulaz.i, ulaz.j, izlaz.i, izlaz.j);