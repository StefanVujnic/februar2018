let maze = `*E********
* ********
* *      *
* * * ****
*   *    X
**********`;

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

function bfs(i, j, xi, xj) {   

    let queue = [{i, j, instruction: 'E'}];
    let queuePos = 0;

    while (queuePos < queue.length) {
        let at = queue[queuePos];
        queuePos++;

        lines[at.i][at.j] = at.instruction;

        if (xi == at.i && xj == at.j) {
            console.log('GOAL');
            lines.forEach(line => console.log(line.join('')));
        }
        else {

            if (lines[at.i][at.j+1] == ' ') {
                queue.push({
                    i: at.i,
                    j: at.j + 1,
                    instruction: 'L'
                });
            }

            if (at.i+1 < lines.length && lines[at.i+1][at.j] == ' ') {
                queue.push({
                    i: at.i + 1,
                    j: at.j,
                    instruction: 'U'
                })
            }

            if (lines[at.i][at.j-1] == ' ') {
                queue.push({
                    i: at.i,
                    j: at.j - 1,
                    instruction: 'R'
                })
            }

            if (at.i > 0 && lines[at.i-1][at.j] == ' ') {
                 queue.push({
                    i: at.i - 1,
                    j: at.j,
                    instruction: 'D'
                })
            }
        }
    }
}

bfs(ulaz.i, ulaz.j, izlaz.i, izlaz.j);